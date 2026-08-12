/**
 * Norway Unpacked brand mark — a simple local SVG (no external assets).
 * A dark navy disc with a paper mountain silhouette and a single orange
 * fjord-water band: quiet, editorial, legible at 16px. The same geometry
 * is used in src/app/icon.svg (favicon). Preliminary mark — refine before
 * launch per PRD pre-launch checklist.
 */
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="15" fill="#101d33" />
      <g clipPath="url(#nu-mark-clip)">
        <path d="M2 21 L11 9.5 L15.5 15 L20.5 8 L30 21 Z" fill="#fbf8f2" />
        <path
          d="M0 22.6 C8 20.4 13 20.4 16 21.5 C19 22.6 24 22.6 32 20.6 L32 32 L0 32 Z"
          fill="#d4531f"
        />
      </g>
      <defs>
        <clipPath id="nu-mark-clip">
          <circle cx="16" cy="16" r="15" />
        </clipPath>
      </defs>
    </svg>
  );
}
