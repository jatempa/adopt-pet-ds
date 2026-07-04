/**
 * Molecule: Tag
 * ----------------------------------------------------------------------------
 * A clickable filter chip — an Icon + a label, behaving like a toggle button.
 * Composed of 2 atoms (Icon + Button-as-base) but exposed as its own thing
 * with its own contract (selected / onToggle).
 */
import PropTypes from 'prop-types';
import { Button, Icon } from '../../atoms';

export default function Tag({
  label,
  selected = false,
  onToggle,
  icon = null,
  className = ''
}) {
  return (
    <Button
      variant={selected ? 'primary' : 'secondary'}
      size="sm"
      onClick={() => onToggle?.(label)}
      className={[
        'normal-case tracking-normal',
        selected ? '' : 'hover:bg-brand-secondary hover:text-white',
        className
      ].join(' ')}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      <span>{label}</span>
    </Button>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string
};
