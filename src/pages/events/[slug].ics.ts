import type { APIRoute } from 'astro';
import { getDynamicEvents, type CommunityEvent } from '../../data/events';
import { generateSingleEventIcs } from '../../utils/ics';

export async function getStaticPaths() {
  const allEvents = await getDynamicEvents();
  return allEvents.map((event) => ({
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
