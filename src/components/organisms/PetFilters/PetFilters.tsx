/**
 * Organism: PetFilters
 * ----------------------------------------------------------------------------
 * A compound filter bar: species pills + size/age dropdowns.
 * Fully CONTROLLED: the parent owns the filter state and passes it back in
 * via `value`; every interaction calls `onChange` with the next state. No
 * internal state mirror means no way for the UI and the parent to disagree —
 * and the organism stays presentational (renders identically in Cosmos from
 * mock props).
 */
import { Button, Icon } from '../../atoms';
import { Tag, FormField } from '../../molecules';

export interface PetFilterState {
  species: string[];
  size: string;
  age: string;
}

export interface PetFiltersProps {
  value?: PetFilterState;
  onChange?: (value: PetFilterState) => void;
}

const EMPTY_FILTERS: PetFilterState = { species: [], size: '', age: '' };

const SIZE_OPTIONS = [
  { value: 'small', label: 'Small (under 10 kg)' },
  { value: 'medium', label: 'Medium (10–25 kg)' },
  { value: 'large', label: 'Large (over 25 kg)' }
];

const AGE_OPTIONS = [
  { value: 'baby', label: 'Baby' },
  { value: 'young', label: 'Young' },
  { value: 'adult', label: 'Adult' },
  { value: 'senior', label: 'Senior' }
];

export default function PetFilters({
  value = EMPTY_FILTERS,
  onChange
}: PetFiltersProps) {
  const toggleSpecies = (label: string) => {
    const has = value.species.includes(label);
    const next = has
      ? value.species.filter((s) => s !== label)
      : [...value.species, label];
    onChange?.({ ...value, species: next });
  };

  const update = (key: 'size' | 'age', val: string) => {
    onChange?.({ ...value, [key]: val });
  };

  return (
    <section
      aria-label="Filters"
      className="rounded-2xl bg-surface p-4 shadow-soft"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-bark/70">
          <Icon name="filter" size={14} />
          Filter
        </span>
        {['Dog', 'Cat', 'Rabbit', 'Bird'].map((label) => (
          <Tag
            key={label}
            label={label}
            icon={label === 'Dog' || label === 'Cat' ? 'paw' : null}
            selected={value.species.includes(label)}
            onToggle={toggleSpecies}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        <FormField
          id="filter-size"
          label="Size"
          value={value.size}
          onChange={(e) => update('size', e.target.value)}
          options={SIZE_OPTIONS}
          placeholder="Any size"
        />
        <FormField
          id="filter-age"
          label="Age"
          value={value.age}
          onChange={(e) => update('age', e.target.value)}
          options={AGE_OPTIONS}
          placeholder="Any age"
        />
        <div className="flex items-end">
          <Button
            variant="ghost"
            size="md"
            onClick={() => onChange?.(EMPTY_FILTERS)}
            className="w-full"
          >
            Clear filters
          </Button>
        </div>
      </div>
    </section>
  );
}
