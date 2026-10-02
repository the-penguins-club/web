import type { APIRoute } from 'astro';
import { events, type CommunityEvent } from '../../data/events';
import { generateSingleEventIcs } from '../../utils/ics';

export function getStaticPaths() {
  return events.map((event) => ({
    params: { slug: event.slug },
    props: { event }
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const event = props.event as CommunityEvent;
  const icsBody = generateSingleEventIcs(event);

  return new Response(icsBody, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${event.slug}.ics"`,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};
