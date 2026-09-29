import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import PhotoNeeded from '../components/PhotoNeeded.jsx';
import Photo from '../components/Photo.jsx';
import { serve } from '../content/serve.js';
import { links } from '../content/site.js';

export default function Serve() {
  return (
    <PageShell
      label="Serve"
      seo={{
        title: 'Serve',
        description:
          'Sent into the mess. Kingdom Builders supports Jackson Interfaith Shelter, Youth Haven Ranch, Leslie Outreach, and global missions. We go where it hurts.',
        path: '/serve',
      }}
    >
      <Hero
        eyebrow={<Copy item={serve.hero.eyebrow} />}
        headline={<Copy item={serve.hero.headline} />}
        subhead={<Copy item={serve.hero.subhead} />}
        photo={serve.hero.photo}
        short
      />

      {/* Kingdom Builders */}
      <Section id="kingdom-builders" labelledBy="kb-h">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="section-label"><Copy item={serve.kingdomBuilders.label} /></p>
            <h2 id="kb-h" className="mt-4 font-display font-bold text-3xl md:text-4xl max-w-xl">
              <Copy item={serve.kingdomBuilders.heading} />
            </h2>
            <p className="mt-6 font-body text-lg text-burlap leading-relaxed max-w-xl">
              <Copy item={serve.kingdomBuilders.body} />
            </p>
            <Button href={links[serve.kingdomBuilders.cta.href]} className="mt-8">
              {serve.kingdomBuilders.cta.label}
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <ul className="divide-y divide-burlap/20 border-y border-burlap/20">
              {serve.kingdomBuilders.partners.map((p, i) => (
                <li key={i} className="py-4 font-display font-bold text-lg text-hunter">
                  <Copy item={p} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Ways to serve */}
      <Section id="ways" tone="kraft" labelledBy="ways-h">
        <Reveal>
          <p className="section-label"><Copy item={serve.ways.label} /></p>
          <h2 id="ways-h" className="mt-4 font-display font-bold text-3xl md:text-4xl">
            <Copy item={serve.ways.heading} />
          </h2>
        </Reveal>
        <Reveal className="mt-12">
          <Photo
            src="/images/photos/fall-festival.jpg"
            alt="Families at the Faith Church Fall Festival with bounce houses on the lawn"
            aspect="16/9"
          />
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Photo
            src="/images/photos/fellowship-dinner.jpg"
            alt="Faith Church family sharing a meal around tables in the fellowship hall"
            aspect="4/3"
          />
          <PhotoNeeded label="Haiti — Arise team on the ground" aspect="4/3" />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {serve.ways.items.map((w, i) => (
            <Reveal as="li" delay={i * 0.05} key={i} className="border-l-2 border-hunter pl-6 py-1 font-body text-lg text-burlap leading-relaxed">
              <Copy item={w} />
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 max-w-2xl bg-manila border border-burlap/25 p-6">
          <p className="font-body text-sm text-burlap italic leading-relaxed">
            <Copy item={serve.ways.note} />
          </p>
        </Reveal>
      </Section>
    </PageShell>
  );
}
