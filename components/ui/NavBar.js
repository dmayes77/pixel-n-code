"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import NavLink from "./NavLink";

export default function NavBar({ logoImages, navItems }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
        {/* Logo */}
        <BrandLogo
          href="/"
          image={logoImages.whtBg.src}
          alt={logoImages.whtBg.alt}
          size={50}
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <NavLink key={item.key || item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="lg:hidden">
        <DialogPanel className="fixed inset-0 z-60 bg-white p-6">
          <div className="flex justify-between items-center">
            <BrandLogo
              image={logoImages.whtBg.src}
              alt={logoImages.whtBg.alt}
              size={50}
            />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="mt-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.key || item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                mobile
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
