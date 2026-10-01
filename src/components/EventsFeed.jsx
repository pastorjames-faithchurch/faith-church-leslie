import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import ProposedString from './ProposedString.jsx';

/**
 * Upcoming-events feed. Fetches /api/events on mount (Vercel serverless →
 * Planning Center). If the request fails — e.g. `npm run dev`, which has no
 * serverless runtime — it falls back to a small client-side sample so the page
 * still renders for review. When the data isn't the live PCO feed, a proposed
 * footnote flags it.
 *
 * Props:
 *   limit  — max cards (default 3 for the home teaser; null = all)
 */
const CLIENT_FALLBACK = [
  {
    id: 'fb-sunday',
    name: 'Sunday Morning Gathering',
    summary: 'Coffee and fellowship at 9:45, worship and teaching at 10.',
    startsAt: '2026-07-26T14:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'fb-prayer',
    name: 'Prayer Thursday · 50 Days of Prayer',
    summary: 'Midweek noon prayer, and again Thursday evening.',
    startsAt: '2026-07-23T16:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'fb-50th',
    name: '50th Celebration — Faith Forward',
    summary: 'Marking 50 years of Faith Church. One gathering, 9:00 AM.',
    startsAt: '2026-08-16T13:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
];

function formatWhen(iso, allDay = false) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    // All-day events carry a midnight time that shouldn't be shown.
    ...(allDay ? {} : { hour: 'numeric', minute: '2-digit' }),
    timeZone: 'America/New_York',
  }).format(d);
}

function Skeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-44 animate-pulse bg-kraft/70 border border-burlap/15" />
      ))}
    </div>
  );
}

export default function EventsFeed({ limit = 3 }) {
  const [status, setStatus] = useState('loading'); // loading | ready
  const [events, setEvents] = useState([]);
  const [source, setSource] = useState('mock');

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch('/api/events', { headers: { Accept: 'application/json' } });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await r.json();
        if (!alive) return;
        setEvents(Array.isArray(data.events) ? data.events : []);
        setSource(data.source || 'mock');
      } catch {
        // No serverless runtime (dev) or network error → client sample.
        if (!alive) return;
        setEvents(CLIENT_FALLBACK);
        setSource('client-fallback');
      } finally {
        if (alive) setStatus('ready');
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (status === 'loading') return <Skeleton />;

  if (events.length === 0) {
    return (
      <p className="font-body text-lg text-burlap">
        <ProposedString
          id="events-empty"
          note="No upcoming events yet. Check back soon."
        >
          No upcoming events yet. Check back soon.
        </ProposedString>
      </p>
    );
  }

  const shown = limit == null ? events : events.slice(0, limit);
  const isLive = source === 'live';

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {shown.map((e, i) => (
          <Reveal
            key={e.id}
            delay={i * 0.06}
            className="flex flex-col bg-manila border border-burlap/20 p-7"
          >
            <p className="eyebrow text-hunter">
              {e.recurrence || formatWhen(e.startsAt, e.allDay)}
            </p>
            <h3 className="mt-3 font-display font-bold text-xl text-ink leading-snug">
              {e.name}
            </h3>
            {e.recurrence && formatWhen(e.startsAt, e.allDay) && (
              <p className="mt-1 font-body text-sm text-burlap/80">
                Next: {formatWhen(e.startsAt, e.allDay)}
              </p>
            )}
            {e.summary && (
              <p className="mt-3 font-body text-burlap leading-relaxed">
                {e.summary}
              </p>
            )}
            {e.location && (
              <p className="mt-4 font-body text-sm text-burlap/80">{e.location}</p>
            )}
            {e.registrationUrl && (
              <a
                href={e.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 link-fc font-body font-semibold uppercase text-sm tracking-[0.12em]"
              >
                Learn more →
              </a>
            )}
          </Reveal>
        ))}
      </div>

      {!isLive && (
        <p className="mt-6 font-body text-sm text-burlap/80">
          <ProposedString
            id="events-sample"
            note="Sample of our regular rhythm — the live Planning Center calendar replaces this once James connects his account."
          >
            Showing a sample of our regular rhythm — the live calendar goes here
            once connected.
          </ProposedString>
        </p>
      )}
    </div>
  );
}
