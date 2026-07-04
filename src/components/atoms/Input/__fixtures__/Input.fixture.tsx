import Input from '../Input';

export default (
  <div className="flex w-80 flex-col gap-3">
    <Input placeholder="Default state" />
    <Input placeholder="Disabled" disabled />
    <Input placeholder="Invalid" invalid />
    <Input type="email" defaultValue="[email protected]" />
  </div>
);
