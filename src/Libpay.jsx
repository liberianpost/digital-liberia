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
    title: "LibPay Payment Gateway",
    bgColor: "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-600/10",
    borderColor: "border-cyan-400/30",
    content: (
      <>
        <p className="text-white mb-4">
          LibPay is a multi-rail payment gateway and wallet powering the Digital Liberia Super App and third‑party merchants. It enables fast, reliable, efficient, and secure payments across:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white">
          <li>P2P: Person‑to‑Person transfers</li>
          <li>B2C: Business‑to‑Consumer payouts (e.g., disbursements, refunds, salaries)</li>
          <li>B2B: Business‑to‑Business payments (e.g., supplier settlements)</li>
          <li>In‑person payments via LibPay POS (USD & LRD, as low as 1 USD and 1 LRD)</li>
        </ul>
        <div className="mt-6 bg-black/50 p-4 rounded-lg border border-cyan-400/30">
          <p className="text-white">
            Core value: one integration for wallet, card, bank/mobile money, QR/NFC, and in‑person acceptance—plus unified reporting, settlement, and risk controls.
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
          <h3 className="text-xl font-semibold mb-2 text-white">LibPay Wallet</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Balances: USD and LRD sub‑wallets per user/business</li>
            <li>Funding methods: card top‑ups, bank transfers, mobile money, cash-in at agents, B2C payouts</li>
            <li>Transfers: instant internal ledger moves; low fees; strong identity checks</li>
            <li>Controls: limits, velocity rules, geofencing, 2FA</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Payment Gateway (Online)</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Checkout: hosted page or SDK (web/iOS/Android) for cards, wallet, QR, mobile money</li>
            <li>APIs: charges, refunds, payouts, mandates, webhooks</li>
            <li>FX handling: auto-choose payer currency (USD/LRD); optional DCC; regulated rate source</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">LibPay POS (In‑Person)</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Acceptance: contactless, chip+PIN, QR, LibPay Wallet tap/scan</li>
            <li>Currencies: USD & LRD with min transaction 1 USD / 1 LRD</li>
            <li>Connectivity: Wi‑Fi/4G; offline queue with risk caps; store-&-forward with encrypted vault</li>
            <li>Security: PCI PTS‑grade device; PAN never leaves secure element; remote key loading</li>
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
          <h3 className="text-lg font-semibold mb-2 text-white">P2P (Person‑to‑Person)</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Use cases: send to friends/family, split bills, remittances</li>
            <li>Flow: Sender → Recipient (phone/email/username/QR)</li>
            <li>Amount: ≥ 1 USD/LRD</li>
            <li>Settlement: T+0 internal ledger</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-amber-400/30">
          <h3 className="text-lg font-semibold mb-2 text-white">B2C (Business‑to‑Consumer)</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Use cases: salary disbursements, refunds, cashback</li>
            <li>Flow: Batch CSV/API → Consumer wallets</li>
            <li>Amount: ≥ 1 USD/LRD</li>
            <li>Compliance: KYC checks, AML rules</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-amber-400/30">
          <h3 className="text-lg font-semibold mb-2 text-white">B2B (Business‑to‑Business)</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Use cases: supplier payments, marketplace settlements</li>
            <li>Flow: Invoice → Risk checks → T+0/T+2 settlement</li>
            <li>Advanced: Escrow, split settlements, FX netting</li>
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
          <h3 className="text-lg font-semibold mb-2 text-white">Security Posture</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>End‑to‑end encryption (TLS 1.2+)</li>
            <li>HSM‑backed keys and tokenization</li>
            <li>PCI DSS compliant gateway & storage</li>
            <li>PCI PTS certified POS hardware</li>
          </ul>
        </div>

        <div className="bg-black/50 p-4 rounded-lg border border-emerald-400/30">
          <h3 className="text-lg font-semibold mb-2 text-white">Compliance Framework</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>KYC/KYB: NIN/passport, business registration</li>
            <li>AML/CFT: sanctions screening, PEP checks</li>
            <li>Fraud prevention: device fingerprinting, behavior scoring</li>
            <li>Data protection: PII minimization, audit logging</li>
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
