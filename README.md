# attestrue-site

Astro marketing site for **Attestrue** at [attestrue.com](https://attestrue.com). Deploys with **GitHub Actions** to **GitHub Pages** (same pattern as a `*.github.io` user site: push to `main` runs the workflow). Source of this repo previously lived under the [`attestrue`](https://github.com/attestrue/attestrue) monorepo as `site/`; it is developed and deployed from here.

**One-time GitHub setup:** Repository **Settings → Pages → Build and deployment → Source:** GitHub Actions. Optional: **Custom domain** `attestrue.com` (a `public/CNAME` file is included in the build).

## Commands

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
```

## Blog

Markdown posts live in `src/content/blog/` with frontmatter `title`, `description`, and `pubDate` (see `src/content/config.ts`).

## License

Site content and code follow the same terms as the parent OSS project unless noted otherwise (MIT where applicable).
