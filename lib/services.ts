import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * TIGER GYM — programs from docs/Gym-research.md (PROGRAMS.*). Every entry is
 * PUBLICLY_REPORTED (Google Business Profile categories / regional
 * directories / reviews); owner verification of current availability is
 * required before final-client production. Descriptions stay within what the
 * research states: no schedule, trainer, outcome, price or health claim is
 * added. Where the research says class details are unknown, the description
 * says so and points the visitor to the team.
 *
 * NOT RENDERED (`verified: false`): Yoga. Secondary directories tag it, but
 * the research found no photographic or testimonial evidence and says it must
 * not be published without owner confirmation. Flip to true only after the
 * owner confirms an active program (and supply an image).
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs. Here
 * `strength-training` is carried by "Weight Training" and `conditioning` by
 * "CrossFit-style / Functional Training".
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); several programs temporarily share
 * the same placeholder artwork. The operator replaces the files in place
 * with real Tiger Gym photography — no code change.
 */
const ASSET = "/assets/programs/tiger-gym-nanal-nagar-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Weight Training",
    description:
      "Weight training and strengthening on free weights and machines, including leg press, Hammer Strength machinery and cable crossover stations.",
    icon: "strength",
    image: `${ASSET}-weight-training.jpg`,
    verified: true,
    ctaLabel: "Ask about weight training",
    ctaHref: undefined,
  },
  {
    id: "cardio",
    name: "Cardiovascular Fitness",
    description:
      "Cardio training on treadmills, cycling apparatus, endurance machines and a stair stepper.",
    icon: "cardio",
    image: `${ASSET}-cardio.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-to-one coaching, with trainers who track your progress and update your workout routine.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "CrossFit-style / Functional Training",
    description:
      "CrossFit-style functional training supported by equipment such as plyo boxes.",
    icon: "equipment",
    image: `${ASSET}-crossfit-functional.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Kickboxing is listed among the gym's programs. Ask the team about class timings.",
    icon: "equipment",
    image: `${ASSET}-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "youth-classes",
    name: "Youth Classes",
    description: "Youth classes are listed. Ask the team about age groups and schedule.",
    icon: "floor",
    image: `${ASSET}-youth-classes.jpg`,
    verified: true,
    ctaLabel: "Ask about youth classes",
    ctaHref: undefined,
  },
  {
    id: "adult-sports",
    name: "Adult Sports",
    description: "Adult sports programming is listed. Ask the team about activities and schedule.",
    icon: "floor",
    image: `${ASSET}-adult-sports.jpg`,
    verified: true,
    ctaLabel: "Ask about adult sports",
    ctaHref: undefined,
  },
  {
    id: "weight-management",
    name: "Weight Management",
    description: "Weight management support alongside regular training. Ask the team how it works.",
    icon: "coaching",
    image: `${ASSET}-weight-management.jpg`,
    verified: true,
    ctaLabel: "Ask about weight management",
    ctaHref: undefined,
  },
  {
    id: "body-transformation",
    name: "Body Transformation Package",
    description: "A 48-session guided training package. Ask the team about inclusions.",
    icon: "coaching",
    image: `${ASSET}-body-transformation.jpg`,
    verified: true,
    ctaLabel: "Ask about the 48-session package",
    ctaHref: undefined,
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Yoga classes.",
    icon: "floor",
    verified: false,
  },
];
