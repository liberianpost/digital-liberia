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
  const [isHeartbeating, setIsHeartbeating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heartbeatInterval = setInterval(() => {
      setIsHeartbeating(true);
      setTimeout(() => setIsHeartbeating(false), 600);
    }, 2000);
    return () => clearInterval(heartbeatInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white overflow-x-hidden">
      
      {/* Premium Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-500/20 via-emerald-500/10 to-transparent rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
        
        {/* Subtle grid pattern - FIXED VERSION */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.02)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")` 
             }}>
        </div>
      </div>

      {/* Premium Navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <Link to="/" className="mb-4 md:mb-0 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/30 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <img src="/logos/digital.png" alt="Digital Liberia" className="w-8 h-8 object-contain brightness-0 invert" />
                  </div>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Digital<span className="text-amber-500">Liberia</span></span>
              </div>
            </Link>

            <nav className="flex flex-wrap justify-center gap-1 md:gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                    location.pathname === link.to 
                      ? 'text-amber-400' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {location.pathname === link.to && (
                    <span className="absolute inset-0 bg-amber-500/10 rounded-lg border border-amber-500/30"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/30 backdrop-blur-sm">
                <span className="text-amber-400 text-sm font-medium tracking-wide">✦ NATIONAL INFRASTRUCTURE ✦</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tighter">
                Building
                <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
                  Liberia's Future
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link to="/ecosystem" className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Explore Ecosystem →</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
                <Link to="/business-model" className="px-8 py-3.5 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm hover:border-amber-500/50">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className={`relative h-96 md:h-[500px] bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-2xl rounded-3xl border border-white/10 transition-all duration-600 overflow-hidden group ${
              isHeartbeating ? 'scale-105 border-amber-500/50 shadow-2xl shadow-amber-500/20' : 'scale-100'
            }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
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
                      className="max-w-full max-h-full object-contain p-8 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview - Premium Cards */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <span className="text-amber-400 text-xs font-medium">CORE INFRASTRUCTURE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              National Digital Infrastructure
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Digital Liberia is being developed as more than a software company. It is structured as a long-term national infrastructure platform designed to become a core part of Liberia's digital economy.",
              "The company combines digital public infrastructure, secure payments, digital identity systems, e-government services, commerce, logistics, financial technology, healthcare access, land management, data infrastructure, and business enablement into one connected digital environment."
            ].map((text, idx) => (
              <div key={idx} className={`group relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-600 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 ${
                isHeartbeating ? 'scale-105 border-amber-500/30 bg-white/10' : 'scale-100'
              }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <p className="text-white/80 leading-relaxed relative z-10">{text}</p>
              </div>
            ))}
          </div>
          
          <div className={`mt-8 group relative bg-gradient-to-r from-amber-500/10 via-white/5 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transition-all duration-600 ${
            isHeartbeating ? 'scale-[1.02] border-amber-500/40' : 'scale-100'
          }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
            <p className="text-white/80 leading-relaxed text-center text-lg">
              At the center of this strategy is the vision to build a unified ecosystem where citizens can access services, make payments, verify identity, conduct business, receive public services, access marketplaces, and interact digitally through one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem - Premium Grid with Icons */}
      <section className="py-28 px-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="text-emerald-400 text-xs font-medium">PILLARS OF PROGRESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ecosystem Components</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-6"></div>
            <p className="text-white/50 mt-6 max-w-2xl mx-auto">Integrated solutions powering Liberia's digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "National Database Management", description: "Secure, centralized national data backbone enabling real-time analytics and access control across all government ministries.", link: "/system", icon: "🏛️", gradient: "from-amber-500/20 to-amber-600/10" },
              { title: "Digital Identity (DSSN)", description: "Unique, immutable identifier assigned to every individual - your gateway to services, recognition, and inclusion.", link: "/digital-liberia", icon: "🆔", gradient: "from-emerald-500/20 to-emerald-600/10" },
              { title: "LibPay", description: "Fast, reliable, and secure payment gateway for all financial transactions across Liberia.", link: "/libpay", icon: "💳", gradient: "from-amber-500/20 to-amber-600/10" },
              { title: "E-Government Services", description: "Streamlined digital access to government services, reducing friction and improving delivery.", link: "/system", icon: "🏢", gradient: "from-emerald-500/20 to-emerald-600/10" },
              { title: "Commerce & Logistics", description: "Integrated marketplace and logistics infrastructure enabling business growth.", link: "/liberian-post", icon: "📦", gradient: "from-amber-500/20 to-amber-600/10" },
              { title: "Healthcare & Education", description: "Digital platforms improving access to healthcare records and educational tracking.", link: "/digital-liberia", icon: "🏥", gradient: "from-emerald-500/20 to-emerald-600/10" }
            ].map((pillar, idx) => (
              <Link key={idx} to={pillar.link} className="group">
                <div className={`relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden ${
                  isHeartbeating ? 'border-amber-500/30' : ''
                }`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                      <div className="text-3xl">{pillar.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">{pillar.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution - Split Premium */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`group relative bg-gradient-to-br from-red-500/10 to-rose-500/5 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 transition-all duration-600 hover:border-amber-500/40 ${
              isHeartbeating ? 'scale-105 border-amber-500/40' : 'scale-100'
            }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">The Challenge</h3>
              <p className="text-white/60 leading-relaxed">
                Fragmented, paper-based records and weak identification systems have impacted government service delivery, electoral credibility, healthcare access, educational tracking, and national security.
              </p>
            </div>
            
            <div className={`group relative bg-gradient-to-br from-emerald-500/10 to-green-500/5 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 transition-all duration-600 hover:border-amber-500/40 ${
              isHeartbeating ? 'scale-105 border-amber-500/40' : 'scale-100'
            }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">The Solution</h3>
              <p className="text-white/60 leading-relaxed">
                Digital Liberia solves structural gaps in access, service delivery, trust, efficiency, and inclusion across both public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium Quotes */}
      <section className="py-28 px-4 bg-gradient-to-t from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "To become the digital backbone of Liberia—empowering people and the economy.", label: "Vision", icon: "🎯" },
              { quote: "Deliver a secure platform for transparent governance and accessible services while generating sustainable long-term returns.", label: "Mission", icon: "🚀" }
            ].map((item, idx) => (
              <div key={idx} className={`group relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transition-all duration-600 hover:border-amber-500/30 text-center ${
                isHeartbeating ? 'scale-105 border-amber-500/30' : 'scale-100'
              }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-5xl mb-6 text-amber-500/30">"</div>
                <p className="text-white/80 text-xl italic leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="inline-flex px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/30">
                  <span className="text-amber-400 text-xs font-semibold tracking-wider">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos - Premium Marquee */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-amber-400 text-xs uppercase tracking-wider font-semibold mb-2">Trusted By</p>
          <p className="text-white/40 text-sm">Ecosystem Partners</p>
        </div>
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-amber-500/30 transition-all hover:scale-110">
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Premium Glass */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`group relative bg-gradient-to-br from-amber-500/10 via-white/5 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 text-center border border-white/10 transition-all duration-600 ${
            isHeartbeating ? 'scale-105 border-amber-500/40 shadow-2xl shadow-amber-500/10' : 'scale-100'
          }`} style={{ transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white">Let's Connect</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mb-8"></div>
              
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="space-y-4">
                  <a href="mailto:info@digitalliberia.com" className="flex items-center justify-center space-x-2 text-white/70 hover:text-amber-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">✉️</span>
                    <span className="text-sm">info@digitalliberia.com</span>
                  </a>
                  <a href="https://wa.me/231888001077" className="flex items-center justify-center space-x-2 text-white/70 hover:text-amber-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📱</span>
                    <span className="text-sm">WhatsApp: +231 888 001 077</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="tel:+231775055817" className="flex items-center justify-center space-x-2 text-white/70 hover:text-amber-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📞</span>
                    <span className="text-sm">Call: +231 775 055 817</span>
                  </a>
                </div>
              </div>
              
              <p className="text-white/30 text-xs mt-10">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="text-amber-500/30 text-xs mt-2">Building Africa's Digital Future</p>
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
