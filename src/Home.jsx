import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingFallback from '@components/LoadingFallback';

const Home = () => {
  const location = useLocation();
  const [activeLogo, setActiveLogo] = useState(0);
  const [logosLoaded, setLogosLoaded] = useState(false);

  // Logo configuration
  const logos = [
    "/logos/liberianpost.png",
    "/logos/digital.png",
    "/logos/libmusic.png",
    "/logos/libconnectsit.png",
    "/logos/libpaysit.png",
    "/logos/seal_of_liberia.png",
    "/logos/liberia.png"
  ];

  // Navigation links
  const navLinks = [
    { label: "Home", to: "/", color: "bg-blue-500/80" },
    { label: "System", to: "/system", color: "bg-green-500/80" },
    { label: "Digital Liberia", to: "/digital-liberia", color: "bg-purple-500/80" },
    { label: "LibPay", to: "/libpay", color: "bg-yellow-500/80" },
    { label: "Liberian Post", to: "/liberian-post", color: "bg-pink-500/80" }
  ];

  // Preload all logos
  useEffect(() => {
    const loadImages = async () => {
      const promises = logos.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = () => {
            console.error(`Failed to load logo: ${src}`);
            resolve(); // Resolve even if error to prevent blocking
          };
        });
      });

      await Promise.all(promises);
      setLogosLoaded(true);
    };

    loadImages();

    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!logosLoaded) {
    return <LoadingFallback />;
  }

  return (
    <div className="relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30">
        <div className="flex flex-col items-center">
          <nav className="flex space-x-2 md:space-x-4 p-4 overflow-x-auto w-full justify-center">
            {navLinks.map(link => (
              <Link 
                key={link.to}
                to={link.to}
                className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors ${
                  link.color
                } ${
                  location.pathname === link.to 
                    ? "ring-2 ring-white shadow-lg" 
                    : "hover:opacity-90"
                }`}
              >
                <span className="font-bold text-white">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Digital Liberia
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming Liberia through digital innovation and connectivity
            </p>
          </section>

          {/* Logo Carousel */}
          <div className="my-12">
            <div className="flex justify-center">
              <img 
                src={logos[activeLogo]} 
                alt="Digital Liberia Partner Logo"
                className="h-32 object-contain"
                onError={(e) => {
                  e.target.src = '/placeholder-logo.png';
                }}
              />
            </div>
          </div>

          {/* Content Sections */}
          <section className="my-12 bg-blue-900/20 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Our Ecosystem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">National Database</h3>
                <p>
                  Secure, centralized data management for all government services
                </p>
                <Link 
                  to="/system" 
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">LibPay</h3>
                <p>
                  Liberia's premier digital payment solution
                </p>
                <Link 
                  to="/libpay" 
                  className="inline-block mt-4 px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700"
                >
                  Discover LibPay
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-white/70 border-t border-blue-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Digital Liberia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
