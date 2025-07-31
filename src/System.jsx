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

const ministries = [
  {
    id: "education",
    name: "Ministry of Education",
    description: "School management, student records, and educational resources",
    icon: "/logos/moe.png"
  },
  {
    id: "health",
    name: "Ministry of Health",
    description: "Health records, vaccination data, and medical services",
    icon: "/logos/moh.png"
  },
  {
    id: "finance",
    name: "Ministry of Finance",
    description: "Tax records, financial services, and economic data",
    icon: "/logos/mof.png"
  },
  {
    id: "justice",
    name: "Ministry of Justice",
    description: "Legal documents, court records, and law enforcement",
    icon: "/logos/moj.png"
  },
  {
    id: "transport",
    name: "Ministry of Transport",
    description: "Driver licenses, vehicle registration, and transport permits",
    icon: "/logos/mot.png"
  },
  {
    id: "foreign",
    name: "Ministry of Foreign Affairs",
    description: "Passport services and international relations",
    icon: "/logos/mofa.png"
  },
  {
    id: "agriculture",
    name: "Ministry of Agriculture",
    description: "Farming permits, agricultural data, and food security",
    icon: "/logos/moa.png"
  },
  {
    id: "internal",
    name: "Ministry of Internal Affairs",
    description: "Citizen IDs, birth certificates, and local governance",
    icon: "/logos/moia.png"
  },
  {
    id: "lands",
    name: "Ministry of Lands & Mines",
    description: "Land deeds, mining permits, and property records",
    icon: "/logos/mol.png"
  },
  {
    id: "commerce",
    name: "Ministry of Commerce",
    description: "Business registration and trade licenses",
    icon: "/logos/moc.png"
  },
  {
    id: "labour",
    name: "Ministry of Labour",
    description: "Employment records and worker rights",
    icon: "/logos/moll.png"
  },
  {
    id: "youth",
    name: "Ministry of Youth & Sports",
    description: "Youth programs and sporting events",
    icon: "/logos/moy.png"
  }
];

const quickAccessServices = [
  { id: "passport", name: "Passport" },
  { id: "birth-certificate", name: "Birth Certificate" },
  { id: "drivers-license", name: "Driver's License" },
  { id: "citizen-id", name: "Citizen ID" },
  { id: "business-registration", name: "Business Registration" },
  { id: "vehicle-registration", name: "Vehicle Registration" },
  { id: "land-deed", name: "Land Deed" },
  { id: "tax-services", name: "Tax Services" }
];

const MoeLoginModal = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      localStorage.setItem("moeAuth", JSON.stringify({
        userId: "12345",
        username: username,
        securityLevel: 3,
        loggedIn: true
      }));

      onLoginSuccess();
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Ministry of Education Login</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            &times;
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img src="/logos/moe.png" alt="MOE Logo" className="w-24 h-24 object-contain" />
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function System() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [showMoeLogin, setShowMoeLogin] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const handleMinistryClick = (ministryId) => {
    if (ministryId === "education") {
      const isLoggedIn = localStorage.getItem("moeAuth") !== null;
      if (isLoggedIn) {
        window.location.href = "/moe-dashboard";
      } else {
        setShowMoeLogin(true);
      }
    } else {
      alert(`Services for this ministry are coming soon`);
    }
  };

  const handleServiceClick = (serviceId) => {
    alert(`${serviceId} service will be available soon`);
  };

  const handleMoeLoginSuccess = () => {
    setShowMoeLogin(false);
    window.location.href = "/moe-dashboard";
  };

  return (
    <div className="relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden">
      <div className="fixed inset-0 bg-blue-950 -z-50" />

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

      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30">
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

          <div className="w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto">
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
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Digital Social Security Number (DSSN)
              </h2>
              <div className="text-white space-y-4">
                <p>
                  In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system.
                </p>
                <Link to="/dssn" className="inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors">
                  (click here to verify a DSSN)
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Digital Liberia System
              </h2>
              <div className="text-white">
                <p>
                  The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Government Ministries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ministries.map(ministry => (
                  <div 
                    key={ministry.id}
                    onClick={() => handleMinistryClick(ministry.id)}
                    className="cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <img 
                        src={ministry.icon} 
                        alt={ministry.name} 
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{ministry.name}</h3>
                        <p className="text-sm text-white/80">{ministry.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Quick Access Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickAccessServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm text-left"
                  >
                    <h3 className="font-bold text-lg">{service.name}</h3>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-blue-700/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

      {showMoeLogin && (
        <MoeLoginModal 
          onClose={() => setShowMoeLogin(false)}
          onLoginSuccess={handleMoeLoginSuccess}
        />
      )}

      <style jsx global>{`
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
