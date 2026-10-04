# butadpj · Personal portfolio

Astro 7 + Solid + Tailwind 3 (PostCSS). Original blue, orange, and lime palette; Mitr, K2D,
and Open Sans typography. The homepage connects AI engineering work to its
outcomes, with the original web projects and writing kept in the archive.

## Local development

Use Node 22.13 or newer within Node 22, plus Corepack. `.nvmrc` selects Node 22;
`packageManager` pins Yarn 4.2.2. Astro 7 requires at least Node 22.12.0; its type-checking runtime requires 22.13.0.

```sh
nvm install
nvm use
corepack enable
yarn install
yarn dev
```

```sh
yarn check
yarn build
```

## Editing the site

- `src/data/portfolio.ts`: profile, navigation, resume URL, experience, skills.
- `src/components/home/Hero.tsx`: career highlights and their visual summaries.
- `src/components/home/`: work, about, experience, and writing sections.
- `src/styles/global.css`: original palette, semantic roles, component styles,
  layouts, responsive rules, and reduced-motion behavior.
- `src/content.config.ts`: Content Layer collections, using `glob()` loaders.
- `src/content/projects/` and `src/content/blogs/`: existing MDX entries.
  Collection `id` values preserve the original project and article URLs.
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
merging conflicting Tailwind utilities. The UI components use Kobalte; Astro 7 uses the compatible Solid 1.9 runtime.

Most of the site renders as static HTML. The navigation/theme control and
experience accordion are Solid islands. Scrolling is native. The theme is
saved locally and preserved across Astro page transitions.

When manually checking changes, cover desktop and narrow mobile layouts,
both themes, the mobile menu (including Escape), accordion keyboard controls,
blog/project navigation, and resume downloads.

## Astro 7 migration

Content uses the current Content Layer API: `src/content.config.ts`, `glob()`
loaders, `entry.id`, `render(entry)`, and Zod from `astro/zod`. The root layout
uses `ClientRouter`. `compressHTML: true` preserves the portfolio's existing
inline whitespace behavior across the Astro 7 compiler change.

Tailwind 3 runs directly through `postcss.config.cjs`, with its existing
`tailwind.config.cjs`, typography plugin, Kobalte variants, and design tokens.
The retired `@astrojs/tailwind` adapter is removed. Global Tailwind layers are
imported explicitly in `src/styles/global.css`.

Vercel uses `corepack yarn install --immutable` and `corepack yarn build` from
`vercel.json`, ensuring it uses the project's Yarn 4 version and lockfile.
Keep the Vercel Node.js setting at 22.x and commit `package.json` and
`yarn.lock` together with migration changes.

`@emnapi/runtime` is an explicit development dependency because
`@astrojs/astro2tsx@0.1.2` lists this required WASM runtime only as a development
dependency upstream. It allows `yarn check` to load on a clean Yarn install;
revisit the workaround when updating Astro's language tools.

Migration references:

- https://docs.astro.build/en/guides/upgrade-to/v5/
- https://docs.astro.build/en/guides/upgrade-to/v6/
- https://docs.astro.build/en/guides/upgrade-to/v7/
- https://docs.astro.build/en/guides/styling/#postcss
