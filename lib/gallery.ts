import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * TIGER GYM — operator-supplied photographs
 * (public/assets/gallery/tiger-gym-nanal-nagar-gallery-<subject>.jpg).
 * ALT TEXT describes only what is visible in each frame; it makes no claim
 * beyond that. Several source files are small (some ~680 px wide) and will
 * look soft on large screens — swap in higher-resolution originals under the
 * same filenames when available; no code change is needed.
 *
 * Supplied but deliberately NOT linked (still in the folder, unreferenced):
 *  - 135090947_…_n.jpg   150 px logo thumbnail (the logo lives in
 *                        public/assets/brand/logo.png)
 *  - 639700457_…_n.jpg   promotional poster with outcome wording and a typo
 *  - tiger-gym-nanal-nagar-about-gym-interior.jpg
 *                        members with medals/trophies — would imply awards
 *                        the research does not document
 *  - g.jpg               dumbbells beside a third-party-branded bag, with a
 *                        photographer's watermark
 *  - unnamed.jpg         duplicate of the logo banner
 * Add any of them as an entry below if the owner approves.
 *
 * ORDER is editorial: wide floor view, strength machines, cardio, free
 * weights, then the gym's own branding and details.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/tiger-gym-nanal-nagar-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor.jpg`,
    alt: "Tiger Gym training floor with treadmills, benches and yellow strength machines under blue ceiling lights",
  },
  {
    src: `${GALLERY}-strength-machines.jpg`,
    alt: "Yellow selectorized strength machines along a mirrored wall at Tiger Gym",
  },
  {
    src: `${GALLERY}-treadmills.jpg`,
    alt: "Row of treadmills facing the strength machines at Tiger Gym",
  },
  {
    src: `${GALLERY}-free-weights-area.jpg`,
    alt: "Dumbbell rack, adjustable benches and Tiger Gym-branded machines on the training floor",
  },
  {
    src: `${GALLERY}-bench-and-cardio.jpg`,
    alt: "Bench press station and cardio machines beside the windows at Tiger Gym",
  },
  {
    src: `${GALLERY}-logo-wall.jpg`,
    alt: "Strength machines in front of the Tiger Gym logo wall",
  },
  {
    src: `${GALLERY}-reception.jpg`,
    alt: "Tiger Gym reception desk with the logo wall and machines behind it",
  },
  {
    src: `${GALLERY}-dumbbell-rack.jpg`,
    alt: "Rack of rubber-coated dumbbells at Tiger Gym",
  },
  {
    src: `${GALLERY}-machine-detail.jpg`,
    alt: "Close-up of a selectorized strength machine at Tiger Gym",
  },
  {
    src: `${GALLERY}-personal-trainer-sign.jpg`,
    alt: "Personal trainer available sign on a pillar on the Tiger Gym floor",
  },
  {
    src: `${GALLERY}-training-floor-group.jpg`,
    alt: "Group of men posing on the Tiger Gym training floor",
  },
  {
    src: `${GALLERY}-logo-banner.jpg`,
    alt: "Tiger Gym logo on a printed banner beside a bodybuilder illustration",
  },
];
