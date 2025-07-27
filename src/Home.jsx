import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
          Digital Liberia is a <span className="font-semibold">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-white">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
        <div className="mt-6">
          <div className="inline-flex items-center bg-blue-900/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-400/30">
            <Link to="/digital-liberia" className="text-blue-300 hover:text-blue-400 transition-colors">
              To know more about 
              <span className="font-semibold ml-1">Digital Liberia</span>
            </Link>
            <span className="ml-2">→</span>
          </div>
        </div>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    content: (
      <div className="space-y-12 text-white text-left">
        <article>
          <h3 className="text-2xl font-semibold mb-2">1. National Database Management System (NDMS)</h3>
          <p>A secure, centralized, and intelligent national data backbone to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Store/manage personal, institutional, and commercial data</li>
            <li>Enable access control across all government ministries</li>
            <li>Provide real-time data and analytics dashboards</li>
          </ul>
          <div className="mt-4">
            <div className="inline-flex items-center bg-blue-900/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-400/30">
              <Link to="/system" className="text-blue-300 hover:text-blue-400 transition-colors">
                Learn more about the 
                <span className="font-semibold ml-1">NDMS system</span>
              </Link>
              <span className="ml-2">→</span>
            </div>
          </div>
        </article>

        <article className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">2. LibPay</h3>
          <p>A payment gateway solution that is fast, reliable, efficient and secure for all financial transactions in Liberia.</p>
          <div className="mt-2">
            <div className="inline-flex items-center bg-blue-900/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-400/30">
              <Link to="/libpay" className="text-blue-300 hover:text-blue-400 transition-colors">
                Discover more about 
                <span className="font-semibold ml-1">LibPay</span>
              </Link>
              <span className="ml-2">→</span>
            </div>
          </div>
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
    title: "Problem Statement & Solution",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">The Problem:</h3>
          <p className="text-white">
            For decades, Liberia has struggled with fragmented, paper-based records, weak identification systems and lack of centralized data. These limitations have impacted Government Services delivery, electoral credibility, healthcare access, educational tracking, social welfare distribution, and national security. This identity vacuum has made it nearly impossible to develop strong, inclusive digital or physical infrastructure.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Digital Liberia is Here to Fix That:</h3>
          <p className="text-white">
            At the heart of our system lies a Digital Social Security Number (DSSN) - a unique, immutable identifier assigned to every individual within or outside Liberia's borders. Whether you are a Liberian citizen, resident or foreign national within Liberia, the DSSN is your digital identity - a gateway to services, recognition and inclusion.
          </p>
        </div>
      </div>
    )
  }
];

export default function Home() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-inter overflow-x-hidden">
      {/* Layer 1: Dark Background */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Centered Image Slideshow - Fixed Position */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === activeLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3: Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        {/* Navigation Bar */}
        <div className="flex items-center justify-center px-6 py-4 max-w-7xl mx-auto">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`text-lg font-bold transition-colors duration-300 ${
                  location.pathname === link.to 
                    ? "text-red-500" 
                    : "text-white hover:text-blue-300"
                }`}
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

        {/* Divider Line */}
        <div className="border-t border-gray-600/50 w-full"></div>
        
        {/* Logo Bar Below Navigation */}
        <div className="w-full bg-gradient-to-b from-black to-transparent overflow-x-auto">
          <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-500 ${
                  index === activeLogo ? "scale-110 bg-black/30" : "scale-100 bg-black/10"
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
        
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-bold py-2 transition-colors duration-300 ${
                    location.pathname === link.to 
                      ? "text-red-500" 
                      : "text-white hover:text-blue-300"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Layer 4: Content Sections with Semi-Black Background */}
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
              {/* Mirror Reflection Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
                {section.title}
              </h2>
              <div className="text-white relative">
                {section.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer with Copyright */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-gray-600/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

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
