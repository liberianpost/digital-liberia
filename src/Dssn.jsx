import React, { useState } from "react";
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

export default function Dssn() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [dssn, setDssn] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    // TODO: Connect to backend API when ready
    console.log("Searching for DSSN:", dssn);
    setTimeout(() => {
      setIsSearching(false);
      alert(`DSSN verification would be implemented here for: ${dssn}`);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-inter overflow-x-hidden">
      {/* Layer 1: Dark Background */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Centered Image Slideshow - Fixed Position */}
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

      {/* Layer 3: Navigation */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Combined Navigation and Logo Container */}
        <div className="bg-black/60 backdrop-blur-md border-b border-gray-600/30">
          {/* Navigation Links - Single Row */}
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

          {/* Logo Bar */}
          <div className="w-full bg-gradient-to-b from-black to-transparent overflow-x-auto">
            <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-500 ${
                    index === activeLogo ? "scale-110 bg-black/30" : "scale-100 bg-black/10"
                  }`}
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

      {/* Layer 4: Content Sections with Semi-Black Background */}
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {/* DSSN Verification Card */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
              DSSN Verification
            </h2>
            <div className="text-white relative space-y-6">
              <p>
                Verify a Digital Social Security Number (DSSN) to check its validity and view basic public information. 
                Enter the 15-digit alphanumeric DSSN in the field below.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Important Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>DSSN verification only shows public information</li>
                  <li>Full records require authorized access</li>
                  <li>Each verification is logged for security purposes</li>
                  <li>Invalid DSSNs will return no results</li>
                </ul>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <label htmlFor="dssn" className="block text-sm font-medium mb-2">
                    Enter DSSN to Verify:
                  </label>
                  <input
                    type="text"
                    id="dssn"
                    value={dssn}
                    onChange={(e) => setDssn(e.target.value)}
                    className="w-full bg-black/40 border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="e.g. LIB123456789ABCD"
                    required
                    pattern="[A-Za-z0-9]{15}"
                    title="15-character alphanumeric DSSN"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSearching}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-colors ${
                    isSearching
                      ? "bg-blue-700/50 border-blue-600/30 cursor-not-allowed"
                      : "bg-blue-500/80 border-blue-400/30 hover:bg-blue-600/80"
                  }`}
                >
                  {isSearching ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    "Verify DSSN"
                  )}
                </button>
              </form>
              
              <div className="pt-4 border-t border-gray-600/30">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-300">
                  If you're having trouble with DSSN verification, please contact the Digital Liberia support team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Copyright */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-gray-600/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

      {/* Global Styles */}
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
        /* Hide scrollbar for containers */
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
