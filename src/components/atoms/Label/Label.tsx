/**
 * Atom: Label
 * ----------------------------------------------------------------------------
 * A text-only typographic atom. It maps to an HTML <label> so screen readers
 * wire it up to its input automatically (via htmlFor + id).
 *
 * What makes it atomic?
 *   It renders ONE element with ONE responsibility: label things.
 *   It has no composition from other design system pieces.
 */
import type { LabelHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export default function Label({
  htmlFor,
  required = false,
  className,
  children,
  ...rest
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('block text-sm font-medium text-accent-bark', className)}
      {...rest}
    >
      {children}
      {required ? (
        <span className="ml-1 text-state-danger" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}
