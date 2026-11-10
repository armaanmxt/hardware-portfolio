# Armaan Mathur — hardware portfolio

A fresh, hardware-focused portfolio inspired by the quiet typography and spacing of neiloy.me and zainkhan.dev. No content or assets from the previous portfolio are used.

## Everyday edits

| Change | File |
| --- | --- |
| Bio, email, interests, experience, selected projects, L1 progress | `content/portfolio.ts` |
| Resume | Replace `public/resume.pdf` with the new PDF, keeping the filename |
| Colors, spacing, typography, mobile layout | `app/globals.css` |
| Section structure | `app/page.tsx` |
| Page title and search description | `app/layout.tsx` |

Keep three selected projects plus one current project. Each project should explain the problem, your contribution, and what was actually validated. Add a repository URL only when one is available. Do not automatically import every GitHub repository.

## Preview locally

Use Node 24 and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed in the terminal. `npm run build:static` creates an independent static site in `out/`. The interface uses native anchor links and disclosure elements, so its essential interactions do not require a client-side application state or a database.

## Recommended long-term setup

Use this GitHub repository as the source of truth and connect it once to Vercel. The included `vercel.json` sets the build command to `npm run build:static` and publishes `out/`.

1. Import this repository as a new Vercel project.
2. Keep the included build settings and use `main` as the production branch.
3. Add a custom domain if desired.
4. Make content changes on a branch, review the preview, and merge when ready.

Vercel's Git integration builds changes automatically after connection. That connection is a separate setup step; this prototype does not claim it has already been configured. The GitHub workflow checks the static build and saves its output as an artifact. It does not publish a public site by itself.

References: https://vercel.com/docs/git and https://nextjs.org/docs/app/guides/static-exports

For small changes directly on GitHub, open `content/portfolio.ts`, click Edit, change the relevant text, and commit. For a new resume, upload the replacement to `public/resume.pdf`.

## Prototype hosting

The project also retains the Sites/Vinext development and deployment support for the private prototype. `npm run build` is the Sites build; `npm run build:static` is the portable Next.js export. Routine content editing uses the same files for both. No runtime secrets, database, CMS, or login are needed for portfolio content.

## Content provenance and remaining decisions

- Resume: `Armaan_Mathur_Resume.pdf` from Drive, uploaded August 12, 2026. This was the newest matching version located, not a guarantee that a newer version does not exist elsewhere.
- OPG and UWASIC descriptions follow that resume. Dates are shown as 2026 pending confirmation of current end dates.
- Asynchronous FIFO: repository README documents a dual-clock design and Vivado behavioral simulation.
- RTL regression: current repository reports 64/64 standard checks and 4/6 seeded defects detected. This deliberately supersedes the older resume's stronger defect-detection claim.
- SPI/PWM: sourced from the resume; no dedicated public repository was located.
- L1 cache: repository inspected November 9, 2026. Interface/storage declarations are present; control logic is not yet implemented. Update `current.done`, `current.next`, and `current.updated` as work advances.
- No Chrome extensions are included. FPGA Blackjack and the synchronous FIFO were omitted because inspected repositories did not yet demonstrate a sufficiently complete implementation for this selection.

Before a public launch, confirm the resume version, exact experience dates, preferred contact address, and final project selection. Personal hobbies can be added when supplied; none have been invented.
