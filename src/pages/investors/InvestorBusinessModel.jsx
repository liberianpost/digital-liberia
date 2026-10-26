import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const revenueStreams = [
  {
    icon: "🏪",
    title: "Digital Business Services",
    description: "Revenue from POS-enabled services, merchant tools, inventory management, and business software.",
  },
  {
    icon: "💳",
    title: "Payment-Related Revenue",
    description: "Transaction-related fees and payment services, subject to applicable approvals, commercial arrangements, and the final operating model.",
  },
  {
    icon: "🏛️",
    title: "Technology and Institutional Contracts",
    description: "Revenue from software development, implementation, integration, maintenance, and customized systems for commercial and institutional clients.",
  },
  {
    icon: "🆔",
    title: "Digital Identity and Verification Services",
    description: "Potential fees for authorized verification and integration services, subject to applicable legal and regulatory requirements.",
  },
  {
    icon: "🔗",
    title: "Connected Services and Infrastructure",
    description: "Future opportunities from additional digital products, integrations, and value-added services as the ecosystem expands.",
  },
];

export default function InvestorBusinessModel() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
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
              ✦ OUR BUSINESS MODEL ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Our Business Model
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Digital Liberia is pursuing multiple complementary sources of revenue.
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="relative py-4 md:py-8 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/logos/investors.jpeg"
                alt="Our Business Model"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue streams — numbered cards */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {revenueStreams.map((stream, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.03] hover:border-red-500/30"
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center text-base md:text-lg font-bold text-white shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="text-3xl md:text-4xl opacity-70 group-hover:opacity-100 transition-opacity">
                      {stream.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {stream.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Closing statement card */}
            <div className="group relative bg-gradient-to-br from-red-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.03]">
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-4 opacity-80">📈</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                  A Diversified Model
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  This diversified model is intended to combine contract-based revenue with recurring and transaction-related income as individual services become operational and achieve adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/investors/why-partner"
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
            >
              Why Partner With Us →
            </Link>
            <Link
              to="/investors"
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all text-sm md:text-base"
            >
              Back to Investors
            </Link>
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
