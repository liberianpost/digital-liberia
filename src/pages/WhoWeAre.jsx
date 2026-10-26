import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function WhoWeAre() {
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
              ✦ WHO WE ARE ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Building Liberia's
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Digital Foundation
            </span>
          </h1>
        </div>
      </section>

      {/* Main content — image + copy */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/logos/code.jpeg"
                  alt="Digital Liberia — building digital infrastructure"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl">
                <div className="text-3xl mb-3 opacity-80">🌍</div>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  Digital Liberia Inc. is a Liberian technology company building the digital infrastructure needed to connect people, businesses, financial institutions, and government services into a more inclusive, efficient, and digitally connected economy.
                </p>
              </div>

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl">
                <div className="text-3xl mb-3 opacity-80">💡</div>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  Founded by <span className="text-red-400 font-semibold">Emmanuel Paygar Jr. (PJ)</span>, Digital Liberia was created around a fundamental belief: Liberia needs technology designed around its real problems, economic realities, and development priorities.
                </p>
              </div>
            </div>
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
                Want to See What We're Building?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Explore the practical work driving Liberia's digital economy forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/what-we-do"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
                >
                  What We Do →
                </Link>
                <Link
                  to="/what-makes-us-different"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:border-red-500 hover:text-red-400 transition-all text-sm md:text-base"
                >
                  Why We're Different
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
