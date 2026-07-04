/**
 * Cosmos fixture: Foundations → Design Tokens
 * Living reference for the color, radius, and shadow tokens defined in
 * src/styles/theme.css, plus the .ds-focus-ring utility. Class names are
 * written out statically so Tailwind's compiler can see them.
 */

interface ColorToken {
  name: string;
  bgClass: string;
  hex: string;
  /** true for light swatches that need a border to stand out */
  outlined?: boolean;
}

interface ColorGroup {
  title: string;
  note: string;
  tokens: ColorToken[];
}

const colorGroups: ColorGroup[] = [
  {
    title: 'Brand',
    note: 'Warm orange (friendly, energetic) + sage green (growth, wellbeing)',
    tokens: [
      { name: 'brand-primary', bgClass: 'bg-brand-primary', hex: '#FF7A59' },
      { name: 'brand-primary-hover', bgClass: 'bg-brand-primary-hover', hex: '#E5674A' },
      { name: 'brand-secondary', bgClass: 'bg-brand-secondary', hex: '#6FAE8E' },
      { name: 'brand-secondary-hover', bgClass: 'bg-brand-secondary-hover', hex: '#578F71' },
    ],
  },
  {
    title: 'Accents',
    note: 'Soft cream background, cozy brown text',
    tokens: [
      { name: 'accent-cream', bgClass: 'bg-accent-cream', hex: '#FFF8F1', outlined: true },
      { name: 'accent-bark', bgClass: 'bg-accent-bark', hex: '#4A3B30' },
    ],
  },
  {
    title: 'Surfaces',
    note: 'Card and page backgrounds',
    tokens: [
      { name: 'surface', bgClass: 'bg-surface', hex: '#FFFFFF', outlined: true },
      { name: 'surface-muted', bgClass: 'bg-surface-muted', hex: '#F5F1EC', outlined: true },
    ],
  },
  {
    title: 'Semantic states',
    note: 'Feedback: success, warning, danger, info',
    tokens: [
      { name: 'state-success', bgClass: 'bg-state-success', hex: '#22C55E' },
      { name: 'state-warning', bgClass: 'bg-state-warning', hex: '#F59E0B' },
      { name: 'state-danger', bgClass: 'bg-state-danger', hex: '#EF4444' },
      { name: 'state-info', bgClass: 'bg-state-info', hex: '#3B82F6' },
    ],
  },
];

export const Colors = (
  <div className="mx-auto max-w-3xl p-8 text-accent-bark">
    <p className="text-eyebrow font-display uppercase text-brand-primary">Foundations</p>
    <h1 className="text-heading mb-6">Colors</h1>

    <div className="space-y-8">
      {colorGroups.map((group) => (
        <section key={group.title}>
          <h2 className="text-eyebrow uppercase">{group.title}</h2>
          <p className="mb-3 text-sm text-accent-bark/60">{group.note}</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {group.tokens.map((token) => (
              <div key={token.name}>
                <div
                  className={`h-16 rounded-xl ${token.bgClass} ${
                    token.outlined ? 'border border-surface-muted' : ''
                  }`}
                />
                <p className="mt-2 text-xs font-semibold">{token.name}</p>
                <p className="text-xs text-accent-bark/60">{token.hex}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

const radii = [
  { name: 'rounded-lg', className: 'rounded-lg', value: '0.5rem — Tailwind default' },
  { name: 'rounded-xl', className: 'rounded-xl', value: '0.875rem — customized' },
  { name: 'rounded-2xl', className: 'rounded-2xl', value: '1.25rem — customized' },
  { name: 'rounded-3xl', className: 'rounded-3xl', value: '1.5rem — Tailwind default' },
];

export const Radii = (
  <div className="mx-auto max-w-3xl p-8 text-accent-bark">
    <p className="text-eyebrow font-display uppercase text-brand-primary">Foundations</p>
    <h1 className="text-heading mb-2">Radii</h1>
    <p className="mb-6 text-sm text-accent-bark/60">
      xl and 2xl are softened beyond Tailwind&apos;s defaults to feel pet-friendly.
    </p>
    <div className="flex flex-wrap gap-6">
      {radii.map((radius) => (
        <div key={radius.name}>
          <div className={`h-24 w-32 bg-brand-secondary ${radius.className}`} />
          <p className="mt-2 text-xs font-semibold">{radius.name}</p>
          <p className="text-xs text-accent-bark/60">{radius.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Shadows = (
  <div className="mx-auto max-w-3xl p-8 text-accent-bark">
    <p className="text-eyebrow font-display uppercase text-brand-primary">Foundations</p>
    <h1 className="text-heading mb-6">Shadows</h1>
    <div className="rounded-2xl bg-accent-cream p-10">
      <div className="rounded-2xl bg-surface p-6 shadow-soft">
        <p className="text-subheading font-display">shadow-soft</p>
        <p className="mt-1 text-sm text-accent-bark/60">
          0 4px 14px rgba(74, 59, 48, 0.08) — soft, warm shadow for cards on cream surfaces.
        </p>
      </div>
    </div>
  </div>
);

export const FocusRing = (
  <div className="mx-auto max-w-3xl p-8 text-accent-bark">
    <p className="text-eyebrow font-display uppercase text-brand-primary">Foundations</p>
    <h1 className="text-heading mb-2">Focus ring</h1>
    <p className="mb-6 text-sm text-accent-bark/60">
      The <code className="rounded bg-surface-muted px-1 py-0.5">.ds-focus-ring</code> utility —
      press Tab to see the brand-primary focus-visible ring.
    </p>
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        className="ds-focus-ring rounded-xl bg-brand-primary px-4 py-2 font-semibold text-white"
      >
        Focusable button
      </button>
      <input
        type="text"
        placeholder="Focusable input"
        className="ds-focus-ring rounded-xl border border-surface-muted bg-surface px-4 py-2"
      />
    </div>
  </div>
);

export default Colors;
