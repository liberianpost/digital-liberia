import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const traderJourney = [
  "A POS device for recording sales and accepting supported digital payments.",
  "Inventory tools for tracking products, stock levels, and sales.",
  "Digital transaction records that help demonstrate business activity.",
  "Better visibility into business performance.",
  "A pathway toward business registration and appropriate tax compliance.",
  "Connections to additional payment, financial, and institutional services as integrations become available.",
];

export default function WhatMakesUsDifferent() {
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
              ✦ WHAT MAKES US DIFFERENT ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Connected Infrastructure,
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Not Isolated Apps
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            We are not simply building individual applications. We are building connected infrastructure.
          </p>
        </div>
      </section>

      {/* The trader story — the concrete example */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Scenario card */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl md:text-5xl opacity-80">🧺</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">Consider a real example</p>
                <h2 className="text-xl md:text-2xl font-bold text-white">A market trader in Liberia</h2>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              Today, that trader might accept cash, keep inventory in a notebook, have no organized record of daily sales, and struggle to demonstrate business activity to a bank or other institution.
            </p>
          </div>

          {/* Transition */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold tracking-wide">
                ✦ WITH DIGITAL LIBERIA'S INTENDED ECOSYSTEM ✦
              </span>
            </span>
          </div>

          {/* Journey list */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {traderJourney.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.02] hover:border-red-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center text-sm md:text-base font-bold text-white shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Significance */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative bg-gradient-to-br from-red-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-red-500/20 shadow-xl">
              <div className="text-3xl mb-3 opacity-80">🔗</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                One Transaction. A Real Record.
              </h3>
              <p className="text-white/70 leading-relaxed">
                The significance is that one digital transaction can become part of a more useful business record, rather than remaining an isolated exchange of money.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-blue-500/10 to-red-500/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/20 shadow-xl">
              <div className="text-3xl mb-3 opacity-80">📈</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                Reinforcing at Scale
              </h3>
              <p className="text-white/70 leading-relaxed">
                At scale, and with appropriate consent, safeguards, and institutional cooperation, this kind of infrastructure can help businesses become more visible to financial service providers and help public institutions improve their understanding of economic activity.
              </p>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-10 text-center">
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent max-w-3xl mx-auto leading-snug">
              That is how Digital Liberia's different products can reinforce one another.
            </p>
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
                Ready to Explore the Ecosystem?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                See the full set of connected products and services powering Liberia's digital economy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/ecosystem"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
                >
                  Explore Ecosystem →
                </Link>
                <Link
                  to="/our-mission"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all text-sm md:text-base"
                >
                  Our Mission
                </Link>
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
