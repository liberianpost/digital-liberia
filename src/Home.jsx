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
        <p className="text-white">
          Digital Liberia is a <span className="font-semibold text-white">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-white">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    content: (
      <div className="space-y-12 text-white text-left">
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
        <p className="mb-4 italic text-white text-lg">
          <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
        </p>
        <p className="italic text-white text-lg">
          <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
        </p>
      </>
    )
  },
  {
    id: "problem",
    title: "Problem Statement",
    content: (
      <p className="text-white text-lg">
        Liberia is facing significant gaps in digital transformation...
      </p>
    )
  }
];

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-inter overflow-x-hidden">
      {/* Layer 1: Dark Background (base layer) */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Layer 2: Floating Logos (middle layer) */}
      <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 w-full max-w-7xl">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 ${
                index === activeLogo ? "scale-110 bg-white/15" : "scale-100"
              }`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Navigation (top layer) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-white">
            Digital Liberia
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="text-white/80 hover:text-blue-300 transition-colors duration-300"
              >
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
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/80 hover:text-blue-300 py-2 transition-colors duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Layer 4: Content Sections (top layer - transparent) */}
      <main className="relative z-20 pt-32 pb-20 px-4 md:px-8">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                {section.title}
              </h2>
              <div className="text-white">
                {section.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Global Styles (in JSX for simplicity) */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
