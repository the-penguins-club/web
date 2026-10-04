# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing/community site for The Penguins Club (thepenguins.club, see `public/CNAME`), built with Astro 7 (Node >=22.12). No framework components, no test runner, no linter. Deployed to GitHub Pages on push to `main` via `.github/workflows/astro.yml`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Build with `npm run build` (output in `dist/`). Type-check with `npx astro check` (not a declared dependency, so it will prompt to install).

## Architecture

- `src/pages/index.astro` composes the landing page from `src/components/*.astro` sections inside `src/layouts/Layout.astro`. All styling is in the single `src/styles/global.css`, plus component-scoped styles.
- **Events pipeline** (the only non-trivial logic):
  - `src/data/events.ts` defines the `CommunityEvent` type and a bundled `events` seed array. `getDynamicEvents()` lazily imports `src/utils/github-events.ts`.
  - `fetchEventsFromGitHub()` pulls issues from the `the-penguins-club/events` GitHub repo (those labelled `event` or titled `[Event]...`), parses the issue-form body into a `CommunityEvent` (`parseEventIssue`), and merges with the seed events by `slug` (GitHub wins). Any fetch failure or empty result falls back to the seed events. `GITHUB_TOKEN` or `TPC_GITHUB_TOKEN` is optionally read for rate limits.
  - The parser matches issue-form section headings by substring (e.g. "event title", "start date & time"), so renaming a heading in the issue template can silently break fields. Issue sections may be YAML lists or markdown tables (agenda, speakers) or Q:/A: pairs (FAQs).
  - Because this runs at build time (`getStaticPaths` in `src/pages/events/[slug].astro`, `events/index.astro`), new GitHub issues only appear after a rebuild/redeploy.
- **iCalendar**: `src/utils/ics.ts` generates RFC 5545 text and Google Calendar URLs. Served by `src/pages/events.ics.ts` (all-events subscription feed) and `src/pages/events/[slug].ics.ts` (per event). Event URLs in the ICS are hardcoded to `https://thepenguins.club`.
- **Blog**: Markdown posts in `src/content/blog/` (schema in `src/content.config.ts`), rendered by `src/pages/blog/`. Edited locally through Keystatic at `/keystatic` while `astro dev` runs (no auth, `keystatic.config.ts`, local storage; the integration is only loaded in dev, so it never ships). Commit and push to `main` to deploy.
- Meetup photos go in `public/images/meetups/` (see the README there); components fall back to bundled SVGs if a photo is missing.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
