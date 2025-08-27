import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { SecurityLevels } from '@utils/securityLevels';
import { handleLoginSuccess } from '@utils/auth';
import { DashboardItems } from "@/config/dashboardItems";
import api from '@/api';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configuration - UPDATED with correct values
const firebaseConfig = {
  apiKey: "AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",
  authDomain: "digitalliberia-notification.firebaseapp.com",
  projectId: "digitalliberia-notification",
  storageBucket: "digitalliberia-notification.appspot.com",
  messagingSenderId: "537791418352",
  appId: "1:537791418352:web:378b48439b2c9bed6dd735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Web Push VAPID public key
const vapidKey = "BEICu1bx8LKW5j7cag5tU9B2qfcejWi7QPm8a95jFODSIUNRiellygLGroK9NyWt-3WsTiUZscmS311gGXiXV7Q";

// Enhanced notification permission request with service worker registration
const requestNotificationPermission = async () => {
  try {
    // Register service worker first
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    console.log('Service Worker registered:', registration);

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      
      // Get the FCM token with proper service worker registration
      const currentToken = await getToken(messaging, { 
        vapidKey: vapidKey,
        serviceWorkerRegistration: registration
      });
      
      if (currentToken) {
        console.log('FCM Token:', currentToken);
        localStorage.setItem('fcmToken', currentToken);
        return currentToken;
      } else {
        console.log('No registration token available.');
        return null;
      }
    } else {
      console.log('Notification permission denied.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

// Handle incoming messages when the app is in the foreground
onMessage(messaging, (payload) => {
  console.log('Message received in foreground:', payload);
  if (payload.notification) {
    const { title, body } = payload.notification;
    new Notification(title, { body });
  }
});

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

// DSSN Challenge Modal Component
const DSSNChallengeModal = ({ onClose, onSuccess, service = "Ministry of Education" }) => {
  const [dssn, setDssn] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [challengeId, setChallengeId] = useState(null);
  const [polling, setPolling] = useState(false);
  const [pollInterval, setPollInterval] = useState(null);
  const [pushNotificationStatus, setPushNotificationStatus] = useState(null);

  const requestDSSNChallenge = async (dssn) => {
    try {
      // Get FCM token for push notifications
      const fcmToken = localStorage.getItem('fcmToken') || await requestNotificationPermission();
      
      const response = await api.post('/gov-services/request', { 
        dssn, 
        service,
        fcmToken,
        requestData: {
          timestamp: new Date().toISOString(),
          service: service,
          origin: window.location.origin
        }
      });
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to initiate challenge');
      }
      
      return response.data;
    } catch (error) {
      console.error('Error requesting DSSN challenge:', error);
      throw new Error(error.response?.data?.error || error.message || "Failed to initiate DSSN challenge");
    }
  };

  const pollChallengeStatus = async (challengeId) => {
    try {
      const response = await api.get(`/gov-services/status/${challengeId}`);
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to check challenge status');
      }
      
      return response.data;
    } catch (error) {
      console.error('Error polling challenge status:', error);
      throw new Error(error.response?.data?.error || error.message || "Failed to check approval status");
    }
  };

  useEffect(() => {
    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [pollInterval]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setPushNotificationStatus(null);

    if (!dssn.trim()) {
      setError("Please enter your DSSN");
      setLoading(false);
      return;
    }

    try {
      const response = await requestDSSNChallenge(dssn);
      setChallengeId(response.challengeId);
      setPolling(true);
      setLoading(false);
      
      if (response.pushNotification) {
        setPushNotificationStatus({
          sent: response.pushNotification.sent,
          hasToken: response.pushNotification.hasToken,
          error: response.pushNotification.error
        });
      }
      
      const interval = setInterval(async () => {
        try {
          const statusResponse = await pollChallengeStatus(response.challengeId);
          
          if (statusResponse.status === 'approved') {
            clearInterval(interval);
            setPolling(false);
            onSuccess(statusResponse.govToken, response.challengeId);
          } else if (statusResponse.status === 'denied') {
            clearInterval(interval);
            setPolling(false);
            setError("Access was denied on your mobile device");
          }
        } catch (error) {
          console.error('Error polling challenge status:', error);
          clearInterval(interval);
          setPolling(false);
          setError(error.message);
        }
      }, 3000);

      setPollInterval(interval);

      setTimeout(() => {
        if (polling) {
          clearInterval(interval);
          setPolling(false);
          setError("Request timed out. Please try again.");
        }
      }, 5 * 60 * 1000);

    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden shadow-xl">
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{service} - DSSN Verification</h2>
          <button 
            onClick={onClose}
            className="text-white text-2xl hover:text-gray-200"
            disabled={polling || loading}
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
            />
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {pushNotificationStatus && !pushNotificationStatus.sent && (
            <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm">
              {!pushNotificationStatus.hasToken ? (
                "User doesn't have the mobile app installed. Please ask them to download it."
              ) : (
                `Push notification failed: ${pushNotificationStatus.error || 'Unknown error'}`
              )}
            </div>
          )}
          
          {polling ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Waiting for Mobile Approval</h3>
              <p className="text-gray-600 mb-4">
                Please check your mobile app to approve this verification request.
              </p>
              {pushNotificationStatus?.sent && (
                <p className="text-sm text-green-600 mb-2">
                  ✓ Push notification sent to mobile device
                </p>
              )}
              <p className="text-sm text-gray-500">
                Challenge ID: {challengeId}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                This request will timeout in 5 minutes
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-900 mb-2 font-medium">Digital Social Security Number (DSSN)</label>
                <input
                  type="text"
                  value={dssn}
                  onChange={(e) => setDssn(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="Enter your DSSN"
                  required
                  autoFocus
                  disabled={loading}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter your DSSN and approve the request on your mobile app
                </p>
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
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </>
                ) : 'Verify with DSSN'}
              </button>
            </form>
          )}

          <div className="mt-4 text-center text-sm border-t border-gray-200 pt-4">
            <p className="text-gray-600">
              Don't have the mobile app? <a 
                href="#" 
                className="text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert("The Digital Liberia mobile app is available on the App Store and Google Play Store");
                }}
              >
                Download it here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

const System = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLogo, setActiveLogo] = useState(0);
  const [showDSSNLogin, setShowDSSNLogin] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Register service worker on app load
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
    
    // Request notification permission
    requestNotificationPermission();
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("MOE_LOGGED_IN") === "true";
    if (isLoggedIn) {
      navigate("/moe-dashboard");
    }
  }, [navigate]);

  const handleDSSNSuccess = async (govToken, challengeId) => {
    try {
      const tokenPayload = JSON.parse(atob(govToken.split('.')[1]));
      
      localStorage.setItem("MOE_USER_ID", tokenPayload.userId);
      localStorage.setItem("MOE_DSSN", tokenPayload.dssn || "");
      localStorage.setItem("MOE_LOGGED_IN", "true");
      localStorage.setItem("MOE_GOV_TOKEN", govToken);
      localStorage.setItem("MOE_CHALLENGE_ID", challengeId || "");
      localStorage.setItem("MOE_LOGIN_TIMESTAMP", new Date().toISOString());
      
      setShowDSSNLogin(false);
      
      if (selectedMinistry === 'education') {
        navigate("/moe-dashboard");
      } else {
        navigate("/moe-dashboard");
      }
    } catch (error) {
      console.error('Error processing DSSN login:', error);
      alert("Login failed. Please try again.");
    }
  };

  const handleMinistryClick = (ministryId, e) => {
    e.stopPropagation();
    setSelectedMinistry(ministryId);
    
    if (ministryId === "education") {
      const isLoggedIn = localStorage.getItem("MOE_LOGGED_IN") === "true";
      if (isLoggedIn) {
        navigate("/moe-dashboard");
      } else {
        setShowDSSNLogin(true);
      }
    } else {
      setShowDSSNLogin(true);
    }
  };

  const handleServiceClick = (serviceId, e) => {
    e.stopPropagation();
    alert(`${serviceId.replace('-', ' ')} service will be available soon`);
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
                    onClick={(e) => handleMinistryClick(ministry.id, e)}
                    className="cursor-pointer bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg border border-white/10 backdrop-blur-sm relative z-20"
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

      <footer className="relative z-30 py-6 text-center text-white/60 text-sm">
        <div className="border-t border-blue-700/30 pt-6">
          © {new Date().getFullYear()} Digital Liberia. All rights reserved.
        </div>
      </footer>

      {showDSSNLogin && (
        <DSSNChallengeModal 
          onClose={() => setShowDSSNLogin(false)}
          onSuccess={handleDSSNSuccess}
          service={selectedMinistry ? ministries.find(m => m.id === selectedMinistry)?.name : "Ministry of Education"}
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
};

export default System;
export { UnauthorizedPage };
