import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * TIGER GYM SEO configuration, from docs/Gym-research.md (SEO.title_candidate /
 * description_candidate — INFERRED from reported business data). The title
 * follows the research candidate; the description names only the documented
 * service terms (weight training, personal training, CrossFit-style training,
 * kickboxing, cardiovascular fitness) and makes no ranking, offer or
 * performance claim.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO official website for Tiger Gym.
 */
export const seo: SEOConfiguration = {
  title: "Tiger Gym Toli Chowki | Nanal Nagar, Hyderabad",
  description:
    "Tiger Gym in Nanal Nagar, Toli Chowki, Hyderabad, near Premier Hospital on Karol Bagh Road. Weight training, cardio, personal training, CrossFit-style training and kickboxing.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
