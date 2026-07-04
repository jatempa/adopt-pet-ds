/**
 * Molecule: SearchBar
 * ----------------------------------------------------------------------------
 * A search box composed of THREE atoms: an Icon + Input + Button.
 *
 * Why a molecule?
 *   It combines multiple atoms into a small, reusable UI "thing" that has a
 *   single responsibility (search-submission). The atoms keep working on their
 *   own, but together they communicate one intent.
 *
 * Key Atomic Design principle in action:
 *   If we redesign the Button, the SearchBar updates automatically — BUT the
 *   SearchBar's own layout (icon-on-the-left, button-on-the-right) stays put.
 *   That's the layered separation at work.
 */
import { useState, type FormEvent } from 'react';
import { Icon, Input, Button } from '../../atoms';

export interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  onSubmit?: (value: string) => void;
}

export default function SearchBar({
  placeholder = 'Search adoptable pets...',
  onSubmit,
  defaultValue = ''
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full items-center gap-2 rounded-2xl bg-surface p-2 shadow-soft"
      role="search"
    >
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-accent-bark/60">
          <Icon name="search" size={18} />
        </span>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="pl-10"
          aria-label="Search"
        />
      </div>
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
