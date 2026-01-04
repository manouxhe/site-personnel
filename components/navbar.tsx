"use client";

import { Inter } from "next/font/google";
import NavItem from "@/components/navitem";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Navbar() {
  return (
    <nav
      className={`
        ${inter.className}
        flex
        justify-center
        gap-20
        bg-white
        p-4
        text-sm
        font-medium
      `}
    >
      <NavItem href="/" label="Home" />
      <NavItem href="/about" label="About" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/skills" label="Skills" />
      <NavItem href="/contact" label="Contact" />
      <NavItem href="/blog" label="Blog" />
      <NavItem href="/login" label="Login" />
    </nav>
  );
}
