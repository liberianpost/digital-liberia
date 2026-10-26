import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const partners = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png",
];

const featureCards = [
  {
    image: "/logos/qrcode.jpeg",
    tag: "LibPay",
    title: "Payments, Reimagined",
    text: "LibPay enables person-to-person, business-to-business, and customer-to-business transactions — connecting merchants, customers, and financial institutions across every relevant payment channel.",
    cta: "What We Do",
    to: "/what-we-do",
  },
  {
    image: "/logos/tomato.jpeg",
    tag: "Connected Economy",
    title: "Multiple Solutions. One Connected Economy.",
    text: "One ecosystem. Multiple solutions. A connected digital economy built to move Liberia forward — from identity to commerce to government services.",
    cta: "What We Do",
    to: "/what-we-do",
  },
  {
    image: "/logos/inventory.jpeg",
    tag: "The Challenge",
    title: "Breaking Free From Fragmentation",
    text: "Cash-dependent transactions, manual inventory, fragmented records, disconnected systems, and barriers to digitization hold Liberia back. Digital Liberia removes them.",
    cta: "Why We're Different",
    to: "/what-makes-us-different",
  },
];

export default function Home() {
  const [activePartner, setActivePartner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartner((prev) => (prev + 1) % partners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      {/* Background FX */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Rotating background icon */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-25">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {partners.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === activePartner ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <img src={logo} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-[170px] md:pt-64 pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-red/20 via-brand-gold/15 to-brand-blue/20 border border-brand-gold/60 shadow-gold-glow backdrop-blur-sm">
              <span className="text-sm mr-2">✦</span>
              <span className="bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue bg-clip-text text-transparent text-xs md:text-sm font-bold tracking-wide">
                LIBERIAN NATIONAL INFRASTRUCTURE
              </span>
              <span className="text-sm ml-2">✦</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter">
              <span className="bg-gradient-to-r from-brand-red to-brand-red-dark bg-clip-text text-transparent">
                Building
              </span>
              <span className="block bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue bg-clip-text text-transparent animate-gradient">
                Liberia&apos;s Future
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              Digital Liberia Inc. is a Liberian technology and digital infrastructure
              company established with the purpose of designing, building, operating,
              and scaling a national digital ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/what-we-do"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue rounded-xl font-bold text-white shadow-lg shadow-brand-gold/30 hover:shadow-gold-glow-lg transition-all transform hover:scale-105 overflow-hidden text-sm md:text-base ring-1 ring-brand-gold/40 hover:ring-brand-gold/80"
              >
                <span className="relative z-10">What We Do →</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-gold-dark to-brand-blue-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link
                to="/who-we-are"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-brand-gold/40 rounded-xl font-bold text-white hover:border-brand-gold hover:text-brand-gold transition-all backdrop-blur-sm text-sm md:text-base hover:shadow-gold-glow"
              >
                Who We Are
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-brand-gold/20 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/25 hover:scale-[1.02] hover:border-brand-gold/70 flex flex-col"
              >
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-brand-red/90 via-brand-gold/90 to-brand-blue/90 text-white text-[10px] md:text-xs font-bold tracking-wider uppercase backdrop-blur-sm shadow-gold-glow">
                    {card.tag}
                  </span>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-brand-gold transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{card.text}</p>
                  <Link
                    to={card.to}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark bg-clip-text text-transparent hover:gap-2 transition-all"
                  >
                    {card.cta}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — gold numbers */}
      <section className="relative py-14 md:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: "16+", label: "Digital Products", icon: "🚀" },
              { number: "5", label: "Executive Leaders", icon: "👥" },
              { number: "15", label: "Counties", icon: "🗺️" },
              { number: "24/7", label: "Infrastructure", icon: "⚡" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group text-center hover:scale-105 transition-all duration-300 p-4 rounded-2xl hover:bg-brand-gold/5 hover:ring-1 hover:ring-brand-gold/30"
              >
                <div className="text-3xl md:text-4xl mb-2 opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.7)] transition-all">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/70 font-semibold text-xs md:text-sm mt-2 group-hover:text-brand-gold/90 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gold-tinted card */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red/20 via-brand-gold/15 to-brand-blue/20 border border-brand-gold/30 backdrop-blur-xl p-8 md:p-14 text-center shadow-gold-glow">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-gold/25 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue bg-clip-text text-transparent">
                Ready to Build Liberia&apos;s Digital Future?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Join the ecosystem transforming payments, identity, commerce, and
                government services across all 15 counties.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/what-we-do"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue rounded-xl font-bold text-white shadow-lg shadow-brand-gold/30 hover:shadow-gold-glow-lg hover:scale-105 transition-all text-sm md:text-base ring-1 ring-brand-gold/40"
                >
                  See What We Do
                </Link>
                <Link
                  to="/who-we-are"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-brand-gold/50 rounded-xl font-bold text-white hover:border-brand-gold hover:text-brand-gold transition-all text-sm md:text-base hover:shadow-gold-glow"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden z-10">
        <div className="text-center mb-8">
          <p className="bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark bg-clip-text text-transparent text-xs uppercase tracking-wider font-bold mb-2">
            Trusted By
          </p>
          <p className="text-white/60 text-sm">Ecosystem Partners</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-bottom gap-8 md:gap-12 whitespace-nowrap min-w-max">
            {[...partners, ...partners, ...partners].map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all flex-shrink-0 opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]"
              >
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

      <Footer />

      <style>{`
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
