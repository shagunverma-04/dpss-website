import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

export default async function handler(req, res) {
  const id = parseInt(req.query.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });

  try {
    if (req.method === 'PUT') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, body: text, image_url, published_at } = body || {};
      const { rows } = await query(
        `UPDATE news
         SET title = COALESCE($2, title),
             body = COALESCE($3, body),
             image_url = $4,
             published_at = COALESCE($5, published_at)
         WHERE id = $1
         RETURNING id, title, body, image_url, published_at, created_at`,
        [id, title, text, image_url ?? null, published_at]
      );
      if (!rows[0]) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json(rows[0]);
    }

    if (req.method === 'DELETE') {
      if (!requireAdmin(req, res)) return;
      const { rowCount } = await query('DELETE FROM news WHERE id = $1', [id]);
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
