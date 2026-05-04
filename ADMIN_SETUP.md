# Admin / CMS Setup

This site has a small admin area at **`/admin`** for managing events, news, and the
school calendar. Public pages read from the same Postgres database.

## 1. Provision Postgres

Use any Postgres provider (Vercel Postgres, Neon, Supabase, etc.). Get the
connection string — it should look like `postgres://user:pass@host:5432/db`.

## 2. Set environment variables on Vercel

In your Vercel project → Settings → Environment Variables, add:

| Name                    | Value                                                      |
| ----------------------- | ---------------------------------------------------------- |
| `DATABASE_URL`          | Postgres connection string                                 |
| `JWT_SECRET`            | A long random string (run `openssl rand -hex 32`)          |
| `ADMIN_EMAIL`           | The admin email used to log in                             |
| `ADMIN_PASSWORD_HASH`   | bcrypt hash of the admin password (see step 4)             |
| `PGSSL` *(optional)*    | Set to `disable` only if your Postgres is local / no SSL   |

## 3. Initialise the database

Run once locally with `DATABASE_URL` exported in your shell:

```bash
DATABASE_URL='postgres://...' npm run db:init
```

This creates three tables: `events`, `news`, `calendar_items`.

## 4. Generate the admin password hash

```bash
npm run admin:hash -- "your-strong-password"
```

Copy the output and paste it as the value for `ADMIN_PASSWORD_HASH` on Vercel.

## 5. Deploy

Push to `main`. Vercel will build the Vite frontend and deploy the serverless
functions in `/api/*`. Visit `/admin` to log in.

## API surface

| Method | Path                  | Auth  | Purpose                |
| ------ | --------------------- | ----- | ---------------------- |
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
