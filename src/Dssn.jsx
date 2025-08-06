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

const GoogleStorageImage = ({ src, alt, className, onClick }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const constructImageUrl = (path) => {
    if (!path) return null;
    
    // If it's already a full URL, return it
    if (path.startsWith('http')) return path;
    
    // Remove any existing domain or protocol
    const cleanPath = path.replace(/^(https?:\/\/[^\/]+)?\//, '');
    
    // Handle URL-encoded characters (like spaces)
    const encodedPath = encodeURIComponent(cleanPath)
      .replace(/%2F/g, '/')
      .replace(/%3A/g, ':')
      .replace(/%20/g, ' ');
    
    return `https://storage.googleapis.com/${encodedPath}`;
  };

  useEffect(() => {
    if (!src) {
      console.log('No image source provided');
      setLoading(false);
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const url = constructImageUrl(src);
      console.log('Constructed image URL:', url);
      setImageUrl(url);
    } catch (err) {
      console.error('Error constructing image URL:', err);
      setError(true);
      setLoading(false);
    }
  }, [src]);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      console.log('Image loaded successfully:', imageUrl);
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setLoading(false);
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', imageUrl);
      setError(true);
      setLoading(false);
    };

    // Add timeout for very large images
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn('Image loading timed out:', imageUrl);
        setError(true);
        setLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [imageUrl]);

  if (!src) {
    return (
      <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg`}>
        <span className="text-gray-400 text-sm">No image available</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg`}>
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="text-xs mt-2 text-blue-300">Loading image...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} bg-gray-800/50 flex flex-col items-center justify-center rounded-lg p-4`}>
        <svg className="w-8 h-8 text-red-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="text-red-400 text-sm text-center">Failed to load image</span>
        <span className="text-xs text-gray-400 mt-1 text-center truncate w-full">{src}</span>
      </div>
    );
  }

  // If image is too large (>10MB), show warning but still display
  const isLargeImage = dimensions.width * dimensions.height > 10000000; // ~10MP
  const fileSizeWarning = isLargeImage ? (
    <div className="absolute top-2 left-2 bg-yellow-500/90 text-black text-xs px-2 py-1 rounded">
      Large Image
    </div>
  ) : null;

  return (
    <div className="relative">
      {fileSizeWarning}
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        onClick={onClick}
        crossOrigin="anonymous"
        onError={() => {
          console.error('Image render error:', imageUrl);
          setError(true);
        }}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
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
      setError({
        title: "Invalid DSSN Format",
        message: "Must be exactly 15 alphanumeric characters",
        details: `Received: ${cleanedDssn} (${cleanedDssn.length} chars)`
      });
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      const apiUrl = `https://api.digitalliberia.com/api/get-dssn?dssn=${encodeURIComponent(cleanedDssn)}`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const errorDetails = {
          title: result.error || `HTTP Error ${response.status}`,
          message: result.message || 'Request failed',
          details: `Reference: ${result.metadata?.requestId || 'N/A'}`,
          timestamp: result.metadata?.timestamp || new Date().toISOString()
        };
        throw errorDetails;
      }

      const transformedData = {
        "Full Name": result.data.fullName || 'Not available',
        "Place of Birth": result.data.placeOfBirth || 'Not available',
        "Date of Birth": result.data.dateOfBirth || 'Not available',
        "Sex": result.data.sex || 'Not available',
        "Nationality": result.data.nationality || 'Not available',
        "Address": result.data.address || 'Not available',
        "Postal Address": result.data.postalAddress || 'Not available',
        "Phone Number": result.data.phoneNumber || 'Not available',
        "Email": result.data.email || 'Not available',
        "Employment Status": result.data.employmentStatus || 'Not available',
        "Marital Status": result.data.maritalStatus || 'Not available',
        "Number of Children": result.data.numberOfChildren || 'Not available',
        "Passport Number": result.data.passportNumber || 'Not available',
        "Birth Certificate": result.data.birthCertificate || 'Not available',
        "Driver's License": result.data.driverLicense || 'Not available',
        "Images": {
          profile: result.data.images?.profile || null,
          passport: result.data.images?.passport || null,
          birthCertificate: result.data.images?.birthCertificate || null,
          driverLicense: result.data.images?.driverLicense || null,
          nationalId: result.data.images?.nationalId || null
        },
        "Search Metadata": result.metadata ? 
          `Request ID: ${result.metadata.requestId} | ${new Date(result.metadata.timestamp).toLocaleString()}` 
          : 'No metadata available'
      };

      setCustomerData(transformedData);
      setShowInfoModal(true);

    } catch (err) {
      setError({
        title: err.title || 'Search Error',
        message: err.message || 'Failed to process request',
        details: err.details || `DSSN: ${cleanedDssn}`,
        technical: `Status: ${err.status || 'Unknown'} | ${err.timestamp || new Date().toISOString()}`
      });
      console.error("Search Error:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const openDocumentModal = (url) => {
    setCurrentDocumentUrl(url);
    setShowDocumentModal(true);
  };

  const closeDocumentModal = () => {
    setShowDocumentModal(false);
    setCurrentDocumentUrl("");
  };

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
          <div className="relative bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-30 pointer-events-none" />
            
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
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-red-300">{error.title}</h4>
                        <p className="text-red-200">{error.message}</p>
                        {error.details && (
                          <p className="text-sm text-red-200/80 mt-1">{error.details}</p>
                        )}
                        {error.technical && (
                          <p className="text-xs text-red-200/60 mt-2">{error.technical}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => console.error('Full Error:', error)}
                        className="text-xs text-red-300/70 hover:text-red-300 px-2 py-1 rounded"
                      >
                        Details
                      </button>
                    </div>
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
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Search Results for DSSN: {sanitizeHTML(dssn)}
                  </h3>
                  {customerData["Search Metadata"] && (
                    <p className="text-xs text-blue-300/70 mt-1">
                      {customerData["Search Metadata"]}
                    </p>
                  )}
                </div>
                <button onClick={() => setShowInfoModal(false)} className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Profile Image */}
                <div className="w-full md:w-1/3">
                  <h4 className="text-blue-300 mb-2">Profile Image</h4>
                  <GoogleStorageImage 
                    src={customerData.Images?.profile}
                    alt="Profile"
                    className="w-full h-64 rounded-lg border-2 border-blue-500/30 object-cover cursor-pointer"
                    onClick={() => openDocumentModal(customerData.Images?.profile)}
                  />
                </div>

                {/* Customer Details */}
                <div className="w-full md:w-2/3 grid grid-cols-1 gap-4">
                  {Object.entries(customerData).map(([key, value]) => {
                    if (typeof value === 'string' && !key.includes('Image') && !key.includes('Metadata')) {
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
              </div>

              {/* Document Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {customerData.Images?.passport && (
                  <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                    <h4 className="text-blue-300 mb-2">Passport</h4>
                    <GoogleStorageImage 
                      src={customerData.Images.passport}
                      alt="Passport"
                      className="w-full h-48 object-contain cursor-pointer"
                      onClick={() => openDocumentModal(customerData.Images.passport)}
                    />
                  </div>
                )}

                {customerData.Images?.birthCertificate && (
                  <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                    <h4 className="text-blue-300 mb-2">Birth Certificate</h4>
                    <GoogleStorageImage 
                      src={customerData.Images.birthCertificate}
                      alt="Birth Certificate"
                      className="w-full h-48 object-contain cursor-pointer"
                      onClick={() => openDocumentModal(customerData.Images.birthCertificate)}
                    />
                  </div>
                )}

                {customerData.Images?.driverLicense && (
                  <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                    <h4 className="text-blue-300 mb-2">Driver's License</h4>
                    <GoogleStorageImage 
                      src={customerData.Images.driverLicense}
                      alt="Driver's License"
                      className="w-full h-48 object-contain cursor-pointer"
                      onClick={() => openDocumentModal(customerData.Images.driverLicense)}
                    />
                  </div>
                )}

                {customerData.Images?.nationalId && (
                  <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30 backdrop-blur-sm">
                    <h4 className="text-blue-300 mb-2">National ID</h4>
                    <GoogleStorageImage 
                      src={customerData.Images.nationalId}
                      alt="National ID"
                      className="w-full h-48 object-contain cursor-pointer"
                      onClick={() => openDocumentModal(customerData.Images.nationalId)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Modal */}
      {showDocumentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
            <button 
              onClick={closeDocumentModal}
              className="absolute top-4 right-4 z-50 text-white hover:text-red-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4 h-full flex items-center justify-center">
              {currentDocumentUrl?.endsWith('.pdf') ? (
                <iframe 
                  src={currentDocumentUrl} 
                  className="w-full h-[80vh]"
                  title="Document Viewer"
                />
              ) : (
                <GoogleStorageImage 
                  src={currentDocumentUrl}
                  alt="Document Full View"
                  className="w-full max-h-[80vh] object-contain"
                  onClick={null}
                />
              )}
            </div>
          </div>
        </div>
      )}

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
