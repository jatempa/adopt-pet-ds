import Radio from '../Radio';

export default (
  <fieldset className="flex w-80 flex-col gap-3">
    <legend className="mb-2 text-sm font-medium text-accent-bark">
      What is your home like?
    </legend>
    <Radio name="home" value="apartment" label="Apartment" defaultChecked />
    <Radio name="home" value="house" label="House" />
    <Radio name="home" value="farm" label="Farm or acreage" />
    <Radio name="home" value="boat" label="Houseboat (disabled)" disabled />
  </fieldset>
);
