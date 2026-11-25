// Editorial dates: change only when the page's content changes, never on every build.
export const pageDates = {
  '/': '2026-11-25',
  '/start-here': '2026-11-25',
  '/projects': '2026-11-25',
  '/cleanups': '2026-11-25',
  '/socials': '2026-11-25',
  '/about': '2026-11-25',
  '/contact': '2026-11-25',
  '/privacy': '2026-11-25',
  '/sitemap': '2026-11-25',
  '/blog': '2026-09-09',
  '/open-graph': '2026-10-02',
};
export const normalizePath = (path) => path.replace(/\/$/, '') || '/';
export const dateLabel = (date) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'
}).format(new Date(`${date}T00:00:00Z`));
