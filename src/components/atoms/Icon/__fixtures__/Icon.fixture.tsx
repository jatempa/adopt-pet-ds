import Icon, { ICON_NAMES } from '../Icon';

export default (
  <div className="grid grid-cols-4 gap-4 text-accent-bark">
    {ICON_NAMES.map((name) => (
      <div
        key={name}
        className="flex flex-col items-center gap-1.5 rounded-lg bg-surface p-3 shadow-soft"
      >
        <Icon name={name} size={22} />
        <span className="text-xs">{name}</span>
      </div>
    ))}
  </div>
);
