import React, { useEffect, useState } from 'react';
import './AdminPage.css';
import { api } from '../api/client';

const TABS = [
  { key: 'events',   label: 'Events' },
  { key: 'news',     label: 'News' },
  { key: 'calendar', label: 'Calendar' }
];

const EVENT_FIELDS = [
  { key: 'title',       label: 'Title',       type: 'text',     required: true },
  { key: 'event_date',  label: 'Date',        type: 'date',     required: true },
  { key: 'location',    label: 'Location',    type: 'text' },
  { key: 'image_url',   label: 'Image URL',   type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' }
];

const NEWS_FIELDS = [
  { key: 'title',        label: 'Title',          type: 'text',     required: true },
  { key: 'published_at', label: 'Published date', type: 'datetime-local' },
  { key: 'image_url',    label: 'Image URL',      type: 'text' },
  { key: 'body',         label: 'Body',           type: 'textarea', required: true }
];

const CALENDAR_FIELDS = [
  { key: 'title',       label: 'Title',       type: 'text',     required: true },
  { key: 'item_date',   label: 'Date',        type: 'date',     required: true },
  { key: 'type',        label: 'Type',        type: 'select',   options: ['holiday', 'exam', 'activity'], required: true },
  { key: 'description', label: 'Description', type: 'textarea' }
];

const RESOURCE_CONFIG = {
  events: {
    fields: EVENT_FIELDS,
    list:   () => api.listEvents(),
    create: (d) => api.createEvent(d),
    update: (id, d) => api.updateEvent(id, d),
    remove: (id) => api.deleteEvent(id),
    primaryLabel: (r) => r.title,
    secondaryLabel: (r) => `${formatDate(r.event_date)}${r.location ? ' · ' + r.location : ''}`
  },
  news: {
    fields: NEWS_FIELDS,
    list:   () => api.listNews(),
    create: (d) => api.createNews(d),
    update: (id, d) => api.updateNews(id, d),
    remove: (id) => api.deleteNews(id),
    primaryLabel: (r) => r.title,
    secondaryLabel: (r) => formatDate(r.published_at)
  },
  calendar: {
    fields: CALENDAR_FIELDS,
    list:   () => api.listCalendar(),
    create: (d) => api.createCalendar(d),
    update: (id, d) => api.updateCalendar(id, d),
    remove: (id) => api.deleteCalendar(id),
    primaryLabel: (r) => r.title,
    secondaryLabel: (r) => `${formatDate(r.item_date)} · ${r.type}`
  }
};

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function emptyValuesFor(fields) {
  const obj = {};
  fields.forEach((f) => { obj[f.key] = ''; });
  return obj;
}

function toFormValues(record, fields) {
  const obj = {};
  fields.forEach((f) => {
    let v = record[f.key];
    if (v == null) { obj[f.key] = ''; return; }
    if (f.type === 'date' && typeof v === 'string') v = v.slice(0, 10);
    if (f.type === 'datetime-local' && typeof v === 'string') v = v.slice(0, 16);
    obj[f.key] = v;
  });
  return obj;
}

const AdminPage = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);

  const [tab, setTab] = useState('events');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [saving, setSaving] = useState(false);

  const config = RESOURCE_CONFIG[tab];

  // Check session on mount
  useEffect(() => {
    let cancel = false;
    api.me()
      .then((r) => { if (!cancel) { setAuthed(!!r.authenticated); setAuthChecked(true); } })
      .catch(() => { if (!cancel) { setAuthed(false); setAuthChecked(true); } });
    return () => { cancel = true; };
  }, []);

  // Load items when tab or auth changes
  useEffect(() => {
    if (!authed) return;
    let cancel = false;
    setLoading(true);
    setError('');
    config.list()
      .then((rows) => { if (!cancel) setItems(rows || []); })
      .catch((e) => { if (!cancel) setError(e.message); })
      .finally(() => { if (!cancel) setLoading(false); });
    return () => { cancel = true; };
  }, [authed, tab]);

  // Reset form when tab changes
  useEffect(() => {
    setEditingId(null);
    setFormValues(emptyValuesFor(config.fields));
  }, [tab]);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginBusy(true);
    setLoginError('');
    try {
      await api.login(email, password);
      setAuthed(true);
      setPassword('');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginBusy(false);
    }
  }

  async function handleLogout() {
    await api.logout().catch(() => {});
    setAuthed(false);
    setItems([]);
  }

  function startEdit(record) {
    setEditingId(record.id);
    setFormValues(toFormValues(record, config.fields));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function cancelEdit() {
    setEditingId(null);
    setFormValues(emptyValuesFor(config.fields));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = {};
      config.fields.forEach((f) => {
        const v = formValues[f.key];
        payload[f.key] = v === '' ? null : v;
      });
      if (editingId) {
        const updated = await config.update(editingId, payload);
        setItems((prev) => prev.map((r) => (r.id === editingId ? updated : r)));
      } else {
        const created = await config.create(payload);
        setItems((prev) => [created, ...prev]);
      }
      cancelEdit();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(record) {
    if (!confirm(`Delete "${config.primaryLabel(record)}"?`)) return;
    try {
      await config.remove(record.id);
      setItems((prev) => prev.filter((r) => r.id !== record.id));
      if (editingId === record.id) cancelEdit();
    } catch (err) {
      setError(err.message);
    }
  }

  if (!authChecked) {
    return (
      <div className="admin-page">
        <div className="admin-loading">Loading…</div>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="admin-page">
        <div className="admin-login-wrap">
          <form className="admin-login-card" onSubmit={handleLogin}>
            <h1 className="admin-login-title">Admin Login</h1>
            <p className="admin-login-sub">DPS Robertsganj — content management</p>
            <label className="admin-field">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </label>
            <label className="admin-field">
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </label>
            {loginError && <div className="admin-error">{loginError}</div>}
            <button type="submit" className="admin-btn-primary" disabled={loginBusy}>
              {loginBusy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div>
          <h1 className="admin-title">Content Manager</h1>
          <p className="admin-subtitle">Manage events, news, and the school calendar.</p>
        </div>
        <button className="admin-btn-ghost" onClick={handleLogout}>Sign out</button>
      </header>

      <nav className="admin-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`admin-tab ${tab === t.key ? 'admin-tab--active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <section className="admin-form-card">
        <h2 className="admin-form-title">
          {editingId ? `Edit ${tab.slice(0, -1) || tab}` : `Add new ${tab.slice(0, -1) || tab}`}
        </h2>
        <form onSubmit={handleSubmit} className="admin-form">
          {config.fields.map((f) => (
            <label key={f.key} className={`admin-field ${f.type === 'textarea' ? 'admin-field--full' : ''}`}>
              <span>{f.label}{f.required ? ' *' : ''}</span>
              {f.type === 'textarea' ? (
                <textarea
                  value={formValues[f.key] || ''}
                  onChange={(e) => setFormValues((p) => ({ ...p, [f.key]: e.target.value }))}
                  required={f.required}
                  rows={4}
                />
              ) : f.type === 'select' ? (
                <select
                  value={formValues[f.key] || ''}
                  onChange={(e) => setFormValues((p) => ({ ...p, [f.key]: e.target.value }))}
                  required={f.required}
                >
                  <option value="">— select —</option>
                  {f.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={f.type}
                  value={formValues[f.key] || ''}
                  onChange={(e) => setFormValues((p) => ({ ...p, [f.key]: e.target.value }))}
                  required={f.required}
                />
              )}
            </label>
          ))}
          {error && <div className="admin-error admin-field--full">{error}</div>}
          <div className="admin-form-actions admin-field--full">
            <button type="submit" className="admin-btn-primary" disabled={saving}>
              {saving ? 'Saving…' : editingId ? 'Update' : 'Create'}
            </button>
            {editingId && (
              <button type="button" className="admin-btn-ghost" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="admin-list-card">
        <h2 className="admin-form-title">Existing {tab}</h2>
        {loading ? (
          <div className="admin-loading">Loading…</div>
        ) : items.length === 0 ? (
          <div className="admin-empty">No {tab} yet. Add one above.</div>
        ) : (
          <ul className="admin-list">
            {items.map((r) => (
              <li key={r.id} className="admin-list-item">
                <div className="admin-list-text">
                  <div className="admin-list-primary">{config.primaryLabel(r)}</div>
                  <div className="admin-list-secondary">{config.secondaryLabel(r)}</div>
                </div>
                <div className="admin-list-actions">
                  <button className="admin-btn-ghost" onClick={() => startEdit(r)}>Edit</button>
                  <button className="admin-btn-danger" onClick={() => handleDelete(r)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminPage;
