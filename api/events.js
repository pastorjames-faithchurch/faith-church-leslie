/**
 * Vercel serverless function — Planning Center Calendar feed.
 *
 * Reads PCO credentials from environment variables (never the client) and
 * returns a normalized, public-only events array. With no credentials
 * configured it returns mock data so the site works in development and before
 * the Personal Access Token is added in Vercel.
 *
 * Env vars (set in Vercel project settings):
 *   PCO_APP_ID   — Personal Access Token Application ID
 *   PCO_SECRET   — Personal Access Token Secret
 *
 * Why event_instances (not events): the Calendar `events` endpoint returns
 * event *definitions* without reliable per-occurrence dates, and includes
 * internal/staff events. `event_instances` are the actual dated occurrences;
 * `?filter=future` gives upcoming ones, and `include=event` lets us keep only
 * events marked visible in Church Center (i.e. the public-facing calendar).
 */
export default async function handler(req, res) {
  const APP_ID = process.env.PCO_APP_ID;
  const SECRET = process.env.PCO_SECRET;

  if (!APP_ID || !SECRET) {
    return res.status(200).json({ events: MOCK_EVENTS, source: 'mock' });
  }

  const auth = 'Basic ' + Buffer.from(`${APP_ID}:${SECRET}`).toString('base64');
  const url =
    'https://api.planningcenteronline.com/calendar/v2/event_instances' +
    '?filter=future&order=starts_at&per_page=50&include=event';

  try {
    const r = await fetch(url, {
      headers: { Authorization: auth, Accept: 'application/json' },
    });
    if (!r.ok) throw new Error(`PCO ${r.status}`);
    const data = await r.json();

    // Index the included event definitions by id so each instance can read its
    // parent event's name/summary/visibility.
    const eventsById = {};
    for (const inc of data.included || []) {
      if (inc.type === 'Event') eventsById[inc.id] = inc.attributes || {};
    }

    const mapped = (data.data || [])
      .map((inst) => {
        const a = inst.attributes || {};
        const rel = inst.relationships?.event?.data;
        const ev = (rel && eventsById[rel.id]) || {};
        return {
          id: inst.id,
          eventId: rel?.id || inst.id,
          name: ev.name || 'Faith Church Event',
          summary: ev.summary || '',
          startsAt: a.starts_at,
          endsAt: a.ends_at,
          allDay: !!a.all_day_event,
          // "Every Sunday", "Weekly on Thursday", etc. — lets the UI show one
          // row for a recurring event instead of listing every occurrence.
          recurrence: a.compact_recurrence_description || a.recurrence_description || '',
          location: a.location || '',
          // church_center_url is the public detail/registration page for the
          // occurrence; fall back to the event's registration_url.
          registrationUrl: a.church_center_url || ev.registration_url || '',
          imageUrl: ev.image_url || '',
          _visible: ev.visible_in_church_center,
        };
      })
      // Public calendar only. If the attribute is missing (older API), keep it
      // rather than hide everything.
      .filter((e) => e._visible !== false && e.startsAt);

    // Collapse recurring events to a single card (their next upcoming
    // occurrence). Instances arrive ordered by starts_at, so the first time we
    // see an eventId is its soonest future occurrence.
    const seen = new Set();
    const events = mapped
      .filter((e) => {
        if (seen.has(e.eventId)) return false;
        seen.add(e.eventId);
        return true;
      })
      .map(({ _visible, eventId, ...e }) => e);

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return res.status(200).json({ events, source: 'live' });
  } catch (err) {
    return res
      .status(200)
      .json({ events: MOCK_EVENTS, source: 'fallback', error: err.message });
  }
}

/**
 * Fallback / development data — only shown when credentials are absent or the
 * PCO request fails. Seeded from the current site's event list so it reads real.
 * <EventsFeed> flags non-live data with a visible "sample" note.
 */
const MOCK_EVENTS = [
  {
    id: 'mock-sunday',
    name: 'Sunday Morning Gathering',
    summary: 'Coffee and fellowship at 9:45, worship and teaching at 10.',
    startsAt: '2026-07-26T14:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-prayer-noon',
    name: 'Prayer Thursday',
    summary: 'Midweek noon prayer — part of 50 Days of Prayer.',
    startsAt: '2026-07-23T16:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-prayer-evening',
    name: '50 Days of Prayer',
    summary: 'Thursday evening prayer gathering.',
    startsAt: '2026-07-23T23:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-encounter',
    name: 'Encounter Night',
    summary: 'First-Sunday-of-the-month evening of worship and prayer.',
    startsAt: '2026-08-02T22:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-50th',
    name: '50th Celebration — Faith Forward',
    summary: 'Marking 50 years of Faith Church. One gathering, 9:00 AM.',
    startsAt: '2026-08-16T13:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
];
