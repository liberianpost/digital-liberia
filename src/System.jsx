import React from "react";
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

export default function System() {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = React.useState(0);

  // Faster logo heartbeat (600ms instead of 1000ms)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600); // Changed from 1000ms to 600ms
    return () => clearInterval(interval);
  }, []);

  const handleMinistryClick = (ministryId) => {
    if (ministryId === "education") {
      alert("Redirecting to Ministry of Education portal...");
    } else {
      alert(`Services for this ministry are coming soon`);
    }
  };

  const handleServiceClick = (serviceId) => {
    alert(`${serviceId} service will be available soon`);
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

          {/* Logo Bar - Updated with white backgrounds and heartbeat animation */}
          <div className="w-full bg-gradient-to-b from-black to-transparent overflow-x-auto">
            <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                    index === activeLogo 
                      ? "scale-110 bg-white shadow-lg" // White background for active logo
                      : "scale-100 bg-white/90" // White background for inactive logos
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

      {/* Layer 4: Content Sections with Semi-Black Background */}
      <main className="relative z-30 pt-48 pb-20 px-4 md:px-8">
        {/* DSSN Card */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
              Digital Social Security Number (DSSN)
            </h2>
            <div className="text-white relative space-y-4">
              <p>
                In the Digital Liberia project, the DSSN (Digital Social Security Number) is a unique digital identifier assigned to every Liberian citizen or legal resident within the system. It functions as a centralized digital identity that enables secure access to a wide range of services in the app and across government and private platforms.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Key Characteristics of the DSSN:</h3>
              
              <h4 className="font-semibold">Uniqueness:</h4>
              <p>
                Each DSSN is unique to an individual — similar in concept to a traditional Social Security Number (SSN) but adapted for digital infrastructure and use across the entire Digital Liberia ecosystem.
              </p>
              
              <h4 className="font-semibold">Digital Identity Anchor:</h4>
              <p>
                The DSSN serves as the anchor for identity verification, user authentication, and access to services such as:
              </p>
              <ul className="list-disc pl-6">
                <li>Government services (e.g., postal, licensing, social programs)</li>
                <li>Financial services (e.g., banking, mobile money, digital payments)</li>
                <li>Private services (e.g., ride-hailing, food delivery, job applications)</li>
              </ul>
              
              <h4 className="font-semibold">Format (subject to design decisions):</h4>
              <p>
                A typical DSSN might be a 15-digit alphanumeric code.
              </p>
              
              <h4 className="font-semibold">Security & Privacy:</h4>
              <p>
                DSSNs are stored securely and are not meant to be shared publicly. They are cryptographically protected and can be used for:
              </p>
              <ul className="list-disc pl-6">
                <li>QR-based scanning (e.g., for package tracking, ID verification)</li>
                <li>Secure login</li>
                <li>Backend validation during transactions or registrations</li>
              </ul>
              
              <h4 className="font-semibold">Use in Apps (Example: Digital Liberia, Liberian Post):</h4>
              <p>
                In the Digital Liberia app, the DSSN is used by customers to login and use all the related Digital Liberia Services.
                In the Liberian Post app, the DSSN is used by employees to:
              </p>
              <ul className="list-disc pl-6">
                <li>Identify senders and receivers of packages</li>
                <li>Validate users via backend APIs</li>
                <li>Track ownership and delivery history</li>
              </ul>
              
              <h4 className="font-semibold">Future Interoperability:</h4>
              <p>
                The DSSN is designed for interoperability across other modules in the Digital Liberia super app — supporting long-term plans for unified digital identity and records. 
                <Link to="/dssn" className="inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors">
                  (click here to verify a DSSN)
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Card */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
              Digital Liberia System
            </h2>
            <div className="text-white relative">
              <p className="text-white">
                The National Database Management System (NDMS) is the secure, centralized, and intelligent national data backbone that powers Digital Liberia. Access government services and manage your data through the ministries below.
              </p>
            </div>
          </div>
        </section>

        {/* Government Ministries Section */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
              Government Ministries
            </h2>
            <div className="text-white relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ministries.map(ministry => (
                  <div 
                    key={ministry.id}
                    onClick={() => handleMinistryClick(ministry.id)}
                    className="cursor-pointer bg-black/40 hover:bg-black/50 transition-colors p-4 rounded-lg border border-gray-600/30"
                  >
                    <div className="flex items-center space-x-4">
                      <img 
                        src={ministry.icon} 
                        alt={ministry.name} 
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{ministry.name}</h3>
                        <p className="text-sm text-gray-300">{ministry.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Services Section */}
        <section className="w-full py-8 px-4 md:px-8 max-w-4xl mx-auto mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-600/30 p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-600/20 to-transparent"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-gray-600/30 pb-2">
              Quick Access Services
            </h2>
            <div className="text-white relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickAccessServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="bg-black/40 hover:bg-black/50 transition-colors p-4 rounded-lg border border-gray-600/30 text-left"
                  >
                    <h3 className="font-bold text-lg">{service.name}</h3>
                  </button>
                ))}
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

      {/* Global Styles - Updated with heartbeat animation */}
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
