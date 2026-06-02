import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ecosystemData = [
  {
    category: "Digital Public Infrastructure",
    icon: "🏛️",
    description: "Secure government services delivered digitally to citizens.",
    services: [
      "Digital citizen service access",
      "Permits and registration systems",
      "Digital public records",
      "Service request platforms"
    ]
  },
  {
    category: "FinTech & Digital Payments",
    icon: "💳",
    description: "Secure financial infrastructure for seamless digital transactions.",
    services: [
      "Wallet services",
      "Peer-to-peer transfers",
      "Merchant payments",
      "Mobile money integration"
    ]
  },
  {
    category: "LibPay Payment Platform",
    icon: "🔒",
    description: "Digital Liberia's secure and scalable payment engine.",
    services: [
      "Consumer payments",
      "Merchant payments",
      "Online commerce",
      "Institutional payments"
    ]
  },
  {
    category: "National Identity & Database",
    icon: "🆔",
    description: "Secure identity verification and citizen record management.",
    services: [
      "DSSN - Digital Social Security Number",
      "NDMS - National Database System",
      "Secure identity verification",
      "Citizen record management"
    ]
  },
  {
    category: "Merchant & Business Services",
    icon: "🏪",
    description: "Digital tools helping SMEs grow their business online.",
    services: [
      "Digital storefronts",
      "Payment acceptance",
      "Inventory support",
      "Reporting dashboards"
    ]
  },
  {
    category: "E-Commerce Marketplace",
    icon: "🛒",
    description: "Centralized platform for Liberian businesses to sell online.",
    services: [
      "Product listings",
      "Secure checkout",
      "Seller dashboards",
      "Order management"
    ]
  },
  {
    category: "Logistics & Delivery",
    icon: "📦",
    description: "Integrated digital logistics for goods movement.",
    services: [
      "Digital dispatch",
      "Order fulfillment",
      "Courier tracking",
      "Delivery management"
    ]
  },
  {
    category: "Digital Land Management",
    icon: "🏞️",
    description: "Secure land documentation and property management.",
    services: [
      "Secure land documentation",
      "Digital property records",
      "Land mapping",
      "Property registration"
    ]
  },
  {
    category: "Real Estate Integration",
    icon: "🏠",
    description: "Technology for property listing and secure transactions.",
    services: [
      "Property listings",
      "Digital documentation",
      "Secure transactions",
      "Property management"
    ]
  },
  {
    category: "Social Networking Platform",
    icon: "👥",
    description: "Liberian-centered social and community platform.",
    services: [
      "Community forums",
      "User profiles",
      "Content sharing",
      "Messaging system"
    ]
  },
  {
    category: "Music & Entertainment",
    icon: "🎵",
    description: "Streaming and content monetization for local artists.",
    services: [
      "Music streaming",
      "Artist profiles",
      "Content monetization",
      "Playlist creation"
    ]
  },
  {
    category: "Digital Health / Telemedicine",
    icon: "🏥",
    description: "Remote healthcare access and digital medical records.",
    services: [
      "Remote consultations",
      "Digital medical records",
      "Healthcare coordination",
      "Appointment scheduling"
    ]
  },
  {
    category: "AgriTech Platforms",
    icon: "🌾",
    description: "Digital market access for agricultural producers.",
    services: [
      "Market access platforms",
      "Buyer connections",
      "Pricing information",
      "Distribution logistics"
    ]
  },
  {
    category: "Data Analytics & Open Data",
    icon: "📊",
    description: "Insight generation and responsible data systems.",
    services: [
      "Business intelligence",
      "Data visualization",
      "Open data portals",
      "Analytics dashboards"
    ]
  },
  {
    category: "Cybersecurity & Resilience",
    icon: "🛡️",
    description: "Protecting systems, transactions, and user data.",
    services: [
      "Threat detection",
      "Data encryption",
      "Security monitoring",
      "Incident response"
    ]
  },
  {
    category: "Startup & Tech Ecosystem",
    icon: "🚀",
    description: "Supporting local entrepreneurship and digital talent.",
    services: [
      "Startup incubation",
      "Developer tools",
      "Tech training programs",
      "Innovation grants"
    ]
  }
];

export default function Ecosystem() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const partners = [
    "/logos/liberianpost.png",
    "/logos/digital.png",
    "/logos/libmusic.png",
    "/logos/libconnectsit.png",
    "/logos/libpaysit.png",
    "/logos/seal of liberia.png",
    "/logos/liberia.png"
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Subtle Red & Blue Gradient Overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/8 via-transparent to-blue-500/8 z-0"></div>

      {/* Lighter Gradient Overlay for better visibility */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      {/* Sticky Header Container - Dark theme */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/90 backdrop-blur-2xl shadow-xl border-b border-red-500/20' : 'bg-black/70 backdrop-blur-md border-b border-red-500/10'
      }`}>
        
        {/* Premium Navigation */}
        <header className="border-b border-red-500/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="group" onClick={handleLinkClick}>
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

              {/* Desktop Navigation - Light text on dark */}
              <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-3">
                <Link to="/" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-white/70 hover:text-white">
                  <span className="relative z-10">Home</span>
                </Link>
                <Link to="/ecosystem" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">
                  <span className="relative z-10">Ecosystem</span>
                </Link>
                <Link to="/business-model" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-white/70 hover:text-white">
                  <span className="relative z-10">Business Model</span>
                </Link>
                <Link to="/governance" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-white/70 hover:text-white">
                  <span className="relative z-10">Governance</span>
                </Link>
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

        {/* Mobile Navigation Menu - Dark theme */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-md border-b border-red-500/10">
            <Link to="/" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10">Home</Link>
            <Link to="/ecosystem" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">Ecosystem</Link>
            <Link to="/business-model" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10">Business Model</Link>
            <Link to="/governance" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10">Governance</Link>
          </div>
        </div>

        {/* Moving Partner Logos Bar - Natural colors */}
        <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="py-2 md:py-3 overflow-x-auto scrollbar-hide">
            <div className="flex animate-marquee-top gap-8 md:gap-16 whitespace-nowrap min-w-max px-4">
              {[...partners, ...partners].map((logo, idx) => (
                <div key={idx} className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 transition-all hover:scale-110 flex-shrink-0">
                  <img src={logo} alt={`Partner ${idx}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-36 md:pt-48 pb-12 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-wide">✦ ECOSYSTEM ✦</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Digital Infrastructure
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              For Liberia
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            An integrated portfolio transforming Liberia's digital economy.
          </p>
        </div>
      </section>

      {/* Stats Summary - Changed "Live Now" to "24/7" */}
      <section className="relative py-8 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "16+", label: "Products", icon: "🚀" },
              { number: "4", label: "24/7", icon: "⚡" },
              { number: "12", label: "Coming Soon", icon: "🔄" },
              { number: "15", label: "Counties", icon: "🗺️" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-white/60 text-xs md:text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Digital Infrastructure */}
      <section className="relative py-12 md:py-16 px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            National Digital Infrastructure
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Ecosystem Cards Grid */}
      <section className="relative py-12 md:py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Ecosystem Components
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ecosystemData.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-start mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="text-2xl md:text-3xl opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-red-400 transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Expandable Services List */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedCard === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-white/10 mt-2">
                      <h4 className="text-xs font-semibold text-white/50 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {item.services.map((service, idx) => (
                          <li key={idx} className="text-white/50 text-xs flex items-start gap-2">
                            <span className="text-red-400 mt-1">▹</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-white/30 group-hover:text-red-400 transition-colors">
                      {expandedCard === index ? '▲ Click to collapse' : '▼ Click to expand'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Reduced logo sizes */}
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
        .animate-marquee-top {
          animation: marquee-top 20s linear infinite;
          display: flex;
        }
        .animate-marquee-bottom {
          animation: marquee-bottom 25s linear infinite;
          display: flex;
        }
        .animate-marquee-top:hover,
        .animate-marquee-bottom:hover {
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
