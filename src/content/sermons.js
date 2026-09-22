import { sourced, proposed, approved } from './_helpers.js';

/** Sermons — archive. Recent Sunday messages captured from the current site's
 *  YouTube archive (sourced titles/dates/IDs). Full archive links to YouTube. */
export const sermons = {
  hero: {
    eyebrow: sourced('Message Archive', 'faithchurchleslie.com/sermons'),
    headline: approved('Miss a Sunday? Catch up here.'),
    subhead: approved('Biblically grounded teaching, aimed at formation, not just information. Watch past gatherings any time.'),
    photo: '/images/photos/worship-bw.jpg',
  },

  currentSeries: sourced('Current series: Roots', 'faithchurchleslie.com/sermons'),

  // Distinct recent Sunday messages from the current YouTube archive.
  recent: [
    { videoId: 'FN4AtPLlvDM', title: sourced('Roots — Week 2', 'faithchurchleslie.com/sermons'), date: sourced('July 19, 2026', 'faithchurchleslie.com/sermons'), speaker: sourced('Pastor James Courter', 'faithchurchleslie.com/sermons') },
    { videoId: 'GxTp49NWY0M', title: sourced('Roots — Sunday Service', 'faithchurchleslie.com/sermons'), date: sourced('July 13, 2026', 'faithchurchleslie.com/sermons'), speaker: sourced('Pastor James Courter', 'faithchurchleslie.com/sermons') },
    { videoId: '9sMkvuNCMtc', title: sourced('Real Freedom — Galatians 5', 'faithchurchleslie.com/sermons'), date: sourced('July 5, 2026', 'faithchurchleslie.com/sermons'), speaker: sourced('Pastor James Courter', 'faithchurchleslie.com/sermons') },
  ],

  archiveNote: approved('The full archive — every Sunday gathering and midweek prayer — lives on our YouTube channel.'),
};
