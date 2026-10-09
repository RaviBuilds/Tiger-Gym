import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — equipment range, coaching,
 * atmosphere. It never repeats facility amenities, opening hours or program
 * names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, air-conditioning, changing rooms
 *     and hours;
 *   - Section 02 (lib/services.ts) owns individual programs.
 *
 * TIGER GYM — from docs/Gym-research.md (WHY_CHOOSE_US.*). Every reason is
 * PUBLICLY_REPORTED (equipment references and repeated review themes), not an
 * owner-supplied claim, so the copy is worded as what members and listings
 * describe. Owner verification is required before final-client production.
 *
 * Not used on purpose:
 *   - "Air-conditioned training environment" — already owned by Section 01.
 *   - "Cleanliness feedback" and "High equipment density" — INFERRED from
 *     review themes (the research also notes peak-hour congestion, so the
 *     floor must never be described as spacious).
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "A wide equipment range",
    description:
      "Free weights, plate-loaded and selectorized machines, cardio equipment and functional gear in one gym.",
  },
  {
    title: "Coaching with follow-up",
    description:
      "Members mention trainers who track their progress and update their workout routines.",
  },
  {
    title: "Friendly for beginners",
    description:
      "Members describe cooperative trainers and a welcoming floor for people just starting out.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the reasons above;
 * it is never a superlative. A clone edits this object and the array, never
 * the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Equipment, coaching and a floor that welcomes beginners.",
};
