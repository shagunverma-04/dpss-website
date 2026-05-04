import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

const VALID_TYPES = ['holiday', 'exam', 'activity'];

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { rows } = await query(
        `SELECT id, title, item_date, type, description, created_at
         FROM calendar_items
         ORDER BY item_date ASC`
      );
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, item_date, type, description } = body || {};
      if (!title || !item_date || !type) {
        return res.status(400).json({ error: 'title, item_date, type required' });
      }
      if (!VALID_TYPES.includes(type)) {
        return res.status(400).json({ error: `type must be one of ${VALID_TYPES.join(', ')}` });
      }
      const { rows } = await query(
        `INSERT INTO calendar_items (title, item_date, type, description)
         VALUES ($1, $2, $3, $4)
         RETURNING id, title, item_date, type, description, created_at`,
        [title, item_date, type, description || null]
      );
      return res.status(201).json(rows[0]);
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
