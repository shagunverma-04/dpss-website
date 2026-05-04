const baseHeaders = { 'Content-Type': 'application/json' };

async function request(path, options = {}) {
  const res = await fetch(path, {
    credentials: 'same-origin',
    headers: baseHeaders,
    ...options
  });
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}

export const api = {
  // Auth
  login: (email, password) =>
    request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  logout: () => request('/api/auth/logout', { method: 'POST' }),
  me: () => request('/api/auth/me'),

  // Events
  listEvents: () => request('/api/events'),
  createEvent: (data) => request('/api/events', { method: 'POST', body: JSON.stringify(data) }),
  updateEvent: (id, data) =>
    request(`/api/events/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteEvent: (id) => request(`/api/events/${id}`, { method: 'DELETE' }),

  // News
  listNews: () => request('/api/news'),
  createNews: (data) => request('/api/news', { method: 'POST', body: JSON.stringify(data) }),
  updateNews: (id, data) =>
    request(`/api/news/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteNews: (id) => request(`/api/news/${id}`, { method: 'DELETE' }),

  // Calendar
  listCalendar: () => request('/api/calendar'),
  createCalendar: (data) =>
    request('/api/calendar', { method: 'POST', body: JSON.stringify(data) }),
  updateCalendar: (id, data) =>
    request(`/api/calendar/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteCalendar: (id) => request(`/api/calendar/${id}`, { method: 'DELETE' })
};
