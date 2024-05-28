"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SiDrupal } from "react-icons/si";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <SiDrupal className="text-purple-300" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-purple-300 font-bold": link.href === currentPath,
              "text-purple-600 font-normal": link.href !== currentPath,
              "hover:text-purple-500 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
