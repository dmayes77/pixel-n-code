"use client";

import Image from "next/image";

import {
  FaRegComments,
  FaUserTie,
  FaClock,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

// Map icon names to actual React components
const icons = {
  FaRegComments,
  FaUserTie,
  FaClock,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
};

export default function WhyChooseUsSection({ content }) {
  if (!content) return null;

  const { heading, paragraph, features } = content;

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-primary">{heading}</h2>
          <p className=" text-gray-600 max-w-3xl mx-auto">{paragraph}</p>
        </div>
        <div className="grid monbile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon]; // Dynamically pick icon based on the string
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-12 bg-white rounded-lg shadow-md space-y-4"
              >
                {Icon && <Icon className="text-primary text-5xl" />}
                <h3>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
