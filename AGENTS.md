<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Styling conventions

- Use `rem` units instead of `px` wherever possible (Tailwind arbitrary values, CSS custom properties, etc.). Exceptions: small structural details like border widths (e.g. `border`, `outline-1`) where a fixed 1px/2px is the actual intent regardless of user font-size settings.
- If it's unclear whether a given value should be `rem` or `px` (e.g. a value copied directly from a Figma spec, or a fixed asset dimension), ask before applying it rather than guessing.

# Sanity CMS

- Project `hvpr9hr9`, dataset `production`, Studio embedded at `/studio` (see `sanity.config.ts` and `src/sanity/`).
- This project is on Sanity's **free tier**. Before adding features that could incur cost or hit plan limits (extra datasets, more users/roles, GROQ-powered webhooks, scheduled publishing, more than the free API CDN request/bandwidth allowance, Media Library add-ons, etc.), check current free-tier limits against https://www.sanity.io/pricing and confirm with the user before implementing — don't assume a feature is available.
