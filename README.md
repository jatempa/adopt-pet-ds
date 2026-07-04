# 🐾 AdoptPet — Design System with Atomic Design & React Cosmos

A complete **Design System** for an *Adoption Pet Web*, built as a learning
reference for the **Atomic Design** methodology. Every component is documented
live in **React Cosmos** so you can browse, tweak, and learn from it.

> **Stack:** React 18 · Vite 5 · Tailwind CSS 3 · React Cosmos 7

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
npm install
```

### Two apps, one codebase

| Script                | What it does                                                              | Open                       |
| --------------------- | ------------------------------------------------------------------------- | -------------------------- |
| `npm run dev`         | Vite serves the **showcase** app (real pages, navigation, demo data).     | http://localhost:5173      |
| `npm run cosmos`      | **React Cosmos** playground — every component in isolation, with fixtures | http://localhost:5000      |
| `npm run build`       | Production build of the showcase app.                                     | `/dist`                    |
| `npm run preview`     | Serve a built bundle.                                                     | http://localhost:4173      |

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

A fixture is just a `.fixture.jsx` file colocated with the component it
documents. React Cosmos auto-discovers them via the pattern
`**/__fixtures__/*.fixture.jsx` (set in `cosmos.config.json`).

```jsx
// src/components/molecules/PetCard/__fixtures__/PetCard.fixture.jsx
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

Open **http://localhost:5000** after `npm run cosmos` and you'll find:

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
├── tailwind.config.js        ← Design tokens (the source of truth)
├── vite.config.js            ← Vite config
└── src/
    ├── index.css             ← Tailwind layers + utilities
    ├── main.jsx              ← App entry (showcase mode)
    ├── App.jsx               ← Tiny "router" between Home / Adoption form
    ├── data/
    │   └── pets.js           ← Shared mock data (also used by fixtures)
    └── components/
        ├── atoms/                        ← Layer 1
        │   ├── Button/
        │   │   ├── Button.jsx
        │   │   └── __fixtures__/Primary.fixture.jsx
        │   │   └── __fixtures__/AllVariants.fixture.jsx
        │   ├── Input/, Label/, Badge/, Avatar/, Icon/
        │   └── index.js                 ← public exports
        ├── molecules/                    ← Layer 2
        │   ├── SearchBar/
        │   ├── PetCard/
        │   ├── Tag/
        │   ├── FormField/
        │   └── index.js
        ├── organisms/                    ← Layer 3
        │   ├── Header/
        │   ├── Footer/
        │   ├── PetFilters/
        │   ├── PetGallery/
        │   └── index.js
        ├── templates/                    ← Layer 4
        │   ├── MainLayout/
        │   └── index.js
        └── pages/                        ← Layer 5
            ├── HomePage/
            ├── AdoptionFormPage/
            └── index.js
```

### The "**public surface**" pattern

Every layer has an `index.js` file that re-exports its components. Lower
layers NEVER reach into another layer's internal folder — they go through
the barrel. This is how you keep the system from becoming spaghetti.

```js
// ✅ Good — molecules imports from atoms/index.js
import { Button, Input, Icon } from '../../atoms';

// ❌ Bad — molecules reaches into atoms/Button/Button.jsx
import Button from '../../atoms/Button/Button';
```

If you ever refactor an atom's file structure, no molecule breaks — only
the barrel changes.

---

## 🎨 Design tokens

All visual decisions live in `tailwind.config.js`. **Never hard-code a color
or font in a component.** Always reach for `theme('colors.brand.primary')`
or the matching Tailwind class (e.g. `bg-brand-primary`).

```js
colors: {
  brand:       { primary: '#FF7A59', ... },
  accent:      { cream: '#FFF8F1', bark: '#4A3B30' },
  state:       { success, warning, danger, info }
}
```

To rebrand the whole system, change those values — every component updates.

---

## 🪲 Common gotcha: "fixtures load but with no styles"

If your fixtures render but the layout is **completely unstyled** — raw HTML
buttons, un-sized images, no colors — you're hitting the most common
React-Cosmos-+-Tailwind pitfall:

> The Cosmos Vite plugin **replaces your `main.jsx`** with a tiny virtual
> module. Your `import './index.css'` line at the top of `main.jsx`
> disappears — so Tailwind never gets loaded into the fixture iframe.

**Fix:** tell Cosmos to import your CSS as a *global import* before any
fixture loads.

1. Add a `src/cosmos.css` (or reuse `src/index.css`) containing the
   `@tailwind base/components/utilities` directives.
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

1. **Swap the brand color.** Change `brand.primary` in
   `tailwind.config.js` to `#3B82F6` and watch every button, badge, and hero
   shift instantly.

2. **Add a new atom.** Create `src/components/atoms/Spinner/Spinner.jsx` with
   a `__fixtures__/Spinner.fixture.jsx`. Re-run `npm run cosmos` and it's
   there in the tree. *Auto-discovery is the magic.*

3. **Add a "Loading..." state to PetCard.**
   Extend the molecule's fixture list with a `Loading` named export. Have a
   dev compare the empty vs. populated state.

4. **Build a new page.** Create
   `src/components/pages/ShelterPage/ShelterPage.jsx`. Use organisms like
   `Header`, `PetFilters`, `PetGallery`. Use the *MainLayout* template.
   Wire it into `App.jsx` next to the others.

5. **Use the design tokens.** Pick a token, then grep
   for `bg-[#` or `text-[#` — you should find ZERO matches outside the
   config. That's what guarantees consistency.

6. **Promote an atom to a molecule.** Add the `Icon` atom inside the
   `Button` component. Notice how `Button` immediately becomes a molecule
   in your mental model. Update the comment at the top of its file!

---

## 📝 Conventions used in this project

- **Default exports for components**, named exports for fixtures.
- **PropTypes** (lightweight runtime check — `prop-types` package).
- **Tailwind utility classes inline**, no CSS Modules or styled-components
  — tokens do all the heavy lifting.
- **Each layer has an `index.js` barrel** for clean public APIs.
- **Co-located `__fixtures__/` directory** so fixtures live with their
  component.
- **"Educational JSDoc" at the top of every component file** explaining
  *why* something belongs to its layer.

---

## 🐕 What's next?

This is a starting point. Real production systems usually add:

- **A decorator** (Cosmos's `cosmos.decorator.jsx` at the project root) to
  inject global providers like React Query, Router, Theme.
- **Snapshot tests** via `react-cosmos` `vitest` integration.
- **CI integration** that runs Cosmos export as a static site on every PR.
- **Storybook migration** if a team is more comfortable with that ecosystem.

Have fun with it. 🐾
