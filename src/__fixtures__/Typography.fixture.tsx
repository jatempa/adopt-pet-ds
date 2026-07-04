/**
 * Cosmos fixture: Foundations → Typography
 * Living reference for the type-scale and font-family tokens defined in
 * src/styles/theme.css. Typography is tokens-only in this system (no wrapper
 * component), so this fixture is where the scale can be seen rendered.
 */

interface TypeStep {
  className: string;
  size: string;
  lineHeight: string;
  weight: string;
  usage: string;
}

const typeScale: TypeStep[] = [
  { className: 'text-display-lg', size: '3rem / 48px', lineHeight: '1.1', weight: '700', usage: 'Hero title, md+ screens' },
  { className: 'text-display', size: '2.25rem / 36px', lineHeight: '1.15', weight: '700', usage: 'Hero title, mobile' },
  { className: 'text-display-sm', size: '1.875rem / 30px', lineHeight: '1.2', weight: '700', usage: 'Secondary page titles' },
  { className: 'text-heading', size: '1.5rem / 24px', lineHeight: '1.3', weight: '700', usage: 'Section headings (h2)' },
  { className: 'text-subheading', size: '1.125rem / 18px', lineHeight: '1.25', weight: 'inherit', usage: 'Card / sub-section titles (h3)' },
  { className: 'text-eyebrow', size: '0.875rem / 14px', lineHeight: '1.4', weight: '600 · tracking 0.05em', usage: 'Small column headings (h4)' },
];

const bodySizes: TypeStep[] = [
  { className: 'text-base', size: '1rem / 16px', lineHeight: '1.5', weight: '400', usage: 'Body copy (Tailwind default)' },
  { className: 'text-sm', size: '0.875rem / 14px', lineHeight: '1.43', weight: '400', usage: 'Secondary copy (Tailwind default)' },
  { className: 'text-xs', size: '0.75rem / 12px', lineHeight: '1.33', weight: '400', usage: 'Captions, meta (Tailwind default)' },
];

const SAMPLE = 'Every pet deserves a loving home';
const PANGRAM = 'The quick brown fox jumps over the lazy dog';
const CHARSET = 'AaBbCcDdEeFfGg 0123456789 ?!&@';

function SpecimenRow({ step, sampleClassName }: { step: TypeStep; sampleClassName: string }) {
  return (
    <div className="border-b border-surface-muted py-5 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-sans text-xs text-accent-bark/60">
        <code className="rounded bg-surface-muted px-1.5 py-0.5 font-semibold text-accent-bark">
          {step.className}
        </code>
        <span>{step.size}</span>
        <span>lh {step.lineHeight}</span>
        <span>weight {step.weight}</span>
        <span className="italic">{step.usage}</span>
      </div>
      <p className={sampleClassName}>{SAMPLE}</p>
    </div>
  );
}

export const TypeScale = (
  <div className="mx-auto max-w-3xl p-8 text-accent-bark">
    <p className="text-eyebrow font-display uppercase text-brand-primary">Foundations</p>
    <h1 className="text-heading mb-6">Type scale</h1>

    {typeScale.map((step) => (
      <SpecimenRow key={step.className} step={step} sampleClassName={`${step.className} font-display`} />
    ))}

    <h2 className="text-eyebrow mt-10 mb-2 uppercase text-accent-bark/60">
      Body sizes — Tailwind defaults
    </h2>
    {bodySizes.map((step) => (
      <SpecimenRow key={step.className} step={step} sampleClassName={`${step.className} font-sans`} />
    ))}
  </div>
);

export const FontFamilies = (
  <div className="mx-auto max-w-3xl space-y-10 p-8 text-accent-bark">
    <div>
      <div className="mb-2 flex flex-wrap items-baseline gap-x-4 font-sans text-xs text-accent-bark/60">
        <code className="rounded bg-surface-muted px-1.5 py-0.5 font-semibold text-accent-bark">
          font-display
        </code>
        <span>Fredoka — headings, friendly &amp; rounded</span>
      </div>
      <p className="font-display text-display-sm">{PANGRAM}</p>
      <p className="font-display mt-2 text-subheading text-accent-bark/70">{CHARSET}</p>
    </div>

    <div>
      <div className="mb-2 flex flex-wrap items-baseline gap-x-4 font-sans text-xs text-accent-bark/60">
        <code className="rounded bg-surface-muted px-1.5 py-0.5 font-semibold text-accent-bark">
          font-sans
        </code>
        <span>Inter — body copy, neutral &amp; legible</span>
      </div>
      <p className="font-sans text-display-sm">{PANGRAM}</p>
      <p className="font-sans mt-2 text-subheading text-accent-bark/70">{CHARSET}</p>
    </div>
  </div>
);

export default TypeScale;
