import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const services = [
  {
    title: "Digital Business Infrastructure",
    image: "/logos/sell.jpg",
    icon: "🏪",
    description:
      "We equip businesses with POS devices and connected tools for digital payments, sales tracking, inventory management, transaction records, and business visibility.",
    outcome:
      "The goal is to help informal businesses become more organized, improve their operations, build transaction histories, and create pathways toward formalization.",
  },
  {
    title: "Digital Payments and Financial Connectivity",
    image: "/logos/pay.jpg",
    icon: "💳",
    description:
      "Through LibPay and related payment infrastructure, we are developing capabilities for digital transactions, including person-to-person, business-to-business, and customer-to-business payments, with support planned across relevant payment channels.",
    outcome:
      "The objective is to make payments more convenient and help connect merchants, customers, and financial institutions.",
  },
  {
    title: "Digital Identity and Verification",
    image: "/logos/digital.jpg",
    icon: "🆔",
    description:
      "Our DSSN concept provides a foundation for unique digital identification, verification, and connectivity between services.",
    outcome:
      "This can help reduce duplicate records and support more reliable identification across participating platforms, subject to applicable legal requirements, institutional agreements, and authorized integrations.",
  },
  {
    title: "Government Technology and Digitalization",
    image: "/logos/gov.jpeg",
    icon: "🏛️",
    description:
      "We develop technology to help public institutions digitize workflows, manage information, improve operational visibility, and support more efficient service delivery.",
    outcome:
      "Our LBO system work and institutional engagements demonstrate how our technology capabilities can be applied to practical public-sector needs.",
  },
  {
    title: "Connectivity, Tracking, and Operational Systems",
    image: "/logos/track.jpg",
    icon: "📡",
    description:
      "We also work on technology for vehicle and asset tracking, connected devices, operational monitoring, and tailored digital systems for businesses and institutions.",
    outcome:
      "Operational systems designed to give businesses and institutions clear, real-time visibility into the assets and workflows that power their work.",
  },
  {
    title: "Software Engineering and Systems Integration",
    image: "/logos/soft.jpeg",
    icon: "⚙️",
    description:
      "We build software platforms, mobile applications, business systems, APIs, and customized technology solutions that help different services work together.",
    outcome:
      "This capability allows Digital Liberia to develop both its own products and technology for institutional and commercial partners.",
  },
];

export default function WhatWeDo() {
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
              ✦ WHAT WE DO ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              What Exactly Does
            </span>
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Digital Liberia Do?
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Six connected areas of work — each designed to reinforce the others, forming a single digital infrastructure for Liberia.
          </p>
        </div>
      </section>

      {/* Services — alternating image / content rows */}
      <section className="relative py-8 md:py-16 px-4 z-10">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
          {services.map((service, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group md:[direction:ltr]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/80 to-blue-500/80 text-white text-[10px] md:text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:[direction:ltr] space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xl">{service.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Service Area {idx + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 md:p-5 border border-white/10">
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      <span className="text-red-400 font-semibold">Outcome: </span>
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
                See How These Pieces Fit Together
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                Explore the ecosystem, or discover what makes Digital Liberia different.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/ecosystem"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-red-500/25 hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base"
                >
                  Explore Ecosystem →
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
