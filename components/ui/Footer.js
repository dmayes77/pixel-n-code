"use client";

import NavLink from "@/components/ui/NavLink";
import NextLink from "next/link";
import CloudImage from "./CloudImage";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

export default function Footer({ content }) {
  if (!content) return null;

  const { navItems, businessInfo: business } = content;
  const { logo, tagline, phone, social, name } = business;

  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="mx-auto px-4 grid grid-cols-1 tablet:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <div className="flex flex-col fold:flex-row fold:items-end fold:space-x-4 mb-4">
            <div className="relative w-[60px] h-[60px] mx-auto fold:mx-0">
              <CloudImage
                publicId={logo.publicId.logoOnly}
                alt={logo.alt}
                className="object-contain"
                fill
              />
            </div>
            <NavLink
              href="/"
              className="text-center fold:text-left text-xl font-bold text-white mt-2 fold:mt-0"
            >
              {name}
            </NavLink>
          </div>
          <p className="text-sm text-gray-400 text-center fold:text-left">
            {tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="mb-4 text-xl font-semibold text-white">Quick Links</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} className="text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="mb-4 text-xl font-semibold text-white">Contact</p>
          <p className="flex items-center">
            <HiPhone className="w-5 h-5 text-primary mr-2" />
            <span>{phone}</span>
          </p>
          <p className="mt-2">Mon–Sat: 8 AM–6 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <p className="mb-4 text-xl font-semibold text-white">Follow Us</p>
          <div className="flex justify-center fold:justify-start space-x-4">
            {social?.facebook && (
              <NavLink
                href={social.facebook}
                aria-label="Facebook"
                className="text-white"
              >
                <FaFacebook className="w-6 h-6" />
              </NavLink>
            )}
            {social?.instagram && (
              <NavLink
                href={social.instagram}
                aria-label="Instagram"
                className="text-white"
              >
                <FaInstagram className="w-6 h-6" />
              </NavLink>
            )}
            {social?.twitter && (
              <NavLink
                href={social.twitter}
                aria-label="Twitter"
                className="text-white"
              >
                <FaTwitter className="w-6 h-6" />
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
          href="https://www.pixelncode.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Pixel & Code
        </NextLink>
      </div>
    </footer>
  );
}
