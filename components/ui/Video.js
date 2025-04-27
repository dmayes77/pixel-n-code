"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function CloudVideo({
  publicId, // The Cloudinary public ID of your image
  ...props
}) {
  return (
    <CldVideoPlayer
      src={publicId}
      width="1920"
      height="1080"
      controls
      autoplay={true}
      loop
      {...props}
    />
  );
}
