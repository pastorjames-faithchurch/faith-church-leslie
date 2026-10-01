import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import EventsFeed from '../components/EventsFeed.jsx';
import { events } from '../content/events.js';

export default function Events() {
  return (
    <PageShell
      label="Events"
      seo={{
        title: 'Events',
        description:
          'Upcoming events at Faith Church, Leslie MI — Sunday gatherings, prayer, classes, and outreach. Something’s always going on.',
        path: '/events',
      }}
    >
      <Hero
        eyebrow={<Copy item={events.hero.eyebrow} />}
        headline={<Copy item={events.hero.headline} />}
        subhead={<Copy item={events.hero.subhead} />}
        photo={events.hero.photo}
        short
      />

      {/* Full live feed */}
      <Section id="all" labelledBy="all-h">
        <Reveal>
          <h2 id="all-h" className="font-display font-bold text-3xl md:text-4xl">
            What’s coming up
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventsFeed limit={null} />
        </div>
      </Section>

      {/* Around here lately */}
      <Section id="lately" tone="kraft" labelledBy="lately-h">
        <Reveal>
          <h2 id="lately-h" className="font-display font-bold text-3xl md:text-4xl">
            Around here lately
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Photo
            src="/images/photos/hay-ride.jpg"
            alt="A wagon full of bundled-up friends on a winter hay ride through town"
            aspect="4/3"
            className="sm:col-span-2"
          />
          <Photo
            src="/images/photos/bounce-house.jpg"
            alt="Kids and volunteers by the bounce house at an outdoor church event"
            aspect="1/1"
            className="sm:self-end"
          />
        </div>
      </Section>

      {/* Weekly rhythm */}
      <Section id="rhythm" labelledBy="rhythm-h">
        <Reveal>
          <p className="section-label"><Copy item={events.rhythm.label} /></p>
          <h2 id="rhythm-h" className="mt-4 font-display font-bold text-3xl md:text-4xl">
            Our weekly rhythm
          </h2>
        </Reveal>
        <ul className="mt-10 divide-y divide-burlap/20 border-y border-burlap/20 max-w-3xl">
          {events.rhythm.items.map((it, i) => (
            <Reveal as="li" delay={i * 0.05} key={i} className="py-4 font-body text-lg text-ink">
              <Copy item={it} />
            </Reveal>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
