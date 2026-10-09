import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * TIGER GYM — from docs/Gym-research.md (FAQ.*). Only entries whose answer
 * can be stated without inventing or overclaiming are used:
 *  - location, hours (with the documented closing-time / Sunday caveat),
 *    air conditioning, programs and pricing.
 * Deliberately NOT created:
 *  - Swimming pool, yoga classes, wheelchair access and parking — the
 *    research's answers to these are "do not claim" / "confirm with
 *    management" (conflicting or unverified sources), so there is no
 *    supportable answer to publish.
 *  - Cancellation / freeze / trial / joining-fee / guest / refund entries —
 *    the research supports none of them.
 *
 * Every answer is PUBLICLY_REPORTED, worded as "listed / reported", and needs
 * owner verification before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Tiger Gym located?",
    answer:
      "On the first floor at Karol Bagh Road, Nanal Nagar X Road, opposite Premier Hospital, Toli Chowki, Hyderabad 500008.",
  },
  {
    id: "02",
    question: "What are the gym's opening hours?",
    answer:
      "The Google Business Profile lists 6:00 AM to 11:00 PM, Monday to Saturday. Closing time is reported differently on some directories and Sunday hours are not confirmed, so check with the team before you visit.",
  },
  {
    id: "03",
    question: "Is the gym air-conditioned?",
    answer: "Members' reviews mention an air-conditioned training environment.",
  },
  {
    id: "04",
    question: "What training programs are listed?",
    answer:
      "Weight training, cardiovascular fitness, personal training, CrossFit-style functional training, kickboxing, youth classes and adult sports are listed. Class details and schedules are not published, so ask the team for current timings.",
  },
  {
    id: "05",
    question: "What are the current membership prices?",
    answer:
      "The prices shown are indicative and have not been confirmed by the gym as current rates. Contact the team on WhatsApp or by phone for confirmed pricing.",
  },
];
