/**
 * Vercel serverless function — recent sermons from the church's YouTube channel.
 *
 * Reads the channel's public Atom/RSS feed (no API key, no quota) and returns
 * the latest videos, filtered to Sunday messages (drops prayer meetings, shorts,
 * livestream placeholders). Thumbnails are derived from the video id, which the
 * site CSP already allows (img-src i.ytimg.com).
 *
 * Env (optional):
 *   SERMONS_CHANNEL_ID — override the channel (default: Faith Church Leslie).
 */
const CHANNEL_ID = process.env.SERMONS_CHANNEL_ID || 'UCQcteR3ANgrgtEUvNFLry8w';
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// Titles we don't want in a *sermon* archive.
const EXCLUDE = /\b(prayer|thursday|midweek|noon|#?shorts?|live now|is live|watch party|kids|announcement)\b/i;
// The church posts short midweek devotional/quote clips that always carry a
// hashtag (e.g. "…#LoveYourNeighbor"); the Sunday services/livestreams never
// do. Dropping hashtagged titles keeps the feed to actual Sunday messages.
const HASHTAG_CLIP = /#[a-z]/i;

const pick = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return m ? m[1].trim() : '';
};
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

export default async function handler(req, res) {
  const limit = Math.min(parseInt(req.query?.limit, 10) || 12, 15);

  try {
    const r = await fetch(FEED, {
      headers: { 'User-Agent': 'FaithChurchLeslieSite/1.0', Accept: 'application/atom+xml' },
    });
    if (!r.ok) throw new Error(`YouTube feed ${r.status}`);
    const xml = await r.text();

    const entries = xml.split('<entry>').slice(1);
    const sermons = [];
    const seen = new Set(); // collapse same-titled re-uploads (livestream + repost)
    for (const e of entries) {
      const videoId = pick(e, 'yt:videoId');
      const title = decode(pick(e, 'title'));
      const published = pick(e, 'published');
      if (!videoId || !title) continue;
      if (EXCLUDE.test(title)) continue;
      if (HASHTAG_CLIP.test(title)) continue;
      const key = title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      if (seen.has(key)) continue;
      seen.add(key);
      sermons.push({
        videoId,
        title,
        published,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumb: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      });
      if (sermons.length >= limit) break;
    }

    // Edge cache: fresh for 30 min, serve stale up to a day while revalidating.
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');
    return res.status(200).json({ sermons, source: 'youtube', channelId: CHANNEL_ID });
  } catch (err) {
    // Client falls back to the curated static list.
    return res.status(200).json({ sermons: [], source: 'fallback', error: err.message });
  }
}
