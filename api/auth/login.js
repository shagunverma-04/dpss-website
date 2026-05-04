import bcrypt from 'bcryptjs';
import { signToken, authCookie, readJsonBody } from '../_lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body;
  try { body = await readJsonBody(req); }
  catch { return res.status(400).json({ error: 'Invalid JSON' }); }

  const { email, password } = body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !adminHash) {
    return res.status(500).json({ error: 'Admin credentials not configured' });
  }

  if (email.toLowerCase() !== adminEmail.toLowerCase()) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const ok = await bcrypt.compare(password, adminHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signToken({ role: 'admin', email: adminEmail });
  res.setHeader('Set-Cookie', authCookie(token));
  return res.status(200).json({ ok: true, email: adminEmail });
}
