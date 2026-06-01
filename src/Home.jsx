import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Business Model", to: "/business-model" },
  { label: "Governance", to: "/governance" }
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating background icon images - 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* Rotating Background Icons - Pure images on white background */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
        <div className="relative w-96 h-96 md:w-[450px] md:h-[450px]">
          {partners.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === activePartner 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
            >
              <img
                src={logo}
                alt={`Partner ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Blue Gradient Overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 z-0"></div>

      {/* Premium Navigation - White with Blue accents */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/95 backdrop-blur-2xl border-b border-blue-500/20 shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <Link to="/" className="mb-4 md:mb-0 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-md border border-gray-200">
                    <img src="/logos/digital.png" alt="Digital Liberia" className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <span className="text-gray-900 font-bold text-xl tracking-tight">Digital<span className="text-blue-600">Liberia</span></span>
              </div>
            </Link>

            <nav className="flex flex-wrap justify-center gap-1 md:gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                    location.pathname === link.to 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {location.pathname === link.to && (
                    <span className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/30"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - White background, Blue text */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <span className="text-blue-600 text-sm font-medium tracking-wide">✦ NATIONAL INFRASTRUCTURE ✦</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tighter text-gray-900">
                Building
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Liberia's Future
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
              </p>
            </div>
            
            {/* Static Company Logo Container - Glass dark */}
            <div className="relative h-48 md:h-64 bg-black/5 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex items-center justify-center border border-gray-200">
              <img
                src="/logos/digital.png"
                alt="Digital Liberia Logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview - Glass dark cards */}
      <section className="relative py-28 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="text-blue-600 text-xs font-medium">CORE INFRASTRUCTURE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              National Digital Infrastructure
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Digital Liberia is being developed as more than a software company. It is structured as a long-term national infrastructure platform designed to become a core part of Liberia's digital economy.",
              "The company combines digital public infrastructure, secure payments, digital identity systems, e-government services, commerce, logistics, financial technology, healthcare access, land management, data infrastructure, and business enablement into one connected digital environment."
            ].map((text, idx) => (
              <div key={idx} className="group relative bg-black/5 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <p className="text-gray-700 leading-relaxed relative z-10">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 group relative bg-black/5 backdrop-blur-xl rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:border-blue-500/40 hover:scale-[1.02]">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              At the center of this strategy is the vision to build a unified ecosystem where citizens can access services, make payments, verify identity, conduct business, receive public services, access marketplaces, and interact digitally through one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem - Premium Grid with Icons */}
      <section className="relative py-28 px-4 bg-blue-50/30 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <span className="text-cyan-600 text-xs font-medium">PILLARS OF PROGRESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Ecosystem Components</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">Integrated solutions powering Liberia's digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "National Database Management", description: "Secure, centralized national data backbone enabling real-time analytics and access control across all government ministries.", link: "/system", icon: "🏛️", gradient: "from-blue-500/20 to-blue-600/10" },
              { title: "Digital Identity (DSSN)", description: "Unique, immutable identifier assigned to every individual - your gateway to services, recognition, and inclusion.", link: "/digital-liberia", icon: "🆔", gradient: "from-cyan-500/20 to-cyan-600/10" },
              { title: "LibPay", description: "Fast, reliable, and secure payment gateway for all financial transactions across Liberia.", link: "/libpay", icon: "💳", gradient: "from-blue-500/20 to-blue-600/10" },
              { title: "E-Government Services", description: "Streamlined digital access to government services, reducing friction and improving delivery.", link: "/system", icon: "🏢", gradient: "from-cyan-500/20 to-cyan-600/10" },
              { title: "Commerce & Logistics", description: "Integrated marketplace and logistics infrastructure enabling business growth.", link: "/liberian-post", icon: "📦", gradient: "from-blue-500/20 to-blue-600/10" },
              { title: "Healthcare & Education", description: "Digital platforms improving access to healthcare records and educational tracking.", link: "/digital-liberia", icon: "🏥", gradient: "from-cyan-500/20 to-cyan-600/10" }
            ].map((pillar, idx) => (
              <Link key={idx} to={pillar.link} className="group">
                <div className={`relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl rounded-xl p-6 border border-gray-200 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden bg-white`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-gray-200">
                      <div className="text-3xl">{pillar.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution - Split Premium */}
      <section className="relative py-28 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-black/5 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-blue-500/40 hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Fragmented, paper-based records and weak identification systems have impacted government service delivery, electoral credibility, healthcare access, educational tracking, and national security.
              </p>
            </div>
            
            <div className="group relative bg-black/5 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-blue-500/40 hover:scale-105">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                Digital Liberia solves structural gaps in access, service delivery, trust, efficiency, and inclusion across both public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium Quotes */}
      <section className="relative py-28 px-4 bg-blue-50/30 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "To become the digital backbone of Liberia—empowering people and the economy.", label: "Vision", icon: "🎯" },
              { quote: "Deliver a secure platform for transparent governance and accessible services while generating sustainable long-term returns.", label: "Mission", icon: "🚀" }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-black/5 backdrop-blur-xl rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:border-blue-500/30 hover:scale-105 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-5xl mb-6 text-blue-500/30">"</div>
                <p className="text-gray-700 text-xl italic leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="inline-flex px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <span className="text-blue-600 text-xs font-semibold tracking-wider">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos - Premium Marquee */}
      <section className="relative py-20 px-4 overflow-hidden z-10">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs uppercase tracking-wider font-semibold mb-2">Trusted By</p>
          <p className="text-gray-500 text-sm">Ecosystem Partners</p>
        </div>
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center w-24 h-24 bg-black/5 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:scale-110 border border-gray-200">
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Premium Glass */}
      <section className="relative py-28 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-black/5 backdrop-blur-xl rounded-2xl p-10 md:p-12 text-center border border-gray-200 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-gray-900">Let's Connect</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="space-y-4">
                  <a href="mailto:info@digitalliberia.com" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">✉️</span>
                    <span className="text-sm">info@digitalliberia.com</span>
                  </a>
                  <a href="https://wa.me/231888001077" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📱</span>
                    <span className="text-sm">WhatsApp: +231 888 001 077</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="tel:+231775055817" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📞</span>
                    <span className="text-sm">Call: +231 775 055 817</span>
                  </a>
                </div>
              </div>
              
              <p className="text-gray-400 text-xs mt-10">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-4 border-t border-gray-200 bg-gray-50 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="text-blue-500/60 text-xs mt-2">Building Africa's Digital Future</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
