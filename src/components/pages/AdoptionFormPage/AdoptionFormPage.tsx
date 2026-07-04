/**
 * Page: AdoptionFormPage
 * ----------------------------------------------------------------------------
 * A second page example — demonstrates the reusability of design-system pieces:
 * the SAME atoms/molecules show up here. The page-level state models a
 * multi-step adoption form.
 */
import { useState, type ChangeEvent } from 'react';
import { Button, Icon } from '../../atoms';
import { FormField } from '../../molecules';
import { cn } from '../../../lib/cn';

export interface AdoptionFormPageProps {
  petName?: string;
}

interface AdoptionForm {
  name: string;
  email: string;
  phone: string;
  homeType: string;
  hasYard: boolean;
  experience: string;
}

type FormErrors = Partial<Record<'name' | 'email' | 'phone', string>>;

export default function AdoptionFormPage({
  petName = 'your new friend'
}: AdoptionFormPageProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AdoptionForm>({
    name: '',
    email: '',
    phone: '',
    homeType: '',
    hasYard: false,
    experience: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const update =
    (k: keyof AdoptionForm) => (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setForm((s) => ({ ...s, [k]: v }));
    };

  const validateStep1 = () => {
    const next: FormErrors = {};
    if (!form.name) next.name = 'Please tell us your name.';
    if (!form.email || !form.email.includes('@'))
      next.email = 'A valid email helps us stay in touch.';
    if (!form.phone) next.phone = 'A phone number is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const next = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((s) => Math.min(3, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <section className="mx-auto max-w-2xl">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold">Adopt {petName}</h1>
        <p className="mt-2 text-accent-bark/70">
          Step {step} of 3 — takes about 2 minutes.
        </p>
      </header>

      {/* Progress */}
      <div className="mb-8 flex gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              'h-2 flex-1 rounded-full',
              i <= step ? 'bg-brand-primary' : 'bg-surface-muted'
            )}
          />
        ))}
      </div>

      <div className="rounded-2xl bg-surface p-6 shadow-soft">
        {step === 1 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              id="name"
              label="Your full name"
              required
              value={form.name}
              onChange={update('name')}
              error={errors.name}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              error={errors.email}
            />
            <FormField
              id="phone"
              label="Phone"
              required
              value={form.phone}
              onChange={update('phone')}
              error={errors.phone}
              className="md:col-span-2"
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              id="home"
              label="What is your home like?"
              value={form.homeType}
              onChange={update('homeType')}
              placeholder="Apartment, house, etc."
            />
            <label className="flex items-center gap-2 self-end text-sm">
              <input
                type="checkbox"
                checked={form.hasYard}
                onChange={update('hasYard')}
                className="h-4 w-4 rounded border-accent-bark/30 text-brand-primary"
              />
              I have a yard
            </label>
            <FormField
              id="exp"
              label="Pet experience"
              value={form.experience}
              onChange={update('experience')}
              placeholder="Tell us about your past pets"
              className="md:col-span-2"
            />
          </div>
        ) : null}

        {step === 3 ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="text-brand-primary">
              <Icon name="heart" size={36} />
            </span>
            <h3 className="font-display text-xl">You're all set!</h3>
            <p className="max-w-md text-sm text-accent-bark/70">
              We'll review your application and reach out within 24 hours. Thank
              you for choosing to adopt, not shop.
            </p>
          </div>
        ) : null}

        <div className="mt-6 flex justify-between">
          <Button variant="ghost" onClick={back} disabled={step === 1}>
            Back
          </Button>
          {step < 3 ? (
            <Button onClick={next}>
              Continue
              <Icon name="arrow-right" size={14} />
            </Button>
          ) : (
            <Button onClick={() => alert('Application submitted!')}>
              Submit application
              <Icon name="check" size={14} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
