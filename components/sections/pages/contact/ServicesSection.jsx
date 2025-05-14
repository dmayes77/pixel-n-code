// components/sections/ServicesSection.jsx
import React from "react";
import PropTypes from "prop-types";
import CloudImage from "../../../ui/CloudImage";

/**
 * A grid of service icons with captions.
 */
export default function ServicesSection({ content }) {
  const { title, services } = content;

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="grid grid-cols-2  gap-8">
        {services.map(({ title, image }) => (
          <div
            key={title}
            className="flex flex-col mx-auto mobile:w-40 tablet:w-50 laptop:w-30 items-center"
          >
            <CloudImage
              publicId={`pixel-n-code/illustrations/${image}`}
              alt={title}
              ratio={1}
              className="w-full h-auto rounded-lg shadow-md"
              objectFit="cover"
            />
            <p className="text-sm mt-2 italic text-gray-700">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ServicesSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
