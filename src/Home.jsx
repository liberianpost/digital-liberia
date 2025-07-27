import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "System", to: "/system" },
  { label: "Digital Liberia", to: "/digital-liberia" },
  { label: "LibPay", to: "/libpay" },
  { label: "Liberian Post", to: "/liberian-post" },
  { label: "About Us", to: "/about" },
  { label: "Business Model", to: "/business-model" },
  { label: "Company Structure", to: "/company-structure" }
];

const logos = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png"
];

const sections = [
  {
    id: "intro",
    title: "Welcome to Digital Liberia",
    content: (
      <>
        <p className="text-blue-100">
          Digital Liberia is a <span className="font-semibold text-white">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-blue-100">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    content: (
      <div className="space-y-12 text-blue-100 text-left">
        <article>
          <h3 className="text-2xl font-semibold text-white mb-2">1. National Database Management System (NDMS)</h3>
          <p>A secure, centralized, and intelligent national data backbone to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Store/manage personal, institutional, and commercial data</li>
            <li>Enable access control across all government ministries</li>
            <li>Provide real-time data and analytics dashboards</li>
          </ul>
        </article>
      </div>
    )
  },
  {
    id: "vision",
    title: "Vision & Mission",
    content: (
      <>
        <p className="mb-4 italic text-blue-100 text-lg">
          <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
        </p>
        <p className="italic text-blue-100 text-lg">
          <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
        </p>
      </>
    )
  },
  {
    id: "problem",
    title: "Problem Statement",
    content: (
      <p className="text-blue-100 text-lg">
        Liberia is facing significant gaps in digital transformation...
      </p>
    )
  }
];

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex(prev => (prev + 1) % logos.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-inter">
      {/* Layer 1: Animated Background */}
      <div className="absolute inset-0 animate-background -z-30" />

      {/* Layer 2: Floating Glass Logo Carousel */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="bg-glass p-6 rounded-xl shadow-lg">
          <img
            src={logos[logoIndex]}
            alt="Logo"
            className="w-40 h-40 object-contain transition-opacity duration-700"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-white">Home</Link>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-blue-300 transition">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-blue-300 transition"
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Layer 3: Content Over Glass */}
      <main className="relative z-20 pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto space-y-20">
        {sections.map(section => (
          <section key={section.id} className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 border-b border-white/20 pb-2">{section.title}</h2>
            {section.content}
          </section>
        ))}
      </main>
    </div>
  );
}
