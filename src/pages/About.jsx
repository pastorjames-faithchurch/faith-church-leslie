import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import { about } from '../content/about.js';
import { links } from '../content/site.js';

export default function About() {
  return (
    <PageShell
      label="About"
      seo={{
        title: 'About',
        description:
          'Faith Church has been making disciples in Leslie, Michigan since 1976. Our history, mission, values, and leadership — Pastors James & Crystal Courter.',
        path: '/about',
      }}
    >
      <Hero
        eyebrow={about.hero.eyebrow}
        headline={<Copy item={about.hero.headline} />}
        photo={about.hero.photo}
        short
      />

      {/* History */}
      <Section id="history" labelledBy="history-h">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="section-label">
              <Copy item={about.history.label} />
            </p>
            <h2 id="history-h" className="mt-4 font-display font-bold text-3xl md:text-4xl">
              <Copy item={about.history.heading} />
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-5">
            {about.history.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-lg text-burlap leading-relaxed">
                <Copy item={p} />
              </p>
            ))}
            <p className="font-display font-bold text-xl text-hunter pt-2">
              <Copy item={about.history.signoff} />
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <Photo
            src="/images/photos/exterior-building.jpg"
            alt="Faith Church building at 4020 N. Main St., Leslie, with the leaf-mark and cross"
            aspect="16/9"
          />
        </Reveal>
      </Section>

      {/* Mission / Vision / Strategy */}
      <Section id="mvs" tone="hunter" labelledBy="mvs-h">
        <p id="mvs-h" className="section-label !text-faded">
          <Copy item={about.mvs.label} />
        </p>
        <dl className="mt-10 grid gap-10 md:grid-cols-3">
          {about.mvs.items.map((it, i) => (
            <Reveal as="div" delay={i * 0.08} key={i} className="border-t border-faded/40 pt-6">
              <dt className="font-display font-bold text-2xl text-manila">
                <Copy item={it.term} />
              </dt>
              <dd className="mt-4 font-body text-manila/85 leading-relaxed">
                <Copy item={it.def} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Core Values */}
      <Section id="values" labelledBy="values-h">
        <Reveal>
          <p className="section-label">
            <Copy item={about.values.label} />
          </p>
          <h2 id="values-h" className="mt-4 font-display font-bold text-3xl md:text-4xl max-w-2xl">
            <Copy item={about.values.heading} />
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {about.values.list.map((v, i) => (
            <Reveal as="li" delay={i * 0.05} key={i} className="flex gap-4 border-b border-burlap/20 pb-6">
              <span className="font-display font-bold text-hunter shrink-0">{i + 1}</span>
              <span className="font-body text-burlap leading-relaxed">
                <Copy item={v} />
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <p className="font-body text-burlap leading-relaxed max-w-2xl">
            <Copy item={about.affiliation} />
          </p>
          <Button variant="ghost" href={links.agBeliefs} className="mt-6">
            Our Fundamental Truths
          </Button>
        </Reveal>
      </Section>

      {/* Leadership */}
      <Section id="leadership" tone="kraft" labelledBy="leader-h">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden border border-burlap/25">
              <img
                src={about.leadership.photo}
                alt="Pastors James and Crystal Courter"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-body text-xs text-burlap/80 italic">
              <Copy item={about.leadership.photoNote} />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="section-label">
              <Copy item={about.leadership.label} />
            </p>
            <h2 id="leader-h" className="mt-4 font-display font-bold text-3xl md:text-4xl">
              <Copy item={about.leadership.heading} />
            </h2>
            <div className="mt-6 space-y-5">
              {about.leadership.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-lg text-burlap leading-relaxed">
                  <Copy item={p} />
                </p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Photo
            src="/images/photos/james-worship.jpg"
            alt="Pastor James Courter on stage during a Sunday service"
            aspect="4/5"
            position="60% center"
          />
          <Photo
            src="/images/photos/worship-anniversary.jpg"
            alt="Crystal Courter leading worship at the keyboard"
            aspect="4/5"
            position="25% center"
          />
        </div>
        <Photo
          src="/images/photos/courter-family.jpg"
          alt="Pastor James and Crystal Courter with their family"
          aspect="16/9"
          className="mt-6"
        />
      </Section>

      {/* Differentiators */}
      <Section id="different" labelledBy="diff-h">
        <Reveal>
          <p className="section-label">
            <Copy item={about.differentiators.label} />
          </p>
          <h2 id="diff-h" className="mt-4 font-display font-bold text-3xl md:text-4xl max-w-2xl">
            <Copy item={about.differentiators.heading} />
          </h2>
        </Reveal>
        <ul className="mt-12 space-y-6">
          {about.differentiators.list.map((d, i) => (
            <Reveal as="li" delay={i * 0.05} key={i} className="flex gap-5 border-l-2 border-hunter pl-6">
              <span className="font-body text-lg text-burlap leading-relaxed">
                <Copy item={d} />
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Button to="/visit">Plan Your Visit</Button>
          <Button variant="ghost" to="/discipleship">
            The discipleship pathway
          </Button>
        </Reveal>
      </Section>
    </PageShell>
  );
}
