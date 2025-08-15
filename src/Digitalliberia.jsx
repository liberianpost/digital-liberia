import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/", color: "bg-blue-500/80" },
  { label: "System", to: "/system", color: "bg-green-500/80" },
  { label: "Digital Liberia", to: "/digital-liberia", color: "bg-purple-500/80" },
  { label: "LibPay", to: "/libpay", color: "bg-yellow-500/80" },
  { label: "Liberian Post", to: "/liberian-post", color: "bg-pink-500/80" }
];

const logos = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png"
];

const sections = [
  {
    id: "overview",
    title: "The Digital Liberia Vision",
    bgColor: "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-600/10",
    borderColor: "border-indigo-400/30",
    content: (
      <>
        <p className="text-white">
          Digital Liberia is a pioneering technology company focused on the digitalization and decentralization of Liberia. Through its comprehensive ecosystem of services, the company offers solutions ranging from database management systems and secure payment platforms to e-commerce, logistics, and more.
        </p>
        <p className="mt-4 text-white">
          At the heart of its vision is the Digital Liberia Super App—a one-stop mobile platform designed to transform everyday life by integrating multiple services into a single, user-friendly interface. The app enables seamless payments that are fast, reliable, and secure, while also allowing users to access diverse features such as music streaming, food delivery, online shopping, social networking, and even government services.
        </p>
        <p className="mt-4 text-white">
          By consolidating essential digital services under one platform, Digital Liberia is setting a new standard for convenience, accessibility, and innovation, positioning itself as a true game-changer in the region's digital landscape.
        </p>
      </>
    )
  },
  {
    id: "mission",
    title: "Our Digital Transformation Mission",
    bgColor: "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-600/10",
    borderColor: "border-emerald-400/30",
    content: (
      <>
        <p className="text-white">
          Digital Liberia is on a mission to digitally transform and decentralize Liberia by building a unified ecosystem that empowers individuals, businesses, and institutions. Through its flagship Digital Liberia Super App, the company consolidates essential digital services—secure payments, e-commerce, logistics, entertainment, social networking, and access to government institutions—into a single, intuitive platform.
        </p>
        <p className="mt-4 text-white">
          By leveraging cutting-edge technology, Digital Liberia is breaking barriers to convenience and connectivity, offering fast, reliable, and secure solutions that drive economic growth and inclusion. Positioned as a one-stop digital hub, Digital Liberia is not just innovating; it is redefining how Liberians live, work, and engage with the world.
        </p>
      </>
    )
  },
  {
    id: "value-props",
    title: "Core Value Propositions",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-600/10",
    borderColor: "border-amber-400/30",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">One App. Endless Possibilities</h3>
          <p className="text-white">
            Digital Liberia is a true all-in-one platform, combining payments, shopping, social networking, government services, and more into a single app.
          </p>
          <p className="mt-2 text-white/90">
            <span className="font-semibold">Impact:</span> Creates a sense of convenience and completeness—users don't need multiple apps; everything is centralized in one place.
          </p>
          <p className="text-white/90">
            <span className="font-semibold">Use Case:</span> Ideal for consumer-focused marketing campaigns to emphasize simplicity and versatility.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Connecting Liberia, Digitally and Seamlessly</h3>
          <p className="text-white">
            Focuses on Digital Liberia's mission to bridge gaps across communities, businesses, and government institutions through a seamless digital ecosystem.
          </p>
          <p className="mt-2 text-white/90">
            <span className="font-semibold">Impact:</span> Appeals to the broader vision of national transformation and connectivity, positioning Digital Liberia as a catalyst for progress.
          </p>
          <p className="text-white/90">
            <span className="font-semibold">Use Case:</span> Suitable for corporate communications, partnerships, and investor pitches to highlight the company's role in unifying Liberia through technology.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Empowering Lives Through Technology</h3>
          <p className="text-white">
            The company's commitment to using technology as a tool for economic inclusion, convenience, and improved quality of life.
          </p>
          <p className="mt-2 text-white/90">
            <span className="font-semibold">Impact:</span> Strongly mission-driven, appealing to emotional connection and trust by focusing on the end-user benefits.
          </p>
          <p className="text-white/90">
            <span className="font-semibold">Use Case:</span> Perfect for social impact campaigns, CSR initiatives, and community engagement efforts.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "ecosystem",
    title: "The Digital Liberia Ecosystem",
    bgColor: "bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-rose-600/10",
    borderColor: "border-fuchsia-400/30",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h4 className="font-bold text-lg mb-2">Digital Services</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Secure Digital Payments (LibPay)</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>E-commerce Marketplace</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Music & Entertainment Streaming</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Social Networking Platform</span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h4 className="font-bold text-lg mb-2">Government Integration</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Ministry Services Portal</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Digital Identification (DSSN)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Document Processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Public Service Access</span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h4 className="font-bold text-lg mb-2">Business Solutions</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Digital Storefronts</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Payment Processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Logistics Integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Business Analytics</span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h4 className="font-bold text-lg mb-2">Community Features</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span>Local News & Updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span>Community Forums</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span>Event Listings</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span>Public Service Announcements</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "contact",
    title: "Contact Us",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-600/10",
    borderColor: "border-amber-400/30",
    content: (
      <div className="text-white space-y-4">
        <p className="text-lg">
          Have questions or need support? Reach out to us through any of these channels:
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="text-xl font-semibold mb-2 text-amber-200">Email:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@digitalliberia.com" className="hover:text-amber-300 transition-colors">info@digitalliberia.com</a>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@liberianpost.com" className="hover:text-amber-300 transition-colors">info@liberianpost.com</a>
            </li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="text-xl font-semibold mb-2 text-amber-200">Phone:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>WhatsApp: <a href="https://wa.me/231888001077" className="hover:text-amber-300 transition-colors">+231 888 001 077</a></span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: <a href="tel:+231775055817" className="hover:text-amber-300 transition-colors">+231 775 055 817</a></span>
            </li>
          </ul>
        </div>
        <p className="text-sm text-white/70 mt-4">
          Our team is available to assist you Monday through Friday, 8:00 AM to 5:00 PM GMT.
        </p>
      </div>
    )
  }
];

export default function Digitalliberia() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-slate-900 text-white font-inter overflow-x-hidden">
      <div className="fixed inset-0 bg-slate-900 -z-50" />
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === activeLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E';
                  console.error(`Digitalliberia.jsx - Failed to load logo: ${logo}`);
                }}
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30">
          <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
            <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
              {navLinks.map(link => (
                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                  <Link 
                    to={link.to} 
                    className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                      location.pathname === link.to 
                        ? "text-red-500" 
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="w-full bg-gradient-to-b from-slate-900 to-transparent overflow-x-auto">
            <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                    index === activeLogo 
                      ? "scale-110 bg-white shadow-lg"
                      : "scale-100 bg-white/90"
                  }`}
                  style={{
                    animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none'
                  }}
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E';
                      console.error(`Digitalliberia.jsx - Failed to load logo: ${logo}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className={`${section.bgColor} backdrop-blur-lg rounded-xl border ${section.borderColor} p-6 md:p-8 shadow-lg relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                  {section.title}
                </h2>
                <div className="text-white">
                  {section.content}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-slate-700/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
