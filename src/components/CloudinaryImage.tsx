"use client";

import { ImageProps } from "@/types";
import { CldImage } from "next-cloudinary";

export default function CloudinaryImage({
  src,
  height,
  width,
  alt,
  className,
}: ImageProps) {
  return (
    <CldImage
      src={src}
      height={height}
      width={width}
      alt={alt}
      priority
      className={className}
    />
  );
}
