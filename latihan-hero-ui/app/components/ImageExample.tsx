"use client";

import { Image } from "@heroui/react";

const ImageExample = () => {
  return (
    <div className="flex align-middle gap-8">
      <Image
        isZoomed
        alt="HeroUI hero Image with delay"
        height={200}
        src="https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg"
        width={300}
      />

      <Image
        isBlurred
        alt="HeroUI Album Cover"
        className="m-5"
        src="https://heroui.com/images/album-cover.png"
        width={240}
      />
    </div>
  );
};

export default ImageExample;
