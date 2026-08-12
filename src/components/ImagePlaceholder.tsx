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
}: {
  image: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "circle" renders the slot as a circular crop (1:1 slots only). */
  shape?: "rect" | "circle";
}) {
  const shapeClass = shape === "circle" ? "rounded-full" : "";

  if (image.status === "approved" && image.src) {
    return (
      <div
        className={`relative overflow-hidden ${shapeClass} ${className}`}
        style={{ aspectRatio: image.aspectRatio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="object-cover"
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
      style={{ aspectRatio: image.aspectRatio }}
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
