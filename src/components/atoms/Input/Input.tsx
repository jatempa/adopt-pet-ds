/**
 * Atom: Input
 * ----------------------------------------------------------------------------
 * Wrap the native <input> with consistent styling, an optional leading/trailing
 * icon slot, and the same focus treatment as the rest of the design system.
 *
 * Why an atom and not a molecule?
 *   It is a thin, single-purpose wrapper around ONE HTML element. Search bars,
 *   email fields with validation, etc. — those that *compose* this Input with
 *   a label and a hint message — are molecules (see FormField.tsx).
 */
import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = 'text', invalid = false, placeholder, disabled = false, className, ...rest },
  ref
) {
  const classes = cn(
    'h-10 w-full rounded-xl border bg-surface px-3 text-sm text-accent-bark',
    'placeholder:text-accent-bark/50',
    'transition-colors duration-150 ds-focus-ring',
    invalid
      ? 'border-state-danger focus-visible:ring-state-danger'
      : 'border-border focus:border-brand-primary',
    disabled && 'opacity-60 cursor-not-allowed bg-surface-muted',
    className
  );

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={classes}
      {...rest}
    />
  );
});

export default Input;
