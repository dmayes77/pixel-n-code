"use client";
import NextLink from "next/link";
import NavLink from "@/components/ui/NavLink";
import CloudImage from "./CloudImage";
import { logoImages } from "@/constants/images";
import { navItems, businessInfo } from "@/constants/content";
// React-icons imports
import { HiPhone } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 tablet:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <NavLink href="/" className="flex items-center mb-4">
            <span className="ml-2 text-xl font-bold text-white">
              {businessInfo.name}
            </span>
          </NavLink>
          <p className="text-sm text-gray-400">{businessInfo.tagline}</p>
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
            <span>{businessInfo.phone}</span>
          </p>
          <p className="mt-2">Mon–Sat: 8 AM–6 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <p className="mb-4 text-xl font-semibold text-white">Follow Us</p>
          <div className="flex space-x-4 ">
            <NavLink
              href={businessInfo.social.facebook}
              aria-label="Facebook"
              className="text-white"
            >
              <FaFacebook className="w-6 h-6" />
            </NavLink>
            <NavLink
              href={businessInfo.social.instagram}
              aria-label="Instagram"
              className="text-white"
            >
              <FaInstagram className="w-6 h-6" />
            </NavLink>
            <NavLink href="#" aria-label="Twitter" className="text-white">
              <FaTwitter className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        <br />
        Designed by{" "}
        <NextLink
          href="https://www.pixelncode.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          {businessInfo.name}
        </NextLink>
      </div>
    </footer>
  );
}
