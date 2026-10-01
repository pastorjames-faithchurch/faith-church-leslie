import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import EventsFeed from '../components/EventsFeed.jsx';
import RecentSermon from '../components/RecentSermon.jsx';
import Photo from '../components/Photo.jsx';
import CountBadge from '../components/CountBadge.jsx';
import { home } from '../content/home.js';
import { church, links } from '../content/site.js';

// Photos per Gather/Engage/Serve column (matches column order).
const columnPhotos = [
  { src: '/images/photos/worship-standing.jpg', alt: 'The congregation standing in worship on a Sunday morning' },
  { src: '/images/photos/womens-picnic.jpg', alt: 'Women from Faith Church sharing a picnic lunch on a blanket' },
  { src: '/images/photos/food-packing.jpg', alt: 'Volunteers in gloves packing meals in the gym', position: '50% 40%' },
];

// "Faces at 9:45" — a row of real Sunday faces.
const facePhotos = [
  { src: '/images/photos/teens-sunday.jpg', alt: 'Students grinning from their seats before service' },
  { src: '/images/photos/nursery-moms.jpg', alt: 'Two moms with their babies on the couch under the FAITH letters' },
  { src: '/images/photos/couple-worship.jpg', alt: 'A couple arm in arm during Sunday worship' },
];

export default function Home() {
  return (
    <PageShell
      label="Home"
      seo={{
        title: 'Faith Church — Leslie, MI. Sundays at 10am.',
        description:
          'A Jesus-centered family in Leslie, Michigan, learning to slow down to be with Jesus. Sundays at 10am, coffee at 9:45.',
        path: '/',
      }}
    >
      {/* 1 — HERO */}
      <Hero
        eyebrow={home.hero.eyebrow}
        headline={home.hero.tagline}
        photo={home.hero.photo}
        photoAlt=""
        splitHeadline
        subhead={<Copy item={home.hero.subhead} />}
      >
        <Button to="/visit">Plan Your Visit</Button>
        <Button variant="ghost" href="#sermons" className="!text-manila !border-manila hover:!bg-manila hover:!text-hunter">
          Watch a Message
        </Button>
      </Hero>

      {/* 2 — SUNDAY STRIP */}
      <div className="bg-hunter">
        <div className="container-fc py-6 flex items-center gap-4">
          <span className="h-px w-10 bg-faded shrink-0" aria-hidden="true" />
          <p className="font-body font-semibold uppercase tracking-[0.16em] text-manila text-sm md:text-base">
            <Copy item={home.sundayStrip} />
          </p>
        </div>
      </div>

      {/* 3 — GATHER · ENGAGE · SERVE */}
      <Section id="about" labelledBy="about-h">
        <Reveal>
          <p className="section-label">
            <Copy item={home.strategy.label} />
          </p>
          <h2 id="about-h" className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-2xl">
            <Copy item={home.strategy.heading} />
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {home.strategy.columns.map((col, i) => (
            <Reveal as="div" delay={i * 0.08} key={i}>
              <Photo {...columnPhotos[i]} aspect="4/3" className="mb-6" />
              <p className="eyebrow text-hunter">
                <Copy item={col.eyebrow} />
              </p>
              <h3 className="mt-3 font-display font-bold text-2xl leading-snug">
                <Copy item={col.heading} />
              </h3>
              <p className="mt-4 font-body text-burlap leading-relaxed">
                <Copy item={col.body} />
              </p>
              <Button variant="ghost" to={col.link.to} className="mt-6 !px-0 !border-0 !bg-transparent !text-hunter hover:!bg-transparent hover:!text-ink underline underline-offset-4 decoration-burlap">
                {col.link.label} →
              </Button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — WHAT TO EXPECT */}
      <Section id="visit" tone="kraft" labelledBy="visit-h">
        <Reveal>
          <p className="section-label">
            <Copy item={home.visit.label} />
          </p>
          <h2 id="visit-h" className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-2xl">
            <Copy item={home.visit.heading} />
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 grid-cols-3">
          {facePhotos.map((p, i) => (
            <Photo key={i} {...p} aspect="1/1" />
          ))}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {home.visit.items.map((item, i) => (
            <Reveal delay={i * 0.08} key={i}>
              <p className="font-display font-bold text-5xl text-hunter/40">
                <CountBadge>0{i + 1}</CountBadge>
              </p>
              <p className="mt-4 font-body text-lg text-ink leading-relaxed">
                <Copy item={item} />
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Button to="/visit">Plan Your Visit</Button>
        </Reveal>
      </Section>

      {/* 5 — THE PATHWAY */}
      <Section id="discipleship" labelledBy="path-h">
        <Reveal>
          <p className="section-label">
            <Copy item={home.pathway.label} />
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 id="path-h" className="font-display font-bold text-4xl md:text-5xl max-w-xl">
              <Copy item={home.pathway.heading} />
            </h2>
            <p className="eyebrow text-hunter">
              <Copy item={home.pathway.tagline} />
            </p>
          </div>
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {home.pathway.stops.map((stop, i) => (
            <Reveal as="li" delay={i * 0.06} key={i} className="border-t-2 border-hunter pt-4">
              <CountBadge className="font-display font-bold text-hunter text-lg">{i + 1}</CountBadge>
              <h3 className="mt-2 font-display font-bold text-lg leading-tight">
                <Copy item={stop.name} />
              </h3>
              <p className="mt-2 font-body text-sm text-burlap leading-relaxed">
                <Copy item={stop.body} />
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Button href={links[home.pathway.cta.href]}>{home.pathway.cta.label}</Button>
          <Button variant="ghost" to="/discipleship">
            See the whole pathway
          </Button>
        </Reveal>
      </Section>

      {/* 6 — SENT INTO THE MESS */}
      <Section id="serve" tone="hunter" labelledBy="mess-h">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-7">
            <p className="section-label !text-faded">
              <Copy item={home.serve.label} />
            </p>
            <h2 id="mess-h" className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight text-manila">
              <Copy item={home.serve.heading} />
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg text-manila/85 leading-relaxed">
              <Copy item={home.serve.body} />
            </p>
            <Button variant="ghost" to="/serve" className="mt-8 !text-manila !border-manila hover:!bg-manila hover:!text-hunter">
              How we serve
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <figure className="border border-faded/40 p-10 text-center">
              <blockquote className="font-display font-bold text-3xl md:text-4xl text-manila leading-tight">
                “<Copy item={home.serve.scripture.quote} />”
              </blockquote>
              <figcaption className="mt-5 eyebrow !text-faded">
                <Copy item={home.serve.scripture.ref} />
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* 7 — UPCOMING EVENTS */}
      <Section id="events" labelledBy="events-h">
        <Reveal>
          <p className="section-label">
            <Copy item={home.events.label} />
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 id="events-h" className="font-display font-bold text-4xl md:text-5xl">
              <Copy item={home.events.heading} />
            </h2>
            <Button variant="ghost" to="/events">
              All events
            </Button>
          </div>
        </Reveal>
        <div className="mt-12">
          <EventsFeed limit={3} />
        </div>
      </Section>

      {/* 8 — KINGDOM BUILDERS */}
      <Section id="give" tone="kraft" labelledBy="give-h">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-7">
            <p className="section-label">
              <Copy item={home.give.label} />
            </p>
            <h2 id="give-h" className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-xl">
              <Copy item={home.give.heading} />
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg text-burlap leading-relaxed">
              <Copy item={home.give.body} />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 flex flex-col gap-4 md:items-end">
            <Button href={links[home.give.cta.href]}>{home.give.cta.label}</Button>
            <Button variant="ghost" to="/give">
              About Kingdom Builders
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* 9 — SERMONS */}
      <Section id="sermons" labelledBy="sermons-h">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5">
            <p className="section-label">
              <Copy item={home.sermons.label} />
            </p>
            <h2 id="sermons-h" className="mt-4 font-display font-bold text-4xl md:text-5xl">
              <Copy item={home.sermons.heading} />
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/sermons">Message Archive</Button>
              <Button variant="ghost" href={links.youtube}>
                YouTube channel
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <RecentSermon
              fallbackId={home.sermons.recentVideoId}
              fallbackTitle={home.sermons.recentTitle.text}
            />
          </Reveal>
        </div>
      </Section>

      {/* 10 — CONTACT */}
      <Section id="contact" tone="kraft" labelledBy="contact-h">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="section-label">
              <Copy item={home.contact.label} />
            </p>
            <h2 id="contact-h" className="mt-4 font-display font-bold text-4xl md:text-5xl">
              <Copy item={home.contact.heading} />
            </h2>
            <address className="mt-8 not-italic font-body text-lg text-ink leading-relaxed space-y-2">
              <p>{church.address.line}</p>
              <p>{church.serviceTime} · {church.coffeeTime}</p>
              <p>
                <a href={`tel:${church.phoneHref}`} className="link-fc">{church.phone}</a>
              </p>
              <p>
                <a href={`mailto:${church.email}`} className="link-fc">{church.email}</a>
              </p>
            </address>
            <Button to="/contact" className="mt-8">
              Contact & directions
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="aspect-[4/3] w-full border border-burlap/25 overflow-hidden">
              <iframe
                title="Map to Faith Church, Leslie MI"
                src={links.mapsEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
