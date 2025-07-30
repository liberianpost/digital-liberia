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

const backgroundImages = [
  "/backgrounds/bg1.jpg",
  "/backgrounds/bg2.jpg",
  "/backgrounds/bg3.jpg",
  "/backgrounds/bg4.jpg",
  "/backgrounds/bg5.jpg"
];

const sanitizeHTML = (str) => {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export default function Dssn() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [dssn, setDssn] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);
  const [currentDocumentUrl, setCurrentDocumentUrl] = useState("");
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Background rotation effect
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  // Logo rotation effect with faster heartbeat (600ms)
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(logoInterval);
  }, []);

 const handleSearch = async (e) => {
  e.preventDefault();
  const cleanedDssn = dssn.trim().toUpperCase();

  if (!/^[A-Za-z0-9]{15}$/.test(cleanedDssn)) {
    setError("Invalid DSSN format! Must be 15 alphanumeric characters.");
    return;
  }

  setIsSearching(true);
  setError(null);
  setCustomerData(null);

  try {
    const response = await fetch(`https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Server responded with status ${response.status}`);
    }

    if (!data.success) {
      throw new Error(data.message || 'Invalid response from server');
    }

    setCustomerData({
      "Full Name": data.data.fullName,
      "Place of Birth": data.data.placeOfBirth,
      "Date of Birth": data.data.dateOfBirth,
      "Sex": data.data.sex,
      "Nationality": data.data.nationality,
      "Address": data.data.address,
      "Postal Address": data.data.postalAddress,
      "Phone Number": data.data.phoneNumber,
      "Email": data.data.email,
      "Employment Status": data.data.employmentStatus,
      "Marital Status": data.data.maritalStatus,
      "Number of Children": data.data.numberOfChildren,
      "Passport Number": data.data.passportNumber,
      "Birth Certificate": data.data.birthCertificate,
      "Driver's License": data.data.driverLicense,
      "Image": data.data.images?.profile,
      "Passport Image": data.data.images?.passport,
      "Birth Certificate Image": data.data.images?.birthCertificate,
      "Drivers License Image": data.data.images?.driverLicense,
      "National Id Image": data.data.images?.nationalId
    });

    setShowInfoModal(true);
  } catch (err) {
    setError(err.message || 'Failed to verify DSSN. Please try again.');
    console.error("Search Error:", err);
  } finally {
    setIsSearching(false);
  }
};
  
  // ... (keep all other existing functions unchanged: formatDate, openDocumentModal, closeDocumentModal, downloadDocument, renderImage, useEffect for event listeners)

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
      {/* Deep Blue Glass Background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
      <div className="fixed inset-0 -z-40 bg-white/10 backdrop-blur-[3px] pointer-events-none" />
      <div className="fixed inset-0 -z-30 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

      {/* Background Image Slideshow with reduced opacity */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})`, opacity: 0.15 }}
      />

      {/* Centered Logo Slideshow */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === activeLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={logo} alt={`Logo ${index}`} className="max-w-full max-h-full object-contain" />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-indigo-900/70 backdrop-blur-md border-b border-indigo-700/30">
          <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
            <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
              {navLinks.map(link => (
                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                  <Link
                    to={link.to}
                    className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                      location.pathname === link.to
                        ? "text-yellow-300"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="w-full bg-gradient-to-b from-indigo-900/50 to-transparent overflow-x-auto">
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

      {/* Main Content */}
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          {/* Glass Card with Contrast */}
          <div className="relative bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-30 pointer-events-none" />
            
            {/* Content */}
            <div className="relative p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2">
                DSSN Verification
              </h2>
              <div className="text-white/90 relative space-y-6">
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
                      className="w-full bg-indigo-900/40 border border-indigo-700/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm text-white placeholder-indigo-400/70"
                      placeholder="e.g. LIB123456789ABCD"
                      required
                      pattern="[A-Za-z0-9]{15}"
                      title="15-character alphanumeric DSSN"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSearching}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-all ${
                      isSearching
                        ? "bg-blue-700/50 border-blue-600/30 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500/80 to-indigo-600/80 border-blue-400/30 hover:from-blue-600/80 hover:to-indigo-700/80 hover:shadow-lg"
                    }`}
                  >
                    {isSearching ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                      </>
                    ) : (
                      "Search"
                    )}
                  </button>
                </form>

                {error && (
                  <div className="bg-red-900/40 border border-red-700/30 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-red-300">{error}</p>
                    <p className="text-sm text-red-200 mt-2">
                      If this persists, please contact support with details from your browser console
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* DSSN Info Modal */}
      {showInfoModal && customerData && (
        <div id="dssnInfo" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-indigo-900/90 to-blue-900/90 border border-indigo-700/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Search Results for DSSN: {sanitizeHTML(dssn)}
                </h3>
                <button onClick={() => setShowInfoModal(false)} className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {Object.entries(customerData).map(([key, value]) => {
                  if (typeof value === 'string' && !key.includes('Image')) {
                    return (
                      <div key={key} className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                        <strong className="text-blue-300">{key}:</strong> 
                        <span className="ml-2 text-white/90">{sanitizeHTML(value)}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* ... (keep document sections unchanged) ... */}
            </div>
          </div>
        </div>
      )}

      {/* Document Modal (unchanged) */}

      {/* Footer */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-indigo-700/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        .document-thumbnail {
          transition: all 0.3s ease;
        }
        .document-thumbnail:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
