import { sourced, proposed, approved } from './_helpers.js';

/** Visit — "what to expect on Sunday", expanded. Mostly proposed (the current
 *  site had no plan-a-visit content), grounded in sourced service facts. */
export const visit = {
  hero: {
    eyebrow: 'Plan your visit',
    headline: approved('Just as you are.'),
    subhead: approved('Come on in. Coffee’s on in the Rooted Pine Café at 9:45 and we saved you a seat at 10. Here’s exactly what your first Sunday looks like.'),
    photo: '/images/photos/exterior-sign.jpg',
  },

  facts: {
    time: sourced('Sundays at 10:00 AM', 'faithchurchleslie.com/contact'),
    coffee: sourced('Coffee, refreshments & fellowship from 9:45 AM', 'faithchurchleslie.com/contact'),
    address: sourced('4020 N. Main St., Leslie, MI 49251 — next to Leslie High School', 'faithchurchleslie.com'),
  },

  flow: {
    label: approved('What to expect'),
    heading: approved('Your first Sunday, start to finish.'),
    steps: [
      { title: approved('Arrive at 9:45'), body: approved('Pull in off North Main — there’s plenty of parking. Grab coffee in the Rooted Pine Cafe in the Steadman Commons and let someone say hello before anything official starts.') },
      { title: approved('Worship at 10:00'), body: approved('Music you can actually sing. Expression is real and unforced — you’re welcome to engage however you’re comfortable.') },
      { title: approved('Biblically grounded teaching'), body: approved('Preaching for formation, not just information — plain-spoken, honest about hard things, rooted in Scripture. The whole gathering runs about 90 minutes.') },
      { title: approved('Stay after'), body: approved('Ask anybody anything. Where your kids went, how Engage Groups work, what “Welcome to Faith” is. No one will rush you out.') },
    ],
  },

  faqs: {
    label: approved('The practical stuff'),
    items: [
      { q: approved('What do people wear?'), a: approved('Whatever you’ve got. Jeans, boots, Sunday best — nobody’s checking.') },
      { q: approved('Where do my kids go?'), a: approved('Check your kids in at Faith Kids — easy and secure, with a matching tag for you and your child. We also have Faith Youth for 6th–12th grade. If your child needs you during service, a number appears on the screen and a worker will come find you.') },
      { q: approved('How long is the service?'), a: approved('About 90 minutes, start to finish.') },
      { q: approved('Will I get singled out?'), a: approved('No. We’re glad you’re here, but you can come, sit, and just watch. No spotlight, no pressure.') },
    ],
  },
};
