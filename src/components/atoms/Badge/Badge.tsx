/**
 * Atom: Badge
 * ----------------------------------------------------------------------------
 * Small, color-coded status indicators (e.g. "Available", "Pending", "Adopted").
 *
 * Atomic because: ONE element, ONE purpose — colour-code a short label.
 *
 * The tones come straight from the brand tokens — using these guarantees
 * that no one ever invents a "fifth random red" for a new feature.
 */
import type { ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export type BadgeTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const TONES: Record<BadgeTone, string> = {
  success: 'bg-state-success/15 text-state-success',
  warning: 'bg-state-warning/15 text-state-warning',
  danger: 'bg-state-danger/15 text-state-danger',
  info: 'bg-state-info/15 text-state-info',
  neutral: 'bg-surface-muted text-accent-bark'
};

export interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children?: ReactNode;
}

export default function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
