"use client";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  const base =
    "font-semibold rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none focus:ring-4";
  // Define your variant styles
  const variantStyles = {
    primary:
      "bg-primary text-white filter brightness-100 hover:brightness-90 focus:outline-none focus:ring-4 focus:ring-primary/50 dark:brightness-90 dark:hover:brightness-80 dark:focus:ring-primary/70",
    // You can define more variants as needed
  };

  // Fallback to primary variant if the variant prop doesn't match a defined variant
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
