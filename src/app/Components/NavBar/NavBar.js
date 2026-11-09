// Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = process.env.NODE_ENV === "production" ? "/travel-with-KST" : "";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Destination", href: "/Pages/Destination" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
  ];

  // A link is active when it exactly matches the current route, or when the
  // current route is a nested page under it (e.g. /Pages/Destination/1).
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-0.5" : "py-1.5"
      }`}
    >
      <div className="w-full">
        <div
          className={`relative rounded-2xl transition-all duration-500 ease-in-out ${
            scrolled
              ? "bg-black/20 backdrop-blur-md shadow-lg shadow-black/10"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-1 sm:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center space-x-2">
                <img
                  src={`${BASE}/images/logo.jpeg`}
                  alt="Logo"
                  className="navbar-logo w-16 h-16 rounded-full border-2 border-black"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 text-white ml-auto justify-end">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
                      active ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ease-out group-hover:w-3/4 ${
                        active ? "w-3/4" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-2 space-y-1 text-white text-right">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${
                      active
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                      transform: isOpen ? "translateX(0)" : "translateX(20px)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
