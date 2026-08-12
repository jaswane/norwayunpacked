import type { CategorySlug } from "@/content/types";

/**
 * One monochrome line icon per editorial world — drawn locally with a
 * consistent 1.5 stroke, no icon library, no circles or badges. Icons are
 * decorative (aria-hidden); the world name always carries the meaning.
 */
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconSvg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...strokeProps}>
      {children}
    </svg>
  );
}

/* Parliament / institutions */
function BankIcon() {
  return (
    <IconSvg>
      <path d="M4 9.5 12 4l8 5.5" />
      <path d="M5.5 9.5v8M9.8 9.5v8M14.2 9.5v8M18.5 9.5v8" />
      <path d="M3.5 20.5h17" />
    </IconSvg>
  );
}

/* Home / everyday life */
function HouseIcon() {
  return (
    <IconSvg>
      <path d="M4 11.5 12 4.5l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10.2 20v-5h3.6v5" />
    </IconSvg>
  );
}

/* Rosemaling-style flower / traditions */
function FlowerIcon() {
  return (
    <IconSvg>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="6.4" r="2.3" />
      <circle cx="16.9" cy="9.2" r="2.3" />
      <circle cx="16.9" cy="14.8" r="2.3" />
      <circle cx="12" cy="17.6" r="2.3" />
      <circle cx="7.1" cy="14.8" r="2.3" />
      <circle cx="7.1" cy="9.2" r="2.3" />
    </IconSvg>
  );
}

/* Viking ship / history */
function ShipIcon() {
  return (
    <IconSvg>
      <path d="M3 14.5c2.5 4 15.5 4 18 0" />
      <path d="M3 14.5c1.5-.5 3-2 3-3.5M21 14.5c-1.5-.5-3-2-3-3.5" />
      <path d="M12 14V4.5" />
      <path d="M12 5c3.5 1 3.5 5.5 0 6.5" />
    </IconSvg>
  );
}

/* Map pin / places */
function PinIcon() {
  return (
    <IconSvg>
      <path d="M12 21c-4-4.2-6.5-7.6-6.5-10.7a6.5 6.5 0 0 1 13 0C18.5 13.4 16 16.8 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </IconSvg>
  );
}

/* Mountains / outdoors */
function MountainIcon() {
  return (
    <IconSvg>
      <path d="M2.5 19.5 9 8.5l4 6.4 3-4.9 5.5 9.5Z" />
    </IconSvg>
  );
}

/* Fork and knife / food */
function FoodIcon() {
  return (
    <IconSvg>
      <path d="M7.5 3.5v17" />
      <path d="M4.8 3.5v4a2.7 2.7 0 0 0 5.4 0v-4" />
      <path d="M16.8 3.5V20.5" />
      <path d="M16.8 3.5c2.8 2.3 2.8 7.2 0 9.5" />
    </IconSvg>
  );
}

/* Football / sport */
function BallIcon() {
  return (
    <IconSvg>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m12 8.2 3.4 2.5-1.3 4H9.9l-1.3-4Z" />
      <path d="M12 8.2V3.5M15.4 10.7l4.6-1.4M14.1 14.7l2.8 3.9M9.9 14.7l-2.8 3.9M8.6 10.7 4 9.3" />
    </IconSvg>
  );
}

export const worldIcons: Record<CategorySlug, () => React.ReactNode> = {
  "how-norway-works": BankIcon,
  "life-in-norway": HouseIcon,
  culture: FlowerIcon,
  history: ShipIcon,
  travel: PinIcon,
  nature: MountainIcon,
  food: FoodIcon,
  sport: BallIcon,
};
