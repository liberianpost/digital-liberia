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

  // Rotating background images - 6 seconds, no heartbeat
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      
      {/* Rotating Background Images - Sharper and Darker */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {partners.map((logo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activePartner ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'contrast(1.2) brightness(0.85) saturate(1.1)',
            }}
          ></div>
        ))}
        {/* Much darker gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/98 via-[#0f0f1a]/95 to-[#0a0a0f]/98"></div>
      </div>
      
      {/* Premium Animated Background Elements - Blue theme (no heartbeat pulse) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/8 via-cyan-500/3 to-transparent rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-500/3 rounded-full blur-[100px]"></div>
      </div>

      {/* Premium Navigation - Blue theme */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-blue-500/20 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <Link to="/" className="mb-4 md:mb-0 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
                  <div className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <img src="/logos/digital.png" alt="Digital Liberia" className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Digital<span className="text-blue-400">Liberia</span></span>
              </div>
            </Link>

            <nav className="flex flex-wrap justify-center gap-1 md:gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                    location.pathname === link.to 
                      ? 'text-blue-400' 
                      : 'text-white/70 hover:text-white'
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

      {/* Hero Section - With Static Company Logo (Buttons Removed) */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-blue-400 text-sm font-medium tracking-wide">✦ NATIONAL INFRASTRUCTURE ✦</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tighter">
                Building
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Liberia's Future
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
              </p>
            </div>
            
            {/* Static Company Logo Container - TRANSPARENT */}
            <div className="relative h-48 md:h-64 bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center border border-white/10">
              <img
                src="/logos/digital.png"
                alt="Digital Liberia Logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview - Premium Cards (no heartbeat) */}
      <section className="relative py-28 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="text-blue-400 text-xs font-medium">CORE INFRASTRUCTURE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              National Digital Infrastructure
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Digital Liberia is being developed as more than a software company. It is structured as a long-term national infrastructure platform designed to become a core part of Liberia's digital economy.",
              "The company combines digital public infrastructure, secure payments, digital identity systems, e-government services, commerce, logistics, financial technology, healthcare access, land management, data infrastructure, and business enablement into one connected digital environment."
            ].map((text, idx) => (
              <div key={idx} className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <p className="text-white/90 leading-relaxed relative z-10">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 group relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:scale-[1.02]">
            <p className="text-white/90 leading-relaxed text-center text-lg">
              At the center of this strategy is the vision to build a unified ecosystem where citizens can access services, make payments, verify identity, conduct business, receive public services, access marketplaces, and interact digitally through one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem - Premium Grid with Icons */}
      <section className="relative py-28 px-4 bg-white/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <span className="text-cyan-400 text-xs font-medium">PILLARS OF PROGRESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ecosystem Components</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
            <p className="text-white/60 mt-6 max-w-2xl mx-auto">Integrated solutions powering Liberia's digital transformation</p>
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
                <div className={`relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                      <div className="text-3xl">{pillar.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{pillar.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{pillar.description}</p>
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
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">The Challenge</h3>
              <p className="text-white/70 leading-relaxed">
                Fragmented, paper-based records and weak identification systems have impacted government service delivery, electoral credibility, healthcare access, educational tracking, and national security.
              </p>
            </div>
            
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:scale-105">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">The Solution</h3>
              <p className="text-white/70 leading-relaxed">
                Digital Liberia solves structural gaps in access, service delivery, trust, efficiency, and inclusion across both public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium Quotes */}
      <section className="relative py-28 px-4 bg-white/5 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "To become the digital backbone of Liberia—empowering people and the economy.", label: "Vision", icon: "🎯" },
              { quote: "Deliver a secure platform for transparent governance and accessible services while generating sustainable long-term returns.", label: "Mission", icon: "🚀" }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:scale-105 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-5xl mb-6 text-blue-500/30">"</div>
                <p className="text-white/80 text-xl italic leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="inline-flex px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <span className="text-blue-400 text-xs font-semibold tracking-wider">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos - Premium Marquee with TRANSPARENT BACKGROUND */}
      <section className="relative py-20 px-4 overflow-hidden z-10">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-xs uppercase tracking-wider font-semibold mb-2">Trusted By</p>
          <p className="text-white/60 text-sm">Ecosystem Partners</p>
        </div>
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-110 border border-white/10">
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Premium Glass */}
      <section className="relative py-28 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-12 text-center border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white">Let's Connect</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
              
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="space-y-4">
                  <a href="mailto:info@digitalliberia.com" className="flex items-center justify-center space-x-2 text-white/70 hover:text-blue-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">✉️</span>
                    <span className="text-sm">info@digitalliberia.com</span>
                  </a>
                  <a href="https://wa.me/231888001077" className="flex items-center justify-center space-x-2 text-white/70 hover:text-blue-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📱</span>
                    <span className="text-sm">WhatsApp: +231 888 001 077</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="tel:+231775055817" className="flex items-center justify-center space-x-2 text-white/70 hover:text-blue-400 transition-colors group">
                    <span className="text-sm group-hover:translate-x-1 transition-transform">📞</span>
                    <span className="text-sm">Call: +231 775 055 817</span>
                  </a>
                </div>
              </div>
              
              <p className="text-white/40 text-xs mt-10">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-4 border-t border-white/10 bg-black/50 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="text-blue-400/40 text-xs mt-2">Building Africa's Digital Future</p>
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
