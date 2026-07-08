import Textarea from '../Textarea';

export default (
  <div className="flex w-80 flex-col gap-3">
    <Textarea placeholder="Tell us about your past pets" aria-label="Default" />
    <Textarea
      defaultValue="We had a golden retriever for 12 years."
      rows={4}
      aria-label="Filled, 4 rows"
    />
    <Textarea placeholder="Invalid" invalid aria-label="Invalid" />
    <Textarea placeholder="Disabled" disabled aria-label="Disabled" />
  </div>
);
