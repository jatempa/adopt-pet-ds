/**
 * Molecule: PetCard
 * ----------------------------------------------------------------------------
 * The single most important molecule for an adoption site. Composes:
 *   Avatar  → pet headshot
 *   Badge   → adoption status (Available / Pending / Adopted)
 *   Button  → primary action ("Adopt me")
 *
 * Why a molecule?
 *   It binds 3 atoms together into a recognisable "card" pattern. The atoms
 *   stay generic; this molecule is the *first* place where we make a
 *   domain-specific decision (how a pet should be presented).
 *
 * Direction:
 *   The data shape (`pet` prop) lives one level UP in organisms/pages.
 *   Molecules never fetch data — they receive it and render it.
 */
import { Avatar, Badge, Button, Icon } from '../../atoms';
import type { BadgeTone } from '../../atoms/Badge/Badge';
import type { Pet, PetStatus } from '../../../data/pets';
import { cn } from '../../../lib/cn';

const STATUS_TONE: Record<PetStatus, BadgeTone> = {
  available: 'success',
  pending: 'warning',
  adopted: 'neutral'
};

export interface PetCardProps {
  pet: Pet;
  onAdopt?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export default function PetCard({
  pet,
  onAdopt,
  onViewDetails,
  className
}: PetCardProps) {
  const tone = STATUS_TONE[pet.status] ?? 'neutral';
  const statusLabel = pet.status
    ? pet.status.charAt(0).toUpperCase() + pet.status.slice(1)
    : 'Available';

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-soft',
        'transition-transform duration-200 hover:-translate-y-1',
        className
      )}
    >
      {/* Cover image with status overlay */}
      <div className="relative h-44 w-full overflow-hidden bg-surface-muted">
        {pet.image ? (
          <img
            src={pet.image}
            alt={pet.name}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand-primary/60">
            <Icon name="paw" size={56} />
          </div>
        )}
        <div className="absolute right-3 top-3">
          <Badge tone={tone}>{statusLabel}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <Avatar
            src={pet.avatar}
            name={pet.name}
            size="md"
            className="ring-2 ring-brand-secondary/30"
          />
          <div>
            <h3 className="font-display text-subheading">{pet.name}</h3>
            <p className="text-xs text-accent-bark/70">
              {pet.breed} · {pet.age}
            </p>
          </div>
        </div>

        <p className="text-sm text-accent-bark/80 line-clamp-2">{pet.bio}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <Button variant="ghost" size="sm" onClick={onViewDetails}>
            Details
          </Button>
          <Button
            variant="primary"
            size="sm"
            disabled={pet.status !== 'available'}
            onClick={onAdopt}
          >
            Adopt me
          </Button>
        </div>
      </div>
    </article>
  );
}
