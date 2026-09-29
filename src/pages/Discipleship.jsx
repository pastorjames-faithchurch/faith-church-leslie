import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import PhotoNeeded from '../components/PhotoNeeded.jsx';
import Photo from '../components/Photo.jsx';
import CountBadge from '../components/CountBadge.jsx';
import { discipleship as d } from '../content/discipleship.js';
import { links } from '../content/site.js';

// Photo placeholders keyed by pathway stop number (only where a photo helps).
const stopPhotos = {
  2: 'Rooted class — group of 10-15',
  4: 'Emotionally Healthy Discipleship — small group',
};

export default function Discipleship() {
  return (
    <PageShell
      label="Discipleship"
      seo={{
        title: 'Discipleship Pathway',
        description:
          'A pathway, not a program. Five stages at Faith Church: Welcome to Faith, The Rooted Experience, Discover Partnership, Emotionally Healthy Discipleship, and Engage Groups.',
        path: '/discipleship',
      }}
    >
      <Hero
        eyebrow={<Copy item={d.hero.eyebrow} />}
        headline={<Copy item={d.hero.headline} />}
        photo={d.hero.photo}
        subhead={<Copy item={d.hero.tagline} />}
        short
      />

      <Section id="intro">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
              <Copy item={d.intro} />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <Photo
              src="/images/photos/baptism.jpg"
              alt="A baptism at Faith Church"
              aspect="4/5"
            />
          </Reveal>
        </div>
      </Section>

      {/* The five stops */}
      <Section id="stops" tone="kraft" className="!pt-0">
        <ol className="space-y-12">
          {d.stops.map((stop) => (
            <Reveal as="li" key={stop.n} className="grid gap-6 md:grid-cols-12 border-t-2 border-hunter pt-8">
              <div className="md:col-span-4">
                <CountBadge className="font-display font-bold text-hunter text-xl">
                  Stop {stop.n}
                </CountBadge>
                <h2 className="mt-2 font-display font-bold text-2xl md:text-3xl">
                  <Copy item={stop.name} />
                </h2>
                {stopPhotos[stop.n] && (
                  <PhotoNeeded
                    label={stopPhotos[stop.n]}
                    aspect="1/1"
                    className="mt-5 max-w-[260px]"
                  />
                )}
              </div>
              <div className="md:col-span-8 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="eyebrow text-hunter">What it is</p>
                  <p className="mt-2 font-body text-burlap leading-relaxed">
                    <Copy item={stop.what} />
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-hunter">Who it’s for</p>
                  <p className="mt-2 font-body text-burlap leading-relaxed">
                    <Copy item={stop.who} />
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-hunter">When it meets</p>
                  <p className="mt-2 font-body text-burlap leading-relaxed">
                    <Copy item={stop.when} />
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Classes + CTA */}
      <Section id="classes">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              <Copy item={d.classes.heading} />
            </h2>
            <p className="mt-5 font-body text-lg text-burlap leading-relaxed max-w-xl">
              <Copy item={d.classes.body} />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 flex flex-col gap-4 md:items-end">
            {d.ctas.map((c) => (
              <Button key={c.label} variant={c.variant} href={links[c.href]}>
                {c.label}
              </Button>
            ))}
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
