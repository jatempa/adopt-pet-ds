/**
 * Organism: Header
 * ----------------------------------------------------------------------------
 * Combines multiple atoms + the SearchBar molecule into the site-wide top
 * navigation. This is the FIRST place in the system where screen-level
 * composition starts showing up.
 *
 * Why an organism?
 *   An organism is a complex composition that forms a distinct section of
 *   an interface. The Header is exactly that: brand mark + nav + search +
 *   (optional) CTA. It can stand alone and be dropped into any template.
 */
import { Icon, Button } from '../../atoms';
import { SearchBar } from '../../molecules';

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderUser {
  name: string;
}

export interface HeaderProps {
  onSearch?: (query: string) => void;
  onCtaClick?: () => void;
  currentUser?: HeaderUser | null;
  links?: NavLink[];
}

const NAV_LINKS: NavLink[] = [
  { href: '#adopt', label: 'Adopt' },
  { href: '#shelters', label: 'Shelters' },
  { href: '#volunteer', label: 'Volunteer' },
  { href: '#about', label: 'About' }
];

export default function Header({
  onSearch,
  onCtaClick,
  currentUser = null,
  links = NAV_LINKS
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-accent-bark/5 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white">
            <Icon name="paw" size={20} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            AdoptPet
          </span>
        </a>

        {/* Nav links (desktop) */}
        <nav className="hidden gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-accent-bark/80 hover:bg-surface-muted hover:text-accent-bark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Search (desktop) */}
        <div className="ml-auto hidden max-w-sm flex-1 md:block">
          <SearchBar onSubmit={onSearch} placeholder="Search pets, breeds..." />
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          {currentUser ? (
            <span className="hidden text-sm text-accent-bark/70 md:inline">
              Hi, {currentUser.name}
            </span>
          ) : null}
          <Button size="sm" onClick={onCtaClick}>
            <Icon name="heart" size={14} />
            Favorites
          </Button>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-accent-bark/5 bg-surface px-6 py-3 md:hidden">
        <SearchBar onSubmit={onSearch} />
      </div>
    </header>
  );
}
