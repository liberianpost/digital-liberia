import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fullscreen Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 opacity-80 animate-background" />

      {/* Glassmorphism Foreground Container */}
      <div className="relative z-10 min-h-screen px-6 py-12 max-w-7xl mx-auto text-white font-sans backdrop-blur-2xl bg-blue-900 bg-opacity-30 rounded-3xl shadow-2xl border border-white border-opacity-20">
        
        {/* Hero / Intro */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to Digital Liberia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Digital Liberia is a <span className="font-semibold text-white">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
          </p>
        </section>

        {/* Ecosystem Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 border-b border-white/30 pb-2 max-w-max">
            Ecosystem Components
          </h2>

          {/* Each article uses consistent styling */}
          <div className="space-y-12 text-blue-100">
            <article>
              <h3 className="text-2xl font-semibold text-white mb-2">1. National Database Management System (NDMS)</h3>
              <p className="max-w-4xl leading-relaxed">
                A secure, centralized, and intelligent national data backbone to:
              </p>
              <ul className="list-disc list-inside mt-2 pl-4">
                <li>Store/manage personal, institutional, and commercial data</li>
                <li>Enable access control across all government ministries</li>
                <li>Provide real-time data and analytics dashboards</li>
              </ul>
              <p className="italic mt-4">
                This multi-tiered security access model can be adapted for:
              </p>
              <ul className="list-disc list-inside mt-1 pl-4">
                <li>Ministry of Health (patient records, facilities)</li>
                <li>Agriculture (farmer databases, harvest reports)</li>
                <li>Immigration (passport/visa requests)</li>
                <li>Judiciary (case tracking, legal documents)</li>
              </ul>
            </article>

            <article>
              <h3 className="text-2xl font-semibold text-white mb-2">2. LibPay – National Digital Payment Gateway</h3>
              <p>LibPay is a secure and inclusive digital payment solution designed for Liberia.</p>
              <strong className="block mt-2">Core Features:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>Seamless mobile-to-mobile transfers</li>
                <li>Subscription billing (education, utilities, commerce)</li>
                <li>In-app payments for ecommerce, food, services</li>
                <li>QR Code, NFC, and phone-number-based payments</li>
                <li>Multi-currency support: USD & LRD</li>
                <li>Accept payments as low as 1 LRD</li>
              </ul>
              <p className="mt-2">
                <strong>LIDIRA</strong> POS machine:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Accepts LibPay payments in LRD & USD</li>
                <li>Supports offline/low-bandwidth</li>
                <li>Prints receipts & tracks inventory</li>
              </ul>
              <p className="italic mt-2">
                LibPay enables financial inclusion, reduces cash reliance, and supports small vendors.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold text-white mb-2">3. Digital Services & Lifestyle Hub</h3>
              <p>
                Digital Liberia offers daily convenience in one app:
              </p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>E-commerce Marketplace</li>
                <li>Food Delivery</li>
                <li>Entertainment: Music, video, radio</li>
                <li>Social Media: Private chat, community networks</li>
              </ul>
            </article>

            <article>
              <h3 className="text-2xl font-semibold text-white mb-2">4. Liberian Post – National Logistics & Delivery System</h3>
              <p>A digital-first courier and delivery service for nationwide logistics:</p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>Fast delivery of goods & documents</li>
                <li>Smart tracking with QR package IDs</li>
                <li>P2P, B2B & government delivery support</li>
                <li>Integrated with ecommerce & LibPay</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 border-b border-white/30 pb-2">
            Vision & Mission
          </h2>
          <p className="mb-4 italic text-lg text-blue-100">
            <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
          </p>
          <p className="italic text-lg text-blue-100">
            <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="max-w-4xl mx-auto text-center text-blue-100">
          <h2 className="text-3xl font-bold mb-6 border-b border-white/30 pb-2">
            Problem Statement
          </h2>
          <p className="text-lg leading-relaxed">
            Liberia is facing significant gaps in digital transformation...
          </p>
        </section>
      </div>
    </div>
  );
}
