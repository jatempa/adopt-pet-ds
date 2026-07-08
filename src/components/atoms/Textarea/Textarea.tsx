/**
 * Atom: Textarea
 * ----------------------------------------------------------------------------
 * The multi-line sibling of Input: same border, radius, focus ring, and
 * invalid/disabled treatment, wrapped around ONE native <textarea>.
 */
import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { invalid = false, rows = 3, disabled = false, className, ...rest },
    ref
  ) {
    const classes = cn(
      'w-full rounded-xl border bg-surface px-3 py-2 text-sm text-accent-bark',
      'placeholder:text-accent-bark/50',
      'transition-colors duration-150 ds-focus-ring',
      invalid
        ? 'border-state-danger focus-visible:ring-state-danger'
        : 'border-border focus:border-brand-primary',
      disabled && 'opacity-60 cursor-not-allowed bg-surface-muted',
      className
    );

    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={classes}
        {...rest}
      />
    );
  }
);

export default Textarea;
