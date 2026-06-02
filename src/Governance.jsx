import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const leadershipTeam = [
  {
    name: "Sullivan T. Doeblah",
    title: "Chairman of the Board",
    icon: "👨‍💼",
    image: null,
    gradient: "from-red-500/20 to-red-600/10",
    responsibilities: [
      "Board coordination and leadership alignment",
      "Strategic oversight of infrastructure development",
      "Mobilizing execution capacity across board members",
      "Strengthening government and institutional relationships",
      "Ensuring accountability across company leadership",
      "Supporting major strategic initiatives"
    ],
    note: "The Chairman is not a ceremonial role — it is an active leadership function focused on driving progress and execution discipline."
  },
  {
    name: "Izetta Jones Howe",
    title: "Co-Chairperson of the Board",
    icon: null,
    image: "/logos/Izetta.jpg",
    gradient: "from-blue-500/20 to-blue-600/10",
    highlights: [
      "Trailblazing legal and student leader: First female President of the Federation of African Law Students and President of the Law Students Association at the Louis Arthur Grimes School of Law, recognized for transformational leadership and advocacy.",
      "Experienced executive and business leader: CEO of Fidelity Holdings Inc. and Special Project Coordinator at NASSCORP, with expertise in project management, strategic planning, procurement, public financial management, and investment portfolio management.",
      "Highly qualified and internationally recognized professional: Holds an M.Sc. in Project Management (Distinction) from Coventry University, with multiple professional certifications from Liberia, the U.S., Germany, and the UK, and is an alumnus of the International Visitor Leadership Program."
    ],
    responsibilities: [
      "Co-leading board execution strategy",
      "Strengthening institutional partnerships",
      "Supporting governance structure development",
      "Ensuring cross-sector coordination",
      "Assisting in policy-level and institutional engagement",
      "Supporting organizational accountability"
    ],
    note: "The Co-Chair plays an active role in ensuring the board remains operationally engaged and not symbolic."
  },
  {
    name: "Emmanuel Paygar Jr.",
    title: "Founder & Chief Executive Officer (CEO)",
    icon: null,
    image: "/logos/B61B5444-5CDE-48BA-A14D-3F08DD2DDF8F.JPG",
    gradient: "from-red-500/20 to-blue-600/10",
    highlights: [
      "FinTech Entrepreneur & Founder: Founder and owner of Solid, focused on building innovative financial technology solutions that advance digital payments, financial access, and technology-driven economic growth.",
      "Full-Stack Software Developer & Systems Builder: Experienced software developer with expertise across frontend development, backend engineering, cloud infrastructure, and scalable system architecture, with hands-on experience building end-to-end digital platforms and products.",
      "Investor & Financial Markets Trader: Active investor and trader in the financial markets with experience in market analysis, capital allocation, risk management, and identifying growth opportunities across global financial assets."
    ],
    responsibilities: [
      "Overall vision and strategic direction",
      "Product ecosystem development",
      "Investor relations and capital strategy",
      "National government engagement",
      "Executive coordination",
      "Final decision authority on company direction",
      "Long-term platform architecture"
    ],
    note: "The CEO serves as the central integration point across all business units and governance structures."
  },
  {
    name: "Winston B. Borbor Jr.",
    title: "Chief Operating Officer (COO)",
    icon: "⚙️",
    image: null,
    gradient: "from-blue-500/20 to-blue-600/10",
    responsibilities: [
      "Daily operational execution",
      "Merchant operations and onboarding systems",
      "Logistics and delivery operations",
      "Internal coordination between departments",
      "Execution of expansion strategy",
      "Operational scaling across counties",
      "Performance tracking and delivery KPIs"
    ],
    note: "The COO ensures that strategy is translated into execution across all units."
  },
  {
    name: "Adolphus D. Dopoh",
    title: "Chief Technology Officer (CTO)",
    icon: null,
    image: "/logos/WhatsApp Image 2025-09-22 at 12.54.32.jpeg",
    gradient: "from-red-500/20 to-red-600/10",
    highlights: [
      "Telecommunications and Technology Leader: Experienced technology and telecommunications professional with leadership in core network engineering, IT infrastructure, cybersecurity, systems security, and digital transformation, currently serving with the Liberia Telecommunication Corporation.",
      "Highly qualified multidisciplinary professional: Holds advanced academic and technical qualifications in law, business administration, computer science engineering, IT infrastructure, cybersecurity, procurement, and supply chain management, with specialized training across Liberia and India.",
      "Strategic leader, researcher, and educator: Proven experience across executive leadership, academia, consulting, and institutional management, with published research in technology, telecommunications, supply chain systems, and sustainable development, alongside leadership roles in higher education and national organizations."
    ],
    responsibilities: [
      "Platform architecture and system design",
      "Backend and frontend engineering oversight",
      "LibPay infrastructure stability",
      "Cybersecurity systems and protection",
      "API and integration development",
      "Super App technical development",
      "System scalability and performance",
      "DevOps and deployment pipelines"
    ],
    note: "The CTO owns the full technical backbone of Digital Liberia."
  }
];

export default function Governance() {
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
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Subtle Red & Blue Gradient Overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/3 via-transparent to-blue-500/3 z-0"></div>

      {/* Sticky Header Container */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/98 backdrop-blur-2xl shadow-xl' : 'bg-white/90 backdrop-blur-md'
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
                      <img src="/logos/digital.png" alt="Digital Liberia" className="w-7 h-7 md:w-8 md:h-8 object-contain brightness-0 invert" />
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold text-xl md:text-2xl tracking-tight">DigitalLiberia</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-3">
                <Link to="/" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-gray-600 hover:text-gray-900">
                  <span className="relative z-10">Home</span>
                </Link>
                <Link to="/ecosystem" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-gray-600 hover:text-gray-900">
                  <span className="relative z-10">Ecosystem</span>
                </Link>
                <Link to="/business-model" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-gray-600 hover:text-gray-900">
                  <span className="relative z-10">Business Model</span>
                </Link>
                <Link to="/governance" onClick={handleLinkClick} className="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl overflow-hidden group text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">
                  <span className="relative z-10">Governance</span>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
              >
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-md border-b border-red-500/10">
            <Link to="/" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/ecosystem" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Ecosystem</Link>
            <Link to="/business-model" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Business Model</Link>
            <Link to="/governance" onClick={handleLinkClick} className="block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 text-white bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">Governance</Link>
          </div>
        </div>

        {/* Moving Partner Logos Bar */}
        <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm overflow-hidden">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 backdrop-blur-sm mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent text-sm font-bold tracking-wide">✦ EXECUTIVE GOVERNANCE ✦</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent animate-gradient">
              Functional Governance
            </span>
            <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              For National Infrastructure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Digital Liberia Inc. operates as a multi-sector digital infrastructure company. Its leadership structure 
            is designed to function as both an executive management system and an active operational governance system — 
            ensuring leadership is directly involved in execution, coordination, accountability, and national-scale delivery.
          </p>
        </div>
      </section>

      {/* Governance Model Explanation */}
      <section className="relative py-8 md:py-12 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Functional Board of Directors</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Digital Liberia does not operate with a passive advisory board. Instead, it uses a Functional Board Model, 
                designed to actively participate in execution oversight, strategic acceleration, and operational alignment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This ensures that leadership remains engaged in building, not just reviewing. Unlike traditional boards that 
                meet periodically, the Digital Liberia Board is designed as a working governance system.
              </p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Execution-Oriented Model</h3>
              <p className="text-gray-600 leading-relaxed">
                Because the company spans fintech, government systems, identity infrastructure, logistics, commerce, 
                and national digital services, Digital Liberia adopts a functional governance model where leadership roles 
                are tied directly to operational outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="relative py-12 md:py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
              Leadership & Executive Team
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              An active, execution-driven leadership structure focused on national-scale delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-105 hover:border-red-500/30 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10">
                  {/* Image or Icon Container */}
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/10 to-blue-500/10 flex items-center justify-center group-hover:scale-105 transition-transform border-2 border-white shadow-xl">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-5xl md:text-6xl">{member.icon}</div>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-900 text-center">{member.name}</h3>
                  <p className="text-red-600 text-sm md:text-base font-semibold mb-4 text-center">{member.title}</p>
                  
                  {/* Expandable Content - Increased max-height to show all content */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedCard === index ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-gray-100 mt-2">
                      {/* Highlights Section (for members with highlights) */}
                      {member.highlights && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Professional Highlights:</h4>
                          <ul className="space-y-2">
                            {member.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-blue-500 mt-1 flex-shrink-0">✦</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Responsibilities Section */}
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-red-500 mt-1 flex-shrink-0">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Note Section */}
                      {member.note && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border border-red-100">
                          <p className="text-gray-700 text-xs italic">📌 {member.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-400 group-hover:text-red-500 transition-colors">
                      {expandedCard === index ? '▲ Click to collapse' : '▼ Click to expand'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 border-t border-gray-100 bg-gradient-to-r from-red-50/30 to-blue-50/30 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} Digital Liberia Inc. All rights reserved.</p>
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
        .animate-marquee-top {
          animation: marquee-top 20s linear infinite;
          display: flex;
        }
        .animate-marquee-top:hover {
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
