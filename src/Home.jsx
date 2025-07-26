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
  "/logos/libpay.png",
  "/logos/libmusic.png",
  "/logos/libconnect.png"
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
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-deep-dark text-white font-inter overflow-x-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-blue bg-[length:400%_400%] animate-background -z-10" />

      {/* Fixed Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-white">
            Home
          </Link>
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
        {/* Mobile Menu */}
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

      {/* Logo Carousel */}
      <div className="pt-24 pb-8 flex justify-center">
        <img
          src={logos[logoIndex]}
          alt="Rotating Logo"
          className="w-32 h-32 object-contain transition-opacity duration-500"
        />
      </div>

      {/* Sections */}
      {sections.map(section => (
        <section
          key={section.id}
          className="relative z-10 w-full py-20 px-6 md:px-12 max-w-6xl mx-auto"
        >
          <div className="backdrop-blur-md bg-glass-dark rounded-xl border border-white/10 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 border-b border-white/20 pb-2">
              {section.title}
            </h2>
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
