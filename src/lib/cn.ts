/**
 * `cn` — the design system's single class-composition helper.
 * ----------------------------------------------------------------------------
 * clsx        → conditional class logic (`cn('a', isOn && 'b')`)
 * tailwind-merge → resolves Tailwind conflicts so the *last* class wins
 *                  (`cn('px-3', 'px-5')` → 'px-5'), which makes the
 *                  `className` escape hatch on every atom behave predictably.
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
