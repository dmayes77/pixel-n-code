"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFileAlt, FaPencilRuler, FaCode, FaThumbsUp } from "react-icons/fa";

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
    <section className="space-y-12 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-primary">
            {heading}
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col tablet:flex-row items-start gap-12">
          {/* Left: Paragraph + Image */}
          <div className="tablet:w-1/2 space-y-8">
            <p className="text-gray-600">{paragraph}</p>
            <Image
              src={image}
              alt="Website development process"
              width={600}
              height={500}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>

          {/* Right: Steps */}
          <div className="tablet:w-1/2 space-y-8">
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
                      {Icon && <Icon className="text-white text-2xl" />}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="h-full w-px bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <h3>
                      {stepItem.title}
                    </h3>
                    <p className="text-gray-600">{stepItem.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center pt-8">
          <Link href={buttonLink}>
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
