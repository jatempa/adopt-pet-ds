/**
 * Template: MainLayout
 * ----------------------------------------------------------------------------
 * Page-chrome template: a sticky Header + main content slot + Footer.
 * Templates are page skeletons — they define *where* things go, not *what*
 * goes there. A page is just a template with real content slotted in.
 */
import PropTypes from 'prop-types';
import { Header, Footer } from '../../organisms';

export default function MainLayout({
  children,
  onSearch,
  onCtaClick,
  currentUser = null
}) {
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

MainLayout.propTypes = {
  children: PropTypes.node,
  onSearch: PropTypes.func,
  onCtaClick: PropTypes.func,
  currentUser: PropTypes.shape({ name: PropTypes.string })
};
