"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const HomeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" fill="#7c3aed" opacity="0.15"/>
    <path d="M3 9.5L12 3l9 6.5" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M9 21V12h6v9" stroke="#7c3aed" strokeWidth="2"/>
    <rect x="5" y="9" width="14" height="12" rx="1" stroke="#7c3aed" strokeWidth="2"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "shadow-lg border-b" : "shadow-md"
    }`}>
      
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="transition-transform duration-300 group-hover:scale-110">
            <HomeIcon />
          </span>
          <span className="text-xl font-medium tracking-[0.5px] text-violet-800 group-hover:text-violet-600 transition-all duration-300">
            Smart<span className="text-orange-500">Home</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setActiveLink(label)}
                className="group relative"
              >
                <span className={`text-sm font-medium tracking-[0.5px] transition-all duration-300 ${
                  activeLink === label
                    ? "text-violet-600"
                    : "text-gray-500 group-hover:text-violet-600"
                }`}>
                  {label}
                </span>

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="
          hidden md:inline-flex
          px-6 py-2.5 rounded-[3px]
          text-sm font-semibold tracking-[0.5px]
          text-white
          bg-gradient-to-r from-orange-500 to-orange-400
          shadow-sm
          transition-all duration-300
          hover:from-orange-600 hover:to-orange-500
          hover:shadow-md
          active:scale-95
        ">
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-violet-800"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden px-6 overflow-hidden transition-all duration-300 ${
        mobileOpen ? "max-h-96 py-3" : "max-h-0"
      }`}>
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => {
              setActiveLink(label);
              setMobileOpen(false);
            }}
            className="block py-3 border-b text-sm font-medium tracking-[0.5px] text-gray-600 hover:text-violet-600"
          >
            {label}
          </Link>
        ))}

        <button className="
          mt-4 w-full
          bg-gradient-to-r from-orange-500 to-orange-400
          text-white py-2.5 rounded-[3px]
          text-sm font-semibold tracking-[0.5px]
          transition-all duration-300
          hover:from-orange-600 hover:to-orange-500
          hover:shadow-md
        ">
          Get Started
        </button>
      </div>
    </nav>
  );
}