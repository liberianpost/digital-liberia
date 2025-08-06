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

  useEffect(() => {
    if (!src) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';
    img.src = src;

    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      console.error('Failed to load image:', src);
      setError(true);
      setLoading(false);
    };
  }, [src]);

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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg`}>
        <span className="text-red-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Document image'}
      className={className}
      onClick={onClick}
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
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

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

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
        throw {
          title: result.error || `HTTP Error ${response.status}`,
          message: result.message || 'Request failed',
          details: `Reference: ${result.metadata?.requestId || 'N/A'}`,
          timestamp: result.metadata?.timestamp || new Date().toISOString()
        };
      }

      const addCacheBuster = (url) => url ? `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}` : null;

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
          profile: addCacheBuster(result.data.images?.profile),
          passport: addCacheBuster(result.data.images?.passport),
          birthCertificate: addCacheBuster(result.data.images?.birthCertificate),
          driverLicense: addCacheBuster(result.data.images?.driverLicense),
          nationalId: addCacheBuster(result.data.images?.nationalId)
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
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
      <div className="fixed inset-0 -z-40 bg-white/10 backdrop-blur-[3px] pointer-events-none" />
      <div className="fixed inset-0 -z-30 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

      <div
        className="fixed inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})`, opacity: 0.15 }}
      />

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

      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-indigo-900/70 backdrop-blur-md border-b border-indigo-700/30">
          <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
            <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
              {navLinks.map(link => (
                <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                  <Link
                    to={link.to}
                    className={`text-sm md:text-base lg:text-lg_FONT-bold transition-colors duration-300 ${
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

      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {/* ... the rest of your JSX is unchanged, including forms, modals, and styling */}
      </main>

      {/* Footer remains unchanged */}
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
