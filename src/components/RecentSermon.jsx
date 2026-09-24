import { useEffect, useState } from 'react';
import LiteYouTube from './LiteYouTube.jsx';

/**
 * The single "most recent" message on the home page. Fetches the top item from
 * /api/sermons (the channel's YouTube RSS, filtered to Sunday messages /
 * livestreams) so it tracks the latest Sunday livestream automatically — no
 * manual video-id updates. Falls back to the curated id/title from content on
 * dev (`npm run dev` has no serverless runtime), network error, or empty feed.
 *
 * Props:
 *   fallbackId    — video id to show if the live feed can't be reached
 *   fallbackTitle — its title (plain string)
 */
export default function RecentSermon({ fallbackId, fallbackTitle }) {
  const [video, setVideo] = useState({ id: fallbackId, title: fallbackTitle });

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch('/api/sermons?limit=1', {
          headers: { Accept: 'application/json' },
        });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await r.json();
        const top =
          data.source === 'youtube' && Array.isArray(data.sermons) && data.sermons[0];
        if (alive && top) setVideo({ id: top.videoId, title: top.title });
      } catch {
        /* keep the fallback already in state */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <div className="relative aspect-video bg-hunter">
        <LiteYouTube videoId={video.id} title={video.title} />
      </div>
      <p className="mt-3 eyebrow text-burlap">Most recent · {video.title}</p>
    </>
  );
}
