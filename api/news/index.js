import { query } from '../_lib/db.js';
import { requireAdmin, readJsonBody } from '../_lib/auth.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { rows } = await query(
        `SELECT id, title, body, image_url, published_at, created_at
         FROM news
         ORDER BY published_at DESC`
      );
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      if (!requireAdmin(req, res)) return;
      const body = await readJsonBody(req);
      const { title, body: text, image_url, published_at } = body || {};
      if (!title || !text) return res.status(400).json({ error: 'title and body required' });
      const { rows } = await query(
        `INSERT INTO news (title, body, image_url, published_at)
         VALUES ($1, $2, $3, COALESCE($4, NOW()))
         RETURNING id, title, body, image_url, published_at, created_at`,
        [title, text, image_url || null, published_at || null]
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
