import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { rows } = await query(
        `SELECT id, title, description, event_date, location, image_url, created_at
         FROM events
         ORDER BY event_date ASC`
      );
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, description, event_date, location, image_url } = body || {};
      if (!title || !event_date) {
        return res.status(400).json({ error: 'title and event_date required' });
      }
      const { rows } = await query(
        `INSERT INTO events (title, description, event_date, location, image_url)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, title, description, event_date, location, image_url, created_at`,
        [title, description || null, event_date, location || null, image_url || null]
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
