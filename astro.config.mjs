import { defineConfig } from 'astro/config';

// Static output deploys straight to Cloudflare Pages.
// Phase 2 (reactions, reader submissions) adds Cloudflare Workers + D1.
export default defineConfig({
  site: 'https://thehappyhiatus.com',
  output: 'static',
});
