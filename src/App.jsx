/**
 * Showroom App
 * ----------------------------------------------------------------------------
 * Tiny "router" to demonstrate the design system end-to-end. In a real app,
 * you'd reach for react-router or Next.js — but for the design system
 * playground this keeps it framework-agnostic.
 */
import { useState } from 'react';
import { Button } from './components/atoms';
import { MainLayout } from './components/templates';
import { HomePage, AdoptionFormPage } from './components/pages';

const ROUTES = {
  HOME: 'home',
  FORM: 'form'
};

export default function App() {
  const [route, setRoute] = useState(ROUTES.HOME);
  const [petName, setPetName] = useState('Mochi');

  const handleSelect = (pet) => {
    setPetName(pet.name);
    setRoute(ROUTES.FORM);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainLayout
      onSearch={(q) => window.alert(`Searching: ${q}`)}
      onCtaClick={() => window.alert('Favorites page coming soon')}
      currentUser={{ name: 'Alex' }}
    >
      {/* Internal nav so we can flip pages in the showcase */}
      <div className="mb-6 flex gap-2">
        <Button
          variant={route === ROUTES.HOME ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setRoute(ROUTES.HOME)}
        >
          Home
        </Button>
        <Button
          variant={route === ROUTES.FORM ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setRoute(ROUTES.FORM)}
        >
          Adoption form
        </Button>
      </div>

      {route === ROUTES.HOME ? (
        <HomePage
          onSelectPet={handleSelect}
          onSearch={(q) => window.alert(`Searching: ${q}`)}
          onCtaClick={(arg) =>
            window.alert(typeof arg === 'string' ? arg : 'Favorites')
          }
        />
      ) : (
        <AdoptionFormPage petName={petName} />
      )}
    </MainLayout>
  );
}
