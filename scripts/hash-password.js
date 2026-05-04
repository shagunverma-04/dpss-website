// Generate a bcrypt hash for the admin password.
// Usage: npm run admin:hash -- "your-password-here"
// Then set ADMIN_PASSWORD_HASH=<output> in your Vercel env.

import bcrypt from 'bcryptjs';

const password = process.argv[2];
if (!password) {
  console.error('Usage: npm run admin:hash -- "your-password"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
console.log(hash);
