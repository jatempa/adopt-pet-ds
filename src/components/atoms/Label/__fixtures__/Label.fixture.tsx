import Label from '../Label';

export default (
  <div className="flex flex-col gap-3">
    <Label htmlFor="example">Default label</Label>
    <Label htmlFor="example" required>
      Required field
    </Label>
    <Label htmlFor="example" className="text-brand-primary">
      Custom-styled label
    </Label>
  </div>
);
