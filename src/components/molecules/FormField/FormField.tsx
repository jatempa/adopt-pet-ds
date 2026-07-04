/**
 * Molecule: FormField
 * ----------------------------------------------------------------------------
 * A label + input + optional helper/error message. This is one of the most
 * useful molecules — every form in the app should reach for it instead of
 * wiring Label & Input manually.
 *
 * Why a molecule?
 *   It bundles 3 atoms (Label, Input, Badge-as-text) into a unit that
 *   handles the standard "field with caption" pattern. The error/hint logic
 *   is encapsulated — *no one else* needs to know about it.
 */
import type { ChangeEventHandler } from 'react';
import { Label, Input } from '../../atoms';
import { cn } from '../../../lib/cn';

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  hint?: string;
  disabled?: boolean;
  className?: string;
}

export default function FormField({
  id,
  label,
  required = false,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  hint,
  disabled = false,
  className
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        invalid={Boolean(error)}
        disabled={disabled}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
      />
      {hint && !error ? (
        <p id={hintId} className="text-xs text-accent-bark/60">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs font-medium text-state-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
