/**
 * Organism: PetFilters
 * ----------------------------------------------------------------------------
 * A compound filter bar: species pills + a couple of dropdowns.
 * Demonstrates how state can live *inside* an organism while still being
 * driver-agnostic (the parent page calls `onChange` with a filter object).
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Icon } from '../../atoms';
import { Tag, FormField } from '../../molecules';

export default function PetFilters({ value, onChange }) {
  const [local, setLocal] = useState(value || { species: [], size: '', age: '' });

  const toggleSpecies = (label) => {
    const has = local.species.includes(label);
    const next = has
      ? local.species.filter((s) => s !== label)
      : [...local.species, label];
    const updated = { ...local, species: next };
    setLocal(updated);
    onChange?.(updated);
  };

  const update = (key, val) => {
    const updated = { ...local, [key]: val };
    setLocal(updated);
    onChange?.(updated);
  };

  const reset = () => {
    const cleared = { species: [], size: '', age: '' };
    setLocal(cleared);
    onChange?.(cleared);
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
            selected={local.species.includes(label)}
            onToggle={toggleSpecies}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        <FormField
          id="filter-size"
          label="Size"
          value={local.size}
          onChange={(e) => update('size', e.target.value)}
          placeholder="Any size"
        />
        <FormField
          id="filter-age"
          label="Age"
          value={local.age}
          onChange={(e) => update('age', e.target.value)}
          placeholder="Any age"
        />
        <div className="flex items-end">
          <Button variant="ghost" size="md" onClick={reset} className="w-full">
            Clear filters
          </Button>
        </div>
      </div>
    </section>
  );
}

PetFilters.propTypes = {
  value: PropTypes.shape({
    species: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.string,
    age: PropTypes.string
  }),
  onChange: PropTypes.func
};
