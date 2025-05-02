"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import NavLink from "./NavLink";
import { navItems, businessInfo as business } from "@/content/globals";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { logo } = business;

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 ">
        {/* Logo */}
        <BrandLogo
          href="/"
          image={logo.publicId.longFormat}
          alt={logo.alt}
          ratio={3 / 1}
          width="w-[200px]"
        />

        {/* Desktop nav */}
        <div className="hidden laptop:flex laptop:gap-x-8">
          {navItems.map((item) => (
            <NavLink key={item.key || item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

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
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="laptop:hidden"
      >
        <DialogPanel className="fixed inset-0 z-60 bg-white p-6">
          <div className="flex justify-between items-center">
            <BrandLogo
              image={logo.publicId.longFormat}
              alt={logo.alt}
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
