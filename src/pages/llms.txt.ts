import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getDynamicEvents } from '../data/events';
import { programs } from '../data/programs';
import { organization } from '../data/organization';

// llms.txt (https://llmstxt.org): a plain-markdown map of the site for AI assistants.
// Built from the same data as the pages, so new events and posts show up on the next build.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const events = (await getDynamicEvents()).sort((a, b) => a.startDateIso.localeCompare(b.startDateIso));
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const { address } = organization;
  // Explicit offset: "BST" in the event data reads as British Summer Time to most readers, human or model
  const dhakaTime = (iso: string) =>
    new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Asia/Dhaka' }).format(new Date(iso)) +
    ' Dhaka time (UTC+6)';

  const body = `# The Penguins Club

> ${organization.description}

- Founded: ${organization.foundingDate}
- Location: ${address.streetAddress}, ${address.addressLocality} ${address.postalCode}, Bangladesh
- Cost: every meetup, workshop and resource is free; there are no registration fees
- Join: the Telegram group (${organization.sameAs[0]}) is where meetups are announced and questions answered
- Contact: ${organization.email} (support), uthsob@thepenguins.club (collaboration)

## Events

${events
  .map((e) => `- [${e.title}](${url(`/events/${e.slug}/`)}): ${dhakaTime(e.startDateIso)}, ${e.venueName}. ${e.cost}. ${e.description}`)
  .join('\n')}

## Programs

${programs
  .map((p) => `- [${p.title}](${url(p.hasPage ? `/programs/${p.slug}/` : `/programs/#${p.slug}`)}): ${p.summary} Schedule: ${p.cadence}.`)
  .join('\n')}

## Blog

${posts
  .map((p) => `- [${p.data.title}](${url(`/blog/${p.id}/`)}): ${p.data.summary} (${p.data.date.toISOString().slice(0, 10)})`)
  .join('\n')}

## Community

- [Telegram](${organization.sameAs[0]}): main community group, meetup announcements and Linux help
- [Discord](${organization.sameAs[2]}): voice rooms and screen sharing for workshops
- [GitHub](${organization.sameAs[1]}): the club's open source projects, including this website

## Optional

- [All events](${url('/events/')})
- [All programs](${url('/programs/')})
- [Calendar feed (.ics)](${url('/events.ics')})
- [Sitemap](${url('/sitemap-index.xml')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
