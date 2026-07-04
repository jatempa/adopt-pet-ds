import PetGallery from '../PetGallery';
import { PETS } from '../../../../data/pets';

export const WithPets = <PetGallery pets={PETS} />;

export const Empty = (
  <PetGallery
    pets={[]}
    emptyMessage="No puppies in this category yet — check back soon!"
  />
);

export const Loading = <PetGallery pets={[]} loading />;

export default WithPets;
