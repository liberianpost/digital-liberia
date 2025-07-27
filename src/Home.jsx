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
        <p className="text-black">
          Digital Liberia is a <span className="font-semibold">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-black">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    content: (
      <div className="space-y-12 text-black text-left">
        <article>
          <h3 className="text-2xl font-semibold mb-2">1. National Database Management System (NDMS)</h3>
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
        <p className="mb-4 italic text-black text-lg">
          <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
        </p>
        <p className="italic text-black text-lg">
          <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
        </p>
      </>
    )
  },
  {
    id: "problem",
    title: "Problem Statement",
    content: (
      <p className="text-black text-lg">
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
      {/* Layer 1: Dark Background */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Layer 2: Fixed Logos Below Navigation - Single Row for All Devices */}
      <div className="fixed top-16 left-0 w-full z-40 pt-4 pb-4 bg-gradient-to-b from-black to-transparent overflow-x-auto">
        <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-500 ${
                index === activeLogo ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
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

      {/* Layer 4: Content Sections with Transparent White Background */}
      <main className="relative z-30 pt-36 pb-20 px-4 md:px-8">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-xl border border-white/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
              {/* Mirror Reflection Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/40 to-transparent"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b border-black/20 pb-2">
                {section.title}
              </h2>
              <div className="text-black relative">
                {section.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Global Styles */}
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
        /* Hide scrollbar for logo container */
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
