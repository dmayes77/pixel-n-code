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
    ? "block text-lg font-medium hover:text-primary"
    : "text-sm font-medium hover:text-primary";

  return (
    <NextLink
      href={href}
      {...props}
      className={`${baseStyles} ${
        isActive ? "text-primary font-semibold" : "text-gray-700"
      } ${className}`}
    >
      {children}
    </NextLink>
  );
}
