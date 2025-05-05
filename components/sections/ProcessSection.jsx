"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileAlt, FaPencilRuler, FaCode, FaThumbsUp } from "react-icons/fa";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import CloudImage from "../ui/CloudImage";

// ICON MAP
const icons = {
  FaFileAlt,
  FaPencilRuler,
  FaCode,
  FaThumbsUp,
};

export default function ProcessSection({ content }) {
  if (!content) return null;

  const { heading, paragraph, image, steps, buttonText, buttonLink } = content;

  return (
    <section className="space-y-12 bg-accent/5">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-primary">{heading}</h2>
        </div>

        {/* Main Content */}
        <div className="flex mobile:flex-col laptop:flex-row items-start gap-12">
          {/* Left: Paragraph + Image */}
          <div className="mobile:w-full laptop:w-1/2 space-y-8">
            <p className="text-gray-600">{paragraph}</p>
            <AspectRatio
              ratio={1 / 1}
              className="rounded-lg shadow-md overflow-hidden"
            >
              <CloudImage
                publicId={image.publicId}
                alt={image.alt}
                objectFit="cover"
                className="object-cover"
              />
            </AspectRatio>
          </div>

          {/* Right: Steps */}
          <div className="mobile:w-full laptop:w-1/2 space-y-8">
            {steps.map((stepItem, index) => {
              const Icon = icons[stepItem.icon];
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Icon and Line */}
                  <div className="flex flex-col items-center">
                    <div className="bg-primary p-4 rounded-full">
                      {Icon && <Icon className="text-white mobile:text-lg tablet:text-xl laptop:text-2xl" />}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="h-full w-px bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <h3>{stepItem.title}</h3>
                    <p className="text-gray-600">{stepItem.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
