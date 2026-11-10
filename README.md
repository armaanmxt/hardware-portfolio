# Armaan Mathur — portfolio

A minimal portfolio with a short introduction, experience, and three selected projects. Design references: https://www.neiloy.me/ and https://zainkhan.dev/.

## Updates

- Edit `content/portfolio.ts` for experience, projects, and contact links.
- Replace `public/resume.pdf` to update the resume without changing its URL.
- Edit the short introduction in `app/page.tsx`.
- Adjust appearance in `app/globals.css`.
- Logos live in `public/logos/`.

## Local preview and hosting

Use Node 24. Run `npm ci`, then `npm run dev`. Run `npm run build:static` to generate the portable website in `out/`.

The included Vercel configuration builds `out/`. Import this repository into Vercel once to enable automatic publication after GitHub commits. That connection has not been configured by this project. GitHub Actions checks the build on pushes and pull requests. The private Sites preview is published separately from the same source.

## Content and assets

The resume is the exact user-supplied `Armaan_Mathur___Resume (93).pdf`. OPG and UWASIC dates and brief descriptions follow this version. Selected projects are the parameterized synchronous FIFO, L1 cache controller, and Python RTL regression tool. L1 appears as a normal project, without a separate progress section. Website descriptions are concise and do not add deployment or verification claims beyond the available evidence.

Logo sources:
- UWASIC: company profile image from https://www.linkedin.com/company/uwasic/ (retrieved November 9, 2026).
- Waterloo: https://uwaterloo.ca/university-of-waterloo-logo-152.png
- OPG: https://commons.wikimedia.org/wiki/File:Ontario_Power_Generation_logo.svg

Logos identify the respective organizations; ownership remains with their owners.
