import { sourced, proposed, approved } from './_helpers.js';

/** Serve — Kingdom Builders + "Sent into the mess". Kingdom Builders partners
 *  are sourced; the pillar framing and outreach examples are proposed. */
export const serve = {
  hero: {
    eyebrow: proposed('serve-hero-eyebrow', 'Sent into the mess', 'Hero eyebrow — Pillar 4.'),
    headline: proposed('serve-hero-h', 'We go where it hurts.', 'Hero headline.'),
    subhead: approved('Slow enough to notice. Close enough to help. When we stop rushing, we start seeing the people around us — the neighbor who’s struggling, the family who needs a hand, the friend across the ocean.', 'Pastor James — Oct 2026'),
    photo: '/images/from-current-site/349087265_997215534646356_8924343448091739074_n-2288164.jpg',
  },

  kingdomBuilders: {
    label: sourced('Kingdom Builders', 'faithchurchleslie.com'),
    heading: proposed('serve-kb-h', 'Some seed to keep. Some to sow.', 'Heading — Feed & Seed offering line.'),
    body: sourced('When partnering with Kingdom Builders you support local, global, and future initiatives. Kingdom Builders giving supports ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach, and our national and global workers and missionaries.', 'faithchurchleslie.com'),
    partners: [
      sourced('Jackson Interfaith Shelter', 'faithchurchleslie.com'),
      sourced('Youth Haven Ranch', 'faithchurchleslie.com'),
      sourced('Leslie Outreach', 'faithchurchleslie.com'),
      sourced('National & global missionaries', 'faithchurchleslie.com'),
    ],
    cta: { label: 'Give to Kingdom Builders', href: 'giving' },
  },

  ways: {
    label: proposed('serve-ways-label', 'Ways to serve', 'Section label.'),
    heading: proposed('serve-ways-h', 'We brought tools.', 'Heading — Brand Guide outreach tone ("We’re here. We brought tools.").'),
    note: proposed('serve-ways-note', 'A starting list — James, confirm which of these are current and add what’s missing (Fall Festival, homecoming dinners, gifts to officers and teachers).', 'Editor note to James — these outreach specifics were not on the current site.'),
    items: [
      proposed('serve-way1', 'Community outreach — showing up for Leslie with hands, not just words.', 'Way to serve.'),
      proposed('serve-way2', 'Practical help for neighbors — the furnace, the ride, the meal.', 'Way to serve.'),
      proposed('serve-way3', 'Care for single moms and families in hard seasons.', 'Way to serve.'),
      proposed('serve-way4', 'Sunday teams — welcome, worship, kids, tech, prayer.', 'Way to serve.'),
      proposed('serve-way5', 'Haiti and global missions — the field is the world.', 'Way to serve.'),
    ],
  },
};
