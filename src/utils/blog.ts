export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// ponytail: ~200 wpm over the raw markdown, close enough for a label
export const readingTime = (body = '') => `${Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200))} min read`;
