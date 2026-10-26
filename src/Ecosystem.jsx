import React, { useState } from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const ecosystemData = [
  { category: "Digital Public Infrastructure", icon: "🏛️", description: "Secure government services delivered digitally to citizens.", services: ["Digital citizen service access", "Permits and registration systems", "Digital public records", "Service request platforms"] },
  { category: "FinTech & Digital Payments", icon: "💳", description: "Secure financial infrastructure for seamless digital transactions.", services: ["Wallet services", "Peer-to-peer transfers", "Merchant payments", "Mobile money integration"] },
  { category: "LibPay Payment Platform", icon: "🔒", description: "Digital Liberia's secure and scalable payment engine.", services: ["Consumer payments", "Merchant payments", "Online commerce", "Institutional payments"] },
  { category: "National Identity & Database", icon: "🆔", description: "Secure identity verification and citizen record management.", services: ["DSSN - Digital Social Security Number", "NDMS - National Database System", "Secure identity verification", "Citizen record management"] },
  { category: "Merchant & Business Services", icon: "🏪", description: "Digital tools helping SMEs grow their business online.", services: ["Digital storefronts", "Payment acceptance", "Inventory support", "Reporting dashboards"] },
  { category: "E-Commerce Marketplace", icon: "🛒", description: "Centralized platform for Liberian businesses to sell online.", services: ["Product listings", "Secure checkout", "Seller dashboards", "Order management"] },
  { category: "Logistics & Delivery", icon: "📦", description: "Integrated digital logistics for goods movement.", services: ["Digital dispatch", "Order fulfillment", "Courier tracking", "Delivery management"] },
  { category: "Digital Land Management", icon: "🏞️", description: "Secure land documentation and property management.", services: ["Secure land documentation", "Digital property records", "Land mapping", "Property registration"] },
  { category: "Real Estate Integration", icon: "🏠", description: "Technology for property listing and secure transactions.", services: ["Property listings", "Digital documentation", "Secure transactions", "Property management"] },
  { category: "Social Networking Platform", icon: "👥", description: "Liberian-centered social and community platform.", services: ["Community forums", "User profiles", "Content sharing", "Messaging system"] },
  { category: "Music & Entertainment", icon: "🎵", description: "Streaming and content monetization for local artists.", services: ["Music streaming", "Artist profiles", "Content monetization", "Playlist creation"] },
  { category: "Digital Health / Telemedicine", icon: "🏥", description: "Remote healthcare access and digital medical records.", services: ["Remote consultations", "Digital medical records", "Healthcare coordination", "Appointment scheduling"] },
  { category: "AgriTech Platforms", icon: "🌾", description: "Digital market access for agricultural producers.", services: ["Market access platforms", "Buyer connections", "Pricing information", "Distribution logistics"] },
  { category: "Data Analytics & Open Data", icon: "📊", description: "Insight generation and responsible data systems.", services: ["Business intelligence", "Data visualization", "Open data portals", "Analytics dashboards"] },
  { category: "Cybersecurity & Resilience", icon: "🛡️", description: "Protecting systems, transactions, and user data.", services: ["Threat detection", "Data encryption", "Security monitoring", "Incident response"] },
  { category: "Startup & Tech Ecosystem", icon: "🚀", description: "Supporting local entrepreneurship and digital talent.", services: ["Startup incubation", "Developer tools", "Tech training programs", "Innovation grants"] },
];

export default function Ecosystem() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/8 via-transparent to-blue-500/8 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-12 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-wide">✦ ECOSYSTEM ✦</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">Digital Infrastructure</span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">For Liberia</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            An integrated portfolio transforming Liberia's digital economy.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-8 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "16+", label: "Products", icon: "🚀" },
              { label: "Live", icon: "⚡" },
              { label: "24/7", icon: "🕒" },
              { number: "15", label: "Counties", icon: "🗺️" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                {stat.number ? (
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                ) : (
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">●</div>
                )}
                <div className="text-white/60 text-xs md:text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Digital Infrastructure */}
      <section className="relative py-12 md:py-16 px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">National Digital Infrastructure</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative py-12 md:py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Ecosystem Components</h3>
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
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-red-400 transition-colors">{item.category}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">{item.description}</p>
                  <div className={`overflow-hidden transition-all duration-500 ${expandedCard === index ? "max-h-96" : "max-h-0"}`}>
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
                  <div className="mt-4 text-center">
                    <span className="text-xs text-white/30 group-hover:text-red-400 transition-colors">
                      {expandedCard === index ? "▲ Click to collapse" : "▼ Click to expand"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden z-10">
        <div className="text-center mb-8">
          <p className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-xs uppercase tracking-wider font-bold mb-2">Trusted By</p>
          <p className="text-white/60 text-sm">Ecosystem Partners</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-bottom gap-8 md:gap-12 whitespace-nowrap min-w-max">
            {["/logos/liberianpost.png", "/logos/digital.png", "/logos/libmusic.png", "/logos/libconnectsit.png", "/logos/libpaysit.png", "/logos/seal of liberia.png", "/logos/liberia.png"].concat(["/logos/liberianpost.png", "/logos/digital.png", "/logos/libmusic.png", "/logos/libconnectsit.png", "/logos/libpaysit.png", "/logos/seal of liberia.png", "/logos/liberia.png"]).map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition-all hover:scale-110 flex-shrink-0 opacity-80 hover:opacity-100">
                <img src={logo} alt={`Partner ${idx}`} className="w-full h-full object-contain" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes marquee-bottom {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-bottom {
          animation: marquee-bottom 25s linear infinite;
          display: flex;
        }
        .animate-marquee-bottom:hover { animation-play-state: paused; }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
