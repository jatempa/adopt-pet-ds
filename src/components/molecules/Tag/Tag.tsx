/**
 * Molecule: Tag
 * ----------------------------------------------------------------------------
 * A clickable filter chip — an Icon + a label, behaving like a toggle button.
 * Composed of 2 atoms (Icon + Button-as-base) but exposed as its own thing
 * with its own contract (selected / onToggle).
 */
import { Button, Icon } from '../../atoms';
import type { IconName } from '../../atoms/Icon/Icon';
import { cn } from '../../../lib/cn';

export interface TagProps {
  label: string;
  selected?: boolean;
  onToggle?: (label: string) => void;
  icon?: IconName | null;
  className?: string;
}

export default function Tag({
  label,
  selected = false,
  onToggle,
  icon = null,
  className
}: TagProps) {
  return (
    <Button
      variant={selected ? 'primary' : 'secondary'}
      size="sm"
      onClick={() => onToggle?.(label)}
      className={cn(
        'normal-case tracking-normal',
        !selected && 'hover:bg-brand-secondary hover:text-white',
        className
      )}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      <span>{label}</span>
    </Button>
  );
}
