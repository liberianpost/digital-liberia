import React from "react";

const sections = [
  {
    id: "intro",
    title: "Welcome to Digital Liberia",
    content: (
      <>
        <p className="text-blue-100">
          Digital Liberia is a <span className="font-semibold text-white">bold, nation-scale digital ecosystem</span> that aims to digitally transform governance, commerce, and everyday life in Liberia.
        </p>
        <p className="mt-4 text-blue-100">
          By unifying services into a single mobile platform, Digital Liberia serves citizens, businesses, and institutions with tools to interact securely, efficiently, and transparently—laying the foundation for a digitally empowered economy.
        </p>
      </>
    )
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    content: (
      <div className="space-y-12 text-blue-100 text-left">
        {/* You can keep each <article> like you originally had */}
        <article>
          <h3 className="text-2xl font-semibold text-white mb-2">1. National Database Management System (NDMS)</h3>
          <p>A secure, centralized, and intelligent national data backbone to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Store/manage personal, institutional, and commercial data</li>
            <li>Enable access control across all government ministries</li>
            <li>Provide real-time data and analytics dashboards</li>
          </ul>
        </article>
        {/* Continue adding the rest of the sections similarly... */}
      </div>
    )
  },
  {
    id: "vision",
    title: "Vision & Mission",
    content: (
      <>
        <p className="mb-4 italic text-blue-100 text-lg">
          <strong>Vision:</strong> To become the digital backbone of Liberia—empowering people and the economy.
        </p>
        <p className="italic text-blue-100 text-lg">
          <strong>Mission:</strong> Deliver a secure platform for transparent governance and accessible services.
        </p>
      </>
    )
  },
  {
    id: "problem",
    title: "Problem Statement",
    content: (
      <p className="text-blue-100 text-lg">
        Liberia is facing significant gaps in digital transformation...
      </p>
    )
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-deep-dark text-white font-inter overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-blue bg-[length:400%_400%] animate-background -z-10" />

      {sections.map((section, index) => (
        <section
          key={section.id}
          className="relative z-10 w-full py-20 px-6 md:px-12 max-w-6xl mx-auto"
        >
          <div className="backdrop-blur-md bg-glass-dark rounded-xl border border-white/10 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 border-b border-white/20 pb-2">
              {section.title}
            </h2>
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
