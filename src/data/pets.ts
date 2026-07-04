/**
 * Mock pet data — shared between Pages, Fixtures, and Cosmos.
 * In a real app this lives in services/api; for the design system we keep it
 * here so Cosmos fixtures stay deterministic and offline.
 */

export type PetStatus = 'available' | 'pending' | 'adopted';

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  status: PetStatus;
  bio: string;
  image: string | null;
  avatar: string | null;
}

export const PETS: Pet[] = [
  {
    id: 'p1',
    name: 'Mochi',
    breed: 'Shiba Inu',
    age: '2 yrs',
    status: 'available',
    bio: 'Cuddle-trained, expert stick collector, paws-itively delightful.',
    image:
      'https://images.unsplash.com/photo-1568393691080-b254a6d2af5a?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1568393691080-b254a6d2af5a?w=120&q=80&auto=format'
  },
  {
    id: 'p2',
    name: 'Luna',
    breed: 'Domestic Shorthair',
    age: '4 months',
    status: 'available',
    bio: 'A purring machine with a PhD in napping on keyboards.',
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=120&q=80&auto=format'
  },
  {
    id: 'p3',
    name: 'Biscuit',
    breed: 'Golden Retriever',
    age: '3 yrs',
    status: 'pending',
    bio: 'Loves long walks, even longer belly rubs, and the word "walk".',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=120&q=80&auto=format'
  },
  {
    id: 'p4',
    name: 'Pepper',
    breed: 'Mini Lop Rabbit',
    age: '1 yr',
    status: 'available',
    bio: 'Hop, snuffle, repeat. Comes with built-in slippers feet.',
    image:
      'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=120&q=80&auto=format'
  },
  {
    id: 'p5',
    name: 'Kiwi',
    breed: 'Cockatiel',
    age: '6 months',
    status: 'available',
    bio: 'Will whistle your favorite song. May or may not know the words.',
    image:
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=120&q=80&auto=format'
  },
  {
    id: 'p6',
    name: 'Oliver',
    breed: 'Tabby Cat',
    age: '5 yrs',
    status: 'adopted',
    bio: 'Already found his forever human. Soaking up unlimited naps.',
    image:
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&q=80&auto=format',
    avatar:
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=120&q=80&auto=format'
  }
];

/**
 * Deterministic bulk data for stress-test fixtures (e.g. PetGallery
 * "Performance"). Cycles through PETS so no network images beyond the
 * base set are requested.
 */
export function generatePets(count: number): Pet[] {
  return Array.from({ length: count }, (_, i) => {
    const base = PETS[i % PETS.length];
    return {
      ...base,
      id: `gen-${i}`,
      name: `${base.name} #${i + 1}`
    };
  });
}

