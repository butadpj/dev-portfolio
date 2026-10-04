# butadpj · Personal portfolio

Astro + Solid + Tailwind. Original blue, orange, and lime palette; Mitr, K2D,
and Open Sans typography. The homepage connects AI engineering work to its
outcomes, with the original web projects and writing kept in the archive.

## Local development

Use Node 22 and Corepack. `packageManager` pins Yarn 4.2.2.

```sh
yarn install
yarn dev
```

```sh
yarn astro check
yarn build
```

## Editing the site

- `src/data/portfolio.ts`: profile, navigation, resume URL, experience, skills.
- `src/components/home/Hero.tsx`: career highlights and their visual summaries.
- `src/components/home/`: work, about, experience, and writing sections.
- `src/styles/global.css`: original palette, semantic roles, component styles,
  layouts, responsive rules, and reduced-motion behavior.
- `src/content/projects/` and `src/content/blogs/`: existing MDX collections.
- `src/layouts/`: shared page shell, project details, and articles.
- `public/Paul-John-Butad-Resume-AI-Engineer.pdf`: current downloadable resume.
  The old `/Paul's Resume.pdf` path serves the same updated document for
  existing links.

Keep outcome claims tied to the relevant company and project. The mentor
planning comparison is a full day versus 20–30 minutes for five learners;
there is no assumed number of hours in a working day or invented churn claim.

## Components

`src/components/ui/` contains locally owned **shadcn-solid** Button, Card,
and Accordion components. They are manually adapted from the upstream
registry to use this site's tokens and existing Kobalte primitives. They are
the Solid community port, not the React package. See `THIRD_PARTY_NOTICES.md`.

Add variants here instead of creating per-page buttons or accordions. Anchors
use `buttonVariants()` directly so links remain links. Style classes live in
`global.css`; the small `cx()` helper composes these classes rather than
merging conflicting Tailwind utilities. This integration adds no dependencies.

Most of the site renders as static HTML. The navigation/theme control and
experience accordion are Solid islands. Scrolling is native. The theme is
saved locally and preserved across Astro page transitions.

When manually checking changes, cover desktop and narrow mobile layouts,
both themes, the mobile menu (including Escape), accordion keyboard controls,
blog/project navigation, and resume downloads.
