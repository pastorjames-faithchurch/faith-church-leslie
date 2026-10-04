import { sourced, proposed, approved } from './_helpers.js';

/**
 * Home — long-scroll page. Copy grounded in the current-site content map and
 * Pastor James's Sept 2026 review. `sourced` = from the old site, `approved` =
 * James reviewed/blessed it, `proposed` = still awaiting his review.
 */
export const home = {
  hero: {
    eyebrow: 'Leslie, Michigan · Sundays 10 AM', // sourced facts
    // Hero line — James's direction (replaces the old AI placeholder tagline).
    tagline: 'Learning to slow down to be with Jesus.',
    subhead: approved(
      "Come on in. Coffee's hot at 9:45 and we saved you a seat at 10 — a Jesus-centered family becoming like Jesus."
    ),
    photo: '/images/from-current-site/IMG_1195_Large-1591768.jpeg',
  },

  // Sunday strip (hunter band)
  sundayStrip: sourced(
    '10:00 AM · Sundays · 4020 N. Main St., Leslie',
    'faithchurchleslie.com/contact'
  ),

  // Gather · Engage · Serve
  strategy: {
    label: sourced('Gather · Engage · Serve', 'faithchurchleslie.com/about-faith'),
    heading: approved('A family where Jesus is everything.'),
    columns: [
      {
        eyebrow: sourced('Gather'),
        heading: approved('The power of the gathering body of Christ.'),
        body: sourced(
          'As we Gather, worship, pray and share the Gospel of Jesus Christ, we seek the glory of God.',
          'faithchurchleslie.com/about-faith'
        ),
        link: { label: 'What Sunday is like', to: '/visit' },
      },
      {
        eyebrow: sourced('Engage'),
        heading: approved('Around tables, not in rows.'),
        body: sourced(
          'The most effective discipleship takes place around tables, in small groups we call Engage Groups — relational, pastoral, and missional.',
          'faithchurchleslie.com/engagegroups'
        ),
        link: { label: 'The discipleship pathway', to: '/discipleship' },
      },
      {
        eyebrow: sourced('Serve'),
        heading: approved('Serving one another and our world is our culture.'),
        body: sourced(
          'For His glory, we Serve and care for one another, our community, our nation, and our world.',
          'faithchurchleslie.com/about-faith'
        ),
        link: { label: 'How we serve', to: '/serve' },
      },
    ],
  },

  // What to expect on Sunday — 3 numbered items
  visit: {
    label: approved('What to expect on Sunday'),
    heading: approved('No hoops. Just come as you are.'),
    items: [
      approved(
        "Come at 9:45. Coffee's on in the Rooted Pine Café, and you can check your kids in at Faith Kids."
      ),
      approved(
        'Slowed-down worship, communion, and teaching that runs about 90 minutes. We slow down to listen and be with Jesus.'
      ),
      approved('Stay after. Meet our Welcome Team. Check out Next Steps.'),
    ],
  },

  // The pathway — 5 stops
  pathway: {
    label: sourced('The discipleship pathway', 'faithchurchleslie.com/engagegroups'),
    heading: approved('A pathway, not a program.'),
    tagline: sourced('Be / Become / Do', 'faithchurchleslie.com/engagegroups'),
    stops: [
      { name: sourced('Welcome to Faith'), body: approved('Offered a few times a year: meet the pastors, our culture, and begin your journey.') },
      { name: sourced('The Rooted Experience'), body: sourced('Ten weeks connecting with God, the church, and your purpose through the key rhythms of faith.', 'faithchurchleslie.com/engagegroups') },
      { name: sourced('Discover Partnership'), body: approved('What it means to be in covenant @ Faith Church.') },
      { name: sourced('Emotionally Healthy Discipleship'), body: sourced('Eight weeks integrating emotional health and spiritual depth — beyond surface-level practice.', 'faithchurchleslie.com/engagegroups') },
      { name: sourced('Engage Groups'), body: sourced('Micro-churches within the family — six to ten people, in a home, doing the slow work of becoming like Jesus.', 'faithchurchleslie.com/engagegroups') },
    ],
    cta: { label: 'Find your Engage Group', href: 'engageGroupsReg' },
  },

  // Sent into the mess — James edited the section label (#14) in Sept and
  // replaced the heading/body (old #15–16) in Oct 2026 so it doesn't name
  // specific projects. The verse (old #17) he has not addressed.
  serve: {
    label: approved('Called into the places of our world and our local communities.'),
    heading: approved('Slow enough to notice. Close enough to help.', 'Pastor James — Oct 2026'),
    body: approved(
      'When we stop rushing, we start seeing the people around us — the neighbor who’s struggling, the family who needs a hand, the friend across the ocean. We go where it hurts, because that’s where Jesus goes.',
      'Pastor James — Oct 2026'
    ),
    scripture: {
      quote: proposed('home-mess-verse', 'He gives seed to the sower.', 'Scripture card (2 Cor. 9:10 paraphrase). NOT yet reviewed by James.'),
      ref: sourced('2 Corinthians 9:10'),
    },
  },

  events: {
    label: approved('This week at Faith'),
    heading: approved('Be with Jesus.'),
  },

  give: {
    label: sourced('Kingdom Builders', 'faithchurchleslie.com'),
    heading: approved('Some seed to keep. Some to sow.'),
    body: sourced(
      'Kingdom Builders giving supports ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach, plus our national and global workers and missionaries.',
      'faithchurchleslie.com'
    ),
    cta: { label: 'Give Now', href: 'giving' },
  },

  sermons: {
    label: sourced('Message Archive', 'faithchurchleslie.com/sermons'),
    heading: approved('Miss a Sunday? Catch up here.'),
    recentVideoId: 'FN4AtPLlvDM', // "Roots — Week 2" (most recent, from crawl)
    recentTitle: sourced('Roots — Week 2', 'faithchurchleslie.com/sermons'),
  },

  contact: {
    label: approved('Come find us'),
    heading: approved('Next to Leslie High, on North Main.'),
  },
};
