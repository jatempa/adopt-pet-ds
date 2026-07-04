import PetGallery from '../PetGallery';
import { PETS, generatePets } from '../../../../data/pets';

export const WithPets = <PetGallery pets={PETS} />;

export const Empty = (
  <PetGallery
    pets={[]}
    emptyMessage="No puppies in this category yet — check back soon!"
  />
);

export const Loading = <PetGallery pets={[]} loading />;

// Stress test: 500 generated cards in one grid. Use this fixture to profile
// render time, scroll jank, and layout cost at scale.
export const Performance = <PetGallery pets={generatePets(500)} />;

export default WithPets;
