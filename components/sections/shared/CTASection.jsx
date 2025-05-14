// components/sections/CTASection.jsx
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Button } from "../../ui/button";

/**
 * Final call-to-action banner before the footer.
 */
export default function CTASection({ content }) {
  const {
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    bgColor = "bg-primary",
    textColor = "text-primary-foreground",
  } = content;
  return (
    <section className={`w-full py-20 ${bgColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2>{title}</h2>
        {subtitle && <p className="mb-8">{subtitle}</p>}
        {description && <p className="mb-8">{description}</p>}
        <Button asChild>
          <Link
            href={buttonLink}
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary-foreground hover:text-secondary transition duration-300"
          >
            {buttonText}
          </Link>
        </Button>
      </div>
    </section>
  );
}

CTASection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }).isRequired,
};

// content/pages/home.js (add to exports)
