import Checkbox from '../Checkbox';

export default (
  <div className="flex w-80 flex-col gap-3">
    <Checkbox label="I have a yard" />
    <Checkbox label="Checked by default" defaultChecked />
    <Checkbox label="Disabled" disabled />
    <Checkbox label="Disabled + checked" disabled defaultChecked />
    <Checkbox aria-label="Bare checkbox (no label prop)" />
  </div>
);
