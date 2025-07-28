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
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);
    setCustomerData(null);

    try {
      // Use the full backend URL with proper CORS configuration
      const backendUrl = 'https://system.liberianpost.com'; // Replace with your actual backend URL
      const response = await fetch(`${backendUrl}/get-system-info?dssn=${encodeURIComponent(dssn)}`, {
        method: 'GET',
        credentials: 'include', // Important for cookies/sessions
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
      }

      if (!data.success) {
        throw new Error(data.message || 'Customer not found');
      }

      setCustomerData(data.data);
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message || 'Failed to verify DSSN. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateString; // Return raw string if date parsing fails
    }
  };

  // Helper function to handle image display
  const renderImage = (base64Data, altText) => {
    if (!base64Data) return null;
    
    // Check if the base64Data already has the prefix
    const src = base64Data.startsWith('data:image') 
      ? base64Data 
      : `data:image/jpeg;base64,${base64Data}`;
    
    return (
      <img 
        src={src}
        alt={altText}
        className="w-full h-auto rounded border border-gray-600/30"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/placeholder-image.png';
        }}
      />
    );
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

              {error && (
                <div className="bg-red-900/40 border border-red-700/30 rounded-lg p-4">
                  <p className="text-red-300">{error}</p>
                </div>
              )}

              {customerData && (
                <div className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Profile Card */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gray-600/30 p-6">
                      <div className="flex flex-col items-center space-y-4">
                        {renderImage(customerData.Image, "Profile")}
                        <h3 className="text-2xl font-bold">{customerData["Full Name"]}</h3>
                        <div className="grid grid-cols-2 gap-4 w-full">
                          <div>
                            <p className="text-sm text-gray-400">Date of Birth</p>
                            <p>{formatDate(customerData["Date of Birth"])}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Sex</p>
                            <p>{customerData.Sex || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Nationality</p>
                            <p>{customerData.Nationality || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Marital Status</p>
                            <p>{customerData["Marital Status"] || 'N/A'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gray-600/30 p-6">
                      <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-400">Address</p>
                          <p>{customerData.Address || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Postal Address</p>
                          <p>{customerData["Postal Address"] || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone Number</p>
                          <p>{customerData["Phone Number"] || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p>{customerData.Email || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents Section */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gray-600/30 p-6">
                    <h4 className="text-xl font-semibold mb-4">Documents</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {customerData["Passport Number"] && (
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                          <h5 className="font-medium mb-2">Passport</h5>
                          <p className="text-sm text-gray-400 mb-2">Number: {customerData["Passport Number"]}</p>
                          {renderImage(customerData["Passport Image"], "Passport")}
                        </div>
                      )}

                      {customerData["Birth Certificate"] && (
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                          <h5 className="font-medium mb-2">Birth Certificate</h5>
                          <p className="text-sm text-gray-400 mb-2">Number: {customerData["Birth Certificate"]}</p>
                          {renderImage(customerData["Birth Certificate Image"], "Birth Certificate")}
                        </div>
                      )}

                      {customerData["Driver's License"] && (
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                          <h5 className="font-medium mb-2">Driver's License</h5>
                          <p className="text-sm text-gray-400 mb-2">Number: {customerData["Driver's License"]}</p>
                          {renderImage(customerData["Drivers License Image"], "Driver's License")}
                        </div>
                      )}

                      {customerData["National Id Image"] && (
                        <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                          <h5 className="font-medium mb-2">National ID</h5>
                          {renderImage(customerData["National Id Image"], "National ID")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
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
