import type { APIRoute } from 'astro';
import { getDynamicEvents } from '../data/events';
import { generateAllEventsIcs } from '../utils/ics';

export const GET: APIRoute = async () => {
  const allEvents = await getDynamicEvents();
  const icsBody = generateAllEventsIcs(allEvents);

  return new Response(icsBody, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="the-penguins-club-events.ics"',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};
