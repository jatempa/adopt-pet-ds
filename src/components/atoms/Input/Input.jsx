/**
 * Atom: Input
 * ----------------------------------------------------------------------------
 * Wrap the native <input> with consistent styling, an optional leading/trailing
 * icon slot, and the same focus treatment as the rest of the design system.
 *
 * Why an atom and not a molecule?
 *   It is a thin, single-purpose wrapper around ONE HTML element. Search bars,
 *   email fields with validation, etc. — those that *compose* this Input with
 *   a label and a hint message — are molecules (see FormField.jsx).
 */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    type = 'text',
    invalid = false,
    placeholder,
    disabled = false,
    className = '',
    ...rest
  },
  ref
) {
  const classes = [
    'h-10 w-full rounded-xl border bg-surface px-3 text-sm text-accent-bark',
    'placeholder:text-accent-bark/50',
    'transition-colors duration-150 ds-focus-ring',
    invalid
      ? 'border-state-danger focus-visible:ring-state-danger'
      : 'border-accent-bark/15 focus:border-brand-primary',
    disabled && 'opacity-60 cursor-not-allowed bg-surface-muted',
    className
  ]
    .filter(Boolean)
    .join(' ');

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

Input.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Input;
