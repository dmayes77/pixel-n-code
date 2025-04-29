"use client";

import Link from "next/link";

export default function ParallaxSection({ content }) {
  if (!content) return null; // Always good to guard against missing content

  const {
    backgroundImage,
    headline,
    paragraph,
    subheadline,
    buttonText,
    buttonLink,
  } = content;

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-center flex flex-col items-center justify-center w-full"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg max-w-3xl text-white space-y-6">
        <h2>{headline}</h2>
        <p>{paragraph}</p>
        <h3>{subheadline}</h3>
        <Link href={buttonLink}>
          <button className="mt-4 px-6 py-3 bg-primary hover:bg-primary/90 rounded-full font-bold">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
