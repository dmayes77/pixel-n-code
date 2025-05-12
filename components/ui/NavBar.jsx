// components/NavBar.jsx
"use client";

import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CloudImage from "./CloudImage";
import BrandLogo from "./BrandLogo";
import NavLink from "./NavLink";
import { logo } from "@/content/globals";
import { navItems } from "@/content/navigation";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const renderLinks = (mobile = false) =>
    navItems.map(({ key, href, label }) => (
      <NavLink
        key={key ?? href}
        href={href}
        {...(mobile ? { onClick: closeMenu, mobile: true } : {})}
      >
        {label}
      </NavLink>
    ));

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <CloudImage
            publicId={logo.main.publicId}
            alt={logo.main.alt}
            ratio={4 / 1}
            className="w-44 tablet:w-60"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden laptop:flex gap-x-8">{renderLinks()}</div>

        {/* Mobile toggle */}
        <button
          className="laptop:hidden p-2 text-gray-700"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Overlay container */}
      <Transition.Root show={open} as={Fragment}>
        <div className="fixed inset-0 z-[60] pointer-events-none">
          {/* Backdrop fade */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute inset-0 bg-black/30 pointer-events-auto"
              onClick={closeMenu}
            />
          </Transition.Child>

          {/* Slide-down panel under navbar */}
          <div className="fixed inset-x-0">
            <Transition.Child
              as={Fragment}
              enter="transition-transform ease-out duration-500"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition-transform ease-in duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <div className="w-full bg-white shadow-lg pointer-events-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <BrandLogo
                      image={logo.main.publicId}
                      alt={logo.main.alt}
                      size={50}
                    />
                    <button
                      onClick={closeMenu}
                      aria-label="Close menu"
                      className="p-2 text-gray-700 "
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="space-y-4">{renderLinks(true)}</nav>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition.Root>
    </header>
  );
}
