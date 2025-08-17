import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const navLinks = [
  { label: 'Home', to: '/', color: 'bg-blue-500/80' },
  { label: 'System', to: '/system', color: 'bg-green-500/80' },
  { label: 'Digital Liberia', to: '/digital-liberia', color: 'bg-purple-500/80' },
  { label: 'LibPay', to: '/libpay', color: 'bg-yellow-500/80' },
  { label: 'Liberian Post', to: '/liberian-post', color: 'bg-pink-500/80' },
];

const logos = [
  '/logos/liberianpost.png',
  '/logos/digital.png',
  '/logos/libmusic.png',
  '/logos/libconnectsit.png',
  '/logos/libpaysit.png',
  '/logos/seal of liberia.png',
  '/logos/liberia.png',
];

const backgroundImages = [
  '/backgrounds/bg1.jpg',
  '/backgrounds/bg2.jpg',
  '/backgrounds/bg3.jpg',
  '/backgrounds/bg4.jpg',
  '/backgrounds/bg5.jpg',
];

const GoogleStorageImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`${className} bg-gray-800/50 flex items-center justify-center rounded-lg text-red-400 text-sm`}>
        {error ? `Failed to load image: ${src}` : 'No image available'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain max-w-full max-h-full`}
      loading="lazy"
      onError={() => {
        console.error(`DistrictOverview.jsx - Failed to load image: ${src}`);
        setError(true);
      }}
    />
  );
};

const DistrictOverview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [statsData, setStatsData] = useState([]);
  const [timePeriod, setTimePeriod] = useState('monthly');
  const [chartLoading, setChartLoading] = useState(true);
  const [activeLogo, setActiveLogo] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    console.log('DistrictOverview.jsx - Setting up background interval');
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => {
      console.log('DistrictOverview.jsx - Clearing background interval');
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    console.log('DistrictOverview.jsx - Setting up logo interval');
    const logoInterval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 600);
    return () => {
      console.log('DistrictOverview.jsx - Clearing logo interval');
      clearInterval(logoInterval);
    };
  }, []);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      console.log('DistrictOverview.jsx - Access denied for user:', user?.securityLevel);
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate(-1);
    } else {
      console.log('DistrictOverview.jsx - Fetching district stats');
      api.get('/district-stats')
        .then(response => {
          setStatsData(response.data);
          setChartLoading(false);
          console.log('DistrictOverview.jsx - Stats loaded:', response.data);
        })
        .catch(error => {
          console.error('DistrictOverview.jsx - Error fetching district stats:', error);
          alert('Failed to load district statistics.');
          setChartLoading(false);
        });
    }
  }, [user, navigate]);

  const handleExport = () => {
    console.log('DistrictOverview.jsx - Export clicked');
  };

  const handleTimePeriodChange = (newPeriod) => {
    console.log('DistrictOverview.jsx - Time period changed to:', newPeriod);
    setTimePeriod(newPeriod);
    setChartLoading(true);
    setTimeout(() => setChartLoading(false), 1000);
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-inter overflow-x-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 -z-50" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20 -z-40" />
      <div
        className="fixed inset-0 bg-cover bg-center transition-opacity duration-1000 mix-blend-soft-light opacity-15 -z-20"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
      />

      {/* Logo Slideshow */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === activeLogo ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <GoogleStorageImage
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
        <div className="bg-gray-900/90 backdrop-blur-md border-b border-purple-500/30">
          <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg md:text-xl font-bold text-white">District Reports</h1>
            <div className="w-6" />
          </div>
          <nav className="flex space-x-2 md:space-x-4 overflow-x-auto px-4 py-2 w-full justify-center">
            {navLinks.map((link) => (
              <div key={link.to} className={`flex-shrink-0 ${link.color} px-3 py-1 rounded-lg`}>
                <Link
                  to={link.to}
                  className={`text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 ${
                    location.pathname === link.to ? 'text-red-500' : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="w-full bg-gradient-to-b from-gray-900 to-transparent overflow-x-auto">
            <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                    index === activeLogo ? 'scale-110 bg-white shadow-lg' : 'scale-100 bg-white/90'
                  }`}
                  style={{ animation: index === activeLogo ? 'heartbeat 600ms ease-in-out' : 'none' }}
                >
                  <GoogleStorageImage
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
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2">
                Key Statistics
              </h2>
              <HorizontalScroll>
                {statsData.length === 0 ? (
                  <p className="text-white/70 text-center">No statistics available.</p>
                ) : (
                  statsData.map((stat, index) => (
                    <div
                      key={index}
                      className="min-w-[200px] h-[150px] flex flex-col items-center justify-center rounded-lg"
                      style={{ backgroundColor: stat.color }}
                    >
                      <svg
                        className="w-10 h-10 mb-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {stat.title === 'Total Schools' && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        )}
                        {stat.title === 'Students Enrolled' && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        )}
                        {stat.title === 'Teachers' && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        )}
                        {stat.title === 'Compliance Rate' && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                      </svg>
                      <h3 className="text-lg font-bold text-white">{stat.value}</h3>
                      <p className="text-sm text-white/90">{stat.title}</p>
                    </div>
                  ))
                )}
              </HorizontalScroll>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto mt-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={handleExport}
              className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-300"
            >
              <svg
                className="h-5 w-5 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              Export
            </button>
            <button
              className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-300"
            >
              <svg
                className="h-5 w-5 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
          </div>

          <div className="bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2">
                Performance Trends
              </h2>
              <div className="h-64 flex items-center justify-center">
                {chartLoading ? (
                  <div className="w-4/5 bg-indigo-700/30 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '50%' }}></div>
                  </div>
                ) : (
                  <p className="text-white/70">Chart visualization would appear here</p>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleTimePeriodChange('weekly')}
                    className={`px-4 py-2 rounded-md ${
                      timePeriod === 'weekly' ? 'bg-blue-600 text-white' : 'bg-indigo-700/50 text-white/90 hover:bg-indigo-600'
                    } transition-colors duration-300`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => handleTimePeriodChange('monthly')}
                    className={`px-4 py-2 rounded-md ${
                      timePeriod === 'monthly' ? 'bg-blue-600 text-white' : 'bg-indigo-700/50 text-white/90 hover:bg-indigo-600'
                    } transition-colors duration-300`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => handleTimePeriodChange('yearly')}
                    className={`px-4 py-2 rounded-md ${
                      timePeriod === 'yearly' ? 'bg-blue-600 text-white' : 'bg-indigo-700/50 text-white/90 hover:bg-indigo-600'
                    } transition-colors duration-300`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleExport}
          className="fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
        >
          <svg
            className="h-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C9.375 12.651 10.223 12.5 11 12.5c.777 0 1.625.151 2.316.842M9 6h6m-3 3v6m9 0V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3z"
            />
          </svg>
        </button>
      </main>

      {/* Footer */}
      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-purple-500/30 pt-6">
          © {new Date().getFullYear()} Ministry of Education. All rights reserved.
        </div>
      </footer>

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
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
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
};

export default DistrictOverview;
