/**
 * Organism: PetGallery
 * ----------------------------------------------------------------------------
 * Renders a grid of PetCard molecules, with built-in empty/loading states.
 *
 * Why this is an organism, not a page:
 *   • It does not own navigation.
 *   • It does not fetch data (it accepts `pets` as a prop).
 *   • It IS a recognisable, reusable section ("a gallery of cards").
 */
import { Icon } from '../../atoms';
import { PetCard } from '../../molecules';
import type { Pet } from '../../../data/pets';

export interface PetGalleryProps {
  pets?: Pet[];
  onAdopt?: (pet: Pet) => void;
  onViewDetails?: (pet: Pet) => void;
  loading?: boolean;
  emptyMessage?: string;
}

export default function PetGallery({
  pets = [],
  onAdopt,
  onViewDetails,
  loading = false,
  emptyMessage = 'No pets match your filters yet — try clearing them!'
}: PetGalleryProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-2xl bg-surface shadow-soft"
          />
        ))}
      </div>
    );
  }

  if (pets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface p-12 text-center shadow-soft">
        <span className="text-brand-primary">
          <Icon name="paw" size={40} />
        </span>
        <p className="max-w-md text-sm text-accent-bark/70">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet) => (
        <PetCard
          key={pet.id ?? pet.name}
          pet={pet}
          onAdopt={() => onAdopt?.(pet)}
          onViewDetails={() => onViewDetails?.(pet)}
        />
      ))}
    </div>
  );
}
