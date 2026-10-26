import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/* ----------------------------- NAV CONFIG ----------------------------- */
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

/* --------------------------- PARTNER LOGOS --------------------------- */
const partners = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png",
];

/* ------------------------- HERO / FEATURE CARDS ------------------------- */
const featureCards = [
  {
    image: "/logos/qrcode.jpeg",
    tag: "LibPay",
    title: "Payments, Reimagined",
    text: "LibPay enables person-to-person, business-to-business, and customer-to-business transactions — connecting merchants, customers, and financial institutions across every relevant payment channel.",
    cta: "See LibPay",
    to: "/ecosystem",
  },
  {
    image: "/logos/tomato.jpeg",
    tag: "One Ecosystem",
    title: "Multiple Solutions. One Connected Economy.",
    text: "One ecosystem. Multiple solutions. A connected digital economy built to move Liberia forward — from identity to commerce to government services.",
    cta: "Explore Ecosystem",
    to: "/ecosystem",
  },
  {
    image: "/logos/inventory.jpeg",
    tag: "The Challenge",
    title: "Breaking Free From Fragmentation",
    text: "Cash-dependent transactions, manual inventory, fragmented records, disconnected systems, and barriers to digitization hold Liberia back. Digital Liberia removes them.",
    cta: "How We Solve It",
    to: "/what-makes-us-different",
  },
];

/* ------------------------------ COMPONENT ------------------------------ */
export default function Home() {
  const location = useLocation();
  const [activePartner, setActivePartner] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner((prev) => (prev + 1) % partners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (link) =>
    location.pathname === link.to ||
    (link.dropdown && link.dropdown.some((d) => d.to === location.pathname));

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      {/* ============ BACKGROUND FX ============ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Rotating background icon */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-25">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {partners.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === activePartner ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <img src={logo} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0" />

      {/* ============ HEADER / NAV ============ */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-2xl shadow-xl border-b border-red-500/20"
            : "bg-black/70 backdrop-blur-md border-b border-red-500/10"
        }`}
      >
        <header className="border-b border-red-500/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link to="/" className="group" onClick={handleLinkClick}>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <img src="/logos/digital.png" alt="Digital Liberia" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold text-xl md:text-2xl tracking-tight">
                    DigitalLiberia
                  </span>
                </div>
              </Link>

              {/* Desktop Nav with dropdowns */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <div key={link.label} className="relative group">
                    <Link
                      to={link.to}
                      onClick={handleLinkClick}
                      className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-1 ${
                        isActive(link)
                          ? "text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      {link.dropdown && (
                        <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {link.dropdown && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2 min-w-[260px]">
                          {link.dropdown.map((d) => (
                            <Link
                              key={d.to}
                              to={d.to}
                              onClick={handleLinkClick}
                              className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-blue-500/20 transition-colors"
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
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-4 space-y-1 bg-black/95 backdrop-blur-md border-b border-red-500/10">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`flex-1 px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-red-600 to-blue-600"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="p-3 text-white/60 hover:text-white"
                      aria-label="Expand"
                    >
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
          <div className="py-2 md:py-3 overflow-hidden">
            <div className="flex animate-marquee-top gap-8 md:gap-16 whitespace-nowrap min-w-max px-4">
              {[...partners, ...partners].map((logo, idx) => (
                <div key={idx} className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all hover:scale-110 flex-shrink-0">
                  <img src={logo} alt={`Partner ${idx}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section className="relative min-h-[85vh] flex items-center pt-[170px] md:pt-64 pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 backdrop-blur-sm">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs md:text-sm font-bold tracking-wide">
                ✦ LIBERIAN NATIONAL INFRASTRUCTURE ✦
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Building</span>
              <span className="block bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                Liberia's Future
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/ecosystem"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:scale-105 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10">Explore Ecosystem →</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/investors"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all backdrop-blur-sm text-sm md:text-base"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE CARDS (the 3 images) ============ */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02] hover:border-red-500/40 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/80 to-blue-500/80 text-white text-[10px] md:text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                    {card.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{card.text}</p>
                  <Link
                    to={card.to}
                    onClick={handleLinkClick}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent hover:gap-2 transition-all"
                  >
                    {card.cta}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUICK STATS ============ */}
      <section className="relative py-14 md:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: "16+", label: "Digital Products", icon: "🚀" },
              { number: "5", label: "Executive Leaders", icon: "👥" },
              { number: "15", label: "Counties", icon: "🗺️" },
              { number: "24/7", label: "Infrastructure", icon: "⚡" },
            ].map((stat, idx) => (
              <div key={idx} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-white/70 font-semibold text-xs md:text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACTION CTA ============ */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-white/10 backdrop-blur-xl p-8 md:p-14 text-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                Ready to Build Liberia's Digital Future?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Join the ecosystem transforming payments, identity, commerce, and government services across all 15 counties.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/investors/why-partner"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/who-we-are"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all text-sm md:text-base"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden z-10">
        <div className="text-center mb-8">
          <p className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs uppercase tracking-wider font-bold mb-2">Trusted By</p>
          <p className="text-white/60 text-sm">Ecosystem Partners</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-bottom gap-8 md:gap-12 whitespace-nowrap min-w-max">
            {[...partners, ...partners, ...partners].map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all flex-shrink-0 opacity-80 hover:opacity-100">
                <img src={logo} alt={`Partner ${idx}`} className="w-full h-full object-contain" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LET'S CONNECT (kept) ============ */}
      <section className="relative py-16 md:py-20 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8 rounded-full" />
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              <a href="mailto:info@digitalliberia.com" className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">✉️</span>
                <span className="text-base md:text-lg font-semibold">info@digitalliberia.com</span>
              </a>
              <a href="https://wa.me/231888001077" className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">📱</span>
                <span className="text-base md:text-lg font-semibold">WhatsApp: +231 888 001 077</span>
              </a>
              <a href="tel:+231775055817" className="flex items-center justify-center gap-3 text-white/70 hover:text-blue-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">📞</span>
                <span className="text-base md:text-lg font-semibold">Call: +231 775 055 817</span>
              </a>
            </div>
            <p className="text-white/40 text-xs mt-8">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative py-8 md:py-12 px-4 border-t border-white/10 bg-gradient-to-r from-red-500/10 to-blue-500/10 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-xs md:text-sm">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="bg-gradient-to-r from-red-500/50 to-blue-500/50 bg-clip-text text-transparent mt-2 flex items-center justify-center gap-2 text-xs md:text-sm">
            <span>Building Africa's Digital Future</span>
            <span className="text-base md:text-xl">🇱🇷</span>
          </p>
        </div>
      </footer>

      {/* ============ GLOBAL STYLES ============ */}
      <style>{`
        @keyframes marquee-top { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-bottom { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-top { animation: marquee-top 20s linear infinite; display: flex; }
        .animate-marquee-bottom { animation: marquee-bottom 25s linear infinite; display: flex; }
        .animate-marquee-top:hover, .animate-marquee-bottom:hover { animation-play-state: paused; }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
