// components/sections/TechStackSection.jsx
import React from "react";
import PropTypes from "prop-types";

export default function TechStackSection({ content }) {
  const { title, subtitle, stacks } = content;
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="mb-4 text-primary">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 mb-8">{subtitle}</p>}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {stacks.map(({ name, Icon, description }) => (
            <div key={name} className="flex flex-col items-center max-w-xs">
              <Icon className="w-12 h-12 mb-2 text-primary" />
              <h3 className="mt-1">{name}</h3>
              <p className="mt-1 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

TechStackSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    stacks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        Icon: PropTypes.elementType.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
