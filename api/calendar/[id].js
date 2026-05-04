import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

const VALID_TYPES = ['holiday', 'exam', 'activity'];

export default async function handler(req, res) {
  const id = parseInt(req.query.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });

  try {
    if (req.method === 'PUT') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, item_date, type, description } = body || {};
      if (type && !VALID_TYPES.includes(type)) {
        return res.status(400).json({ error: `type must be one of ${VALID_TYPES.join(', ')}` });
      }
      const { rows } = await query(
        `UPDATE calendar_items
         SET title = COALESCE($2, title),
             item_date = COALESCE($3, item_date),
             type = COALESCE($4, type),
             description = $5
         WHERE id = $1
         RETURNING id, title, item_date, type, description, created_at`,
        [id, title, item_date, type, description ?? null]
      );
      if (!rows[0]) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json(rows[0]);
    }

    if (req.method === 'DELETE') {
      if (!requireAdmin(req, res)) return;
      const { rowCount } = await query('DELETE FROM calendar_items WHERE id = $1', [id]);
      if (!rowCount) return res.status(404).json({ error: 'Not found' });
      return res.status(204).end();
    }

    res.setHeader('Allow', 'PUT, DELETE');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
