import type { CommunityEvent } from '../data/events';

/**
 * Escapes characters per RFC 5545 specifications
 */
export function escapeIcsText(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

/**
 * Formats a Date object or ISO string to UTC DTSTAMP format (YYYYMMDDTHHMMSSZ)
 */
export function formatIcsTimestamp(dateInput?: string | Date): string {
  const d = dateInput ? new Date(dateInput) : new Date();
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

/**
 * Generates an RFC 5545 compliant iCalendar string for a single community event
 */
export function generateSingleEventIcs(event: CommunityEvent): string {
  const dtstamp = formatIcsTimestamp();
  const summary = escapeIcsText(event.title);
  const location = escapeIcsText(`${event.venueName}, ${event.venueAddress}`);
  const descriptionText = `${event.description}\n\nSchedule:\n${event.agenda.map((a) => `${a.time}: ${a.title}`).join('\n')}\n\nMore details: https://thepenguins.club/events/${event.slug}`;
  const description = escapeIcsText(descriptionText);
  const eventUrl = `https://thepenguins.club/events/${event.slug}`;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Penguins Club//Meetups and Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeIcsText(event.title)}`,
    'X-WR-TIMEZONE:Asia/Dhaka',
    'BEGIN:VEVENT',
    `UID:${event.slug}-2026@thepenguins.club`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${event.calStart}`,
    `DTEND:${event.calEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `URL:${eventUrl}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'ORGANIZER;CN="The Penguins Club":mailto:uthsob@thepenguins.club',
    'CATEGORIES:COMMUNITY,LINUX,OPEN SOURCE,EDUCATION',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: The Penguins Club Meetup starts in 1 hour',
    'TRIGGER:-PT1H',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  return lines.join('\r\n') + '\r\n';
}

/**
 * Generates an RFC 5545 compliant multi-event subscription iCalendar feed
 */
export function generateAllEventsIcs(eventsList: CommunityEvent[]): string {
  const dtstamp = formatIcsTimestamp();

  const vevents = eventsList.map((event) => {
    const summary = escapeIcsText(event.title);
    const location = escapeIcsText(`${event.venueName}, ${event.venueAddress}`);
    const descriptionText = `${event.description}\n\nMore info: https://thepenguins.club/events/${event.slug}`;
    const description = escapeIcsText(descriptionText);
    const eventUrl = `https://thepenguins.club/events/${event.slug}`;

    return [
      'BEGIN:VEVENT',
      `UID:${event.slug}-2026@thepenguins.club`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART:${event.calStart}`,
      `DTEND:${event.calEnd}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `URL:${eventUrl}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'ORGANIZER;CN="The Penguins Club":mailto:uthsob@thepenguins.club',
      'CATEGORIES:COMMUNITY,LINUX,OPEN SOURCE,EDUCATION',
      'TRANSP:OPAQUE',
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: The Penguins Club Gathering today!',
      'TRIGGER:-PT2H',
      'END:VALARM',
      'END:VEVENT'
    ].join('\r\n');
  });

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Penguins Club//Community Events Subscription//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:The Penguins Club Community Calendar',
    'X-WR-CALDESC:Official calendar feed of free Linux meetups, workshops, and gatherings in Bangladesh',
    'X-WR-TIMEZONE:Asia/Dhaka',
    ...vevents,
    'END:VCALENDAR'
  ];

  return lines.join('\r\n') + '\r\n';
}

/**
 * Generates a 1-click Google Calendar web creation URL
 */
export function generateGoogleCalendarUrl(event: CommunityEvent): string {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(event.title);
  const dates = `${event.calStart}/${event.calEnd}`;
  const details = encodeURIComponent(
    `${event.description}\n\nFull details & RSVP: https://thepenguins.club/events/${event.slug}`
  );
  const location = encodeURIComponent(`${event.venueName}, ${event.venueAddress}`);

  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}
