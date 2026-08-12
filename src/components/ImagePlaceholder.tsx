import Image from "next/image";
import type { ImageAsset } from "@/content/types";

/**
 * Placeholder-first image slot (PRD Appendix F).
 * Reserves the final aspect ratio so a later approved asset causes zero
 * layout shift. Placeholders render as a quiet editorial block showing the
 * stable image ID and brief — never a loud debug box, never a random
 * stock/remote/AI image.
 */
export function ImagePlaceholder({
  image,
  className = "",
  sizes,
  priority = false,
  shape = "rect",
  aspectRatio,
  focal,
}: {
  image: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "circle" renders the slot as a circular crop (1:1 slots only). */
  shape?: "rect" | "circle";
  /**
   * Presentation crop for this surface (e.g. a 16/10 homepage card reusing a
   * 3/2 article hero). The image record keeps its own ratio; this only changes
   * how this rendering displays it. Same CSS form as the record, e.g. "16 / 10".
   */
  aspectRatio?: string;
  /** Focal point for the presentation crop, as CSS object-position (e.g. "60% 45%"). */
  focal?: string;
}) {
  const shapeClass = shape === "circle" ? "rounded-full" : "";
  const ratio = aspectRatio ?? image.aspectRatio;

  if (image.status === "approved" && image.src) {
    return (
      <div
        className={`relative overflow-hidden ${shapeClass} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="object-cover"
          style={focal ? { objectPosition: focal } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${image.alt}`}
      className={`flex flex-col gap-1 overflow-hidden border border-line bg-cool ${
        shape === "circle" ? "items-center justify-center p-6 text-center" : "justify-end p-3"
      } ${shapeClass} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <p className="line-clamp-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
        Image placeholder · {image.id}
      </p>
      <p
        className="line-clamp-3 max-w-[36ch] font-sans text-[0.6875rem] leading-snug text-ink-faint"
        title={image.brief}
      >
        {image.brief}
      </p>
    </div>
  );
}
