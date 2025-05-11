// components/sections/CTASection.jsx
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Final call-to-action banner before the footer.
 */
export default function CTASection({ content }) {
  const { title, subtitle, buttonText, buttonLink } = content;
  return (
    <section className="w-full py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
        <Link
          href={buttonLink}
          className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-gray-100"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

CTASection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
  }).isRequired,
};

// content/pages/home.js (add to exports)
export const ctaContent = {
  title: "Ready to launch your next project?",
  subtitle: "Let’s collaborate to build a custom website that drives results.",
  buttonText: "Get a Free Quote",
  buttonLink: "/#contact",
};
