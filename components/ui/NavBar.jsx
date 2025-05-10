"use client";
import { useState, useCallback } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CloudImage from "./CloudImage";
import BrandLogo from "./BrandLogo";
import NavLink from "./NavLink";
import { logo } from "@/content/globals";
import { navItems } from "@/content/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  const renderLinks = (mobile = false) =>
    navItems.map(({ key, href, label }) => (
      <NavLink
        key={key ?? href}
        href={href}
        {...(mobile ? { onClick: closeMenu, mobile: true } : undefined)}
      >
        {label}
      </NavLink>
    ));

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 ">
        {/* Logo */}

        <CloudImage
          publicId={logo.main.publicId}
          alt={logo.main.alt}
          ratio={4 / 1} // 3:1 aspect
          className="w-44 tablet:w-60"
        />

        {/* Desktop nav */}
        <div className="hidden laptop:flex laptop:gap-x-8">{renderLinks()}</div>

        {/* Mobile toggle */}
        <button
          className="laptop:hidden p-2 text-gray-700"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog open={open} onClose={closeMenu} className="laptop:hidden">
        <DialogPanel className="fixed inset-0 z-60 bg-white p-6">
          <div className="flex justify-between items-center">
            <BrandLogo
              image={logo.main.publicId}
              alt={logo.main.alt}
              size={50}
            />
            <button onClick={closeMenu} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <nav className="mt-6 space-y-4">{renderLinks(true)}</nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
