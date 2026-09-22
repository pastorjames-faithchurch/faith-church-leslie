import { sourced, proposed, approved } from './_helpers.js';

/** About — the longest page. History, mission/vision/strategy, core values,
 *  leadership (all verbatim from /about-faith), plus proposed differentiators. */
export const about = {
  hero: {
    eyebrow: 'About Faith Church',
    headline: approved('A history of stepping out in faith.'),
    photo: '/images/photos/james-crystal.jpg',
  },

  history: {
    label: sourced('Our history', 'faithchurchleslie.com/about-faith'),
    heading: approved('Different year — same mission.'),
    paragraphs: [
      sourced('Our history as a church dates back to 1976 when the church was planted and founded as Faith Assembly of God. Our founders started in their homes and elected Samuel Steadman to be the first Lead Pastor. Pastor Sam would faithfully serve as the Lead Pastor for the next 44 years until the fall of 2020.', 'faithchurchleslie.com/about-faith'),
      sourced('Soon after launching, Faith Assembly rented a storefront on Main St. in downtown Leslie. Just a few short years later the church was able to purchase the former Free Methodist building on Church St in downtown Leslie. This location would be home for over 20 years before acquiring the current property on 4020 N. Main St. next to Leslie High School.', 'faithchurchleslie.com/about-faith'),
      sourced('Faith Church has a history because of the men and women of God who paved the way before us. While methods have changed, the vision that launched the church in 1976 remains the same — make disciples.', 'faithchurchleslie.com/about-faith'),
      sourced('Fast forward to 2020, when Faith Assembly elected James Courter as the next (2nd) Lead Pastor in the church’s history. In 2022 the name of the church was changed to Faith Church.', 'faithchurchleslie.com/about-faith'),
      sourced('Today Faith Church exists to be a Jesus-centered family experiencing whole-life transformation. This cannot be accomplished without people like you. We invite you to join us on this journey.', 'faithchurchleslie.com/about-faith'),
    ],
    signoff: sourced('Together in Mission, — The Faith Leadership Team', 'faithchurchleslie.com/about-faith'),
  },

  mvs: {
    label: sourced('Mission · Vision · Strategy', 'faithchurchleslie.com/about-faith'),
    items: [
      { term: sourced('Mission'), def: sourced('Faith Church exists to be a Jesus-centered family experiencing whole-life transformation.', 'faithchurchleslie.com/about-faith') },
      { term: sourced('Vision'), def: sourced('Reach the unchurched and disciple believers to become thriving followers of Jesus. We seek to be a church that equips and sends.', 'faithchurchleslie.com/about-faith') },
      { term: sourced('Strategy'), def: sourced('Gather, Engage, and Serve. As we Gather we seek the glory of God; for His glory we Serve one another, our community, our nation, and our world; and we help people Engage in their faith through Engage Groups.', 'faithchurchleslie.com/about-faith') },
    ],
  },

  values: {
    label: sourced('Core values', 'faithchurchleslie.com/about-faith'),
    heading: approved('What we won’t compromise.'),
    list: [
      sourced('We believe God’s presence is essential to transformation in a community, and thus seeking His presence must always take precedence over our plans and programs.', 'faithchurchleslie.com/about-faith'),
      sourced('We are determined to preach Jesus Christ and Him crucified (1 Cor. 2:2) and to be a people who live a lifestyle of being crucified with Christ (Gal. 2:20).', 'faithchurchleslie.com/about-faith'),
      sourced('We believe God’s Word, the Bible, should be the guide for all ministry practice.', 'faithchurchleslie.com/about-faith'),
      sourced('We are committed to God shaping our own ideas, agendas, and culture so that we might walk out His call and purpose.', 'faithchurchleslie.com/about-faith'),
      sourced('We believe prayer is the center of everything, the sole way to nurture spiritual intimacy.', 'faithchurchleslie.com/about-faith'),
      sourced('We esteem honesty, integrity, and a commitment to holiness that begins with personal transformation.', 'faithchurchleslie.com/about-faith'),
      sourced('We reject apathetic and traditional thinking as unrepresentative of a dynamic God.', 'faithchurchleslie.com/about-faith'),
    ],
  },

  affiliation: sourced('Faith Church is part of the fellowship of churches known as the Assemblies of God. We are a Christian church that abides by the Statement of Fundamental Truths.', 'faithchurchleslie.com/about-faith'),

  leadership: {
    label: sourced('Our leadership', 'faithchurchleslie.com/about-faith'),
    heading: sourced('James & Crystal Courter', 'faithchurchleslie.com/about-faith'),
    photo: '/images/from-current-site/IMG_0415-7515353.jpeg',
    photoNote: proposed('about-leader-photo', 'Placeholder portrait pulled from the current site (has a slight color artifact) — swap for a clean James & Crystal photo.', 'Flag: current leadership photo has a rendering artifact; request a replacement.'),
    paragraphs: [
      sourced('In September of 2020, Pastor James was elected as Faith Church’s second Lead Pastor. Pastor James and his family have returned full-circle to where he grew up after being away from Michigan for 17 years. He brings his unique experience serving ten years overseas as a missionary in Haiti combined with a passion to witness personal and community transformation.', 'faithchurchleslie.com/about-faith'),
      sourced('Pastor Crystal serves as the Worship Pastor at Faith as well as the social media director. Crystal brings a passion for the presence of Jesus during our times of corporate gathering. God uses her creativity, and her willingness to wait, to lead the gathering church in times of refreshing in His presence.', 'faithchurchleslie.com/about-faith'),
      approved('James and Crystal have 10 children, 9 grandchildren and growing, a French Bulldog named Moose, and a Bernese Mountain Dog named Mable. Together, their love for Jesus and love for people fosters a Kingdom culture at Faith Church.'),
    ],
  },

  differentiators: {
    label: approved('What makes Faith different'),
    heading: approved('Intentional Pathway of Slowing Down.'),
    list: [
      approved('We push back on the cultural norms of hurry and accumulation and seek to slow down to be with Jesus.'),
      approved('Global DNA. A decade in Haiti shapes the leadership’s instincts.'),
      approved('A particular ministry to broken and blended families, and to women coming out of hard places.'),
      approved('A 50-year history of faithfulness.'),
      approved('Committed to Being / Becoming / Doing.'),
    ],
  },
};
