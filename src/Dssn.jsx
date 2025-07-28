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

  // Logo rotation effect
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 1000);
    return () => clearInterval(logoInterval);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);
    setCustomerData(null);

    try {
  const response = await fetch(
    `/get-system-info?dssn=${encodeURIComponent(dssn)}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! Status: ${response.status}`);
      }

      if (!data.success) {
        throw new Error(data.message || 'Customer not found');
      }

      setCustomerData(data.data);
      setShowInfoModal(true);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Failed to verify DSSN. Please try again.");
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
      return dateString;
    }
  };

  const openDocumentModal = (imgSrc) => {
    setCurrentDocumentUrl(imgSrc);
    setShowDocumentModal(true);
  };

  const closeDocumentModal = () => {
    setShowDocumentModal(false);
    setCurrentDocumentUrl("");
  };

  const downloadDocument = () => {
    if (!currentDocumentUrl) return;

    const link = document.createElement('a');
    link.href = currentDocumentUrl;
    const filename = currentDocumentUrl.split('/').pop() || 'document';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderImage = (imgSrc, altText, clickable = true) => {
    if (!imgSrc) return null;

    const src = imgSrc.startsWith('data:image') 
      ? imgSrc 
      : imgSrc.startsWith('http')
        ? imgSrc
        : `data:image/jpeg;base64,${imgSrc}`;

    return (
      <div className="relative group">
        <img 
          src={src}
          alt={altText}
          className={`w-full h-auto rounded border border-gray-600/30 ${
            clickable ? "cursor-pointer hover:opacity-90" : ""
          }`}
          onClick={clickable ? () => openDocumentModal(src) : undefined}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-image.png';
          }}
        />
        {clickable && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/50 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDocumentModal && event.target.id === 'documentModal') {
        closeDocumentModal();
      }
      if (showInfoModal && event.target.id === 'dssnInfo') {
        setShowInfoModal(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeDocumentModal();
        setShowInfoModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showDocumentModal, showInfoModal]);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-inter overflow-x-hidden">
      {/* Background Image Slideshow */}
      <div 
        className="fixed inset-0 -z-50 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url('${backgroundImages[bgIndex]}')`, opacity: 0.7 }}
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
        <div className="bg-black/60 backdrop-blur-md border-b border-gray-600/30">
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

      {/* Main Content */}
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
            </div>
          </div>
        </section>
      </main>

      {/* DSSN Info Modal */}
      {showInfoModal && customerData && (
        <div 
          id="dssnInfo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <div className="bg-black/80 border border-gray-600/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  Search Results for DSSN: {dssn}
                </h3>
                <button 
                  onClick={() => setShowInfoModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Full Name</p>
                        <p>{customerData["Full Name"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Date of Birth</p>
                        <p>{formatDate(customerData["Date of Birth"])}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Place of Birth</p>
                        <p>{customerData["Place of Birth"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Sex</p>
                        <p>{customerData["Sex"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Nationality</p>
                        <p>{customerData["Nationality"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Marital Status</p>
                        <p>{customerData["Marital Status"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Number of Children</p>
                        <p>{customerData["Number of Children"] || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-400">Address</p>
                        <p>{customerData["Address"] || 'N/A'}</p>
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
                        <p>{customerData["Email"] || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Employment Status</h4>
                    <p>{customerData["Employment Status"] || 'N/A'}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Identification Documents</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Passport Number</p>
                        <p>{customerData["Passport Number"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Birth Certificate</p>
                        <p>{customerData["Birth Certificate"] || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Driver's License</p>
                        <p>{customerData["Driver's License"] || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {customerData["Image"] && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Profile Photo</h4>
                      {renderImage(customerData["Image"], "Profile Photo")}
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-600/30 pt-6">
                <h4 className="text-xl font-semibold mb-4">Documents</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {customerData["Passport Image"] && (
                    <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                      <h5 className="font-medium mb-2">Passport</h5>
                      {customerData["Passport Number"] && (
                        <p className="text-sm text-gray-400 mb-2">
                          Number: {customerData["Passport Number"]}
                        </p>
                      )}
                      {renderImage(customerData["Passport Image"], "Passport")}
                    </div>
                  )}

                  {customerData["Birth Certificate Image"] && (
                    <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                      <h5 className="font-medium mb-2">Birth Certificate</h5>
                      {customerData["Birth Certificate"] && (
                        <p className="text-sm text-gray-400 mb-2">
                          Number: {customerData["Birth Certificate"]}
                        </p>
                      )}
                      {renderImage(customerData["Birth Certificate Image"], "Birth Certificate")}
                    </div>
                  )}

                  {customerData["Drivers License Image"] && (
                    <div className="bg-black/60 rounded-lg p-4 border border-gray-600/30">
                      <h5 className="font-medium mb-2">Driver's License</h5>
                      {customerData["Driver's License"] && (
                        <p className="text-sm text-gray-400 mb-2">
                          Number: {customerData["Driver's License"]}
                        </p>
                      )}
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
          </div>
        </div>
      )}

      {/* Document Modal */}
      {showDocumentModal && (
        <div 
          id="documentModal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button 
              onClick={closeDocumentModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-black/50 rounded-lg overflow-hidden border border-gray-600/30">
              <img 
                id="documentModalImg"
                src={currentDocumentUrl}
                alt="Document"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="flex justify-center space-x-4 p-4 bg-black/50">
                <button 
                  onClick={downloadDocument}
                  className="flex items-center px-4 py-2 bg-blue-600/80 rounded-lg hover:bg-blue-700/80"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                
                <button 
                  onClick={closeDocumentModal}
                  className="flex items-center px-4 py-2 bg-gray-600/80 rounded-lg hover:bg-gray-700/80"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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
