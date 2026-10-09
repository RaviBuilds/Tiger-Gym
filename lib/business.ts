import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * TIGER GYM (Nanal Nagar / Toli Chowki, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name only. Everything else is
 * PUBLICLY_REPORTED (Google Business Profile snapshot + regional directories
 * as described in the research report) and requires owner verification before
 * final-client production.
 *
 * HOURS — DOCUMENTED SOURCE CONFLICTS (not silently resolved):
 *   - Closing time: the Google Business Profile snapshot reports 11:00 PM;
 *     Justdial reportedly lists 10:30 PM. The GBP value (the research's
 *     priority-1 source) is applied below as a PROVISIONAL baseline. Gym
 *     management must confirm 10:30 PM vs 11:00 PM.
 *   - Sunday: NOT_FOUND. The research says Sunday hours require business
 *     confirmation, so no Sunday row is written (a row with empty times would
 *     render as "Closed", which is an unsupported claim).
 *
 * WHATSAPP: the research has no confirmed WhatsApp number (NOT_FOUND) and
 * warns the primary mobile number is "assumed" but unverified. The site's
 * WhatsApp CTAs require a number, so the phone number is used as the
 * prospect-demo fallback. OWNER MUST CONFIRM it is WhatsApp-enabled.
 *
 * TAGLINE: NOT_FOUND in research. The required `tagline` slot (final CTA
 * headline, footer, kinetic strip) carries a plain factual restatement of the
 * reported programs and location — no superlative, no invented slogan.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * reported address text. No latitude, longitude or Place ID has been invented.
 *
 * LOCALITY: the research locality is "Nanal Nagar / Toli Chowki". The short
 * public-facing locality slot (hero chip, kinetic strip, structured data)
 * uses "Toli Chowki"; "Nanal Nagar" stays in the rendered address line.
 */
export const business: Business = {
  name: "Tiger Gym",
  tagline: "Strength, cardio and coaching in Nanal Nagar.",
  description:
    "An independent gym on the first floor at Karol Bagh Road, Nanal Nagar X Road, opposite Premier Hospital in Hyderabad. Weight training, cardio, personal training, CrossFit-style functional training and kickboxing, in an air-conditioned space.",
  phone: "+919700056665",
  whatsapp: {
    number: "+919700056665",
    message: "Hi, I'd like to know more about membership and training at Tiger Gym, Nanal Nagar.",
  },
  email: undefined,
  address: {
    addressLine: "1st Floor, Karol Bagh Road, Nanal Nagar X Road, opposite Premier Hospital",
    locality: "Toli Chowki",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500008",
    landmark: "Opposite Premier Hospital; Quba Masjid nearby",
  },
  hours: [
    { day: "Monday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Tuesday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Wednesday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "06:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "06:00 AM", close: "11:00 PM" },
    // Sunday intentionally omitted — NOT_FOUND in research (see note above).
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Tiger+Gym+1st+Floor+Karol+Bagh+Road+Nanal+Nagar+X+Road+Toli+Chowki+Hyderabad+500008",
  // Prompt A — PRIMARY brand colour "Tiger Gold" #FFC900 (matches the supplied
  // logo's gold). Entered here exactly once; app/globals.css derives the hover,
  // active, soft and border variants, and lib/color.ts derives the text colour
  // on a gold fill (dark, because white fails WCAG AA on this yellow).
  accentColor: "#FFC900",
  // Prompt A — SECONDARY brand colour #FF3B30 (manual input). Supporting
  // hierarchy: eyebrows, metadata, technical marks, focus. Light surfaces use
  // the derived ink variant in app/globals.css — never this value raw.
  secondaryColor: "#FF3B30",
};
