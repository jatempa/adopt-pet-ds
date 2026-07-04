/**
 * Atom: Icon
 * ----------------------------------------------------------------------------
 * Renders inline SVG glyphs from a small inline sprite. We embed the sprite
 * directly to avoid an icon library dependency and keep the bundle tiny.
 *
 * Why this is still an atom (not a molecule):
 *   It outputs a single SVG element. It has no composition — it just looks up
 *   a <path> by name from the SPRITE constant below.
 *
 * How to add a new icon:
 *   1. Grab the <path> from the source SVG (e.g. Heroicons, Lucide).
 *   2. Add it as a new entry under SPRITE (IconName updates automatically).
 *   3. (Optional) Write a fixture in __fixtures__ so it's tested in Cosmos.
 */
import type { SVGProps } from 'react';

const SPRITE = {
  // Heroicons outline — pet + UI essentials. Tiny subset, easy to extend.
  paw: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  search:
    'M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
  heart:
    'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  filter:
    'M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 .78 1.625l-6.78 8.86V21l-5-3v-7.515L3 4z',
  mapPin:
    'M12 22s-7-7.58-7-13a7 7 0 1 1 14 0c0 5.42-7 13-7 13zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  mail: 'M4 6h16v12H4zM4 6l8 7 8-7',
  user:
    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z',
  check:
    'M5 12l5 5 9-11',
  'arrow-right':
    'M5 12h14M13 5l7 7-7 7',
  calendar:
    'M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
  info: 'M12 16v-4M12 8h.01M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z'
} as const;

export type IconName = keyof typeof SPRITE;

export const ICON_NAMES = Object.keys(SPRITE) as IconName[];

const STROKE_ICONS = new Set<IconName>([
  'search',
  'mail',
  'arrow-right',
  'check',
  'calendar',
  'info',
  'filter',
  'paw',
  'heart',
  'mapPin',
  'user'
]);

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.8,
  ...rest
}: IconProps) {
  const path = SPRITE[name];
  if (!path) return null;

  const isStroke = STROKE_ICONS.has(name);
  const sizeStyle = { width: size, height: size };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isStroke ? 'none' : 'currentColor'}
      stroke={isStroke ? 'currentColor' : 'none'}
      strokeWidth={isStroke ? strokeWidth : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={sizeStyle}
      className={className}
      aria-hidden
      {...rest}
    >
      <path d={path} />
    </svg>
  );
}
