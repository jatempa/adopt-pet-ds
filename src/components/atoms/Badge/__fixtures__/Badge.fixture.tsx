import Badge from '../Badge';

export default (
  <div className="flex flex-wrap items-center gap-2">
    <Badge tone="success">Available</Badge>
    <Badge tone="warning">Pending</Badge>
    <Badge tone="danger">Urgent</Badge>
    <Badge tone="info">New arrival</Badge>
    <Badge tone="neutral">Adopted</Badge>
  </div>
);
