"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SiDrupal } from "react-icons/si";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

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
          <li key={link.href}>
            <Link
              className={classnames({
                "text-purple-300": link.href === currentPath,
                "text-purple-600": link.href !== currentPath,
                "hover:text-purple-500 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">LOGOUT</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">LOGIN</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
