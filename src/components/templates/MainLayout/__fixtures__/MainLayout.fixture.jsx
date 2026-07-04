import MainLayout from '../MainLayout';

export default (
  <MainLayout>
    <div className="rounded-2xl bg-surface p-8 shadow-soft">
      <h1 className="font-display text-3xl">A page-slot example</h1>
      <p className="mt-3 text-accent-bark/70">
        Real page content goes here, but the chrome (header + footer) comes from
        the MainLayout template.
      </p>
    </div>
  </MainLayout>
);
