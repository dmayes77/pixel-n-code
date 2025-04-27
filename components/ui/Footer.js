"use client";
import NextLink from "next/link";
import NavLink from "@/components/ui/NavLink";
import CloudImage from "./CloudImage";
import { logoImages } from "@/constants/images";
import { navItems } from "@/constants/content";
// React-icons imports
import { HiPhone } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <NextLink href="/" className="flex items-center mb-4">
            <div className="relative w-20 h-20" >
              <CloudImage
                src={logoImages.darkBg.src}
                alt={logoImages.darkBg.alt}
                className="object-contain"
              />
            </div>
            <span className="ml-2 text-xl font-bold text-white">
              Wheel Doctor
            </span>
          </NextLink>
          <p className="text-sm text-gray-400">
            Mobile alloy wheel repair at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <p className="flex items-center">
            <HiPhone className="w-5 h-5 text-primary mr-2" />
            <span>(555) 123-4567</span>
          </p>
          <p className="mt-2">Mon–Sat: 8 AM–6 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <NextLink
              href="#"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebook className="w-6 h-6" />
            </NextLink>
            <NextLink
              href="#"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram className="w-6 h-6" />
            </NextLink>
            <NextLink
              href="#"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter className="w-6 h-6" />
            </NextLink>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Wheel Doctor. All rights reserved.
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
