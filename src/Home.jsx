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

const movingText = "✦ THE FUTURE IS NOW ✦ TRANSFORMING LIBERIA'S DIGITAL ECONOMY ✦ BUILDING TOMORROW TODAY ✦";

export default function Home() {
  const location = useLocation();
  const [activePartner, setActivePartner] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      
      {/* Animated Background Particles - Enhanced visibility */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Rotating Background Icons - Natural colors, reduced opacity overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
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
      
      {/* Lighter Gradient Overlay for better visibility */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      {/* Sticky Header Container */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/90 backdrop-blur-2xl shadow-xl border-b border-red-500/20' : 'bg-black/70 backdrop-blur-md border-b border-red-500/10'
      }`}>
        
        {/* Premium Navigation */}
        <header className="border-b border-red-500/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="mb-4 md:mb-0 group" onClick={handleLinkClick}>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <img src="/logos/digital.png" alt="Digital Liberia" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold text-xl md:text-2xl tracking-tight">DigitalLiberia</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-3">
                {navLinks.map(link => (
                  <Link 
                    key={link.to} 
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group ${
                      location.pathname === link.to 
                        ? 'text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {location.pathname !== link.to && (
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors z-50"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-md border-b border-red-500/10">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={handleLinkClick}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === link.to 
                    ? 'text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Moving Partner Logos Bar - Natural colors */}
        <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="py-2 md:py-3 overflow-x-auto scrollbar-hide">
            <div className="flex animate-marquee-top gap-8 md:gap-16 whitespace-nowrap min-w-max px-4">
              {[...partners, ...partners].map((logo, idx) => (
                <div key={idx} className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all hover:scale-110 flex-shrink-0">
                  <img 
                    src={logo} 
                    alt={`Partner ${idx}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Moving Text Bar - "The Future is Now" */}
        <div className="border-b border-red-500/20 bg-gradient-to-r from-red-500/15 to-blue-500/15 overflow-hidden">
          <div className="py-2 md:py-2.5 overflow-hidden">
            <div className="flex animate-marquee-text whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-xs md:text-sm font-semibold tracking-wider text-white/80 mx-8">
                  {movingText}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[180px] md:pt-72 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs md:text-sm font-bold tracking-wide">✦ LIBERIAN NATIONAL INFRASTRUCTURE ✦</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tighter">
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Building</span>
                <span className="block bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Liberia's Future
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
                Digital Liberia Inc. is a Liberian technology and digital infrastructure company established with the purpose of designing, building, operating, and scaling a national digital ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/ecosystem" className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:scale-105 overflow-hidden text-sm md:text-base">
                  <span className="relative z-10">Explore Ecosystem →</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
                <Link to="/business-model" className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all backdrop-blur-sm text-sm md:text-base">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Glassmorphism Logo Container - Natural color */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative h-56 md:h-80 bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center border border-white/10">
                <img
                  src="/logos/digital.png"
                  alt="Digital Liberia Logo"
                  className="w-32 h-32 md:w-56 md:h-56 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: "16+", label: "Digital Products", icon: "🚀", desc: "Across the ecosystem" },
              { number: "5", label: "Executive Leaders", icon: "👥", desc: "Driving innovation" },
              { number: "15", label: "Counties", icon: "🗺️", desc: "Nationwide coverage" },
              { number: "24/7", label: "Digital Infrastructure", icon: "⚡", desc: "Always available" }
            ].map((stat, idx) => (
              <div key={idx} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-white/80 font-semibold text-xs md:text-sm mt-2">{stat.label}</div>
                <div className="text-white/40 text-xs mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Digital Infrastructure */}
      <section className="relative py-16 md:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs font-bold tracking-wider">CORE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            National Digital Infrastructure
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Company Overview Cards */}
      <section className="relative py-4 md:py-8 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              "A long-term national infrastructure platform becoming the core of Liberia's digital economy.",
              "Unified digital ecosystem combining payments, identity, government services, commerce, and more."
            ].map((text, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <p className="text-white/80 leading-relaxed relative z-10 text-base md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-br from-red-500/5 to-blue-500/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs font-bold tracking-wider">PILLARS OF PROGRESS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
              Ecosystem Components
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "National Database", description: "Secure national data backbone with real-time analytics.", icon: "🏛️" },
              { title: "Digital Identity (DSSN)", description: "Your unique gateway to services and inclusion.", icon: "🆔" },
              { title: "LibPay", description: "Fast, secure payments for all transactions.", icon: "💳" },
              { title: "E-Government Services", description: "Streamlined digital access to government.", icon: "🏢" },
              { title: "Commerce & Logistics", description: "Integrated marketplace and delivery infrastructure.", icon: "📦" },
              { title: "Healthcare & Education", description: "Digital platforms for health and learning.", icon: "🏥" }
            ].map((pillar, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30 cursor-default">
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-2xl md:text-3xl opacity-80 group-hover:opacity-100 transition-opacity">{pillar.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-red-400 transition-colors">{pillar.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="relative py-20 md:py-28 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative bg-red-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-red-500/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 hover:border-red-500/40">
              <div className="text-4xl md:text-5xl mb-4 opacity-80">⚡</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">The Challenge</h3>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                Fragmented paper records and weak ID systems affecting service delivery.
              </p>
            </div>
            
            <div className="group relative bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-blue-500/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:border-blue-500/40">
              <div className="text-4xl md:text-5xl mb-4 opacity-80">✨</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">The Solution</h3>
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                Digital Liberia bridges gaps in access, trust, and inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-br from-red-500/5 to-blue-500/5 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { quote: "To become the digital backbone of Liberia—empowering people and the economy.", label: "Vision", icon: "🎯", color: "red" },
              { quote: "Deliver secure, transparent governance while generating sustainable returns.", label: "Mission", icon: "🚀", color: "blue" }
            ].map((item, idx) => (
              <div key={idx} className={`group relative bg-${item.color}-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-${item.color}-500/20 hover:scale-105 text-center`}>
                <div className="text-5xl md:text-6xl mb-4 opacity-80">{item.icon}</div>
                <div className="text-5xl md:text-6xl mb-4 md:mb-6 text-white/20">"</div>
                <p className="text-white/80 text-xl md:text-2xl italic leading-relaxed mb-6 md:mb-8">
                  {item.quote}
                </p>
                <div className="inline-flex px-4 py-1 md:px-6 md:py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30">
                  <span className={`bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 bg-clip-text text-transparent text-xs md:text-sm font-bold tracking-wider`}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Natural logo colors */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden z-10">
        <div className="text-center mb-8">
          <p className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs uppercase tracking-wider font-bold mb-2">Trusted By</p>
          <p className="text-white/60 text-sm">Ecosystem Partners</p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex animate-marquee-bottom gap-8 md:gap-12 whitespace-nowrap min-w-max">
            {[...partners, ...partners, ...partners].map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition-all hover:scale-110 flex-shrink-0 opacity-80 hover:opacity-100">
                <img 
                  src={logo} 
                  alt={`Partner ${idx}`}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="relative py-16 md:py-20 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
              <a href="mailto:info@digitalliberia.com" className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">✉️</span>
                <span className="text-base md:text-lg font-semibold">info@digitalliberia.com</span>
              </a>
              <a href="https://wa.me/231888001077" className="flex items-center justify-center gap-3 text-white/70 hover:text-red-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">📱</span>
                <span className="text-base md:text-lg font-semibold">WhatsApp: +231 888 001 077</span>
              </a>
              <a href="tel:+231775055817" className="flex items-center justify-center gap-3 text-white/70 hover:text-blue-400 transition-all duration-300 group">
                <span className="text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">📞</span>
                <span className="text-base md:text-lg font-semibold">Call: +231 775 055 817</span>
              </a>
            </div>
            
            <p className="text-white/40 text-xs mt-8">Monday - Friday, 8:00 AM - 5:00 PM GMT</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 border-t border-white/10 bg-gradient-to-r from-red-500/10 to-blue-500/10 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-xs md:text-sm">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
          <p className="bg-gradient-to-r from-red-500/50 to-blue-500/50 bg-clip-text text-transparent mt-2 flex items-center justify-center gap-2 text-xs md:text-sm">
            <span>Building Africa's Digital Future</span>
            <span className="text-base md:text-xl">🇱🇷</span>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee-top {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-bottom {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-top {
          animation: marquee-top 20s linear infinite;
          display: flex;
        }
        .animate-marquee-bottom {
          animation: marquee-bottom 25s linear infinite;
          display: flex;
        }
        .animate-marquee-text {
          animation: marquee-text 25s linear infinite;
          display: flex;
        }
        .animate-marquee-top:hover,
        .animate-marquee-bottom:hover,
        .animate-marquee-text:hover {
          animation-play-state: paused;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
