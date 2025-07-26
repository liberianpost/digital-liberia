import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-opacity-20 backdrop-blur-md px-6 py-12 max-w-7xl mx-auto text-gray-900 font-sans">

      {/* Hero / Intro */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Digital Liberia
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Digital Liberia is a <span className="font-semibold">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
          As an all-in-one Super App, it integrates a centralized national database, government e-services, LibPay (a powerful payment gateway), e-commerce, entertainment, logistics, and more.
        </p>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
      </section>

      {/* Ecosystem Components */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-gray-300 pb-2 max-w-max">
          Ecosystem Components
        </h2>

        {/* NDMS */}
        <article className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">1. National Database Management System (NDMS)</h3>
          <p className="mb-3 max-w-4xl leading-relaxed">
            A secure, centralized, and intelligent national data backbone to:
          </p>
          <ul className="list-disc list-inside mb-4 max-w-4xl text-gray-700">
            <li>Store/manage personal, institutional, and commercial data</li>
            <li>Enable access control across all government ministries</li>
            <li>Provide real-time data and analytics dashboards</li>
          </ul>
          <p className="italic max-w-4xl text-gray-600">
            This multi-tiered security access model can be adapted for:
          </p>
          <ul className="list-disc list-inside max-w-4xl text-gray-700">
            <li>Ministry of Health (patient records, facilities)</li>
            <li>Agriculture (farmer databases, harvest reports)</li>
            <li>Immigration (passport/visa requests)</li>
            <li>Judiciary (case tracking, legal documents)</li>
          </ul>
        </article>

        {/* LibPay */}
        <article className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">2. LibPay – National Digital Payment Gateway</h3>
          <p className="mb-3 max-w-4xl leading-relaxed">
            LibPay is a secure and inclusive digital payment solution designed to power both P2P and B2C transactions for the Liberian population.
          </p>
          <strong className="block mb-2">Core Features:</strong>
          <ul className="list-disc list-inside mb-4 max-w-4xl text-gray-700">
            <li>Seamless mobile-to-mobile transfers</li>
            <li>Subscription billing (education, utilities, commerce)</li>
            <li>In-app payments for ecommerce, food, services</li>
            <li>QR Code, NFC, and phone-number-based payments</li>
            <li>Multi-currency support: USD & LRD</li>
            <li>Accept payments as low as 1 LRD</li>
          </ul>
          <p className="mb-2 max-w-4xl leading-relaxed">
            <strong>LIDIRA</strong> is a proprietary POS (Point of Sale) machine that:
          </p>
          <ul className="list-disc list-inside max-w-4xl text-gray-700 mb-4">
            <li>Accepts LibPay digital payments in both LRD and USD</li>
            <li>Enables businesses to accept micro-payments (as low as 1 LRD)</li>
            <li>Supports offline and low-bandwidth environments</li>
            <li>Can issue receipts, invoices, and track inventory</li>
            <li>Serves as the bridge between digital finance and local commerce</li>
          </ul>
          <p className="italic max-w-4xl text-gray-600">
            LibPay Benefits: Financial inclusion for the unbanked, reduced reliance on cash, support for schools, hospitals, businesses, and governments, and empowering small vendors and enterprises to go digital.
          </p>
        </article>

        {/* Digital Services & Lifestyle Hub */}
        <article className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">3. Digital Services & Lifestyle Hub</h3>
          <p className="max-w-4xl leading-relaxed">
            Digital Liberia goes beyond governance and finance to offer daily convenience in one app:
          </p>
          <ul className="list-disc list-inside max-w-4xl text-gray-700 mt-2">
            <li>E-commerce Marketplace: Sell/buy goods and services</li>
            <li>Food Delivery: Integrated with local restaurants and vendors</li>
            <li>Entertainment: Music streaming, digital radio, video-on-demand</li>
            <li>Social Media: Private chat, public posts, community networks</li>
          </ul>
        </article>

        {/* Liberian Post */}
        <article>
          <h3 className="text-2xl font-semibold mb-2">4. Liberian Post – National Logistics & Delivery System</h3>
          <p className="max-w-4xl leading-relaxed">
            A digital-first courier and delivery service that powers nationwide logistics:
          </p>
          <ul className="list-disc list-inside max-w-4xl text-gray-700 mt-2">
            <li>Fast delivery of goods, services, and documents</li>
            <li>Smart tracking with QR-based package IDs</li>
            <li>P2P, B2B, and government shipping support</li>
            <li>Interlinked with ecommerce and LibPay for end-to-end convenience</li>
          </ul>
        </article>
      </section>

      {/* Vision & Mission */}
      <section className="mb-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2 max-w-max mx-auto">
          Vision & Mission
        </h2>
        <p className="mb-4 italic text-lg">
          <strong>Vision:</strong> To become the digital infrastructure backbone of Liberia—empowering people, institutions, and the economy with reliable, scalable, and inclusive technology.
        </p>
        <p className="italic text-lg">
          <strong>Mission:</strong> To deliver a secure, centralized, and intelligent platform that enables transparent governance, seamless transactions, and accessible digital services to all Liberians.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="max-w-4xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2 max-w-max mx-auto">
          Problem Statement
        </h2>
        <p className="text-lg leading-relaxed">
          Liberia is facing significant gaps in digital transformation:
          {/* You can add more details here as you like */}
        </p>
      </section>
    </div>
  );
}
