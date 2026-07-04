import PetCard from '../PetCard';
import type { Pet } from '../../../../data/pets';

const SAMPLE_PET: Pet = {
  id: 'demo-pet-1',
  name: 'Mochi',
  breed: 'Shiba Inu',
  age: '2 yrs',
  status: 'available',
  bio: 'Cuddle-trained, expert stick collector, paws-itively delightful.',
  image:
    'https://images.unsplash.com/photo-1568393691080-b254a6d2af5a?w=600&q=80&auto=format',
  avatar:
    'https://images.unsplash.com/photo-1568393691080-b254a6d2af5a?w=120&q=80&auto=format'
};

export const Available = (
  <div className="w-72">
    <PetCard pet={{ ...SAMPLE_PET, status: 'available' }} />
  </div>
);

export const Pending = (
  <div className="w-72">
    <PetCard pet={{ ...SAMPLE_PET, status: 'pending' }} />
  </div>
);

export const Adopted = (
  <div className="w-72">
    <PetCard pet={{ ...SAMPLE_PET, status: 'adopted' }} />
  </div>
);

export const NoImage = (
  <div className="w-72">
    <PetCard pet={{ ...SAMPLE_PET, image: null, avatar: null }} />
  </div>
);

export default Available;
