// components/sections/ContactSection.jsx
import React from "react";
import PropTypes from "prop-types";
import ContactUsForm from "../ui/ContactForm";

export default function ContactSection({ content }) {
  const {
    title,
    subtitle,
    contactMethods,
    formFields,
    buttonText,
    formAction,
    formMethod,
  } = content;
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="mb-4">{title}</h2>
        {subtitle && <p className=" text-gray-600 mb-8">{subtitle}</p>}
      </div>
      <ContactUsForm />
    </section>
  );
}

ContactSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    contactMethods: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    formFields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
    formAction: PropTypes.string.isRequired,
    formMethod: PropTypes.string,
  }).isRequired,
};
