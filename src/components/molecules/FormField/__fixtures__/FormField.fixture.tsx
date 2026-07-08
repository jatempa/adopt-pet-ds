import FormField from '../FormField';

export default (
  <div className="flex w-80 flex-col gap-4">
    <FormField id="a" label="Email" required value="" onChange={() => {}} />
    <FormField
      id="b"
      label="Phone"
      hint="We'll only contact you about your application."
      value=""
      onChange={() => {}}
    />
    <FormField
      id="c"
      label="Age"
      error="This field is required to continue."
      value=""
      onChange={() => {}}
    />
    <FormField
      id="d"
      label="What is your home like?"
      placeholder="Choose one"
      options={[
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
        { value: 'farm', label: 'Farm or acreage' }
      ]}
      value=""
      onChange={() => {}}
    />
    <FormField
      id="e"
      label="Pet experience"
      multiline
      placeholder="Tell us about your past pets"
      value=""
      onChange={() => {}}
    />
  </div>
);
