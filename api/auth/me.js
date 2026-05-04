import { getTokenFromReq, verifyToken } from '../_lib/auth.js';

export default function handler(req, res) {
  const token = getTokenFromReq(req);
  const payload = token ? verifyToken(token) : null;
  if (!payload) return res.status(200).json({ authenticated: false });
  return res.status(200).json({ authenticated: true, email: payload.email });
}
