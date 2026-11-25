export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "WTE Wiki",
  description:
    "The public archive and project directory for WhyTrashEarth.",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://wte.wiki",

  socials: {
    twitter: "https://x.com/WhyTrashEarth"
  }
} as const;