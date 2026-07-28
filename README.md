# Goutam Kumar — Portfolio

Personal portfolio site built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint      # oxlint
npm run format    # prettier
```

## Environment variables

Copy the two optional variables into `.env.local` for local development (this file is gitignored):

| Variable            | Purpose                                                                 |
| ------------------- | ------------------------------------------------------------------------ |
| `VITE_FORMSPREE_ID` | Formspree form ID. Until set, the contact form renders disabled with a note instead of posting to an invalid endpoint. |
| `VITE_RESUME_URL`   | URL/path to a resume PDF (e.g. `/resume.pdf` after adding one to `public/`). Until set, "Download Resume" buttons don't render, so there are no dead links. |

### Setting up Formspree

1. Create a free account at [formspree.io](https://formspree.io) and create a new form.
2. Copy the form ID and set `VITE_FORMSPREE_ID` locally (`.env.local`) and as a repository variable (`Settings → Secrets and variables → Actions → Variables`) named `VITE_FORMSPREE_ID` for production builds.

### Adding a resume

1. Add the PDF to `public/resume.pdf`.
2. Set `VITE_RESUME_URL=/<repo-name>/resume.pdf` (matching the deployed base path) as a repository variable named `VITE_RESUME_URL`, and `VITE_RESUME_URL=/resume.pdf` in `.env.local` for local dev.

## Deploying to GitHub Pages

This repo deploys via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`, using GitHub's "deploy from Actions" Pages mode.

One-time setup after pushing this repo to GitHub:

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. (Optional) Add the `VITE_FORMSPREE_ID` / `VITE_RESUME_URL` repository variables described above under **Settings → Secrets and variables → Actions → Variables**.
3. Push to `main` — the workflow builds with `VITE_BASE_PATH` automatically set to `/<repo-name>/` and deploys to `https://<username>.github.io/<repo-name>/`.

Client-side routing (`/projects/:slug`) works on GitHub Pages via the standard `public/404.html` redirect trick, since GitHub Pages has no server-side rewrites.
