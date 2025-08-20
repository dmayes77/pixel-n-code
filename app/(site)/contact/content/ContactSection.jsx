// components/sections/ContactSection.jsx
import React from "react";
import PropTypes from "prop-types";
import ContactUsForm from "../../../../components/ui/ContactForm";
import MediaContainer from "@/components/ui/MediaContainer";
import SupabaseImage from "@/components/ui/SupaBaseImage";
import CloudImage from "../../../../components/ui/CloudImage";
import * as images from "@/content/images/images";
import { logo } from "@/content/globals";
import ServicesSection from "./ServicesSection";
import { servicesSectionContent } from "@/content/pages/services";

/**
 * Contact section with both direct contact methods and a form.
 */
export default function ContactSection({ content }) {
  const { title, subtitle, contactMethods } = content;

  return (
    <section className="w-full bg-secondary p-0!">
      <div className="flex flex-col laptop:flex-row-reverse items-center justify-center gap-4 space-y-12 laptop:space-y-0 ">
        {/* Column 2 */}
        <div className="w-full h-full laptop:w-1/2 mx-auto text-center self-stretch">
          <div className="w-full h-full laptop:max-w-xs mx-auto py-16 bg-white space-y-8">
            <div className="px-8 max-w-sm mx-auto">
              <MediaContainer aspectRatio="3/1" className="w-full">
                <SupabaseImage
                  src={images.logoImages.codeMazeLogoMain}
                  alt={logo.badge.alt}
                  fill
                  fit="contain"
                />
              </MediaContainer>
              
              
            </div>
            <div className="px-4">
              <p className="h3">Hello from Code Maze!</p>
              <p>
                We’re a Chattanooga-based web design and development studio—plus
                print design, branding, and marketing experts—all rolled into
                one. We thrive on helping local businesses shine online (and on
                the page!), so if you’ve got a new project brewing, let’s
                connect and make it happen.
              </p>
            </div>
            <ServicesSection content={servicesSectionContent} />
            <div className="px-4">
              <p className="h3">Partnering for Success</p>
              <p>
                Partnering with small businesses is at the heart of what we do.
                We take the time to understand your unique challenges and goals,
                then craft tailored web, branding, and marketing solutions that
                help you stand out—without the agency price tag. Whether you’re
                launching a new venture or looking to level up your online
                presence, we’re committed to fueling your growth every step of
                the way.
              </p>
            </div>
          </div>
        </div>
        {/* Column 1 */}
        <div className="w-full p-8 laptop:pr-0 tablet:col-1.5 mx-auto">
          <div className="w-full px-4  py-8  rounded-lg text-center bg-white">
            <h2>{title}</h2>
            {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

            {/* responsive contact methods */}
            <div
              className="
            flex flex-col tablet:flex-row laptop:flex-col desktop:flex-row justify-center items-center 
            space-y-6 tablet:space-x-6 tablet:space-y-0 laptop:space-y-6 
            laptop:space-x-0 desktop:space-y-0  desktop:space-x-12 mb-6"
            >
              {contactMethods.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center space-y-2 border p-4 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300 w-45"
                >
                  <Icon className="w-8 h-8 text-primary" />
                  <p className="text-sm font-semibold text-nowrap">{label}</p>
                  <p className="text-sm text-gray-700 text-nowrap">{value}</p>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
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
  }).isRequired,
};
