import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function OurPhilosophy() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-gold/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="fixed inset-0 bg-gradient-to-br from-brand-red/8 via-transparent to-brand-blue/8 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85 z-0"></div>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-12 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-blue/20 border border-brand-gold/60 shadow-gold-glow backdrop-blur-sm mb-6">
            <span className="text-brand-gold mr-2">✦</span>
            <span className="bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue bg-clip-text text-transparent text-sm font-bold tracking-wide">
              OUR PHILOSOPHY
            </span>
            <span className="text-brand-gold ml-2">✦</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark bg-clip-text text-transparent">
              Our Philosophy
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            The principles that guide every product we build and every partnership we form.
          </p>
        </div>
      </section>

      {/* Big quote — star treatment */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-blue/20 border border-brand-gold/60 backdrop-blur-xl p-8 md:p-14 shadow-gold-glow-lg">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-red/25 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-gold/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/25 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl md:text-8xl text-brand-gold/40 leading-none mb-2">“</div>
              <p className="text-xl md:text-3xl lg:text-4xl font-bold italic leading-snug bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark bg-clip-text text-transparent">
                Build technology around Liberia&apos;s problems — not force Liberia to adapt to technology.
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark mx-auto mt-8 rounded-full shadow-gold-glow"></div>
              <div className="mt-4 text-brand-gold text-2xl">✦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer + image */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-blue/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden border border-brand-gold/40 shadow-2xl group-hover:shadow-gold-glow transition-all">
                <img
                  src="/logos/office.jpg"
                  alt="Digital Liberia — our philosophy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-brand-gold/30 shadow-xl">
              <div className="text-4xl md:text-5xl mb-4 opacity-80">🧭</div>
              <p className="text-white/85 leading-relaxed text-base md:text-lg mb-4">
                We believe successful technology must reflect the realities of the people who use it.
              </p>
              <p className="text-white/85 leading-relaxed text-base md:text-lg">
                Our solutions should address real needs, work within local conditions, and create measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-blue/20 border border-brand-gold/40 backdrop-blur-xl p-8 md:p-14 text-center shadow-gold-glow">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-gold/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue bg-clip-text text-transparent">
                See the People This Philosophy Serves
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                From market traders to government institutions — every solution starts with who it&apos;s for.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/who-we-serve"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark rounded-xl font-bold text-black shadow-lg shadow-brand-gold/40 hover:shadow-gold-glow-lg hover:scale-105 transition-all text-sm md:text-base ring-1 ring-brand-gold/60"
                >
                  Who We Serve →
                </Link>
                <Link
                  to="/our-mission"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-brand-gold/50 rounded-xl font-bold text-white hover:border-brand-gold hover:text-brand-gold transition-all text-sm md:text-base hover:shadow-gold-glow"
                >
                  Back to Our Mission
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
