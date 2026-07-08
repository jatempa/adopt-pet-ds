/**
 * Molecule: FormField
 * ----------------------------------------------------------------------------
 * A label + form control + optional helper/error message. This is one of the
 * most useful molecules — every form in the app should reach for it instead
 * of wiring Label & Input manually.
 *
 * Why a molecule?
 *   It bundles atoms (Label + one of Input/Textarea/Select) into a unit that
 *   handles the standard "field with caption" pattern. The error/hint logic
 *   and aria-describedby wiring are encapsulated — *no one else* needs to
 *   know about them.
 *
 * Choosing the control:
 *   - default            → Input (single-line text; `type` still applies)
 *   - `multiline`        → Textarea
 *   - `options` provided → Select (`placeholder` becomes the empty option)
 */
import type { ChangeEventHandler } from 'react';
import { Label, Input, Textarea, Select } from '../../atoms';
import { cn } from '../../../lib/cn';

export type FormFieldElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<FormFieldElement>;
  error?: string;
  hint?: string;
  disabled?: boolean;
  /** Render a Textarea instead of an Input. */
  multiline?: boolean;
  /** Render a Select with these options instead of an Input. */
  options?: readonly FormFieldOption[];
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
  multiline = false,
  options,
  className
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  const shared = {
    id,
    value,
    onChange,
    invalid: Boolean(error),
    disabled,
    'aria-describedby': [hintId, errorId].filter(Boolean).join(' ') || undefined
  };

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {options ? (
        <Select {...shared} placeholder={placeholder}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      ) : multiline ? (
        <Textarea {...shared} placeholder={placeholder} />
      ) : (
        <Input {...shared} type={type} placeholder={placeholder} />
      )}
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
