/**
 * Atom: Avatar
 * ----------------------------------------------------------------------------
 * Shows a circular user/pet image. Falls back to the initials if the image
 * fails to load — this is a *defensive* detail unique to image atoms.
 *
 * Atomic because: ONE element, ONE concern (a small visual identifier).
 */
import PropTypes from 'prop-types';
import { useState } from 'react';

const SIZES = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-12 w-12 text-sm',
  lg: 'h-20 w-20 text-lg',
  xl: 'h-32 w-32 text-2xl'
};

export default function Avatar({
  src,
  alt = '',
  name = '',
  size = 'md',
  className = ''
}) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const classes = [
    'inline-flex items-center justify-center rounded-full overflow-hidden',
    'bg-brand-secondary/20 text-brand-secondary font-semibold',
    SIZES[size],
    className
  ]
    .filter(Boolean)
    .join(' ');

  if (!src || errored) {
    return (
      <div className={classes} aria-label={alt || name}>
        {initials || '🐾'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || name}
      onError={() => setErrored(true)}
      className={`${classes} object-cover`}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string
};
