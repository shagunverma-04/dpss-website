# Admin / CMS Setup (Render)

This site has a small admin area at **`/admin`** for managing events, news, and the
school calendar. Public pages read from the same Postgres database.

The site runs as a single **Render Web Service** (Node + Express) — the same
service serves the built React app *and* the `/api/*` endpoints.

## 1. Create a Postgres database

In the Render dashboard → **New → PostgreSQL**. Once created, copy the
**Internal Database URL** from the database's *Connect* tab.

## 2. Convert the existing site to a Web Service

The repo's `render.yaml` already declares the service as `runtime: node`. On the
next push to `main`, Render will pick it up. If you have an existing Static Site
service, delete it (or rename the new one) so DNS / your domain points to the
Web Service instead.

Build & start commands (already in `render.yaml`):

```
buildCommand: npm ci && npm run build
startCommand: npm start
```

## 3. Set environment variables on Render

Render dashboard → service → **Environment** → Add the following:

| Name                    | Value                                                      |
| ----------------------- | ---------------------------------------------------------- |
| `DATABASE_URL`          | Postgres connection string (from step 1)                   |
| `JWT_SECRET`            | A long random string (run `openssl rand -hex 32`)          |
| `ADMIN_EMAIL`           | The admin email used to log in                             |
| `ADMIN_PASSWORD_HASH`   | bcrypt hash of the admin password (see step 5)             |
| `PGSSL` *(optional)*    | Set to `disable` only if your Postgres requires no SSL     |

`NODE_ENV=production` and `NODE_VERSION=18` are set automatically via
`render.yaml`.

## 4. Initialise the database

Run once locally (or from any environment with network access to the database)
with `DATABASE_URL` exported:

```bash
DATABASE_URL='postgres://...' npm run db:init
```

This creates three tables: `events`, `news`, `calendar_items`.

## 5. Generate the admin password hash

```bash
npm run admin:hash -- "your-strong-password"
```

Copy the output and paste it as the value for `ADMIN_PASSWORD_HASH` on Render.

## 6. Deploy

Push to `main`. Render will run `npm ci && npm run build`, then `npm start`.
Visit `/admin` on your Render URL (or custom domain) to log in.

## API surface

| Method | Path                  | Auth  | Purpose                |
| ------ | --------------------- | ----- | ---------------------- |
| GET    | `/api/health`         | —     | Health check           |
| POST   | `/api/auth/login`     | —     | Sign in (sets cookie)  |
| POST   | `/api/auth/logout`    | —     | Clear auth cookie      |
| GET    | `/api/auth/me`        | —     | Check current session  |
| GET    | `/api/events`         | —     | List events            |
| POST   | `/api/events`         | admin | Create event           |
| PUT    | `/api/events/:id`     | admin | Update event           |
| DELETE | `/api/events/:id`     | admin | Delete event           |
| GET    | `/api/news`           | —     | List news posts        |
| POST   | `/api/news`           | admin | Create news post       |
| PUT    | `/api/news/:id`       | admin | Update news post       |
| DELETE | `/api/news/:id`       | admin | Delete news post       |
| GET    | `/api/calendar`       | —     | List calendar items    |
| POST   | `/api/calendar`       | admin | Create calendar item   |
| PUT    | `/api/calendar/:id`   | admin | Update calendar item   |
| DELETE | `/api/calendar/:id`   | admin | Delete calendar item   |

## Local development

```bash
npm install
npm run build           # build the React app once
DATABASE_URL='...' \
JWT_SECRET='...' \
ADMIN_EMAIL='...' \
ADMIN_PASSWORD_HASH='...' \
npm start               # http://localhost:10000
```

For frontend-only iteration, `npm run dev` still runs Vite on port 3000 — but
`/api/*` calls won't work unless you also run `npm start` and proxy.
