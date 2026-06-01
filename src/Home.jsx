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

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner(prev => (prev + 1) % partners.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      
      {/* Subtle Background Texture - Grok inspired */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/3 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation - Minimalist Black & White */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            {/* Logo Area - Using digital.png as requested */}
            <Link to="/" className="mb-4 md:mb-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/logos/digital.png" alt="Digital Liberia" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Digital<span className="text-white/60">Liberia</span></span>
              </div>
            </Link>

            {/* Navigation Links - Minimalist */}
            <nav className="flex flex-wrap justify-center gap-1 md:gap-2">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    location.pathname === link.to 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Bold & Minimalist */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-white/60 text-sm font-medium tracking-wide">NATIONAL INFRASTRUCTURE</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                Building
                <span className="block text-white/40">
                  Liberia's Digital Future
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-lg">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/ecosystem" className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
                  Explore Ecosystem →
                </Link>
                <Link to="/business-model" className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 glass-card rounded-2xl p-8">
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
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">National Digital Infrastructure</h2>
            <div className="w-16 h-px bg-white/20 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-white/60 leading-relaxed">
                Digital Liberia is being developed as more than a software company. It is structured as a long-term national infrastructure platform designed to become a core part of Liberia's digital economy.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-white/60 leading-relaxed">
                The company combines digital public infrastructure, secure payments, digital identity systems, e-government services, commerce, logistics, financial technology, healthcare access, land management, data infrastructure, and business enablement into one connected digital environment.
              </p>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 mt-8">
            <p className="text-white/60 leading-relaxed text-center">
              At the center of this strategy is the vision to build a unified ecosystem where citizens can access services, make payments, verify identity, conduct business, receive public services, access marketplaces, and interact digitally through one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Glass Card Grid */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ecosystem Components</h2>
            <div className="w-16 h-px bg-white/20 mx-auto mt-4"></div>
            <p className="text-white/40 mt-4 max-w-2xl mx-auto">Integrated solutions powering Liberia's digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "National Database Management",
                description: "Secure, centralized national data backbone enabling real-time analytics and access control across all government ministries.",
                link: "/system"
              },
              {
                title: "Digital Identity (DSSN)",
                description: "Unique, immutable identifier assigned to every individual - your gateway to services, recognition, and inclusion.",
                link: "/digital-liberia"
              },
              {
                title: "LibPay",
                description: "Fast, reliable, and secure payment gateway for all financial transactions across Liberia.",
                link: "/libpay"
              },
              {
                title: "E-Government Services",
                description: "Streamlined digital access to government services, reducing friction and improving delivery.",
                link: "/system"
              },
              {
                title: "Commerce & Logistics",
                description: "Integrated marketplace and logistics infrastructure enabling business growth.",
                link: "/liberian-post"
              },
              {
                title: "Healthcare & Education",
                description: "Digital platforms improving access to healthcare records and educational tracking.",
                link: "/digital-liberia"
              }
            ].map((pillar, idx) => (
              <Link key={idx} to={pillar.link} className="group">
                <div className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:border-white/40 transition-colors">
                    <div className="text-2xl">{["🏛️", "🆔", "💳", "🏢", "📦", "🏥"][idx]}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">{pillar.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution - Minimalist Split */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8 border-l-2 border-white/20">
              <div className="text-2xl mb-4">○</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">The Challenge</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Fragmented, paper-based records and weak identification systems have impacted government service delivery, electoral credibility, healthcare access, educational tracking, and national security.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 border-l-2 border-white/20">
              <div className="text-2xl mb-4">●</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">The Solution</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Digital Liberia solves structural gaps in access, service delivery, trust, efficiency, and inclusion across both public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Minimalist */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4 text-white/20">"</div>
              <p className="text-white/60 text-lg italic leading-relaxed">
                To become the digital backbone of Liberia—empowering people and the economy.
              </p>
              <div className="mt-4 text-white/20 text-sm uppercase tracking-wider">Vision</div>
            </div>
            <div>
              <div className="text-5xl mb-4 text-white/20">"</div>
              <p className="text-white/60 text-lg italic leading-relaxed">
                Deliver a secure platform for transparent governance and accessible services while generating sustainable long-term returns.
              </p>
              <div className="mt-4 text-white/20 text-sm uppercase tracking-wider">Mission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos - Minimalist Strip */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-white/20 text-xs uppercase tracking-wider">Ecosystem Partners</p>
        </div>
        <div className="flex animate-marquee space-x-12 whitespace-nowrap">
          {[...partners, ...partners].map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center w-20 h-20 bg-white/[0.03] rounded-xl p-3 border border-white/5">
              <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Minimalist Glass */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Connect</h2>
            <div className="w-12 h-px bg-white/20 mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
              <div className="space-y-3">
                <a href="mailto:info@digitalliberia.com" className="flex items-center space-x-3 text-white/40 hover:text-white/60 transition-colors">
                  <span className="text-sm">info@digitalliberia.com</span>
                </a>
                <div className="flex items-center space-x-3">
                  <a href="https://wa.me/231888001077" className="text-white/40 hover:text-white/60 transition-colors text-sm">WhatsApp: +231 888 001 077</a>
                </div>
              </div>
              <div className="space-y-3">
                <a href="tel:+231775055817" className="text-white/40 hover:text-white/60 transition-colors text-sm">Call: +231 775 055 817</a>
              </div>
            </div>
            
            <p className="text-white/20 text-xs mt-8">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Digital Liberia Inc.</p>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
