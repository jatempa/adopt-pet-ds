# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A design system for a pet-adoption web app, organized by Atomic Design (atoms → molecules → organisms → templates → pages). Stack: React 18 + TypeScript + Vite 5 + Tailwind CSS 4 (CSS-first) + React Cosmos 7. Package manager is **pnpm**.

Design tokens live in `src/styles/theme.css`; components are typed with TS interfaces.

## Commands

```bash
pnpm dev        # showcase app at http://localhost:5173
pnpm cosmos     # React Cosmos component playground at http://localhost:5000
pnpm build      # tsc --noEmit && vite build
pnpm typecheck  # tsc --noEmit (strict mode, noUnusedLocals/Parameters)
pnpm preview    # serve the built bundle
```

There are no tests or linter configured; `pnpm typecheck` is the verification step.

## Architecture

### Design tokens (source of truth)

All visual decisions are Tailwind 4 `@theme` tokens in `src/styles/theme.css`: brand/accent/surface/state colors, `--font-display` (Fredoka) / `--font-sans` (Inter), a semantic type scale (`text-display-lg`, `text-display`, `text-display-sm`, `text-heading`, `text-subheading`, `text-eyebrow` — each with line-height/weight/tracking baked in), radii, and `--shadow-soft`. Each variable becomes a utility class (e.g. `--color-brand-primary` → `bg-brand-primary`). Never hard-code colors, fonts, or size+weight combos in components — use the token utilities. Typography is tokens, not a wrapper component. `theme.css` also defines the shared `.ds-focus-ring` utility used by interactive atoms.

### Two CSS entries, same tokens

- `src/index.css` — the showcase app (imported by `main.tsx`).
- `src/cosmos.css` — injected into every Cosmos fixture via `cosmos.config.json → globalImports`, because the Cosmos Vite plugin replaces `main.tsx` with its own entry and would otherwise load no CSS.

Both import `tailwindcss` plus `./styles/theme.css`. If you change global base styles, keep both in sync.

### Atomic layers and the barrel rule

`src/components/{atoms,molecules,organisms,templates,pages}/` — each layer has an `index.ts` barrel that is its only public surface. Cross-layer imports MUST go through the barrel (`import { Button } from '../../atoms'`), never into another layer's inner files. New components must be added to their layer's barrel.

Component conventions:

- Default export for the component; each file opens with an "educational JSDoc" explaining why it belongs to its layer — keep that pattern for new components.
- Variant/size styling uses `cva()` (class-variance-authority) definitions of Tailwind classes with `defaultVariants`, composed via the `cn()` helper (`src/lib/cn.ts`, clsx + tailwind-merge) — e.g. `cn(buttonVariants({ variant, size }), className)` — so a caller-passed `className` predictably wins conflicts.
- Props extend the native element's attributes (e.g. `ButtonHTMLAttributes<HTMLButtonElement>`).

### Fixtures (React Cosmos)

Every component has a co-located `__fixtures__/<Name>.fixture.tsx` (auto-discovered per `cosmos.config.json`). Named exports become separate fixture entries; the default export is the initial view. Shared demo data lives in `src/data/pets.ts` and is used by both fixtures and the showcase app. When adding a component, add a fixture.

`src/__fixtures__/` also holds foundation fixtures (`DesignTokens`, `Typography`) that document the token palette and type scale themselves — update them when tokens change.

### Showcase app

`src/App.tsx` is a tiny state-based "router" between `HomePage` and `AdoptionFormPage` inside `MainLayout` — intentionally no react-router.
