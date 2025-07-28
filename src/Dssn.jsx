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

// HTML sanitization function
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

  // Logo rotation effect
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 1000);
    return () => clearInterval(logoInterval);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!dssn.trim()) {
      setError("Please enter a valid DSSN!");
      return;
    }

    setIsSearching(true);
    setError(null);
    setCustomerData(null);

    try {
      console.groupCollapsed(`[DEBUG] DSSN Search Initiated - ${new Date().toISOString()}`);
      console.log("Searching for DSSN:", dssn);
      
      const apiUrl = `https://system.liberianpost.com/get-system-info?dssn=${encodeURIComponent(dssn)}`;
      console.log("API Endpoint:", apiUrl);

      const startTime = performance.now();
      console.log("Initiating fetch request...");
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('your_username:your_password') // Replace with actual credentials
        }
      });
      
      const endTime = performance.now();
      console.log(`Request completed in ${(endTime - startTime).toFixed(2)}ms`);
      console.log("Response Status:", response.status, response.statusText);

      if (!response.ok) {
        console.warn("Request failed with status:", response.status);
        let errorResponse;
        try {
          errorResponse = await response.text();
          console.log("Error response content:", errorResponse);
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
        }
        
        if (response.status === 401) {
          throw new Error("Authentication required. Please ensure you have proper access.");
        } else if (response.status === 403) {
          throw new Error("Access forbidden. CORS policy may be blocking this request.");
        } else {
          throw new Error(`Server responded with status: ${response.status}`);
        }
      }

      console.log("Parsing response JSON...");
      const data = await response.json();
      console.log("API Response Data:", data);

      if (data.success && data.data) {
        console.log("Successfully retrieved customer data");
        setCustomerData(data.data);
        setShowInfoModal(true);
      } else {
        console.warn("API returned unsuccessful response:", data.message || "No data found");
        throw new Error(data.message || "No data found for the provided DSSN");
      }
    } catch (err) {
      console.groupCollapsed(`[ERROR] Search Failed - ${new Date().toISOString()}`);
      console.error("Error Type:", err.name);
      console.error("Error Message:", err.message);
      console.error("Error Stack:", err.stack);
      
      if (err instanceof TypeError) {
        if (err.message.includes('Failed to fetch')) {
          console.error("Network Error - Possible CORS issue or failed connection");
          setError("Connection failed. Please check your network or contact support if the problem persists.");
        } else {
          console.error("Type Error -", err.message);
          setError("An unexpected error occurred. Please try again.");
        }
      } else if (err instanceof SyntaxError) {
        console.error("JSON Parsing Error - Invalid response format");
        setError("Invalid response from server. Please try again.");
      } else {
        console.error("Application Error -", err.message);
        setError(err.message || "Failed to verify DSSN. Please try again.");
      }
      
      console.groupEnd();
    } finally {
      console.groupEnd();
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
      console.warn("Failed to parse date:", dateString);
      return dateString;
    }
  };

  const openDocumentModal = (imgSrc) => {
    console.log("Opening document modal for:", imgSrc);
    setCurrentDocumentUrl(imgSrc);
    setShowDocumentModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeDocumentModal = () => {
    console.log("Closing document modal");
    setShowDocumentModal(false);
    setCurrentDocumentUrl("");
    document.body.style.overflow = "auto";
  };

  const downloadDocument = () => {
    if (!currentDocumentUrl) {
      console.warn("Attempted to download but no document URL set");
      return;
    }

    console.log("Downloading document:", currentDocumentUrl);
    const link = document.createElement('a');
    link.href = currentDocumentUrl;
    const filename = currentDocumentUrl.split('/').pop() || 'document';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderImage = (imgSrc, altText) => {
    if (!imgSrc) {
      console.log("No image source provided for:", altText);
      return null;
    }

    const src = imgSrc.startsWith('data:image') 
      ? imgSrc 
      : imgSrc.startsWith('http')
        ? imgSrc
        : `data:image/jpeg;base64,${imgSrc}`;

    return (
      <div 
        className="document-thumbnail cursor-pointer"
        onClick={() => openDocumentModal(src)}
      >
        <img
          src={src}
          alt={altText}
          className="w-full h-auto rounded border border-gray-600/30"
          onError={(e) => {
            console.error("Failed to load image:", src);
            e.target.onerror = null;
            e.target.src = '/placeholder-image.png';
          }}
        />
        <div className="document-label">{altText}</div>
      </div>
    );
  };

  // Close modals when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showInfoModal && event.target.id === 'dssnInfo') {
        console.log("Closing info modal via outside click");
        setShowInfoModal(false);
      }
      if (showDocumentModal && event.target.id === 'documentModal') {
        console.log("Closing document modal via outside click");
        closeDocumentModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        console.log("Closing modals via Escape key");
        setShowInfoModal(false);
        closeDocumentModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showInfoModal, showDocumentModal]);

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
                      Searching...
                    </>
                  ) : (
                    "Search"
                  )}
                </button>
              </form>

              {error && (
                <div className="bg-red-900/40 border border-red-700/30 rounded-lg p-4">
                  <p className="text-red-300">{error}</p>
                  <p className="text-sm text-red-200 mt-2">
                    If this persists, please contact support with details from your browser console
                  </p>
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
                  Search Results for DSSN: {sanitizeHTML(dssn)}
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

              <div className="user-info-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <p><strong>Full Name:</strong> {sanitizeHTML(customerData["Full Name"])}</p>
                <p><strong>Place of Birth:</strong> {sanitizeHTML(customerData["Place of Birth"])}</p>
                <p><strong>Date of Birth:</strong> {formatDate(customerData["Date of Birth"])}</p>
                <p><strong>Sex:</strong> {sanitizeHTML(customerData["Sex"])}</p>
                <p><strong>Nationality:</strong> {sanitizeHTML(customerData["Nationality"])}</p>
                <p><strong>Address:</strong> {sanitizeHTML(customerData["Address"])}</p>
                <p><strong>Postal Address:</strong> {sanitizeHTML(customerData["Postal Address"])}</p>
                <p><strong>Phone Number:</strong> {sanitizeHTML(customerData["Phone Number"])}</p>
                <p><strong>Email:</strong> {sanitizeHTML(customerData["Email"])}</p>
                <p><strong>Employment Status:</strong> {sanitizeHTML(customerData["Employment Status"])}</p>
                <p><strong>Marital Status:</strong> {sanitizeHTML(customerData["Marital Status"])}</p>
                <p><strong>Number of Children:</strong> {sanitizeHTML(customerData["Number of Children"])}</p>
                <p><strong>Passport Number:</strong> {sanitizeHTML(customerData["Passport Number"])}</p>
                <p><strong>Birth Certificate:</strong> {sanitizeHTML(customerData["Birth Certificate"])}</p>
                <p><strong>Driver's License:</strong> {sanitizeHTML(customerData["Driver's License"])}</p>
              </div>

              {customerData["Image"] && (
                <div className="documents-section mb-6">
                  <div className="document-category">
                    <h4 className="text-lg font-semibold mb-2">Profile Photo</h4>
                    <div className="document-thumbnails flex">
                      {renderImage(customerData["Image"], "Profile Photo")}
                    </div>
                  </div>
                </div>
              )}

              {customerData["Passport Image"] && (
                <div className="documents-section mb-6">
                  <div className="document-category">
                    <h4 className="text-lg font-semibold mb-2">Passport</h4>
                    <div className="document-thumbnails flex">
                      {renderImage(customerData["Passport Image"], "Passport")}
                    </div>
                  </div>
                </div>
              )}

              {customerData["Birth Certificate Image"] && (
                <div className="documents-section mb-6">
                  <div className="document-category">
                    <h4 className="text-lg font-semibold mb-2">Birth Certificate</h4>
                    <div className="document-thumbnails flex">
                      {renderImage(customerData["Birth Certificate Image"], "Birth Certificate")}
                    </div>
                  </div>
                </div>
              )}

              {customerData["Drivers License Image"] && (
                <div className="documents-section mb-6">
                  <div className="document-category">
                    <h4 className="text-lg font-semibold mb-2">Driver's License</h4>
                    <div className="document-thumbnails flex">
                      {renderImage(customerData["Drivers License Image"], "Driver's License")}
                    </div>
                  </div>
                </div>
              )}
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
        .user-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .documents-section {
          margin-bottom: 2rem;
        }
        .document-category {
          margin-bottom: 1rem;
        }
        .document-thumbnails {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .document-thumbnail {
          position: relative;
          width: 150px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .document-thumbnail:hover {
          transform: scale(1.05);
        }
        .document-label {
          text-align: center;
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #d1d5db;
        }
      `}</style>
    </div>
  );
}
