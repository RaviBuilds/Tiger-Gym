import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * TIGER GYM pricing/membership data — Section 06.
 *
 * MIXED PRICING (prospect-demo rules, Cases A/B/D/E/F):
 *
 * docs/Gym-research.md PRICING: every figure is a third-party aggregator
 * baseline (PUBLICLY_REPORTED), not an official gym price page, and the
 * research warns they "must not be published as current/official until the
 * owner confirms them". ALL PRICES BELOW REQUIRE OWNER VERIFICATION.
 *
 *  - EXACT researched prices APPLIED:
 *      monthly      INR 2,000   (`monthly`)
 *      quarterly    INR 6,500   (`quarterly`)
 *      half-year    INR 8,500   (`half-year`)
 *      personal training, 3 months  INR 24,000  (`special`; the source notes
 *      it may vary by trainer seniority)
 *  - Every other plan KEEPS THE EXISTING TEMPLATE DEMO PRICE, because the
 *    research gives only ranges (daily INR 150-250, annual INR 12,000-14,000;
 *    a range is not an exact price) or nothing (weekly: NOT_FOUND). None of
 *    those demo amounts (daily 300, weekly 1,000, annual 18,000) is a
 *    verified Tiger Gym price.
 *  - The research also lists a 48-session Body Transformation package at
 *    INR 40,000. The template has one `special` slot (used for personal
 *    training), so that package is described in lib/services.ts without a
 *    price rather than adding a second pricing object.
 *
 * No "Consult management" state was introduced; all plans stay
 * `priceStatus: "exact"`. The festival offer engine
 * (lib/festival-offers.ts) references the `half-year` and `annual` plan IDs
 * below — do not rename those IDs. No second pricing or offer calculation
 * exists; the engine derives every discounted amount from these prices.
 */
export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 300,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Per month",
      price: 2000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 6500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 8500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 18000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "3 Months",
    term: "Billed once",
    price: 24000,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
