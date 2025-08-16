import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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

const students = [
  {
    name: 'John Doe',
    grade: 'Grade 10',
    studentId: 'LNHS-2023-001',
  },
  {
    name: 'Jane Smith',
    grade: 'Grade 9',
    studentId: 'LNHS-2023-002',
  },
  {
    name: 'Michael Johnson',
    grade: 'Grade 11',
    studentId: 'LNHS-2023-003',
  },
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
      onError={(e) => {
        console.error(`StudentManagement.jsx - Failed to load image: ${src}`);
        setError(true);
      }}
    />
  );
};

export default function StudentManagement() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabValue, setTabValue] = useState(0);
  const [activeLogo, setActiveLogo] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
    // TODO: Implement filtering logic for students based on tab (All, Active, Inactive)
    console.log(`StudentManagement.jsx - Tab changed to: ${['All', 'Active', 'Inactive'][newValue]}`);
  };

  const handleStudentClick = (student) => {
    console.log('StudentManagement.jsx - Navigating to student profile:', student.studentId);
    navigate('/student-profile', { state: { student } });
  };

  const handleAddStudent = () => {
    console.log('StudentManagement.jsx - Navigating to student registration');
    navigate('/student-registration');
  };

  useEffect(() => {
    console.log('StudentManagement.jsx - Setting up background interval');
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => {
      console.log('StudentManagement.jsx - Clearing background interval');
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    console.log('StudentManagement.jsx - Setting up logo interval');
    const logoInterval = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % logos.length);
    }, 600);
    return () => {
      console.log('StudentManagement.jsx - Clearing logo interval');
      clearInterval(logoInterval);
    };
  }, []);

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
            <h1 className="text-lg md:text-xl font-bold text-white">Student Management</h1>
            <div className="w-6" /> {/* Spacer for alignment */}
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
        {/* Tabs */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex space-x-4 border-b border-purple-500/30">
            {['All', 'Active', 'Inactive'].map((label, index) => (
              <button
                key={label}
                onClick={() => handleTabChange(index)}
                className={`px-4 py-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
                  tabValue === index
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Student List */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-indigo-900/50 backdrop-blur-lg rounded-xl border border-indigo-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-b border-indigo-700/30 pb-2">
                Students
              </h2>
              <div className="space-y-4">
                {students.map((student, index) => (
                  <div key={student.studentId}>
                    <button
                      onClick={() => handleStudentClick(student)}
                      className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-indigo-800/50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-lg font-semibold text-white">{student.name}</p>
                        <p className="text-sm text-white/90">{student.grade}</p>
                        <p className="text-sm text-white/70">{student.studentId}</p>
                      </div>
                    </button>
                    {index < students.length - 1 && (
                      <hr className="border-indigo-700/30 my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add Student Button */}
        <button
          onClick={handleAddStudent}
          className="fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
}
