---
title: Welcome to the Penguins Club blog
date: 2026-10-04
author: The Penguins Club
summary: Meetup recaps, workshop notes, and write-ups from our community, kept in git like everything else we make.
tags: [community]
---

This is where we post recaps from our meetups, notes from workshops, and things members have learned along the way.

Every post is a Markdown file in the [website repository](https://github.com/the-penguins-club/web). Anyone can write one, and publishing is just a pull request.

## Want to write something?

You do not need to be a member or ask first. Fork the repo, add a file, and open a pull request.

1. **Fork and clone** [the-penguins-club/web](https://github.com/the-penguins-club/web), then run `npm install` (Node 22.12 or newer).
2. **Add your post** as a new Markdown file in `src/content/blog/`. The file name becomes the URL, so `my-first-post.md` is published at `/blog/my-first-post`.
3. **Start with this header**, then write the post below it in Markdown:

   ```md
   ---
   title: Your post title
   date: 2026-10-05
   author: Your Name
   summary: One or two sentences shown on the blog list and in link previews.
   tags: [linux, workshop]
   ---

   Your post starts here.
   ```

4. **Preview it** with `npm run dev` and open `http://localhost:4321/blog`. You can also edit visually: with the dev server running, open `http://localhost:4321/keystatic`. It is a local editor, so there is nothing to sign in to.
5. **Open a pull request** against `main`. A maintainer will review it, and once it is merged the site redeploys by itself.

### Good to know

- **Cover image:** optional. Without one, the site generates a cover from your post title. To use your own, put the image in `public/images/blog/` and add `cover: /images/blog/your-image.png` to the header. Please keep images under 500 KB.
- **Drafts:** add `draft: true` to the header to keep a post unpublished while you work on it.
- **Fields:** `title`, `date`, and `summary` are required. `author` defaults to The Penguins Club, and `tags` is optional.
- **Not sure where to start?** Meetup recaps, workshop notes, and "how I fixed this" write-ups are all welcome. Email [uthsob@thepenguins.club](mailto:uthsob@thepenguins.club) if you want help with an idea or with git.
