import { Pool } from 'pg';

let pool;

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSL === 'disable' ? false : { rejectUnauthorized: false },
      max: 3
    });
  }
  return pool;
}

export async function query(text, params) {
  const p = getPool();
  return p.query(text, params);
}
