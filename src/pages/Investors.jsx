import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const sections = [
  {
    to: "/investors/opportunity",
    icon: "🌍",
    title: "The Opportunity",
    description: "How Liberia's digital transformation creates room for connected technology.",
  },
  {
    to: "/investors/what-we-have-built",
    icon: "🏗️",
    title: "What We Have Built",
    description: "The technology, team, and foundations we've established so far.",
  },
  {
    to: "/investors/business-model",
    icon: "📊",
    title: "Our Business Model",
    description: "Five complementary revenue streams designed to scale with the ecosystem.",
  },
  {
    to: "/investors/why-partner",
    icon: "🤝",
    title: "Why Partner With Digital Liberia?",
    description: "What makes this a practical, locally grounded partnership.",
  },
  {
    to: "/investors/investment-priorities",
    icon: "🎯",
    title: "Our Investment Priorities",
    description: "Where capital goes and how it accelerates deployment and growth.",
  },
];

export default function Investors() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      {/* Background FX */}
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
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-wide">
              ✦ INVESTORS & STRATEGIC PARTNERS ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Invest in
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Digital Liberia
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-semibold mb-4">
            Backing the infrastructure behind Liberia&apos;s digital economy.
          </p>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            Digital Liberia Inc. is building an integrated digital infrastructure ecosystem designed to connect people, businesses, financial institutions, and government services.
          </p>
        </div>
      </section>

      {/* Hero image + summary */}
      <section className="relative py-8 md:py-12 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/logos/investors.jpeg"
                alt="Digital Liberia — investors & strategic partners"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="relative mt-8 bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl">
            <div className="text-4xl md:text-5xl mb-4 opacity-80">💡</div>
            <p className="text-white/85 leading-relaxed text-base md:text-lg">
              We see an opportunity to address fundamental challenges in Liberia&apos;s economy through practical technology: limited digitization among informal businesses, fragmented business records, barriers to digital payments, and the need for more connected institutional systems.
            </p>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="relative py-12 md:py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
              Explore the Investor Narrative
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, idx) => (
              <Link
                key={idx}
                to={section.to}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.03] hover:border-red-500/40 flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="text-4xl md:text-5xl mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {section.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base flex-1">
                    {section.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent group-hover:gap-2 transition-all">
                    Learn More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-white/10 backdrop-blur-xl p-8 md:p-14 text-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                Ready to Explore a Partnership?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                See why Digital Liberia is a practical, locally grounded opportunity — or reach out directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/investors/why-partner"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
                >
                  Why Partner With Us →
                </Link>
                <a
                  href="mailto:info@digitalliberia.com"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all text-sm md:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
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
