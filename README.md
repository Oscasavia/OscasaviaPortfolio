# Oscasavia Birungi — Portfolio

Personal portfolio for Oscasavia Birungi, a software engineer working across web, mobile, automation, and developer experience.

**Website:** [oscasavia.netlify.app](https://oscasavia.netlify.app/)

Built with React 18, TypeScript, Vite, Tailwind CSS, Radix UI, and Framer Motion. React Router handles navigation; EmailJS powers the contact form. The site is a static single-page application with no application server or database to run locally.

## Getting started

Use Node.js 22 and npm. If you use nvm, the repository includes an `.nvmrc` file.

```sh
git clone https://github.com/Oscasavia/OscasaviaPortfolio.git
cd OscasaviaPortfolio
nvm use
npm ci
npm run dev
```

If Node 22 is not installed in nvm, run `nvm install` first. Without nvm, install Node 22 directly and skip the nvm command.

Open [localhost:8080](http://localhost:8080). Vite prints a different port if 8080 is already in use. Changes to source files reload automatically.

## Commands

| Command             | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `npm run dev`       | Start the development server on port 8080.                               |
| `npm run typecheck` | Check application and Vite configuration types without generating files. |
| `npm run lint`      | Run ESLint.                                                              |
| `npm run build`     | Build the production site into `dist/`.                                  |
| `npm run check`     | Run type checking, lint, and the production build.                       |
| `npm run preview`   | Serve the last production build locally, usually on port 4173.           |

Run `npm run build` before `npm run preview`. The preview server is for local verification; deploy the contents of `dist/` to a static host.

## Contact form configuration

The form uses EmailJS's browser SDK. The existing portfolio's public service, template, and key values remain as defaults, so existing deployments continue to work. To use another EmailJS account or template, create local overrides:

```sh
cp .env.example .env.local
```

Set all three values together:

| Variable                   | Value                |
| -------------------------- | -------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID.  |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID. |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key.  |

The template should use `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`, matching the form's field names. Set the template recipient to your destination email and its reply-to address to `{{email}}`. Configure allowed domains in EmailJS for the domains where you intend to use the form.

Restart Vite after changing environment values. For production, set overrides in the hosting provider's build environment and rebuild. `VITE_` values are included in the browser bundle: use only the EmailJS **public** key here, never private keys or passwords. Local environment files are ignored by Git; `.env.example` is tracked.

A valid form submission sends a real email using the configured account. Mock the EmailJS request when testing UI behavior. Reading the page, building the site, and running `npm run check` do not send email. The contact page also provides a direct email link if delivery fails.

## Updating the portfolio

| Content                                                   | Where to edit                                                |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| Introduction and homepage sections                        | `src/pages/Home.tsx`                                         |
| Project descriptions, categories, technologies, and links | `src/data/projects.ts`                                       |
| Project card layouts                                      | `src/components/ProjectCard.tsx`                             |
| Biography                                                 | `src/pages/About.tsx`                                        |
| Skills                                                    | `src/data/resume.ts`, `src/pages/Skills.tsx`                 |
| Career history and education                              | `src/data/resume.ts`, `src/pages/Resume.tsx`                 |
| Contact details and form                                  | `src/pages/Contact.tsx`                                      |
| Navigation and footer/social links                        | `src/components/Navigation.tsx`, `src/components/Footer.tsx` |
| Colors, typography, and responsive layouts                | `src/index.css`, `tailwind.config.ts`                        |
| Page titles                                               | `src/components/ScrollToTop.tsx`                             |
| Default metadata, canonical domain, and fonts             | `index.html`                                                 |
| Browser icon                                              | `assets/OscasaviaLogo.png`                                   |

Edit the `projects` array in `src/data/projects.ts` to update the gallery, homepage featured work, and search results. The first two entries appear on the homepage. Category filters are defined in `src/pages/Projects.tsx`. Keep project IDs unique: search uses them to link directly to cards. Set a project's URL to `null` when no public destination is available; the card displays ‘Details coming soon’ without a dead link.

Replace the portrait at `src/assets/OscasaviaProfilePic.jpg` and the résumé at `src/assets/myResumeOscasavia.pdf` to update those files. Keep imports pointing to `src/assets/` so Vite includes them in production builds. The original logo is imported from `assets/OscasaviaLogo.png` by the navigation and footer, and is also used as the browser icon. The portrait and résumé copies in that root directory are legacy files; update the versions under `src/assets/` instead.

## Deployment

The repository includes `netlify.toml` with these settings:

- Node version: **22**
- Build command: **`npm run check`**
- Publish directory: **`dist`**

Connect the repository to Netlify and select the branch you want to deploy. Add any EmailJS overrides to the build environment before building. `public/_redirects` is copied into `dist/` and rewrites routes such as `/projects` to `index.html`, allowing direct visits and refreshes to work with React Router.

For another static host, use the same build output and configure an equivalent history fallback: serve real files first, then serve `index.html` for application routes. This project currently assumes deployment at the domain root. If you change the domain, update the canonical and social URLs in `index.html` and any EmailJS allowed-domain configuration.

## Validation

Run `npm run check` before committing. The GitHub Actions workflow runs the same checks for pushes and pull requests. Existing Fast Refresh warnings in shared UI components do not fail lint; lint errors do.

For changes affecting the interface, also check:

- Home, About, Projects, Skills, Résumé, and Contact at mobile and desktop widths.
- Direct navigation and refresh on `/projects` and `/resume` in the deployed site.
- Project filters, external links, search (including project names and Ctrl/Cmd+K), and résumé downloads.
- Keyboard navigation, visible focus, Escape closing the mobile menu, and reduced-motion preferences.
- Contact form validation, loading, success, and failure states using mocked requests when email delivery is not the test's purpose.

There is currently no committed automated browser-test suite. Type checking, lint, and a build do not verify email delivery or the availability of external project links.

## Repository layout

```text
.github/workflows/  Continuous integration
public/            Files copied directly into the production build
src/
  assets/          Imported portrait and résumé
  components/      Navigation, footer, project cards, and shared UI
  data/            Shared project content
  hooks/           Shared React hooks
  lib/             Utilities
  pages/           Route components
  App.tsx          Routing and application providers
  index.css        Global styles and responsive layouts
```

## Résumé source

`src/assets/resume.html` is the supplied résumé, preserved with its print layout. The downloadable PDF at `src/assets/myResumeOscasavia.pdf` is generated from that HTML; both the homepage and résumé page use it. `src/data/resume.ts` contains the corresponding career history, summary, education, certifications, and skills displayed on the website.

When updating the résumé, update the HTML and the shared data together, then export a new PDF from the HTML with background graphics enabled, CSS page sizing (US Letter), and browser headers/footers disabled. Check the exported pages for clipping before replacing the PDF. Keep the homepage and About introduction aligned with the current role.
