# Happy Hiatus

The site for thehappyhiatus.com. Built with [Astro](https://astro.build) (static output), styled to match the "earthy editorial" design.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

Requires Node 20 or newer.

## Where things live

| To change... | Edit |
|---|---|
| Category names, intros, and items | `src/data/categories.ts` |
| Bookshelf entries | `src/data/books.ts` |
| Tools list | `src/data/tools.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (values match the style guide) |
| Journal posts | add a Markdown file to `src/content/journal/` |
| Home page | `src/pages/index.astro` |

### Writing a post

Create `src/content/journal/my-post.md`:

```md
---
title: 'Post title'
description: 'One sentence that appears under the title and in search results.'
pubDate: 2026-11-15
category: feel          # breathe, move, explore, wilding, feel, connect, evolve
moment: 'Toes in the sand'   # optional
draft: false            # true hides it from the site
---

Your post, in Markdown.
```

`src/content/journal/toes-in-the-sand.md` is a placeholder post. Replace or delete it before launch.

## Deploy to Cloudflare

The site deploys as a Cloudflare Worker with static assets. `wrangler.jsonc` tells Cloudflare to serve the built `dist/` folder.

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages**, choose **Create application**, and import the repository.
3. Use these settings (the defaults are correct):
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - No output directory is needed; `wrangler.jsonc` sets it.
4. After the first deploy, open the Worker's **Settings → Domains & Routes** and add `thehappyhiatus.com` (and `www`). Because the domain is already on Cloudflare, DNS is set up for you.
5. Every push to `main` redeploys the site.

## Newsletter

The signup form stays disabled until you set `PUBLIC_NEWSLETTER_ACTION` to the form-post URL your newsletter service gives you.

- Locally: create a `.env` file containing `PUBLIC_NEWSLETTER_ACTION=https://...`
- On Cloudflare: add it as an environment variable in the project settings, then redeploy.

## Before launch checklist

- Replace every `[BRACKETED]` placeholder (post text, book titles, About page).
- Replace the placeholder category intros in `src/data/categories.ts` if you want your own wording.
- Add the newsletter URL.
- Add real book links to `src/data/books.ts`.

## Roadmap

Phase 2 adds Cloudflare Workers and D1 for "This helped" reactions, the "Share your moment" form with an approval step, and Turnstile spam protection. The sound mixer tool is listed as "Coming soon" in `src/data/tools.ts`.
