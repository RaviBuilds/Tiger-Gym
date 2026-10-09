/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * TIGER GYM Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url and INSTAGRAM.handle are
 * NOT_FOUND: no official branch-specific Instagram account was verified, so
 * `profileUrl` and `handle` are deliberately left unset. The section heading
 * falls back to the gym name, and the "View more on Instagram" CTA and the
 * footer Instagram link are not rendered. Each embedded Reel still carries
 * Instagram's own creator name and "View profile" link.
 * OWNER QUESTION: "Please confirm the official Instagram profile URL and
 * handle."
 *
 * The 3 Reel URLs below were supplied directly by the operator (they were
 * missing from the research package) and are wired exactly as supplied.
 * Nothing is invented.
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/reel/DRo_KLzkvHw/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/DR4bygPks-T/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/reel/DRXEBkUkkqo/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
