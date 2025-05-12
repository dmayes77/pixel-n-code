"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className = "",
  mobile = false,
  ...props
}) {
  const path = usePathname();
  const isActive = path === href;
  const baseStyles = mobile
    ? "block text-lg font-medium hover:brightness-80"
    : "text-sm font-medium hover:brightness-80";

  return (
    <NextLink
      href={href}
      {...props}
      className={`${baseStyles} ${
        isActive ? "text-primary font-semibold" : "text-gray-800"
      } ${className}`}
    >
      {children}
    </NextLink>
  );
}
