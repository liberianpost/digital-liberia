import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const builtItems = [
  {
    icon: "💻",
    title: "Software & Platform Development",
    description: "Development across payments, digital identity, business technology, and institutional systems.",
  },
  {
    icon: "🏢",
    title: "Office & Technical Team",
    description: "An established company office and technical team focused on delivery.",
  },
  {
    icon: "🤝",
    title: "Business & Institutional Engagement",
    description: "Active engagement with businesses and institutions intended to support implementation and market access.",
  },
  {
    icon: "🏍️",
    title: "POS Deployment Pathways",
    description: "Developing opportunities to deploy POS devices and associated business tools to informal-sector participants through existing relationships — including motorcycle and tricycle operators and other business communities.",
  },
];

export default function WhatWeHaveBuilt() {
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
              ✦ WHAT WE HAVE BUILT ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              What We Have Built
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Digital Liberia has invested in developing its technology ecosystem and establishing the operational foundation for growth.
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
                alt="What We Have Built"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Built items */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {builtItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.02] hover:border-red-500/30"
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 text-4xl md:text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative py-8 md:py-12 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-white/10 backdrop-blur-xl p-8 md:p-12 text-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-lg md:text-2xl font-semibold text-white/90 leading-snug">
                These foundations provide a starting point for the next stage: deployment, customer adoption, revenue generation, and expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/investors/business-model"
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
            >
              Our Business Model →
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
