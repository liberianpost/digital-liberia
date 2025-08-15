import React, { useState, useEffect, Component } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels, handleLoginSuccess } from '@utils/auth';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary caught:', error, error.stack);
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-red-600 mb-6">{this.state.error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Navigation links
const navLinks = [
  { label: 'Home', to: '/', color: 'bg-blue-500/80' },
  { label: 'System', to: '/system', color: 'bg-green-500/80' },
  { label: 'Digital Liberia', to: '/digital-liberia', color: 'bg-purple-500/80' },
  { label: 'LibPay', to: '/libpay', color: 'bg-yellow-500/80' },
  { label: 'Liberian Post', to: '/liberian-post', color: 'bg-pink-500/80' },
];

// Logos for carousel
const logos = [
  '/logos/liberianpost.png',
  '/logos/digital.png',
  '/logos/libmusic.png',
  '/logos/libconnectsit.png',
  '/logos/libpaysit.png',
  '/logos/seal-of-liberia.png',
  '/logos/liberia.png',
];

// Ministry data
const ministries = [
  {
    id: 'education',
    name: 'Ministry of Education',
    description: 'School management, student records, and educational resources',
    icon: '/logos/moe.png',
  },
  {
    id: 'health',
    name: 'Ministry of Health',
    description: 'Health records, vaccination data, and medical services',
    icon: '/logos/moh.png',
  },
  {
    id: 'finance',
    name: 'Ministry of Finance',
    description: 'Tax records, financial services, and economic data',
    icon: '/logos/mof.png',
  },
  {
    id: 'justice',
    name: 'Ministry of Justice',
    description: 'Legal documents, court records, and law enforcement',
    icon: '/logos/moj.png',
  },
  {
    id: 'transport',
    name: 'Ministry of Transport',
    description: 'Driver licenses, vehicle registration, and transport permits',
    icon: '/logos/mot.png',
  },
  {
    id: 'foreign',
    name: 'Ministry of Foreign Affairs',
    description: 'Passport services and international relations',
    icon: '/logos/mofa.png',
  },
  {
    id: 'agriculture',
    name: 'Ministry of Agriculture',
    description: 'Farming permits, agricultural data, and food security',
    icon: '/logos/moa.png',
  },
  {
    id: 'internal',
    name: 'Ministry of Internal Affairs',
    description: 'Citizen IDs, birth certificates, and local governance',
    icon: '/logos/moia.png',
  },
  {
    id: 'lands',
    name: 'Ministry of Lands & Mines',
    description: 'Land deeds, mining permits, and property records',
    icon: '/logos/mol.png',
  },
  {
    id: 'commerce',
    name: 'Ministry of Commerce',
    description: 'Business registration and trade licenses',
    icon: '/logos/moc.png',
  },
  {
    id: 'labour',
    name: 'Ministry of Labour',
    description: 'Employment records and worker rights',
    icon: '/logos/moll.png',
  },
  {
    id: 'youth',
    name: 'Ministry of Youth & Sports',
    description: 'Youth programs and sporting events',
    icon: '/logos/moy.png',
  },
];

// Quick access services
const quickAccessServices = [
  { id: 'passport', name: 'Passport' },
  { id: 'birth-certificate', name: 'Birth Certificate' },
  { id: 'drivers-license', name: "Driver's License" },
  { id: 'citizen-id', name: 'Citizen ID' },
  { id: 'business-registration', name: 'Business Registration' },
  { id: 'vehicle-registration', name: 'Vehicle Registration' },
  { id: 'land-deed', name: 'Land Deed' },
  { id: 'tax-services', name: 'Tax Services' },
];

// MoeLoginModal component
const MoeLoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateInputs = () => {
    const newErrors = { username: '', password: '' };
    let valid = true;

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateInputs()) return;

    setLoading(true);
    try {
      const result = await login(formData, navigate);
      if (!result.success) {
        setError(result.error || 'Invalid username or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Ministry of Education</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-gray-200"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img
              src="/logos/moe.png"
              alt="MOE Logo"
              className="w-20 h-20 object-contain"
              onError={() => console.error('Failed to load MOE logo')}
            />
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-900 mb-2 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your username"
                required
                autoFocus
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-md text-white font-semibold ${
                loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors flex items-center justify-center`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
          <div className="mt-4 flex justify-center space-x-4 text-sm border-t border-gray-200 pt-4">
            <button
              type="button"
              onClick={() => alert('Forgot password feature coming soon')}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Forgot Password?
            </button>
            <span className="text-gray-400">|</span>
            <button
              type="button"
              onClick={() => alert('Registration feature coming soon')}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const System = () => {
  const { user, loading, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLogo, setActiveLogo] = useState(0);
  const [showMoeLogin, setShowMoeLogin] = useState(false);

  // Log auth context for debugging
  useEffect(() => {
    console.log('Auth context:', { user, isAuthenticated: !!user, loading });
  }, [user, loading]);

  // Logo carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Handle auth state
  useEffect(() => {
    if (loading) return;
    const isLoggedIn = localStorage.getItem('moeAuth') !== null;
    if (isLoggedIn && user && user.securityLevel) {
      console.log('Navigating with user:', user);
      const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
      if (location.pathname === '/system') {
        navigate(defaultRoute, { replace: true });
      }
    } else if (!user) {
      console.log('No user, clearing localStorage');
      localStorage.removeItem('moeAuth');
    }
  }, [user, loading, navigate, location.pathname]);

  const handleMinistryClick = (ministryId, e) => {
    e.stopPropagation();
    if (ministryId === 'education') {
      if (user) {
        handleLoginSuccess(user, navigate);
      } else {
        setShowMoeLogin(true);
      }
    } else {
      alert(`Services for ${ministries.find((m) => m.id === ministryId)?.name} are coming soon`);
    }
  };

  const handleServiceClick = (serviceId, e) => {
    e.stopPropagation();
    alert(`${serviceId.replace('-', ' ')} service will be available soon`);
  };

  const handleLogout = () => {
    console.log('Logging out user:', user);
    logout();
    navigate('/system', { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen w-full bg-blue-950 text-white font-inter overflow-x-hidden">
        <div className="fixed inset-0 bg-blue-950 -z-50" />

        {/* Logo Carousel */}
        <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-full max-w-2xl mx-4 h-64 md:h-96 flex items-center justify-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  index === activeLogo ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                  onError={() => console.error(`Failed to load logo: ${logo}`)}
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50">
          <div className="bg-blue-950/80 backdrop-blur-md border-b border-blue-700/30">
            <div className="flex items-center justify-center px-4 py-4 max-w-7xl mx-auto">
              <nav className="flex space-x-2 md:space-x-4 overflow-x-auto w-full justify-center">
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
            </div>
            <div className="w-full bg-gradient-to-b from-blue-950 to-transparent overflow-x-auto">
              <div className="flex flex-nowrap px-4 space-x-4 w-max max-w-full mx-auto py-3">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                      index === activeLogo ? 'scale-110 bg-white shadow-lg' : 'scale-100 bg-white/90'
                    }`}
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index}`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      onError={() => console.error(`Failed to load logo: ${logo}`)}
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
                  <Link
                    to="/dssn"
                    className="inline-flex items-center bg-blue-500/80 backdrop-blur-sm rounded-lg px-3 py-1 ml-2 border border-blue-400/30 cursor-pointer hover:bg-blue-600/80 transition-colors"
                  >
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
                  {ministries.map((ministry) => (
                    <div
                      key={ministry.id}
                      onClick={(e) => handleMinistryClick(ministry.id, e)}
                      className="cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={ministry.icon}
                          alt={ministry.name}
                          className="w-12 h-12 object-contain"
                          onError={() => console.error(`Failed to load icon: ${ministry.icon}`)}
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
                  {quickAccessServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={(e) => handleServiceClick(service.id, e)}
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

        {/* Footer */}
        <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
          <div className="border-t border-blue-700/30 pt-6">
            © {new Date().getFullYear()} Digital Liberia. All rights reserved.
          </div>
        </footer>

        {/* Login Modal */}
        {showMoeLogin && (
          <div className="fixed inset-0 z-50">
            <MoeLoginModal onClose={() => setShowMoeLogin(false)} />
          </div>
        )}

        {/* Logout Button for Authenticated Users */}
        {user && (
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default System;
