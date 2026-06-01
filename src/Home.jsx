import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/", color: "border-amber-500/50" },
  { label: "System", to: "/system", color: "border-emerald-500/50" },
  { label: "Digital Liberia", to: "/digital-liberia", color: "border-blue-500/50" },
  { label: "LibPay", to: "/libpay", color: "border-cyan-500/50" },
  { label: "Liberian Post", to: "/liberian-post", color: "border-purple-500/50" }
];

const partners = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png"
];

export default function Home() {
  const location = useLocation();
  const [activePartner, setActivePartner] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate partner logos
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-x-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation - Professional & Clean */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            {/* Logo Area */}
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DL</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Digital<span className="text-amber-500">Liberia</span></span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border ${
                    location.pathname === link.to 
                      ? `${link.color} bg-white/10 text-amber-400 border-amber-500/50` 
                      : 'border-transparent text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - New Rebranded Content */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                <span className="text-amber-400 text-sm font-medium">🇱🇷 National Infrastructure Platform</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building Liberia's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem that will transform how citizens, businesses, institutions, and government interact through technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/digital-liberia" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all transform hover:scale-105">
                  Explore Ecosystem →
                </Link>
                <Link to="/system" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96">
              {partners.map((logo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    index === activePartner ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <img
                    src={logo}
                    alt={`Partner ${index}`}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">National Digital Infrastructure</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 md:p-12">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Digital Liberia is being developed as more than a software company. It is structured as a long-term national infrastructure platform designed to become a core part of Liberia's digital economy.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              The company combines digital public infrastructure, secure payments, digital identity systems, e-government services, commerce, logistics, financial technology, healthcare access, land management, data infrastructure, and business enablement into one connected digital environment.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              At the center of this strategy is the vision to build a unified ecosystem where citizens can access services, make payments, verify identity, conduct business, receive public services, access marketplaces, and interact digitally through one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ecosystem Pillars</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">Integrated solutions powering Liberia's digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "National Database Management",
                description: "Secure, centralized national data backbone enabling real-time analytics and access control across all government ministries.",
                icon: "🏛️",
                link: "/system"
              },
              {
                title: "Digital Identity (DSSN)",
                description: "Unique, immutable identifier assigned to every individual - your gateway to services, recognition, and inclusion.",
                icon: "🆔",
                link: "/digital-liberia"
              },
              {
                title: "LibPay",
                description: "Fast, reliable, and secure payment gateway for all financial transactions across Liberia.",
                icon: "💳",
                link: "/libpay"
              },
              {
                title: "E-Government Services",
                description: "Streamlined digital access to government services, reducing friction and improving delivery.",
                icon: "🏢",
                link: "/system"
              },
              {
                title: "Commerce & Logistics",
                description: "Integrated marketplace and logistics infrastructure enabling business growth.",
                icon: "📦",
                link: "/liberian-post"
              },
              {
                title: "Healthcare & Education",
                description: "Digital platforms improving access to healthcare records and educational tracking.",
                icon: "🏥",
                link: "/digital-liberia"
              }
            ].map((pillar, idx) => (
              <Link key={idx} to={pillar.link} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 hover:border-amber-500/30">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{pillar.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 backdrop-blur-lg rounded-2xl border border-red-500/20 p-8">
              <div className="text-3xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-white/70 leading-relaxed">
                Fragmented, paper-based records and weak identification systems have impacted government service delivery, electoral credibility, healthcare access, educational tracking, and national security. This identity vacuum has made it nearly impossible to develop strong, inclusive digital infrastructure.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-lg rounded-2xl border border-emerald-500/20 p-8">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-white/70 leading-relaxed">
                Digital Liberia solves structural gaps in access, service delivery, trust, efficiency, and inclusion across both public and private sectors. Positioned as foundational digital infrastructure for national development while operating as a scalable commercial enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/5 to-blue-500/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-white/70 text-lg italic">
                "To become the digital backbone of Liberia—empowering people and the economy."
              </p>
            </div>
            <div className="p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-white/70 text-lg italic">
                "Deliver a secure platform for transparent governance and accessible services while generating sustainable long-term returns."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-white/50 text-sm uppercase tracking-wider">Trusted Partners</p>
        </div>
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl p-3">
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-amber-500/20 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@digitalliberia.com" className="text-white/80 hover:text-amber-400 transition-colors">info@digitalliberia.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white/80">WhatsApp: <a href="https://wa.me/231888001077" className="hover:text-amber-400">+231 888 001 077</a></span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white/80">Call: <a href="tel:+231775055817" className="hover:text-amber-400">+231 775 055 817</a></span>
                </div>
              </div>
            </div>
            
            <p className="text-white/50 text-sm mt-8">Available Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="text-white/30 text-xs mt-2">Building Liberia's Digital Future</p>
        </div>
      </footer>

      {/* Add marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
