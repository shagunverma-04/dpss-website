import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

export default async function handler(req, res) {
  const id = parseInt(req.query.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });

  try {
    if (req.method === 'PUT') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, description, event_date, location, image_url } = body || {};
      const { rows } = await query(
        `UPDATE events
         SET title = COALESCE($2, title),
             description = $3,
             event_date = COALESCE($4, event_date),
             location = $5,
             image_url = $6
         WHERE id = $1
         RETURNING id, title, description, event_date, location, image_url, created_at`,
        [id, title, description ?? null, event_date, location ?? null, image_url ?? null]
      );
      if (!rows[0]) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json(rows[0]);
    }

    if (req.method === 'DELETE') {
      if (!requireAdmin(req, res)) return;
      const { rowCount } = await query('DELETE FROM events WHERE id = $1', [id]);
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
