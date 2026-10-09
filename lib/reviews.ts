import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * TIGER GYM — rating/reviewCount are PUBLICLY_REPORTED (Google Business
 * Profile snapshot described in docs/Gym-research.md REVIEWS: 4.7 / 237
 * reviews, read October 2026, exact day not supplied). Re-read the live
 * Google values before launch. Justdial lists a different rating (4.9 / 279);
 * it is a separate platform and is never shown as the Google figure.
 *
 * The three reviews below are REVIEWS.selected_reviews, PUBLICLY_REPORTED,
 * reproduced exactly as supplied by the research (the ellipses are part of
 * the research text — these are excerpts). The research notes the original
 * platform URLs were not supplied: ATTRIBUTION / PERMISSION CHECK REQUIRED
 * before final-client production. None carries a star rating because none
 * was supplied.
 *
 * `tagline` is a plain restatement of the research's positive sentiment
 * themes (trainer attentiveness, progress tracking, cleanliness, air
 * conditioning) — not a quotation. The reported floor-congestion theme is
 * INFERRED research analysis and is intentionally not reproduced here.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial URL
 * for the Google review CTA. googleBusinessProfileUrl uses a Google Maps
 * search-by-name-and-address query (the same safe fallback pattern as
 * lib/business.ts mapUrl). No Place ID or profile slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.7,
  reviewCount: 237,
  tagline:
    "Members point to supportive trainers, progress tracking and a clean, air-conditioned gym.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Tiger+Gym+1st+Floor+Karol+Bagh+Road+Nanal+Nagar+X+Road+Toli+Chowki+Hyderabad+500008",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Harmain Fatima",
      text: "Tiger Gym is a really great place to work out. The environment is clean, motivating, and perfect for staying consistent. The trainer is very kind, supportive, and always ready to guide you properly, no matter your fitness level.I’ve had a very positive experience here and would definitely recommend Tiger Gym to anyone looking to improve their fitness in a friendly and encouraging atmosphere.",
    },
    {
      name: "almaas Hafeez",
      text: "Great experience at Tiger Gym. The gym is clean, well-maintained, and has all the necessary equipment. Trainer Shabana ma’am is very supportive, knowledgeable, and keeps everyone motivated during workouts. Overall, it’s a great place to stay fit and consistent",
    },
    {
      name: "zaid saqlain",
      text: "The best Gym in Mehdipatnam/Tolichowki area Equipped with international imported machines. Environment is very good, always clean and hygiene. Professional Well Trained Staff and good coaching.",
    },
    {
      name: "B THIRUPATI REDDY REDDY",
      text: "Very Good Gym with polite and professional trainers, High quality equipment and we'll maintenance. Very good experience overall",
    },
  ],
};
