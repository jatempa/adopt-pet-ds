/**
 * Atom: Checkbox
 * ----------------------------------------------------------------------------
 * A styled native <input type="checkbox">. We keep the native control (rather
 * than rebuilding it with appearance-none + svg) and brand it via the CSS
 * accent-color token, so keyboard behavior, indeterminate state, and screen
 * reader semantics come for free.
 *
 * Why an atom?
 *   Like Input, it wraps ONE interactive HTML element. The optional `label`
 *   prop renders the wrapping <label> the native pattern requires for its
 *   click target / a11y name — text chrome of the control, not composition
 *   (same spirit as Label's required asterisk).
 */
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text rendered inside the wrapping <label>, after the box. */
  label?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, disabled = false, className, ...rest },
  ref
) {
  const box = (
    <input
      ref={ref}
      type="checkbox"
      disabled={disabled}
      className={cn(
        'h-4 w-4 shrink-0 rounded border-border-strong accent-brand-primary ds-focus-ring',
        !label && disabled && 'cursor-not-allowed opacity-60',
        !label && className
      )}
      {...rest}
    />
  );

  if (!label) return box;

  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 text-sm text-accent-bark',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
    >
      {box}
      {label}
    </label>
  );
});

export default Checkbox;
