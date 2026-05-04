// Run with: npm run db:init
// Requires DATABASE_URL env var (e.g. from Vercel Postgres / Neon)

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSL === 'disable' ? false : { rejectUnauthorized: false }
});

const sql = `
CREATE TABLE IF NOT EXISTS events (
  id           SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  description  TEXT,
  event_date   DATE NOT NULL,
  location     TEXT,
  image_url    TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS news (
  id           SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  body         TEXT NOT NULL,
  image_url    TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS calendar_items (
  id           SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  item_date    DATE NOT NULL,
  type         TEXT NOT NULL CHECK (type IN ('holiday','exam','activity')),
  description  TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_events_event_date    ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_news_published_at    ON news(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_calendar_item_date   ON calendar_items(item_date);
`;

async function run() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is required.');
    process.exit(1);
  }
  const client = await pool.connect();
  try {
    await client.query(sql);
    console.log('Tables created (events, news, calendar_items).');
  } finally {
    client.release();
    await pool.end();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
