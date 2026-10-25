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
 * Folds a content line to 75 octets per RFC 5545 section 3.1 (continuations start with a space)
 */
export function foldIcsLine(line: string): string {
  const out: string[] = [];
  let cur = '';
  let bytes = 0;
  for (const ch of line) {
    const n = new TextEncoder().encode(ch).length;
    // continuation lines carry a leading space, so they hold 74 octets
    if (bytes + n > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = '';
      bytes = 0;
    }
    cur += ch;
    bytes += n;
  }
  out.push(cur);
  return out.join('\r\n ');
}

const joinIcs = (lines: string[]) => lines.map(foldIcsLine).join('\r\n') + '\r\n';

function vevent(event: CommunityEvent, descriptionText: string, alarm: { text: string; trigger: string }): string[] {
  return [
    'BEGIN:VEVENT',
    // ponytail: UID keeps the original "-2026" suffix so existing subscribers don't get duplicates
    `UID:${event.slug}-2026@thepenguins.club`,
    `DTSTAMP:${formatIcsTimestamp()}`,
    `DTSTART:${event.calStart}`,
    `DTEND:${event.calEnd}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(descriptionText)}`,
    `LOCATION:${escapeIcsText(`${event.venueName}, ${event.venueAddress}`)}`,
    `URL:https://thepenguins.club/events/${event.slug}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'ORGANIZER;CN="The Penguins Club":mailto:uthsob@thepenguins.club',
    'CATEGORIES:COMMUNITY,LINUX,OPEN SOURCE,EDUCATION',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${alarm.text}`,
    `TRIGGER:${alarm.trigger}`,
    'END:VALARM',
    'END:VEVENT'
  ];
}

/**
 * Generates an RFC 5545 compliant iCalendar string for a single community event
 */
export function generateSingleEventIcs(event: CommunityEvent): string {
  const schedule = event.agenda.length
    ? `\n\nSchedule:\n${event.agenda.map((a) => `${a.time}: ${a.title}`).join('\n')}`
    : '';
  const description = `${event.description}${schedule}\n\nMore details: https://thepenguins.club/events/${event.slug}`;

  return joinIcs([
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Penguins Club//Meetups and Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeIcsText(event.title)}`,
    'X-WR-TIMEZONE:Asia/Dhaka',
    ...vevent(event, description, { text: 'Reminder: The Penguins Club Meetup starts in 1 hour', trigger: '-PT1H' }),
    'END:VCALENDAR'
  ]);
}

/**
 * Generates an RFC 5545 compliant multi-event subscription iCalendar feed
 */
export function generateAllEventsIcs(eventsList: CommunityEvent[]): string {
  return joinIcs([
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Penguins Club//Community Events Subscription//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:The Penguins Club Community Calendar',
    'X-WR-CALDESC:Official calendar feed of free Linux meetups, workshops, and gatherings in Bangladesh',
    'X-WR-TIMEZONE:Asia/Dhaka',
    ...eventsList.flatMap((event) =>
      vevent(event, `${event.description}\n\nMore info: https://thepenguins.club/events/${event.slug}`, {
        text: 'Reminder: The Penguins Club Gathering today!',
        trigger: '-PT2H'
      })
    ),
    'END:VCALENDAR'
  ]);
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
