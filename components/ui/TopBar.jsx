// components/TopBar.jsx

import Link from "next/link";
import Icon from "./Icon";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import * as Fa6Icons from "react-icons/fa6";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as TfiIcons from "react-icons/tfi";

import { businessInfo, socials } from "@/content/globals";

const { phone, email, address } = businessInfo;

export default function TopBar() {
  // Combine all social‐icon libraries into one lookup
  const iconLibrary = {
    ...Fa6Icons,
    ...ImIcons,
    ...BsIcons,
    ...TfiIcons,
  };

  // Build dynamic social array from businessInfo.socials
  const socialItems = Object.entries(socials).map(
    ([key, { url, iconName }]) => ({
      href: url,
      label: key,
      IconComponent: iconLibrary[iconName],
      size: ["TfiYoutube", "FaLinkedinIn"].includes(iconName) ? 16 : 14,
    })
  );

  return (
    <header className="w-full bg-secondary px-8 text-white text-xs flex justify-between items-center font-semibold">
      {/* Left: contact info */}
      <div className="flex space-x-8 whitespace-nowrap">
        {/* Phone always visible */}
        <Link
          href={`tel:${phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center gap-2 hover:underline"
        >
          <Icon
            iconName={BsFillTelephoneFill}
            size={14}
            className="text-primary"
          />
          <span>{phone}</span>
        </Link>

        {/* Email hidden below tablet */}
        <Link
          href={`mailto:${email}`}
          className="hidden tablet:flex items-center gap-2 hover:underline"
        >
          <Icon iconName={IoIosMail} size={14} className="text-primary" />
          <span>{email}</span>
        </Link>

        {/* Location hidden below tablet */}
        <Link
          href="/"
          className="hidden tablet:flex items-center gap-2 hover:underline"
        >
          <Icon iconName={ImLocation2} size={14} className="text-primary" />
          <span>{`${address.city}, ${address.state}`}</span>
        </Link>
      </div>

      {/* Right: social icons */}
      <div className="flex divide-x divide-white/15">
        {socialItems.map(({ href, label, IconComponent, size }, i) =>
          IconComponent ? (
            <Link
              key={i}
              href={href}
              aria-label={label}
              className="h-10 w-10 flex items-center justify-center px-2 hover:text-primary transition-colors duration-200 ease-in-out text-primary-foreground"
            >
              <Icon iconName={IconComponent} size={size} />
            </Link>
          ) : null
        )}
      </div>
    </header>
  );
}
