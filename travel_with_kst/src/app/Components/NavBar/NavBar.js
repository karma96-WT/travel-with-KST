// Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);

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
    { name: "Destination", href: "/destination" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-2" : "py-4"
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
          <div className="flex items-center justify-between px-6 py-4 sm:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center space-x-2">
                <img
                  src="images/logo.jpeg"
                  alt="Logo"
                  className="navbar-logo w-10 h-10"
                />
                <p className="navbar-tagline text-white text-lg font-bold">
                  Travel with KST
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-white/90 hover:text-white px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
                </Link>
              ))}
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
            <div className="px-6 pb-6 pt-2 space-y-1 text-white">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300"
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
