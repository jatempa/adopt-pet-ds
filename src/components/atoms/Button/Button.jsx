/**
 * Atom: Button
 * ----------------------------------------------------------------------------
 * Why is this an ATOM and not a molecule?
 *   • It is the smallest standalone UI unit: a single HTML <button> element
 *     with hard-coded design decisions (color tokens, padding scale, shape).
 *   • It is NOT composed of other components from this design system.
 *     (The leading <Icon> inside a button would already bump it to molecule.)
 *   • It depends only on the Tailwind tokens defined in tailwind.config.js —
 *     change a token, every Button in the app updates.
 *
 * Best practices for an atom:
 *   1. One responsibility: trigger an action on click.
 *   2. Variant props (primary / secondary / ghost), size props (sm / md / lg),
 *      and state props (loading / disabled) — but no opinions about *what*
 *      the action does. That's the caller's job.
 *   3. Props should be a small, stable surface area (easy to learn).
 *   4. Fully self-contained: drop it anywhere in the app and it looks right.
 */
import PropTypes from 'prop-types';

const VARIANTS = {
  // Filled with brand orange — primary call-to-action, e.g. "Adopt me"
  primary:
    'bg-brand-primary text-white hover:bg-brand-primary-hover active:translate-y-px shadow-soft',
  // Outlined — secondary action, e.g. "Learn more"
  secondary:
    'bg-transparent text-brand-secondary border border-brand-secondary hover:bg-brand-secondary hover:text-white',
  // Subtle — low-emphasis action, e.g. "Cancel" in a modal
  ghost:
    'bg-transparent text-accent-bark hover:bg-surface-muted'
};

const SIZES = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base'
};

export default function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  children,
  ...rest
}) {
  // Compose the className defensively. Atoms should NEVER require you to
  // pass `className` — but if you do, your class wins on the right side.
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
    'transition-colors duration-150 ds-focus-ring',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    VARIANTS[variant],
    SIZES[size],
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={classes}
      aria-busy={loading || undefined}
      {...rest}
    >
      {/* Loading is a purely atomic concern: the button changes its
         appearance while waiting for an async action. */}
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden
        />
      ) : null}
      {children}
    </button>
  );
}

// Lightweight runtime validation. We use the (small) `prop-types` shim below
// instead of pulling the heavy `prop-types` package — keeps the bundle tiny.
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};
