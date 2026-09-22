import { sourced, proposed, approved } from './_helpers.js';

/** Discipleship — the 5-stop pathway expanded. Rooted & EHD copy is sourced;
 *  the two empty stops (Welcome to Faith, Discover Partnership) are proposed. */
export const discipleship = {
  hero: {
    eyebrow: sourced('The discipleship pathway', 'faithchurchleslie.com/engagegroups'),
    headline: approved('A pathway, not a program.'),
    photo: '/images/photos/congregation-portrait.jpg',
    tagline: sourced('Be / Become / Do', 'faithchurchleslie.com/engagegroups'),
  },

  intro: approved(
    'At Faith Church you’ll always know what’s next. Five stages, in order, each one a real step — not a hoop. Some of it will cost you something. It’s worth it.'
  ),

  stops: [
    {
      n: 1,
      name: sourced('Welcome to Faith', 'faithchurchleslie.com/engagegroups'),
      what: approved('Held a few times a year — meet the pastors, the culture, intro to the church, and next steps.'),
      who: approved('For anyone new, or anyone who’s been around a while and never made it official.'),
      when: approved('One Sunday after morning gathering — lunch provided.'),
    },
    {
      n: 2,
      name: sourced('The Rooted Experience', 'faithchurchleslie.com/engagegroups'),
      what: sourced('A ten-week experience that helps you connect with God, the church, and your purpose through the key rhythms of faith — daily devotion, prayer, repentance, generosity, serving, and sharing your story.', 'faithchurchleslie.com/engagegroups'),
      who: sourced('Best as a first step to grow in faith and connect with others.', 'faithchurchleslie.com/engagegroups'),
      when: sourced('Groups of 10–15 gather weekly for discussion, journaling, prayer, and service experiences.', 'faithchurchleslie.com/engagegroups'),
    },
    {
      n: 3,
      name: sourced('Discover Partnership', 'faithchurchleslie.com/engagegroups'),
      what: approved('Where belonging becomes commitment. What partnership at Faith Church means, and how your gifts fit the mission.'),
      who: approved('For those ready to move from attending to belonging.'),
      when: approved('Offered periodically — ask at the welcome table for the next date.'),
    },
    {
      n: 4,
      name: sourced('Emotionally Healthy Discipleship', 'faithchurchleslie.com/engagegroups'),
      what: sourced('Integrates emotional health and spiritual depth, moving beyond surface-level practice — addressing unhealthy spirituality, discovering your authentic self in Christ, integrating grief, practicing Sabbath, and healing family patterns.', 'faithchurchleslie.com/engagegroups'),
      who: sourced('Best for those who have completed the Rooted Experience.', 'faithchurchleslie.com/engagegroups'),
      when: sourced('Two eight-week courses (Emotionally Healthy Spirituality and Emotionally Healthy Relationships) with readings, video teaching, and small-group discussion.', 'faithchurchleslie.com/engagegroups'),
    },
    {
      n: 5,
      name: sourced('Engage Groups', 'faithchurchleslie.com/engagegroups'),
      what: sourced('Micro-churches within our larger family — relational, pastoral, and missional. Food and fellowship, Scripture, honest conversation, prayer and ministry, and mission and service together.', 'faithchurchleslie.com/engagegroups'),
      who: approved('For everyone. This is where the family actually lives day to day.'),
      when: sourced('Each group is unique — meeting weekly, twice a month, or as the group decides, usually in a home.', 'faithchurchleslie.com/engagegroups'),
    },
  ],

  classes: {
    heading: sourced('Core Engage Classes', 'faithchurchleslie.com/engagegroups'),
    body: sourced('Engage Classes focus on specific teaching and the core discipleship values of Faith Church. They provide the foundation for spiritual and emotional health within our community.', 'faithchurchleslie.com/engagegroups'),
  },

  ctas: [
    { label: 'Join an Engage Group', href: 'engageGroupsReg', variant: 'primary' },
    { label: 'Register for a class', href: 'engageClassesReg', variant: 'ghost' },
  ],
};
