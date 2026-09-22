import { motion } from 'framer-motion';

/**
 * A real, optimized photo in a fixed-aspect frame — the counterpart to
 * <PhotoNeeded>. Same `aspect` / `className` API, but renders an actual image
 * (object-cover) with the same on-scroll reveal and the site's subtle photo
 * border. `position` sets object-position so an off-center subject can be kept
 * in frame when the aspect crop is tight (e.g. "left" / "50% 30%").
 *
 * Source images live in /public/images/photos (already web-optimized ~2000px).
 */
export default function Photo({
  src,
  alt = '',
  aspect = '16/9',
  position = 'center',
  className = '',
}) {
  return (
    <motion.div
      className={`overflow-hidden rounded-sm border border-burlap/20 bg-kraft ${className}`}
      style={{ aspectRatio: aspect }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
    </motion.div>
  );
}
