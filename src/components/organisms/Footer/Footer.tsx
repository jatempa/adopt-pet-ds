/**
 * Organism: Footer
 * ----------------------------------------------------------------------------
 * A multi-column site footer. Mostly presentational, with Icon + Avatar atoms.
 * Demonstrates that an organism does not need to be interactive.
 */
import { Icon } from '../../atoms';

export interface FooterSection {
  title: string;
  links: string[];
}

export interface FooterProps {
  sections?: FooterSection[];
}

const DEFAULT_SECTIONS: FooterSection[] = [
  {
    title: 'Adopt',
    links: ['Browse pets', 'Adoption guide', 'Success stories']
  },
  {
    title: 'Help',
    links: ['Volunteer', 'Donate', 'Foster a pet']
  },
  {
    title: 'About',
    links: ['Our mission', 'Press', 'Contact us']
  }
];

export default function Footer({ sections }: FooterProps) {
  const cols = sections || DEFAULT_SECTIONS;

  return (
    <footer className="mt-24 border-t border-accent-bark/10 bg-surface-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-primary text-white">
              <Icon name="paw" size={16} />
            </span>
            <span className="font-display text-base font-semibold">
              AdoptPet
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-accent-bark/70">
            Bringing paws and people together, one adoption at a time.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-bark/80">
              {col.title}
            </h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-accent-bark/70 hover:text-accent-bark"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-accent-bark/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-accent-bark/60">
          © {new Date().getFullYear()} AdoptPet Design System — built with React,
          Vite, Tailwind & React Cosmos.
        </div>
      </div>
    </footer>
  );
}
