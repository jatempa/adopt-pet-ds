/**
 * Template: MainLayout
 * ----------------------------------------------------------------------------
 * Page-chrome template: a sticky Header + main content slot + Footer.
 * Templates are page skeletons — they define *where* things go, not *what*
 * goes there. A page is just a template with real content slotted in.
 */
import type { ReactNode } from 'react';
import { Header, Footer } from '../../organisms';
import type { HeaderUser } from '../../organisms/Header/Header';

export interface MainLayoutProps {
  children?: ReactNode;
  onSearch?: (query: string) => void;
  onCtaClick?: () => void;
  currentUser?: HeaderUser | null;
}

export default function MainLayout({
  children,
  onSearch,
  onCtaClick,
  currentUser = null
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-accent-cream">
      <Header
        onSearch={onSearch}
        onCtaClick={onCtaClick}
        currentUser={currentUser}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
