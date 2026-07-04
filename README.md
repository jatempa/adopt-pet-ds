# 🐾 AdoptPet — Design System with Atomic Design & React Cosmos

A complete **Design System** for an *Adoption Pet Web*, built as a learning
reference for the **Atomic Design** methodology. Every component is documented
live in **React Cosmos** so you can browse, tweak, and learn from it.

> **Stack:** React 18 · TypeScript · Vite 5 · Tailwind CSS 4 · React Cosmos 7

---

## 📚 What is Atomic Design?

Atomic Design (by Brad Frost) is a methodology for building design systems.
It borrows the metaphor of **chemistry** to organize UIs into five layers,
from smallest to largest:

```
  ATOMS ──▶ MOLECULES ──▶ ORGANISMS ──▶ TEMPLATES ──▶ PAGES
  (3-6)        (4)             (4)            (1)         (2)
```

| Layer        | Definition                                                                        | Example in this repo                         |
| ------------ | --------------------------------------------------------------------------------- | -------------------------------------------- |
| **Atom**     | The smallest UI unit. A single HTML element + design tokens. No composition.      | `Button`, `Input`, `Badge`, `Icon`, `Avatar`, `Label` |
| **Molecule** | A small group of atoms working together as one UI "thing".                        | `SearchBar`, `PetCard`, `Tag`, `FormField`   |
| **Organism** | A distinct section of an interface that may compose molecules + atoms.            | `Header`, `Footer`, `PetGallery`, `PetFilters` |
| **Template** | A page-level skeleton. *Defines where things go, not what they are*.              | `MainLayout`                                 |
| **Page**     | A template filled with real content. The only place that knows the domain deeply. | `HomePage`, `AdoptionFormPage`                |

### Why use it?

- **Reusable** — Redesign a `Button` once; every page updates.
- **Scalable** — Easy to add a new molecule without re-thinking the system.
- **Tooling-friendly** — Each layer maps cleanly to design tokens / Storybook /
  Cosmos fixtures.
- **Clear ownership** — Designers own atoms & tokens; engineers compose
  organisms & pages.

### The rule of thumb

> If a component can be built using *only* smaller components from lower
> layers, it belongs at the next layer up.

If you're staring at a folder and unsure "is this an atom or molecule?",
ask: **"Does it compose other components from this design system?"**
- **No** → atom.
- **Yes, but barely** (2-3 atoms, one purpose) → molecule.
- **Yes, with structure** (a distinct section) → organism.
- **Yes, plus slots for content** → template.
- **Yes, with real data** → page.

---

## 🚀 Getting started

```bash
cd adopt-pet-ds
pnpm install
```

### Two apps, one codebase

| Script                | What it does                                                              | Open                       |
| --------------------- | ------------------------------------------------------------------------- | -------------------------- |
| `pnpm dev`            | Vite serves the **showcase** app (real pages, navigation, demo data).     | http://localhost:5173      |
| `pnpm cosmos`         | **React Cosmos** playground — every component in isolation, with fixtures | http://localhost:5000      |
| `pnpm build`          | Typecheck (`tsc --noEmit`) + production build of the showcase app.        | `/dist`                    |
| `pnpm typecheck`      | `tsc --noEmit` (strict mode) — the verification step.                     | —                          |
| `pnpm preview`        | Serve a built bundle.                                                     | http://localhost:4173      |

> Tip: run Cosmos in one terminal and `dev` in another so you can see the
> same component both in a fixture *and* in a real page side-by-side.

---

## 🧬 React Cosmos — what it is & how to use it

[React Cosmos](https://reactcosmos.org) is a *sandbox for developing and
testing UI components in isolation*. It gives you a tree of "fixtures" on
the left and a live preview on the right.

### Why use Cosmos with Atomic Design?

- Every **atom, molecule, organism, template, page** gets a fixture.
- A designer can tweak a Button in isolation → all pages inherit the change.
- A reviewer can browse every state of every component without booting the
  whole app.
- New team members onboard by *reading the fixture tree*.

### How a fixture works

A fixture is just a `.fixture.tsx` file colocated with the component it
documents. React Cosmos auto-discovers them via the pattern
`**/__fixtures__/*.fixture.tsx` (set in `cosmos.config.json`).

```tsx
// src/components/molecules/PetCard/__fixtures__/PetCard.fixture.tsx
import PetCard from '../PetCard';

const SAMPLE_PET = {
  name: 'Mochi',
  breed: 'Shiba Inu',
  age: '2 yrs',
  status: 'available',
  image: 'https://...'
};

// 👉 Each NAMED export becomes a separate item in Cosmos's tree.
// A "default" export is what the component renders when first opened.
export const Available = <PetCard pet={{ ...SAMPLE_PET, status: 'available' }} />;
export const Pending   = <PetCard pet={{ ...SAMPLE_PET, status: 'pending'   }} />;
export const Adopted   = <PetCard pet={{ ...SAMPLE_PET, status: 'adopted'   }} />;

export default Available;
```

In the Cosmos UI, the tree shows:

```
atoms
  Avatar
    Avatar
  Badge
    Badge
  Button
    AllVariants
    Primary
  ...
molecules
  PetCard
    Available     ← default
    Pending
    Adopted
  ...
organisms
  ...
```

### What this project gives you

Open **http://localhost:5000** after `pnpm cosmos` and you'll find:

- **7 atom fixtures** — every visual state of every atom.
- **4 molecule fixtures** — composed atoms in real patterns.
- **4 organism fixtures** — full sections in isolation.
- **1 template fixture** — the page chrome, slot ready.
- **2 page fixtures** — full pages with the layout, ready for design QA.

---

## 🌳 Project layout

```
adopt-pet-ds/
├── cosmos.config.json        ← React Cosmos config
├── vite.config.ts            ← Vite config
└── src/
    ├── styles/
    │   └── theme.css         ← Design tokens (the source of truth)
    ├── index.css             ← Tailwind entry for the showcase app
    ├── cosmos.css            ← Tailwind entry for Cosmos fixtures
    ├── main.tsx              ← App entry (showcase mode)
    ├── App.tsx               ← Tiny "router" between Home / Adoption form
    ├── data/
    │   └── pets.ts           ← Shared mock data (also used by fixtures)
    └── components/
        ├── atoms/                        ← Layer 1
        │   ├── Button/
        │   │   ├── Button.tsx
        │   │   └── __fixtures__/Primary.fixture.tsx
        │   │   └── __fixtures__/AllVariants.fixture.tsx
        │   ├── Input/, Label/, Badge/, Avatar/, Icon/
        │   └── index.ts                 ← public exports
        ├── molecules/                    ← Layer 2
        │   ├── SearchBar/
        │   ├── PetCard/
        │   ├── Tag/
        │   ├── FormField/
        │   └── index.ts
        ├── organisms/                    ← Layer 3
        │   ├── Header/
        │   ├── Footer/
        │   ├── PetFilters/
        │   ├── PetGallery/
        │   └── index.ts
        ├── templates/                    ← Layer 4
        │   ├── MainLayout/
        │   └── index.ts
        └── pages/                        ← Layer 5
            ├── HomePage/
            ├── AdoptionFormPage/
            └── index.ts
```

### The "**public surface**" pattern

Every layer has an `index.ts` file that re-exports its components. Lower
layers NEVER reach into another layer's internal folder — they go through
the barrel. This is how you keep the system from becoming spaghetti.

```js
// ✅ Good — molecules imports from atoms/index.ts
import { Button, Input, Icon } from '../../atoms';

// ❌ Bad — molecules reaches into atoms/Button/Button.tsx
import Button from '../../atoms/Button/Button';
```

If you ever refactor an atom's file structure, no molecule breaks — only
the barrel changes.

---

## 🎨 Design tokens

All visual decisions live in `src/styles/theme.css` as Tailwind 4 `@theme`
tokens (CSS-first — there is no `tailwind.config.js`). **Never hard-code a
color or font in a component.** Each variable becomes a utility class
(e.g. `--color-brand-primary` → `bg-brand-primary`).

```css
@theme {
  --color-brand-primary: #ff7a59;
  --color-accent-cream: #fff8f1;
  --color-accent-bark: #4a3b30;
  --font-display: 'Fredoka', sans-serif;
  --text-heading: /* size + line-height + weight baked in */;
  /* ... surface & state colors, radii, shadows */
}
```

The type scale is semantic tokens too (`text-display-lg`, `text-display`,
`text-heading`, `text-subheading`, `text-eyebrow`, …) — typography is
tokens, not a wrapper component.

To rebrand the whole system, change those values — every component updates.

---

## 🪲 Common gotcha: "fixtures load but with no styles"

If your fixtures render but the layout is **completely unstyled** — raw HTML
buttons, un-sized images, no colors — you're hitting the most common
React-Cosmos-+-Tailwind pitfall:

> The Cosmos Vite plugin **replaces your `main.tsx`** with a tiny virtual
> module. Your `import './index.css'` line at the top of `main.tsx`
> disappears — so Tailwind never gets loaded into the fixture iframe.

**Fix:** tell Cosmos to import your CSS as a *global import* before any
fixture loads.

1. Add a `src/cosmos.css` (or reuse `src/index.css`) that does
   `@import "tailwindcss";` plus the theme tokens.
2. In `cosmos.config.json`:
   ```json
   "globalImports": ["./src/cosmos.css"]
   ```

Cosmos now embeds `import "/src/cosmos.css"` at the top of its generated
imports module, which Vite processes through PostCSS → Tailwind JIT, then
injects the compiled CSS into the iframe **before** the first fixture
renders. This repo already has it wired up — see `cosmos.config.json` and
`src/cosmos.css`.

---

## 🧪 Learning exercises — try these!

1. **Swap the brand color.** Change `--color-brand-primary` in
   `src/styles/theme.css` to `#3B82F6` and watch every button, badge, and
   hero shift instantly.

2. **Add a new atom.** Create `src/components/atoms/Spinner/Spinner.tsx` with
   a `__fixtures__/Spinner.fixture.tsx`. Re-run `pnpm cosmos` and it's
   there in the tree. *Auto-discovery is the magic.*

3. **Add a "Loading..." state to PetCard.**
   Extend the molecule's fixture list with a `Loading` named export. Have a
   dev compare the empty vs. populated state.

4. **Build a new page.** Create
   `src/components/pages/ShelterPage/ShelterPage.tsx`. Use organisms like
   `Header`, `PetFilters`, `PetGallery`. Use the *MainLayout* template.
   Wire it into `App.tsx` next to the others.

5. **Use the design tokens.** Pick a token, then grep
   for `bg-[#` or `text-[#` — you should find ZERO matches outside
   `theme.css`. That's what guarantees consistency.

6. **Promote an atom to a molecule.** Add the `Icon` atom inside the
   `Button` component. Notice how `Button` immediately becomes a molecule
   in your mental model. Update the comment at the top of its file!

---

## 📝 Conventions used in this project

- **Default exports for components**, named exports for fixtures.
- **TypeScript interfaces for props** (strict mode) — props extend the native
  element's attributes (e.g. `ButtonHTMLAttributes<HTMLButtonElement>`).
- **Tailwind utility classes inline**, no CSS Modules or styled-components
  — tokens do all the heavy lifting.
- **Each layer has an `index.ts` barrel** for clean public APIs.
- **Co-located `__fixtures__/` directory** so fixtures live with their
  component.
- **"Educational JSDoc" at the top of every component file** explaining
  *why* something belongs to its layer.

---

## 🐕 What's next?

This is a starting point. Real production systems usually add:

- **A decorator** (Cosmos's `cosmos.decorator.tsx` at the project root) to
  inject global providers like React Query, Router, Theme.
- **Snapshot tests** via `react-cosmos` `vitest` integration.
- **CI integration** that runs Cosmos export as a static site on every PR.
- **Storybook migration** if a team is more comfortable with that ecosystem.

Have fun with it. 🐾
