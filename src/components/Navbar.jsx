import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    to: "/who-we-are",
    dropdown: [
      { label: "Who We Are", to: "/who-we-are" },
      { label: "What Exactly Does Digital Liberia Do?", to: "/what-we-do" },
      { label: "What Makes Digital Liberia Different?", to: "/what-makes-us-different" },
    ],
  },
  {
    label: "Our Mission",
    to: "/our-mission",
    dropdown: [
      { label: "Our Mission", to: "/our-mission" },
      { label: "Our Vision", to: "/our-vision" },
      { label: "Our Philosophy", to: "/our-philosophy" },
      { label: "Who We Serve", to: "/who-we-serve" },
    ],
  },
  {
    label: "Investors & Strategic Partners",
    to: "/investors",
    dropdown: [
      { label: "The Opportunity", to: "/investors/opportunity" },
      { label: "What We Have Built", to: "/investors/what-we-have-built" },
      { label: "Our Business Model", to: "/investors/business-model" },
      { label: "Why Partner With Digital Liberia?", to: "/investors/why-partner" },
      { label: "Our Investment Priorities", to: "/investors/investment-priorities" },
    ],
  },
  { label: "Governance", to: "/governance" },
];

const partners = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png",
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (link) =>
    location.pathname === link.to ||
    (link.dropdown && link.dropdown.some((d) => d.to === location.pathname));

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl shadow-xl border-b border-red-500/20"
          : "bg-black/70 backdrop-blur-md border-b border-red-500/10"
      }`}
    >
      {/* Top nav row */}
      <header className="border-b border-red-500/10" ref={navRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="group" onClick={handleLinkClick}>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <img
                      src="/logos/digital.png"
                      alt="Digital Liberia"
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold text-xl md:text-2xl tracking-tight">
                  DigitalLiberia
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className="w-3 h-3 opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2 min-w-[280px]">
                        {link.dropdown.map((d) => (
                          <Link
                            key={d.to}
                            to={d.to}
                            onClick={handleLinkClick}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              location.pathname === d.to
                                ? "text-white bg-gradient-to-r from-red-500/20 to-blue-500/20"
                                : "text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-blue-500/20"
                            }`}
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-black/95 backdrop-blur-md border-b border-red-500/10">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`flex-1 px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                    isActive(link)
                      ? "text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="p-3 text-white/60 hover:text-white"
                    aria-label="Expand"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {link.dropdown && openDropdown === link.label && (
                <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                  {link.dropdown.map((d) => (
                    <Link
                      key={d.to}
                      to={d.to}
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Moving partner logos bar */}
      <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="py-2 md:py-3 overflow-x-auto scrollbar-hide">
          <div className="flex animate-marquee-top gap-8 md:gap-16 whitespace-nowrap min-w-max px-4">
            {[...partners, ...partners].map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all hover:scale-110 flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Partner ${idx}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
