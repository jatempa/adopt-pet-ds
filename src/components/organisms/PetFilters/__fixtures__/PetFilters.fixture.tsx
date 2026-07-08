import { useState } from 'react';
import PetFilters, { type PetFilterState } from '../PetFilters';

/* PetFilters is fully controlled, so the fixture plays the parent's role:
   it owns the state and passes it back in. */
export default function ControlledPetFilters() {
  const [filters, setFilters] = useState<PetFilterState>({
    species: ['Dog'],
    size: '',
    age: ''
  });

  return (
    <div className="w-full max-w-3xl">
      <PetFilters value={filters} onChange={setFilters} />
    </div>
  );
}
