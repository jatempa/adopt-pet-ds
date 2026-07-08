/**
 * Atom: Radio
 * ----------------------------------------------------------------------------
 * A styled native <input type="radio">. Same design as Checkbox: keep the
 * native control, brand it via the accent-color token, and let the optional
 * `label` prop provide the wrapping <label> the pattern requires.
 *
 * Grouping (shared `name`, "one of many" state) is the CALLER's concern —
 * a RadioGroup would be a molecule composed of these atoms.
 */
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text rendered inside the wrapping <label>, after the dot. */
  label?: ReactNode;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, disabled = false, className, ...rest },
  ref
) {
  const dot = (
    <input
      ref={ref}
      type="radio"
      disabled={disabled}
      className={cn(
        'h-4 w-4 shrink-0 border-border-strong accent-brand-primary ds-focus-ring',
        !label && disabled && 'cursor-not-allowed opacity-60',
        !label && className
      )}
      {...rest}
    />
  );

  if (!label) return dot;

  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 text-sm text-accent-bark',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
    >
      {dot}
      {label}
    </label>
  );
});

export default Radio;
