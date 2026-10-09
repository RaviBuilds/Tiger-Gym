import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * TIGER GYM — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything rendered is PUBLICLY_REPORTED (Google
 * Business Profile / directories / reviews); owner verification is required
 * before final-client production. The research supplies NO equipment counts,
 * so no metric is attached to any zone or attribute.
 *
 * Not rendered (`verified: false`, kept as the record of what was checked):
 *  - Street-level parking — availability and restrictions need confirmation.
 *  - Cleanliness — INFERRED from review themes, not a facility fact.
 *  - Wheelchair access — NOT_FOUND; the directory tag is flagged as suspect
 *    because the gym is on the first floor.
 *  - Swimming pool — CONFLICTING_SOURCES; the research says exclude it.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the name."],
  accentLastLine: true,
  image: {
    src: "/assets/about/tiger-gym-nanal-nagar-about-gym-interior.jpg",
    alt: "Tiger Gym training floor in Nanal Nagar, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength and free weights",
      detail:
        "Free weights, heavy machinery, plate-loaded and selectorized equipment, including leg press, Hammer Strength machines, inclined bench press and cable crossover stations.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Treadmills, cycling apparatus, endurance machines and a stair stepper.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "functional",
      label: "Functional training",
      detail: "CrossFit-style training with functional equipment such as plyo boxes.",
      icon: "equipment",
      verified: true,
    },
    {
      id: "kickboxing",
      label: "Kickboxing",
      detail: "Kickboxing is listed among the gym's programs.",
      icon: "floor",
      verified: true,
    },
  ],
  attributes: [
    { id: "air-conditioning", label: "Air-conditioned training environment", verified: true },
    { id: "changing-rooms", label: "Changing rooms", verified: true },
    { id: "drinking-water", label: "Drinking water on the gym floor", verified: true },
    // Availability and restrictions are unconfirmed — recorded, never rendered.
    { id: "parking", label: "Street-level parking on Karol Bagh Road", verified: false },
    // INFERRED from repeated review themes, not a documented facility fact.
    { id: "clean", label: "Clean, well-maintained gym", verified: false },
    // Directory tags the research flags as unsupported — never rendered.
    { id: "accessibility", label: "Wheelchair access", verified: false },
    { id: "swimming-pool", label: "Swimming pool", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
