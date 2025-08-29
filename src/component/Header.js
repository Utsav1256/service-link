"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-wider uppercase text-white">
            ServiceLink
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/zones" className="hover:text-white">
            Zones
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/provider/register"
          className="hidden rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow md:inline-block hover:shadow-lg transition"
        >
          Become a Provider
        </Link>
      </div>
    </header>
  );
}
