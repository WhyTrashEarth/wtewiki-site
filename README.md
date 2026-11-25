# WTE Wiki

WhyTrashEarth’s public archive and project directory, built with Astro and served as static HTML on Cloudflare Pages.

## Development

```sh
npm ci
npm run check
npm run build
npm run dev
```

The build output is `dist/`. Cloudflare Pages project `wtewiki-site` uses `npm run build`, output directory `dist`, and automatically publishes the `main` branch. Publishing requires the owner’s approval. The v2.0 release was approved by the owner on November 25, 2026.

## Content maintenance

Keep the tone professional and direct. Avoid sentimental taglines about caring. Project listings use separated rounded cards without repeated leading icons. Cleanup links use the trash-can icon. The header and footer share the WTE.Wiki lettering and responsive brand alignment. Discord contact uses the username `whytrashearth`; the server is private.

- `src/data/page-dates.mjs` contains editorial dates. Update a page’s date when its content changes, not on a routine build. The footer, structured metadata, and XML sitemap use this one source. Unchanged Updates and sharing-asset content retain their historical dates.
- `src/data/projects.ts` preserves the public project inventory and descriptions. The projects page records two unavailable destinations as of November 25, 2026. Verify them before restoring links or changing availability notes.
- `src/data/cleanups.ts` contains twelve photo galleries and two annual video playlists. The wider video playlist is on the cleanup page. Album titles are not independently verified totals.
- `src/data/socials.ts` follows the official account list at https://whytrashearth.org/official-socials/. Discord is a username, not a guessed invitation URL.
- New update posts go in `src/content/blog/` and require a title and `pubDate`; `description` and `updatedDate` are optional. The intentionally empty collection retains its honest empty state.
- The privacy page reflects the actual live Cloudflare performance beacon and network-error reporting. Recheck hosting behavior when those practices change.
- Keep `/og/wtewiki/default-v1.jpg`, `/og/wtewiki-og.jpg`, and `/og/manifest.json` stable: other sites may use these shared image URLs.

## Release verification

Check all pages at phone, tablet, and desktop widths; verify keyboard navigation, both Earth home links, internal URLs, social and cleanup destinations, canonical URLs, sitemap dates, robots.txt, the 404 response, and production privacy behavior.

The previous production commit is `49691f3f1d9de51d257d67079420450f3e058d60`, deployed as `c29d8290-4ff8-4081-915a-c590f0bba49d`. Preserve it as the rollback reference.

The approved release includes an exact-host 301 redirect from `www.wte.wiki` to `https://wte.wiki`, preserving path and query. Manage this in Cloudflare Single Redirects so the old Porkbun origin is not used. Keep unrelated DNS, mail, and monitoring settings unchanged.
