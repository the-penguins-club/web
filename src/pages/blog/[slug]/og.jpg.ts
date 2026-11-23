import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

// Social scrapers reject AVIF/SVG, so every post gets a 1200x630 JPEG built from its cover
// (or the default share image when it has none).
export async function getStaticPaths() {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { cover: post.data.cover } }));
}

export const GET: APIRoute = async ({ props }) => {
  const src = props.cover?.startsWith('/') ? props.cover.split('?')[0] : '/images/og/default.png';
  const jpg = await sharp(`public${src}`).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
