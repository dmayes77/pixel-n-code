"use client";

import NavLink from "@/components/ui/NavLink";
import NextLink from "next/link";
import BrandLogo from "./BrandLogo";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import {
  HiPhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiGlobeAlt,
} from "react-icons/hi";
import { businessInfo as business } from "@/content/globals";
import { navItems } from "@/content/navigation";

export default function Footer() {
  const {
    logo,
    tagline,
    phone,
    email,
    website,
    address,
    socials,
    name,
    designCompany,
    hoursOfOperation,
  } = business;

  return (
    <footer className="bg-gray-800 text-gray-200 py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 tablet:grid-cols-5 gap-12">
        {/* 1) Logo & Tagline */}
        <div>
          <div className="flex flex-col fold:flex-row items-end fold:space-x-4 mb-2 gap-2">
            <BrandLogo
              href="/"
              image={logo.main.publicId}
              alt={logo.main.alt}
              ratio={2 / 1}
              width="w-[200px]"
            />
          </div>
          <p className="text-sm text-gray-400 text-center fold:text-left">
            {tagline}
          </p>
        </div>

        {/* 2) Quick Links */}
        <div>
          <h4 className="mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="text-white hover:text-primary"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3) Contact Info */}
        <div>
          <h4 className="mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <HiPhone className="w-5 h-5 text-primary mr-2" />
              <a
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="hover:underline"
              >
                {phone}
              </a>
            </li>
            <li className="flex items-center">
              <HiOutlineMail className="w-5 h-5 text-primary mr-2" />
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </li>
            <li className="flex items-start">
              <HiOutlineLocationMarker className="w-5 h-5 text-primary mt-1 mr-2" />
              <address className="not-italic">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </address>
            </li>
            <li className="flex items-center">
              <HiGlobeAlt className="w-5 h-5 text-primary mr-2" />
              <a
                href={website}
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                {website.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </div>

        {/* 4) Hours of Operation */}
        <div>
          <h4 className="mb-4 text-white">Hours</h4>
          <ul className="space-y-1 text-sm">
            {Object.entries(hoursOfOperation).map(([day, hours]) => (
              <li key={day} className="flex justify-between">
                <span className="capitalize">{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5) Social Media */}
        <div>
          <h4 className="mb-4 text-white">Follow Us</h4>
          <div className="flex justify-center fold:justify-start space-x-4">
            {socials.facebook && (
              <NavLink
                href={socials.facebook}
                aria-label="Facebook"
                className="text-white hover:text-primary"
              >
                <FaFacebook className="w-6 h-6" />
              </NavLink>
            )}
            {socials.instagram && (
              <NavLink
                href={socials.instagram}
                aria-label="Instagram"
                className="text-white hover:text-primary"
              >
                <FaInstagram className="w-6 h-6" />
              </NavLink>
            )}
            {socials.twitter && (
              <NavLink
                href={socials.twitter}
                aria-label="Twitter"
                className="text-white hover:text-primary"
              >
                <FaTwitter className="w-6 h-6" />
              </NavLink>
            )}
            {socials.youtube && (
              <NavLink
                href={socials.youtube}
                aria-label="YouTube"
                className="text-white hover:text-primary"
              >
                <FaYoutube className="w-6 h-6" />
              </NavLink>
            )}
            {socials.tiktok && (
              <NavLink
                href={socials.tiktok}
                aria-label="TikTok"
                className="text-white hover:text-primary"
              >
                <FaTiktok className="w-6 h-6" />
              </NavLink>
            )}
            {socials.linkedin && (
              <NavLink
                href={socials.linkedin}
                aria-label="LinkedIn"
                className="text-white hover:text-primary"
              >
                <FaLinkedin className="w-6 h-6" />
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {name}. All rights reserved.
        <br />
        Designed by{" "}
        <NextLink
          href={designCompany.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          {designCompany.name}
        </NextLink>
      </div>
    </footer>
  );
}
