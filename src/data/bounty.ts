// Bug bounty program data for /programs/bounties.
//
// ───────────────────────────────────────────────────────────────────────────
// ⚠️  UNVERIFIED FACTS — replace before this page goes public.
//
// Everything inside `facts`, `changelog`, and `thanks` describes real-world
// history that only the club can confirm. The values below are placeholders
// chosen to make the page render; they are NOT a record of anything that
// happened. Publishing them as-is would misstate the program's history.
//
// Specifically: `facts.launchedIso`, `facts.reportsResolved`, every `changelog`
// entry, and every `thanks` entry need real values. The payout total and
// researcher count are derived from `thanks`, so correcting that list corrects
// them too.
// ───────────────────────────────────────────────────────────────────────────

export const facts = {
  /** Program start date. Drives the launch line, the age badge and the changelog floor. */
  launchedIso: '2024-09-21',
  /**
   * What the launch date was, if it was anything. Kept beside the date so the
   * two cannot drift: change launchedIso to a day that is not Software Freedom
   * Day and this has to change with it, or be emptied.
   */
  launchedOccasion: 'Software Freedom Day',
  /** Last substantive edit to these rules. */
  updatedIso: '2026-09-12',

  /** Includes duplicates, informatives, and reports whose reporter stayed anonymous. */
  reportsResolved: 34,
  medianFirstResponseDays: 2,
};

/**
 * Every timescale the page quotes, in one place. The prose interpolates these
 * rather than restating them, so changing a target here changes it everywhere
 * it is mentioned instead of leaving stale numbers in the copy.
 */
export const policy = {
  firstReplyWorkingDays: 3,
  triageWorkingDays: 10,
  rewardDecisionWorkingDays: 15,
  /** From us accepting the report to the money leaving. */
  payoutDays: 30,
  /** How long a researcher waits before publishing, and our own fix target. */
  disclosureDays: 90,
};

const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
];

/** Spell small numbers out, so counts can sit in a sentence without looking generated. */
export function numberWord(n: number): string {
  return NUMBER_WORDS[n] ?? String(n);
}

export function capitalise(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const contact = {
  email: 'security@thepenguins.club',
  pgpFingerprint: '4D41 7921 8379 FC31 9652  382E F4BE 5A98 3F17 2316',
  pgpKeyUrl: '/pgp/security.asc',
  fallback: 'admin@thepenguins.club',
};

export interface ScopeAsset {
  asset: string;
  kind: string;
  note: string;
  maxBdt: number;
}

export const inScope: ScopeAsset[] = [
  {
    asset: 'mirror.thepenguins.club',
    kind: 'Infrastructure',
    note: 'The Debian/Arch/Ubuntu package mirror. Anything that lets you serve modified packages to students is the worst day we can have, so treat it as the crown jewel.',
    maxBdt: 5000,
  },
  {
    asset: 'uradhura',
    kind: 'Running bot + source',
    note: 'The Rust bot that runs in our groups. Command injection, privilege confusion between admins and members, token leakage: all of it counts.',
    maxBdt: 5000,
  },
  {
    asset: 'Self-hosted community services',
    kind: 'Containers on our public host',
    note: 'One Linux box runs most of what we operate as Docker containers behind a reverse proxy \u2014 the status page, self-hosted Git, workshop pads, meeting rooms, metrics. If it has a port open on that machine it counts, whether or not we remembered to name it here.',
    maxBdt: 5000,
  },
  {
    asset: 'thepenguins.club',
    kind: 'Web — static site',
    note: 'This site, including /events, the generated .ics feeds, and the blog. It\'s a static Astro build, so the interesting findings tend to sit in the build pipeline rather than at runtime.',
    maxBdt: 1000,
  },
  {
    asset: 'github.com/the-penguins-club/*',
    kind: 'Source code',
    note: 'Public repositories. Leaked credentials in history, workflow injection in GitHub Actions, and anything that lets a non-member push to main.',
    maxBdt: 2500,
  },
  {
    asset: 'Community event pipeline',
    kind: 'Build-time data flow',
    note: 'Issues in the the-penguins-club/events repo are parsed into pages at build time. What matters here is what a crafted issue body does to the build host and the deploy that follows — not what it renders.',
    maxBdt: 2500,
  },
];

export const outOfScope: string[] = [
  'Anything run by a third party we simply use: GitHub, Telegram, Discord, Google Fonts, the registrar. Those go to them.',
  'Our partners\' and members\' own sites, even if we link to them.',
  'Denial of service, volumetric testing, or anything that degrades the mirror for students who are mid-download.',
  'Social engineering of volunteers, phishing, or physical access attempts at a meetup venue.',
  'Automated scanner output pasted without a working proof of concept.',
];

export const nonQualifying: string[] = [
  'Missing security headers (CSP, HSTS, X-Frame-Options) on the static site, with no demonstrated exploit.',
  'Missing SPF/DKIM/DMARC records, unless you can show a deliverable spoofed mail.',
  'Clickjacking on pages with no state-changing action, which is every page we have.',
  'Self-XSS, or anything requiring the victim to paste code into a console.',
  'Rate limiting on a static site served from a CDN.',
  'Outdated library versions with no exploit path in the way we use them.',
  'Open redirects that don\'t cross a trust boundary.',
  'Best-practice notes that aren\'t vulnerabilities. We\'ll read them; they just aren\'t bounties.',
];

export interface RewardBand {
  severity: string;
  tone: 'critical' | 'high' | 'medium' | 'low' | 'info';
  bdt: number | null;
  meaning: string;
  example: string;
}

export const rewards: RewardBand[] = [
  {
    severity: 'Critical',
    tone: 'critical',
    bdt: 5000,
    meaning:
      'You can run code on our infrastructure, serve modified packages from the mirror, or take over the GitHub organisation.',
    example: 'Container escape or unauthenticated RCE on the host we run everything from; pushing an arbitrary package the mirror\'s clients accept.',
  },
  {
    severity: 'High',
    tone: 'high',
    bdt: 2500,
    meaning:
      'You can read data you shouldn\'t, or act with privileges you don\'t have.',
    example: 'A published container port that bypasses the host firewall; a leaked deploy token with write access; the bot running a privileged command for an ordinary group member.',
  },
  {
    severity: 'Medium',
    tone: 'medium',
    bdt: 1000,
    meaning:
      'A real vulnerability that needs a precondition, user interaction, or a chain to become serious.',
    example: 'The apt sources snippet we hand out at install-fests shipped without a signed-by pin, leaving students on hostile campus Wi-Fi open to package tampering.',
  },
  {
    severity: 'Low',
    tone: 'low',
    bdt: 500,
    meaning:
      'Real and verified, but small in reach. Worth fixing, and worth paying for.',
    example: 'An information leak that narrows an attack without enabling one.',
  },
  {
    severity: 'Informative',
    tone: 'info',
    bdt: null,
    meaning:
      'Not a vulnerability, though it taught us something or tightened a rough edge.',
    example: 'A sticker pack, a printed booklet, and your name in the Hall of Thanks if you want it there.',
  },
];

export interface ResponseTarget {
  stage: string;
  target: string;
  detail: string;
}

export const responseTargets: ResponseTarget[] = [
  {
    stage: 'First reply',
    target: `${policy.firstReplyWorkingDays} working days`,
    detail: 'Someone reads it and writes back to say it arrived.',
  },
  {
    stage: 'Triage decision',
    target: `${policy.triageWorkingDays} working days`,
    detail: 'We tell you whether we could reproduce it and which band we think it lands in.',
  },
  {
    stage: 'Reward decision',
    target: `${policy.rewardDecisionWorkingDays} working days`,
    detail: 'The final band and the amount, with our reasoning. Argue if you disagree.',
  },
  {
    stage: 'Payout',
    target: `${policy.payoutDays} days from acceptance`,
    detail: 'Sent once you\'ve given us payment details.',
  },
  {
    stage: 'Fix deployed',
    target: `${policy.disclosureDays} days target`,
    detail: 'Usually much sooner. If something\'s going to drag, we\'ll tell you why and keep you posted.',
  },
];

export const rulesDo: string[] = [
  'Test only the assets in scope, using your own accounts and your own data.',
  'Stop once you\'ve proved the issue. Pulling one record proves it; pulling a thousand is a breach of its own.',
  'Write it up clearly: what you did, what happened, why it matters. A screenshot and a short script will get you further than an essay.',
  'Report each distinct root cause separately.',
  `Give us ${policy.disclosureDays} days before you publish, and let us know when you're planning to.`,
];

export const rulesDont: string[] = [
  'Don\'t access, change, download or keep anyone else\'s data. If you stumble into personal data, stop there and say so in the report.',
  'Don\'t degrade the service. Students pull from the mirror on slow connections, so brute force and load testing are off the table.',
  'Don\'t leave anything behind. No web shells, no planted accounts, no backdoors. Clean up after yourself, or tell us what needs cleaning.',
  `Don't push disclosure deadlines shorter than ${policy.disclosureDays} days at us, and don't offer to sit on a report for money. That's extortion, and we'll treat it as such.`,
  'Don\'t test the venue, the volunteers, or anyone\'s personal devices.',
];

export const paymentMethods: string[] = [
  'bKash or Nagad (inside Bangladesh)',
  'Bank transfer (inside Bangladesh)',
  'Wise or PayPal (outside Bangladesh)',
  'Donate it onward; it goes to the booklet printing fund and we say so publicly',
];

export interface ChangelogEntry {
  dateIso: string;
  version: string;
  summary: string;
}

/** ⚠️ Placeholder history — see the warning at the top of this file. */
export const changelog: ChangelogEntry[] = [
  {
    dateIso: '2026-09-12',
    version: '1.4',
    summary: 'Raised the Critical band to \u09f35,000 \u2014 which is as far as the fund stretches without eating into the booklet budget.',
  },
  {
    dateIso: '2026-04-12',
    version: '1.3',
    summary: 'Brought the container host and the event pipeline into scope, having spent a year pretending the box was somebody else\'s problem.',
  },
  {
    dateIso: '2025-09-30',
    version: '1.2',
    summary: 'Added the uradhura bot to scope. Clarified that duplicate reports still get public credit.',
  },
  {
    dateIso: '2025-03-18',
    version: '1.1',
    summary: 'Published explicit response targets after researchers told us the silence was the worst part.',
  },
  {
    dateIso: '2024-09-21',
    version: '1.0',
    summary: 'Program opened on Software Freedom Day with the mirror and this website in scope, funded from the community fund.',
  },
];

export interface ThanksEntry {
  handle: string;
  finding: string;
  dateIso: string;
  band: string;
}

/** ⚠️ Placeholder credits — do not publish invented researcher names. */
export const thanks: ThanksEntry[] = [
  { handle: '@sabbir', finding: 'Hardening notes for the reverse proxy\'s TLS config and HSTS preload', dateIso: '2026-09-02', band: 'Informative' },
  { handle: '@n0shin', finding: 'Docker socket bind-mounted into the public status-page container', dateIso: '2026-07-30', band: 'Critical' },
  { handle: '@mehjabin', finding: 'Compose bind-mount served the project .env through the reverse proxy', dateIso: '2026-06-18', band: 'High' },
  { handle: '@tanvir-sec', finding: 'Reverse-proxy dashboard reachable without auth, listing every internal route', dateIso: '2026-05-04', band: 'Medium' },
  { handle: '@arnab.k', finding: 'Published container port bypassed the host firewall, exposing Redis', dateIso: '2026-03-21', band: 'High' },
  { handle: '@sabbir', finding: 'Containers ran as root with the host home directory bind-mounted', dateIso: '2026-02-09', band: 'Low' },
  { handle: '@faria.r', finding: 'Self-hosted Git instance had open registration and world-readable internal wikis', dateIso: '2025-12-14', band: 'Medium' },
  { handle: '@shuvo', finding: 'Bot honoured admin commands from a departed member', dateIso: '2025-11-09', band: 'High' },
  { handle: '@aurnob', finding: 'node_exporter published to the internet, leaking host inventory', dateIso: '2025-10-02', band: 'Low' },
  { handle: '@n0shin', finding: 'Deploy token readable in a public workflow log', dateIso: '2025-08-19', band: 'High' },
  { handle: '@aurnob', finding: 'Stale subdomain pointing at an unclaimed host', dateIso: '2025-07-08', band: 'Medium' },
  { handle: '@ruhan', finding: 'Events .ics feed exposed a venue address for an unannounced meetup', dateIso: '2025-05-02', band: 'Low' },
  { handle: '@tanvir-sec', finding: 'Mirror\'s published sources.list snippet omitted the signed-by pin', dateIso: '2025-03-16', band: 'Medium' },
  { handle: '@sadia', finding: 'Malformed DMARC record on the club domain', dateIso: '2025-01-22', band: 'Informative' },
  { handle: '@rifat.h', finding: 'Mirror rsync module exposed a writable path', dateIso: '2024-11-05', band: 'Critical' },
];

// Totals are derived from the list above so the page can never contradict itself.
const rewardByBand = new Map(rewards.map((r) => [r.severity, r.bdt ?? 0]));

/** Sum of every credited report's band value. */
export const totalPaidBdt = thanks.reduce(
  (sum, t) => sum + (rewardByBand.get(t.band) ?? 0),
  0
);

/** Distinct researchers who received a cash band (informative-only credits excluded). */
export const researchersPaid = new Set(
  thanks.filter((t) => (rewardByBand.get(t.band) ?? 0) > 0).map((t) => t.handle)
).size;

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Why is the money so small?',
    a: 'Because we\'re volunteers, and the bounty fund is the same one that prints booklets and pays for the mirror\'s bandwidth. We\'d sooner pay a small amount on time, every time, than advertise a figure we can\'t honour.',
  },
  {
    q: 'Do I need to be in Bangladesh?',
    a: 'No. Anyone can report, and we pay internationally through Wise or PayPal. The infrastructure serves students here; whoever helps protect it can be anywhere.',
  },
  {
    q: 'What if someone already reported it?',
    a: 'The first reproducible report gets the money. Duplicates still get credit in the Hall of Thanks if you want it, and we\'ll tell you straight when the original came in.',
  },
  {
    q: 'Can I publish my write-up?',
    a: `Yes, please do. Give us ${policy.disclosureDays} days or wait for the fix, whichever comes first, and tell us when you're posting. Happy to check it over for accuracy first if that's useful.`,
  },
  {
    q: 'Is there a leaderboard or points system?',
    a: 'No. We\'re far too small for it to mean anything, and a handful of reports a year doesn\'t need a scoreboard.',
  },
  {
    q: 'I found something in a member\'s personal project.',
    a: 'Out of scope for us, but tell us anyway and we\'ll put you in touch with the maintainer. There\'s no bounty on it. We\'ll still thank you properly.',
  },
];

// ── Derived helpers ────────────────────────────────────────────────────────

export function fmtDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function fmtBdt(n: number): string {
  return `৳${n.toLocaleString('en-US')}`;
}

/** Whole months the program has been running, as of the build. */
export function monthsRunning(fromIso: string, now = new Date()): number {
  const start = new Date(`${fromIso}T00:00:00Z`);
  let months =
    (now.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (now.getUTCMonth() - start.getUTCMonth());
  if (now.getUTCDate() < start.getUTCDate()) months -= 1;
  return Math.max(0, months);
}

/** "1 year 7 months" — used in the hero so the age is legible at a glance. */
export function humanDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} year${y === 1 ? '' : 's'}`);
  if (m) parts.push(`${m} month${m === 1 ? '' : 's'}`);
  return parts.join(' ') || 'less than a month';
}
