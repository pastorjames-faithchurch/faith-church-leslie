import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import SermonsFeed from '../components/SermonsFeed.jsx';
import { sermons } from '../content/sermons.js';
import { links } from '../content/site.js';

export default function Sermons() {
  return (
    <PageShell
      label="Sermons"
      seo={{
        title: 'Message Archive',
        description:
          'Watch messages from Faith Church, Leslie MI. Current series: Roots. Teaching from Pastor James Courter, plus the full archive on YouTube.',
        path: '/sermons',
      }}
    >
      <Hero
        eyebrow={<Copy item={sermons.hero.eyebrow} />}
        headline={<Copy item={sermons.hero.headline} />}
        subhead={<Copy item={sermons.hero.subhead} />}
        photo={sermons.hero.photo}
        short
      />

      <Section id="recent" labelledBy="recent-h">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label"><Copy item={sermons.currentSeries} /></p>
              <h2 id="recent-h" className="mt-3 font-display font-bold text-3xl md:text-4xl">
                Recent messages
              </h2>
            </div>
            <Button variant="ghost" href={links.youtube}>
              YouTube channel
            </Button>
          </div>
        </Reveal>

        <div className="mt-12">
          <SermonsFeed fallback={sermons.recent} limit={6} />
        </div>

        <div className="mt-14 border-t border-burlap/25 pt-8 grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <p className="font-body text-lg text-burlap max-w-2xl leading-relaxed">
              <Copy item={sermons.archiveNote} />
            </p>
            <Button href={links.youtube} className="mt-6">
              Watch the full archive
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <Photo
              src="/images/photos/james-praying.jpg"
              alt="Pastor James and the church laying hands on someone in prayer"
              aspect="4/5"
            />
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
