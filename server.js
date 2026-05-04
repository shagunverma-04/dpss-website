import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import loginHandler from './api/auth/login.js';
import logoutHandler from './api/auth/logout.js';
import meHandler from './api/auth/me.js';

import eventsList from './api/events/index.js';
import eventsItem from './api/events/[id].js';
import newsList from './api/news/index.js';
import newsItem from './api/news/[id].js';
import calendarList from './api/calendar/index.js';
import calendarItem from './api/calendar/[id].js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json({ limit: '1mb' }));

// Adapt Express :id param into the req.query.id shape our handlers expect
function withIdParam(handler) {
  return (req, res) => {
    req.query = { ...req.query, id: req.params.id };
    return handler(req, res);
  };
}

// Auth
app.post('/api/auth/login',  loginHandler);
app.post('/api/auth/logout', logoutHandler);
app.get('/api/auth/me',      meHandler);

// Events
app.get('/api/events',          eventsList);
app.post('/api/events',         eventsList);
app.put('/api/events/:id',      withIdParam(eventsItem));
app.delete('/api/events/:id',   withIdParam(eventsItem));

// News
app.get('/api/news',            newsList);
app.post('/api/news',           newsList);
app.put('/api/news/:id',        withIdParam(newsItem));
app.delete('/api/news/:id',     withIdParam(newsItem));

// Calendar
app.get('/api/calendar',        calendarList);
app.post('/api/calendar',       calendarList);
app.put('/api/calendar/:id',    withIdParam(calendarItem));
app.delete('/api/calendar/:id', withIdParam(calendarItem));

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// 404 for unknown API routes (keep before SPA fallback)
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// Serve built frontend
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// SPA fallback — any non-API route returns index.html
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`DPSS server listening on :${PORT}`);
});
