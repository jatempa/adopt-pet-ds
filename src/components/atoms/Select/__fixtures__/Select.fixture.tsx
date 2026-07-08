import Select from '../Select';

const options = (
  <>
    <option value="small">Small (under 10 kg)</option>
    <option value="medium">Medium (10–25 kg)</option>
    <option value="large">Large (over 25 kg)</option>
  </>
);

export default (
  <div className="flex w-80 flex-col gap-3">
    <Select placeholder="Any size" aria-label="Size">
      {options}
    </Select>
    <Select defaultValue="medium" aria-label="Size, preselected">
      {options}
    </Select>
    <Select placeholder="Invalid" invalid aria-label="Size, invalid">
      {options}
    </Select>
    <Select placeholder="Disabled" disabled aria-label="Size, disabled">
      {options}
    </Select>
  </div>
);
