// components/NavBar.jsx
"use client";

import { useState, Fragment, cloneElement } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CloudImage from "./CloudImage";
import NavLink from "./NavLink";
import { logo } from "@/content/globals";
import { navItems } from "@/content/navigation";
import Link from "next/link";

export default function NavBar({ rightSlot = null }) {
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

  // Mobile-friendly version of rightSlot (full width)
  const mobileRightSlot =
    rightSlot &&
    cloneElement(rightSlot, {
      className: [
        rightSlot.props?.className || "",
        "w-full justify-center rounded-lg px-4 py-3",
      ]
        .join(" ")
        .trim(),
    });

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

        {/* Desktop nav + right actions */}
        <div className="hidden laptop:flex items-center gap-x-8">
          {renderLinks()}
          {rightSlot ? <div className="ml-2">{rightSlot}</div> : null}
        </div>

        {/* Mobile toggle */}
        <button
          className="laptop:hidden p-2 text-gray-700"
          onClick={openMenu}
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
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
          <div
            className="fixed inset-x-0"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
          >
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
                    <CloudImage
                      publicId={logo.main.publicId}
                      alt={logo.main.alt}
                      ratio={4 / 1}
                      className="w-44 tablet:w-60"
                    />
                    <button
                      onClick={closeMenu}
                      aria-label="Close menu"
                      className="p-2 text-gray-700"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <nav className="space-y-4">{renderLinks(true)}</nav>

                  {/* Mobile install button (full-width) */}
                  {rightSlot ? (
                    <div className="mt-6 laptop:hidden">{mobileRightSlot}</div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition.Root>
    </header>
  );
}
