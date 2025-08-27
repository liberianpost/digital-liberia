import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

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

const MoeDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/system');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('MOE_'));
    keys.forEach(key => localStorage.removeItem(key));
    
    logout();
    navigate("/system");
  };

  if (!user) return null;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
                    className="text-sm md:text-base lg:text-lg font-bold text-white hover:text-blue-300 transition-colors duration-300"
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
        {/* Welcome Section */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-blue-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Welcome, {user.username || "DSSN User"}
                  </h1>
                  <p className="text-white/80">{formatDate(currentDate)}</p>
                  <p className="text-sm text-white/60">
                    DSSN: {localStorage.getItem("MOE_DSSN") || "Not available"}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ministry of Education Introduction */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl border border-green-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Ministry of Education - Advanced Credential System
              </h2>
              <div className="text-white space-y-4">
                <p>
                  Welcome to the Ministry of Education's advanced credential management system. 
                  Our platform leverages cutting-edge technology to provide secure access to 
                  educational credentials and school management tools.
                </p>
                <p>
                  Through the Digital Liberia initiative, we've implemented a state-of-the-art 
                  system that ensures the integrity and authenticity of educational records 
                  while maintaining the highest standards of privacy and security.
                </p>
                <p>
                  The system utilizes blockchain-based verification, biometric authentication, 
                  and advanced encryption to protect your educational credentials and provide 
                  instant verification capabilities to employers, institutions, and government 
                  agencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl border border-purple-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                System Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Digital Transcripts</h3>
                  <p className="text-white/80">Access and share verified digital academic transcripts with institutions worldwide.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Diploma Verification</h3>
                  <p className="text-white/80">Instant verification of degrees and diplomas for employers and educational institutions.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-lg mb-2">Teacher Credentials</h3>
                  <p className="text-white/80">Manage and verify teaching certifications and professional development records.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-lg mb-2">School Management</h3>
                  <p className="text-white/80">Comprehensive tools for school administration, student records, and resource management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-xl border border-rose-400/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
                Advanced Technology
              </h2>
              <div className="text-white space-y-4">
                <p>
                  Our system is built on the foundation of Digital Liberia's National Database 
                  Management System (NDMS), providing a secure, centralized, and intelligent 
                  data backbone for educational credentials.
                </p>
                <p>
                  Key technological features include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Blockchain-based credential verification</li>
                  <li>Biometric authentication through DSSN</li>
                  <li>End-to-end encryption for all data transactions</li>
                  <li>Real-time credential verification API</li>
                  <li>Mobile app integration for instant access</li>
                  <li>AI-powered fraud detection systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-blue-700/30 pt-6">
          © {new Date().getFullYear()} Ministry of Education - Digital Liberia. All rights reserved.
        </div>
      </footer>

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
};

export default MoeDashboard;
