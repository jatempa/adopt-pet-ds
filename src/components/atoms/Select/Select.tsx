/**
 * Atom: Select
 * ----------------------------------------------------------------------------
 * A styled native <select> matching Input's look (height, radius, border,
 * focus ring). Options come through as regular <option> children so the atom
 * stays a thin wrapper over ONE form control; the decorative chevron replaces
 * the browser's default arrow (appearance-none) — chrome of the control,
 * like Input's icon slot.
 */
import { forwardRef, type SelectHTMLAttributes } from 'react';
import Icon from '../Icon/Icon';
import { cn } from '../../../lib/cn';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  /** Rendered as an empty-value first option, mirroring Input's placeholder. */
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { invalid = false, placeholder, disabled = false, className, children, ...rest },
  ref
) {
  const classes = cn(
    'h-10 w-full appearance-none rounded-xl border bg-surface pl-3 pr-9 text-sm text-accent-bark',
    'transition-colors duration-150 ds-focus-ring',
    invalid
      ? 'border-state-danger focus-visible:ring-state-danger'
      : 'border-border focus:border-brand-primary',
    disabled && 'opacity-60 cursor-not-allowed bg-surface-muted'
  );

  return (
    <span className={cn('relative block', className)}>
      <select
        ref={ref}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={classes}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {children}
      </select>
      <Icon
        name="chevron-down"
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent-bark/60"
      />
    </span>
  );
});

export default Select;
