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

// Xcode-style syntax highlighting components
const Keyword = ({ children }) => (
  <span className="text-purple-400 font-mono bg-black/70 px-1 rounded">{children}</span>
);

const Type = ({ children }) => (
  <span className="text-teal-300 font-mono bg-black/70 px-1 rounded">{children}</span>
);

const String = ({ children }) => (
  <span className="text-green-400 font-mono bg-black/70 px-1 rounded">"{children}"</span>
);

const Numeric = ({ children }) => (
  <span className="text-amber-400 font-mono bg-black/70 px-1 rounded">{children}</span>
);

const Comment = ({ children }) => (
  <span className="text-gray-400 italic font-mono bg-black/70 px-1 rounded">// {children}</span>
);

const sections = [
  {
    id: "overview",
    title: "LibPay Payment Gateway",
    bgColor: "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-600/10",
    borderColor: "border-cyan-400/30",
    content: (
      <>
        <p className="text-white mb-4">
          <Keyword>LibPay</Keyword> is a <Type>multi-rail</Type> payment gateway and wallet powering the <String>Digital Liberia Super App</String> and third‑party merchants. It enables <Type>fast</Type>, <Type>reliable</Type>, <Type>efficient</Type>, and <Type>secure</Type> payments across:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li><Keyword>P2P</Keyword>: <Type>Person‑to‑Person</Type> transfers</li>
          <li><Keyword>B2C</Keyword>: <Type>Business‑to‑Consumer</Type> payouts <Comment>e.g., disbursements, refunds, salaries</Comment></li>
          <li><Keyword>B2B</Keyword>: <Type>Business‑to‑Business</Type> payments <Comment>e.g., supplier settlements</Comment></li>
          <li><Type>In‑person</Type> payments via <Keyword>LibPay POS</Keyword> <Comment>USD & LRD, as low as 1 USD and 1 LRD</Comment></li>
        </ul>
        <div className="mt-6 bg-black/50 p-4 rounded-lg border border-cyan-400/30">
          <p className="text-cyan-100 font-mono">
            <Comment>Core value:</Comment> one <Keyword>integration</Keyword> for <Type>wallet</Type>, <Type>card</Type>, <Type>bank/mobile money</Type>, <Type>QR/NFC</Type>, and <Type>in‑person acceptance</Type>—plus unified <Keyword>reporting</Keyword>, <Keyword>settlement</Keyword>, and <Keyword>risk controls</Keyword>.
          </p>
        </div>
      </>
    )
  },
  {
    id: "modules",
    title: "Product Modules",
    bgColor: "bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-pink-600/10",
    borderColor: "border-purple-400/30",
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white"><Keyword>LibPay Wallet</Keyword></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Balances</Type>: USD and LRD sub‑wallets per user/business</li>
            <li><Type>Funding methods</Type>: card top‑ups, bank transfers, mobile money, cash-in at agents, B2C payouts</li>
            <li><Type>Transfers</Type>: instant internal ledger moves; low fees; strong identity checks</li>
            <li><Type>Controls</Type>: limits, velocity rules, geofencing, 2FA</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white"><Keyword>Payment Gateway</Keyword> <Comment>(Online)</Comment></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Checkout</Type>: hosted page or SDK <Comment>(web/iOS/Android)</Comment> for cards, wallet, QR, mobile money</li>
            <li><Type>APIs</Type>: charges, refunds, payouts, mandates, webhooks</li>
            <li><Type>FX handling</Type>: auto-choose payer currency <Comment>(USD/LRD)</Comment>; optional DCC; regulated rate source</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white"><Keyword>LibPay POS</Keyword> <Comment>(In‑Person)</Comment></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Acceptance</Type>: contactless, chip+PIN, QR, LibPay Wallet tap/scan</li>
            <li><Type>Currencies</Type>: USD & LRD with min transaction <Numeric>1</Numeric> USD / <Numeric>1</Numeric> LRD</li>
            <li><Type>Connectivity</Type>: Wi‑Fi/4G; offline queue with risk caps; store-&-forward with encrypted vault</li>
            <li><Type>Security</Type>: PCI PTS‑grade device; PAN never leaves secure element; remote key loading</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "flows",
    title: "Payment Flows Architecture",
    bgColor: "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-600/10",
    borderColor: "border-amber-400/30",
    content: (
      <div className="space-y-8">
        <div className="bg-black/50 p-4 rounded-lg border border-amber-400/30">
          <h3 className="text-lg font-semibold mb-2 text-amber-200"><Keyword>P2P</Keyword> <Comment>(Person‑to‑Person)</Comment></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Use cases</Type>: send to friends/family, split bills, remittances</li>
            <li><Type>Flow</Type>: Sender → Recipient <Comment>(phone/email/username/QR)</Comment></li>
            <li><Type>Amount</Type>: ≥ <Numeric>1</Numeric> USD/LRD</li>
            <li><Type>Settlement</Type>: T+0 internal ledger</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-amber-400/30">
          <h3 className="text-lg font-semibold mb-2 text-amber-200"><Keyword>B2C</Keyword> <Comment>(Business‑to‑Consumer)</Comment></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Use cases</Type>: salary disbursements, refunds, cashback</li>
            <li><Type>Flow</Type>: Batch CSV/API → Consumer wallets</li>
            <li><Type>Amount</Type>: ≥ <Numeric>1</Numeric> USD/LRD</li>
            <li><Type>Compliance</Type>: KYC checks, AML rules</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-amber-400/30">
          <h3 className="text-lg font-semibold mb-2 text-amber-200"><Keyword>B2B</Keyword> <Comment>(Business‑to‑Business)</Comment></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>Use cases</Type>: supplier payments, marketplace settlements</li>
            <li><Type>Flow</Type>: Invoice → Risk checks → T+0/T+2 settlement</li>
            <li><Type>Advanced</Type>: Escrow, split settlements, FX netting</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "security",
    title: "Security & Compliance",
    bgColor: "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-600/10",
    borderColor: "border-emerald-400/30",
    content: (
      <div className="space-y-6">
        <div className="bg-black/50 p-4 rounded-lg border border-emerald-400/30">
          <h3 className="text-lg font-semibold mb-2 text-emerald-200"><Keyword>Security Posture</Keyword></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>End‑to‑end encryption</Type> <Comment>(TLS 1.2+)</Comment></li>
            <li><Type>HSM‑backed keys</Type> and <Type>tokenization</Type></li>
            <li><Type>PCI DSS</Type> compliant gateway & storage</li>
            <li><Type>PCI PTS</Type> certified POS hardware</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-emerald-400/30">
          <h3 className="text-lg font-semibold mb-2 text-emerald-200"><Keyword>Compliance Framework</Keyword></h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><Type>KYC/KYB</Type>: NIN/passport, business registration</li>
            <li><Type>AML/CFT</Type>: sanctions screening, PEP checks</li>
            <li><Type>Fraud prevention</Type>: device fingerprinting, behavior scoring</li>
            <li><Type>Data protection</Type>: PII minimization, audit logging</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default function Libpay() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
      {/* Cyberpunk-inspired background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 -z-50" />
      
      {/* Animated grid overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20 -z-40" />

      {/* Centered Image Slideshow */}
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
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-gray-900/90 backdrop-blur-md border-b border-purple-500/30">
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

          <div className="w-full bg-gradient-to-b from-gray-900 to-transparent overflow-x-auto">
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content Sections */}
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

      {/* Footer */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-purple-500/30 pt-6">
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
