/**
 * Atom: Badge
 * ----------------------------------------------------------------------------
 * Small, color-coded status indicators (e.g. "Available", "Pending", "Adopted").
 *
 * Atomic because: ONE element, ONE purpose — colour-code a short label.
 *
 * The 4 tones come straight from the brand tokens — using these guarantees
 * that no one ever invents a "fifth random red" for a new feature.
 */
import PropTypes from 'prop-types';

const TONES = {
  success: 'bg-state-success/15 text-state-success',
  warning: 'bg-state-warning/15 text-state-warning',
  danger: 'bg-state-danger/15 text-state-danger',
  info: 'bg-state-info/15 text-state-info',
  neutral: 'bg-surface-muted text-accent-bark'
};

export default function Badge({ tone = 'neutral', className = '', children }) {
  const classes = [
    'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
    TONES[tone],
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}

Badge.propTypes = {
  tone: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'neutral']),
  className: PropTypes.string,
  children: PropTypes.node
};
