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
import PropTypes from 'prop-types';

export default function Label({
  htmlFor,
  required = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'block text-sm font-medium text-accent-bark',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label htmlFor={htmlFor} className={classes} {...rest}>
      {children}
      {required ? (
        <span className="ml-1 text-state-danger" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};
