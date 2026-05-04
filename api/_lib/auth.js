import jwt from 'jsonwebtoken';
import { parse, serialize } from 'cookie';

const COOKIE_NAME = 'dpss_admin';
const ONE_DAY = 60 * 60 * 24;

function getSecret() {
  const s = process.env.JWT_SECRET;
  if (!s) throw new Error('JWT_SECRET not set');
  return s;
}

export function signToken(payload) {
  return jwt.sign(payload, getSecret(), { expiresIn: ONE_DAY });
}

export function authCookie(token) {
  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ONE_DAY
  });
}

export function clearAuthCookie() {
  return serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
}

export function getTokenFromReq(req) {
  const header = req.headers?.cookie;
  if (!header) return null;
  const cookies = parse(header);
  return cookies[COOKIE_NAME] || null;
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, getSecret());
  } catch {
    return null;
  }
}

export function requireAdmin(req, res) {
  const token = getTokenFromReq(req);
  const payload = token ? verifyToken(token) : null;
  if (!payload || payload.role !== 'admin') {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return payload;
}

export async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}
