/**
 * Cosmos fixture: Button → All Variants
 * Quick visual comparison of all visual states. Useful for design QA passes.
 */
import Button from '../Button';

export default (
  <div className="flex flex-wrap items-center gap-3">
    <Button variant="primary">Adopt me</Button>
    <Button variant="secondary">Learn more</Button>
    <Button variant="ghost">Cancel</Button>
    <Button disabled>Unavailable</Button>
    <Button loading>Saving</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
