/**
 * Page: HomePage
 * ----------------------------------------------------------------------------
 * A page is a TEMPLATE filled with concrete content. It composes organisms,
 * reads from data sources, holds page-level state (e.g. filters), and
 * orchestrates navigation. It is the only place in the system that "knows
 * too much" — and that's intentional.
 *
 * Uses PETS so the gallery grid gets
 * exercised at a realistic scale for performance testing.
 */
import { useMemo, useState } from 'react';
import { Button, Icon } from '../../atoms';
import { PetFilters, PetGallery } from '../../organisms';
import type { PetFilterState } from '../../organisms/PetFilters/PetFilters';
import { PETS, type Pet } from '../../../data/pets';

export interface HomePageProps {
  onSelectPet?: (pet: Pet) => void;
  onSearch?: (query: string) => void;
  onCtaClick?: (arg?: string) => void;
}

export default function HomePage({ onSelectPet, onSearch, onCtaClick }: HomePageProps) {
  const [filters, setFilters] = useState<PetFilterState>({
    species: [],
    size: '',
    age: ''
  });

  const filteredPets = useMemo(() => {
    return PETS.filter((p) => {
      if (filters.species.length === 0) return true;
      return (
        filters.species.includes(p.breed?.split(' ')[0]) ||
        filters.species.some((s) => p.breed?.toLowerCase().includes(s.toLowerCase()))
      );
    });
  }, [filters]);

  const featured = PETS.filter((p) => p.status === 'available').slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      {/* HERO ------------------------------------------------------ */}
      <section className="grid items-center gap-8 rounded-3xl bg-brand-secondary/10 p-8 md:grid-cols-2 md:p-12">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Find your new <span className="text-brand-primary">best friend</span>.
          </h1>
          <p className="mt-4 max-w-md text-accent-bark/80">
            Hundreds of loving pets are waiting at shelters near you. Browse
            their stories, get matched, and welcome them home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => onCtaClick?.()}>
              Browse pets
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button variant="secondary" size="lg">
              How adoption works
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {featured.map((pet) => (
            <img
              key={pet.id}
              src={pet.image ?? undefined}
              alt={pet.name}
              className="h-28 w-full rounded-2xl object-cover shadow-soft md:h-36"
            />
          ))}
        </div>
      </section>

      {/* BROWSE ---------------------------------------------------- */}
      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">Adoptable pets</h2>
            <p className="text-sm text-accent-bark/70">
              Each one is vaccinated, microchipped, and ready for love.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onSearch?.('all')}>
            View all
            <Icon name="arrow-right" size={14} />
          </Button>
        </div>

        <PetFilters value={filters} onChange={setFilters} />
        <PetGallery
          pets={filteredPets}
          onViewDetails={(pet) => onSelectPet?.(pet)}
          onAdopt={(pet) => onCtaClick?.(`adopt:${pet.id}`)}
        />
      </section>
    </div>
  );
}
