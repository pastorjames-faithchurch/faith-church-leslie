import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import PhotoNeeded from '../components/PhotoNeeded.jsx';
import Photo from '../components/Photo.jsx';
import CountBadge from '../components/CountBadge.jsx';
import { visit } from '../content/visit.js';
import { church, links } from '../content/site.js';

export default function Visit() {
  return (
    <PageShell
      label="Visit"
      seo={{
        title: 'Plan Your Visit',
        description:
          'Planning your first Sunday at Faith Church in Leslie, MI? Coffee at 9:45, worship and teaching at 10, about 90 minutes. No hoops — just walk in.',
        path: '/visit',
      }}
    >
      <Hero
        eyebrow={visit.hero.eyebrow}
        headline={<Copy item={visit.hero.headline} />}
        subhead={<Copy item={visit.hero.subhead} />}
        photo={visit.hero.photo}
        short
      >
        <Button href={links.mapsLink}>Get directions</Button>
      </Hero>

      {/* Quick facts strip */}
      <div className="bg-hunter">
        <div className="container-fc py-8 grid gap-6 sm:grid-cols-3 text-manila">
          <div>
            <p className="eyebrow !text-faded">When</p>
            <p className="mt-1 font-display font-bold text-xl"><Copy item={visit.facts.time} /></p>
          </div>
          <div>
            <p className="eyebrow !text-faded">Before</p>
            <p className="mt-1 font-display font-bold text-xl"><Copy item={visit.facts.coffee} /></p>
          </div>
          <div>
            <p className="eyebrow !text-faded">Where</p>
            <p className="mt-1 font-display font-bold text-xl"><Copy item={visit.facts.address} /></p>
          </div>
        </div>
      </div>

      {/* Photo placeholders — the space, and the people in it */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Photo
            src="/images/photos/greeters-welcome.jpg"
            alt="Faith Church greeters holding 'You belong here' and 'Welcome' signs at the entrance"
            aspect="4/3"
          />
          <Photo
            src="/images/photos/kids-classroom.jpg"
            alt="Children playing in the Faith Kids room"
            aspect="4/3"
          />
          <Photo
            src="/images/photos/coffee-mugs.jpg"
            alt="Handmade Faith Church coffee mugs with the leaf-mark logo"
            aspect="4/3"
          />
        </div>
        <Photo
          src="/images/photos/congregation-hands.jpg"
          alt="The Faith Church sanctuary during Sunday worship, seen from the back"
          aspect="16/9"
          className="mt-6"
        />
      </Section>

      {/* Flow */}
      <Section id="flow" labelledBy="flow-h">
        <Reveal>
          <p className="section-label"><Copy item={visit.flow.label} /></p>
          <h2 id="flow-h" className="mt-4 font-display font-bold text-3xl md:text-4xl max-w-2xl">
            <Copy item={visit.flow.heading} />
          </h2>
        </Reveal>
        <ol className="mt-14 space-y-10">
          {visit.flow.steps.map((s, i) => (
            <Reveal as="li" delay={i * 0.06} key={i} className="grid gap-4 md:grid-cols-12 items-start border-t border-burlap/25 pt-6">
              <div className="md:col-span-1 font-display font-bold text-4xl text-hunter/40">
                <CountBadge>0{i + 1}</CountBadge>
              </div>
              <div className="md:col-span-11">
                <h3 className="font-display font-bold text-2xl"><Copy item={s.title} /></h3>
                <p className="mt-2 font-body text-lg text-burlap leading-relaxed max-w-2xl">
                  <Copy item={s.body} />
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section id="faqs" tone="kraft" labelledBy="faq-h">
        <Reveal>
          <p className="section-label"><Copy item={visit.faqs.label} /></p>
          <h2 id="faq-h" className="mt-4 font-display font-bold text-3xl md:text-4xl">The practical stuff</h2>
        </Reveal>
        <dl className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {visit.faqs.items.map((f, i) => (
            <Reveal as="div" delay={i * 0.05} key={i}>
              <dt className="font-display font-bold text-xl text-ink"><Copy item={f.q} /></dt>
              <dd className="mt-2 font-body text-burlap leading-relaxed"><Copy item={f.a} /></dd>
            </Reveal>
          ))}
        </dl>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Button href={links.mapsLink}>Get directions</Button>
          <Button variant="ghost" to="/contact">Ask us anything</Button>
        </Reveal>
        <p className="mt-6 font-body text-burlap">
          Still have a question? Call <a href={`tel:${church.phoneHref}`} className="link-fc">{church.phone}</a> or email{' '}
          <a href={`mailto:${church.email}`} className="link-fc">{church.email}</a>.
        </p>
      </Section>
    </PageShell>
  );
}
