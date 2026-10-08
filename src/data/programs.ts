// Program registry — single source of truth for the homepage "What we run"
// bento (Activities.astro) and the /programs directory.
//
// `featured: true` programs keep their fixed bento spans on the homepage.
// Lighter tracks are listed on /programs only, so the homepage grid is untouched.

export type ArtKey =
  | 'terminal'
  | 'branch'
  | 'campus'
  | 'shield'
  | 'server'
  | 'bug'
  | 'pair'
  | 'mic'
  | 'laptop';

export type Tone = 'emerald' | 'lime' | 'ink' | 'coral' | 'sky' | 'sand' | 'lavender';

export interface Program {
  id: string;
  /** Path segment under /programs. Only resolves when `hasPage` is true. */
  slug: string;
  tone: Tone;
  art: ArtKey;
  badge: string;
  badgeType: 'live' | 'event' | 'track' | 'charity' | 'open';
  title: string;
  summary: string;
  details: string;
  cadence: string;
  tag: string;
  /** Rendered in the homepage bento grid (fixed 5-tile layout). */
  featured: boolean;
  /** Has a dedicated page at /programs/<slug>. Avoids linking to 404s. */
  hasPage: boolean;
}

export const programs: Program[] = [
  {
    id: 'prog-linux-club',
    slug: 'linux-club',
    tone: 'emerald',
    art: 'terminal',
    badge: 'Ongoing • Year-Round',
    badgeType: 'live',
    title: 'Linux Systems & CLI Club',
    summary:
      'Paper reading, live terminal challenges, and monthly hands-on workshops — the habit this community started with in 2020.',
    details:
      'From desktop installations (Debian, Arch, Fedora) to headless server administration, shell scripting, package management, and systemd services.',
    cadence: 'Every 3rd Saturday at 26/18 Gulshan Badda Link Road & online',
    tag: 'GNU/Linux & Systems',
    featured: true,
    hasPage: false,
  },
  {
    id: 'prog-build-club',
    slug: 'upstream',
    tone: 'lime',
    art: 'branch',
    badge: 'Ongoing • Open Source',
    badgeType: 'live',
    title: 'Open Source Toolchain & Upstream PRs',
    summary:
      'Show what you\'re building with FOSS tools, get a code review, and pick up the habits upstream contribution needs.',
    details:
      'Mastering Git branching workflows, writing tests, reviewing PRs, and contributing to public repositories under copyleft and permissive licenses.',
    cadence: 'Bi-weekly async code review sprints & GitHub discussions',
    tag: 'Toolchain & Git',
    featured: true,
    hasPage: false,
  },
  {
    id: 'prog-campus-fests',
    slug: 'campus',
    tone: 'ink',
    art: 'campus',
    badge: 'When Hosted • On Demand',
    badgeType: 'event',
    title: 'Campus Install-Fests & Workshops',
    summary:
      'One-day hands-on bootcamps at universities. Free for students. Runs when a university club, department, or partner signs on.',
    details:
      'We bring mentors, bootable USB drives, printed cheat-sheets, and lab rubrics. You bring the lab room and eager students.',
    cadence: 'University campuses across Bangladesh (Daffodil, HSTU, etc.)',
    tag: 'Campus Outreach',
    featured: true,
    hasPage: false,
  },
  {
    id: 'prog-security-privacy',
    slug: 'security',
    tone: 'coral',
    art: 'shield',
    badge: 'Specialized Track',
    badgeType: 'track',
    title: 'Cybersecurity & Digital Sovereignty',
    summary:
      'Teaching defensive computing, network auditing, server hardening, and self-hosted cloud alternatives.',
    details:
      'Configuring firewalls (UFW, nftables), SSH keys, private local LLMs without telemetry, disk encryption, and verifiable security practices.',
    cadence: 'Quarterly deep-dive lab intensives',
    tag: 'Defense & Privacy',
    featured: true,
    hasPage: false,
  },
  {
    id: 'prog-mirror-charity',
    slug: 'mirror',
    tone: 'sky',
    art: 'server',
    badge: 'Charity Initiative',
    badgeType: 'charity',
    title: 'Local Linux Mirror & Educational Kits',
    summary:
      'Free community infrastructure: high-speed package mirrors, printed booklets, leaflets, and Linux stickers.',
    details:
      'Operating community package mirrors for Debian, Arch, and Ubuntu. Printing and handing out physical reference leaflets and booklets at zero cost.',
    cadence: '24/7 Server Mirror + Event Distribution',
    tag: 'Public Commons',
    featured: true,
    hasPage: false,
  },

  // ── Lighter tracks: listed on /programs, not in the homepage bento ──
  {
    id: 'prog-bounties',
    slug: 'bounties',
    tone: 'sand',
    art: 'bug',
    badge: 'Always Open • Paid',
    badgeType: 'open',
    title: 'Bug Bounty Program',
    summary:
      'Find a security hole in the infrastructure we run for the community, report it privately, and get paid for it.',
    details:
      'Small cash rewards from the community fund, public credit in the Hall of Thanks, and safe harbour for good-faith research.',
    cadence: 'Rolling — reports accepted year-round',
    tag: 'Security & Disclosure',
    featured: false,
    hasPage: true,
  },
  {
    id: 'prog-mentorship',
    slug: 'mentorship',
    tone: 'lavender',
    art: 'pair',
    badge: 'Seasonal • Paired',
    badgeType: 'track',
    title: 'Mentorship Pairings',
    summary:
      'Six weeks, one newcomer, one maintainer, one shipped contribution. Low ceremony, real review.',
    details:
      'Pairs are matched by interest at the start of each season. Mentors commit to a weekly half-hour and honest code review.',
    cadence: 'Two intakes a year, announced at meetups',
    tag: 'People & Growth',
    featured: false,
    hasPage: false,
  },
  {
    id: 'prog-speakers',
    slug: 'speakers',
    tone: 'lime',
    art: 'mic',
    badge: 'Open Call',
    badgeType: 'open',
    title: "Speaker's Corner",
    summary:
      'A ten-minute lightning slot at every meetup, reserved for someone who has never spoken before.',
    details:
      'We help you shape the talk, rehearse it once, and fix your slides. Nobody gets heckled; everybody gets notes afterwards.',
    cadence: 'Every monthly meetup',
    tag: 'Talks & Teaching',
    featured: false,
    hasPage: false,
  },
  {
    id: 'prog-hardware',
    slug: 'hardware-library',
    tone: 'sky',
    art: 'laptop',
    badge: 'Charity Initiative',
    badgeType: 'charity',
    title: 'Hardware Lending Library',
    summary:
      'Refurbished laptops and single-board computers, lent to students who need a machine to learn on.',
    details:
      'Donated hardware is wiped, loaded with a working Linux install, and lent out for a semester at a time. Returned, re-flashed, lent again.',
    cadence: 'Requests handled at meetups & over Telegram',
    tag: 'Public Commons',
    featured: false,
    hasPage: false,
  },
];

export const featuredPrograms = programs.filter((p) => p.featured);
export const extraPrograms = programs.filter((p) => !p.featured);

export function programHref(p: Program): string {
  return p.hasPage ? `/programs/${p.slug}` : '/#programs';
}

export const art: Record<ArtKey, string> = {
  terminal: `<rect x="8" y="14" width="104" height="76" rx="9" fill="var(--art-soft)" stroke="var(--art)" stroke-width="3"/><path d="M8 32h104" stroke="var(--art)" stroke-width="3"/><circle cx="20" cy="23" r="3" fill="var(--art)"/><circle cx="31" cy="23" r="3" fill="var(--art)"/><path d="M26 50l14 10-14 10" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 72h26" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/><rect x="82" y="66" width="10" height="14" fill="var(--art)"/>`,
  branch: `<path d="M30 20v80M30 44c0 26 56 4 56 36" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/><circle cx="30" cy="20" r="10" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><circle cx="30" cy="100" r="10" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><circle cx="86" cy="80" r="10" fill="var(--art)" stroke="var(--art)" stroke-width="4"/><path d="M86 22l8 8-8 8" fill="none" stroke="var(--art)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="72" cy="30" r="3" fill="var(--art)"/>`,
  campus: `<path d="M10 52L60 24l50 28z" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4" stroke-linejoin="round"/><path d="M22 58v32M44 58v32M76 58v32M98 58v32" stroke="var(--art)" stroke-width="6" stroke-linecap="round"/><path d="M12 98h96" stroke="var(--art)" stroke-width="6" stroke-linecap="round"/><circle cx="60" cy="42" r="5" fill="var(--art)"/>`,
  shield: `<path d="M60 12l40 14v30c0 24-17 40-40 50-23-10-40-26-40-50V26z" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4" stroke-linejoin="round"/><rect x="44" y="52" width="32" height="26" rx="5" fill="var(--art)"/><path d="M50 52v-8a10 10 0 0120 0v8" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="65" r="4" fill="var(--art-soft)"/>`,
  server: `<rect x="14" y="14" width="92" height="28" rx="7" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><rect x="14" y="50" width="92" height="28" rx="7" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><rect x="14" y="86" width="92" height="22" rx="7" fill="var(--art)" stroke="var(--art)" stroke-width="4"/><circle cx="30" cy="28" r="4" fill="var(--art)"/><circle cx="30" cy="64" r="4" fill="var(--art)"/><path d="M52 28h38M52 64h38" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/>`,
  bug: `<rect x="40" y="38" width="40" height="54" rx="20" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><path d="M48 40a12 12 0 0124 0" fill="none" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/><path d="M40 52H20M40 68H16M40 84H22M80 52h20M80 68h24M80 84h18" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/><path d="M48 30l-8-12M72 30l8-12" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/><path d="M60 50v30" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/><circle cx="52" cy="26" r="3" fill="var(--art)"/><circle cx="68" cy="26" r="3" fill="var(--art)"/>`,
  pair: `<circle cx="38" cy="36" r="14" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><circle cx="84" cy="44" r="11" fill="var(--art)" stroke="var(--art)" stroke-width="4"/><path d="M14 98c0-15 11-26 24-26s24 11 24 26" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/><path d="M66 98c0-12 8-21 18-21s18 9 18 21" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/>`,
  mic: `<rect x="44" y="12" width="32" height="54" rx="16" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><path d="M30 54c0 20 13 32 30 32s30-12 30-32M60 86v20M44 106h32" fill="none" stroke="var(--art)" stroke-width="5" stroke-linecap="round"/><path d="M52 30h16M52 42h16" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/>`,
  laptop: `<rect x="22" y="26" width="76" height="50" rx="7" fill="var(--art-soft)" stroke="var(--art)" stroke-width="4"/><path d="M10 88h100l-8-12H18z" fill="var(--art)" stroke="var(--art)" stroke-width="4" stroke-linejoin="round"/><path d="M38 44h44M38 58h30" stroke="var(--art)" stroke-width="4" stroke-linecap="round"/>`,
};
