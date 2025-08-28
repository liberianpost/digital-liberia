import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '@/api';

const navLinks = [
  { label: "Home", to: "/", color: "bg-gradient-to-r from-blue-600 to-blue-800 text-white" },
  { label: "System", to: "/system", color: "bg-gradient-to-r from-green-600 to-green-800 text-white" },
  { label: "Digital Liberia", to: "/digital-liberia", color: "bg-gradient-to-r from-purple-600 to-purple-800 text-white" },
  { label: "LibPay", to: "/libpay", color: "bg-gradient-to-r from-yellow-500 to-yellow-700 text-white" },
  { label: "Liberian Post", to: "/liberian-post", color: "bg-gradient-to-r from-pink-600 to-pink-800 text-white" }
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

const MollDashboard = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const [activeLogo, setActiveLogo] = useState(0);
  const [userDSSN, setUserDSSN] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    employmentRecords: 0,
    workPermits: 0,
    laborDisputes: 0,
    unemploymentRate: "0%",
    employmentSectors: []
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const isLoggedIn = localStorage.getItem("MOLL_LOGGED_IN") === "true";
      const dssn = localStorage.getItem("MOLL_DSSN") || "";
      
      if (!isLoggedIn) {
        navigate('/system');
        return;
      }

      setUserDSSN(dssn);
      
      try {
        let profileData = null;
        try {
          const profileResponse = await api.get('/profile-by-dssn', {
            params: { dssn: dssn },
            timeout: 10000
          });

          if (profileResponse.data && profileResponse.data.success) {
            profileData = profileResponse.data.data;
          }
        } catch (apiError) {
          console.log('Profile fetch error:', apiError.message);
        }

        if (profileData) {
          setUserProfile(profileData);
        } else {
          setUserProfile({
            first_name: "DSSN",
            last_name: "User",
            email: `${dssn}@digitalliberia.gov.lr`,
            image: "/logos/moll-user.png",
            phone: "Not available",
            address: "Digital Liberia User",
            postal_address: "Monrovia, Liberia"
          });
        }

        // Mock analytics data
        const mockAnalytics = {
          employmentRecords: 1250000,
          workPermits: 87500,
          laborDisputes: 3250,
          unemploymentRate: "12.5%",
          employmentSectors: [
            { sector: "Agriculture", workers: 450000, percentage: 36 },
            { sector: "Services", workers: 350000, percentage: 28 },
            { sector: "Government", workers: 250000, percentage: 20 },
            { sector: "Manufacturing", workers: 150000, percentage: 12 },
            { sector: "Other", workers: 50000, percentage: 4 }
          ]
        };
        
        setAnalytics(mockAnalytics);
      } catch (error) {
        console.error('Error in data processing:', error);
        setUserProfile({
          first_name: "DSSN",
          last_name: "User",
          email: `${dssn}@digitalliberia.gov.lr`,
            image: "/logos/moll-user.png",
            phone: "Not available",
            address: "Digital Liberia User",
            postal_address: "Monrovia, Liberia"
          });
        } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchData();
  }, [navigate]);

  const handleLogout = () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('MOLL_'));
    keys.forEach(key => localStorage.removeItem(key));
    navigate("/system");
  };

  const handleRoleAccessClick = (role) => {
    alert(`Role-based access for ${role} will be implemented in the next update.`);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-800 font-inter overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="flex flex-col px-6 py-4 max-w-7xl mx-auto">
          {/* Navigation Links - Top Row */}
          <nav className="flex justify-center space-x-3 mb-4">
            {navLinks.map(link => (
              <div key={link.to} className={`flex-shrink-0 ${link.color} px-4 py-2 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300`}>
                <Link 
                  to={link.to} 
                  className="text-sm font-bold hover:text-blue-100 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Ministry of Labour Logo and Title - Bottom Row */}
          <div className="flex items-center justify-center space-x-4">
            <img src="/logos/moll.png" alt="MOLL Logo" className="w-12 h-12 object-contain" />
            <div className="text-center">
              <h1 className="text-xl font-bold text-blue-800">
                Ministry of Labour
              </h1>
              <p className="text-sm text-gray-600">Digital Liberia Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-30 pt-40 pb-20 px-6">
        {/* Welcome Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-200 p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/50"></div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1 shadow-xl">
                      <img
                        src={userProfile?.image || "/logos/moll-user.png"}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h1 className="text-4xl font-bold text-blue-900">
                      Welcome, {userProfile ? `${userProfile.first_name} ${userProfile.last_name}` : 'DSSN User'}
                    </h1>
                    <p className="text-gray-600 text-lg mt-2">{formatDate(currentDate)}</p>
                    <p className="text-blue-600 text-sm mt-1">
                      DSSN: {userDSSN} • {userProfile?.email}
                    </p>
                    {userProfile?.phone && userProfile.phone !== "Not available" && (
                      <p className="text-gray-500 text-sm mt-1">Phone: {userProfile.phone}</p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Dashboard */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
            Labour System Analytics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Employment Records */}
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">{formatNumber(analytics.employmentRecords)}</h3>
                  <p className="text-blue-600">Employment Records</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-blue-100 rounded-full">
                <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Work Permits */}
            <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-green-800">{formatNumber(analytics.workPermits)}</h3>
                  <p className="text-green-600">Work Permits</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-green-100 rounded-full">
                <div className="h-full bg-green-500 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Labor Disputes */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-purple-800">{formatNumber(analytics.laborDisputes)}</h3>
                  <p className="text-purple-600">Labor Disputes</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-purple-100 rounded-full">
                <div className="h-full bg-purple-500 rounded-full w-1/4"></div>
              </div>
            </div>

            {/* Unemployment Rate */}
            <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-orange-800">{analytics.unemploymentRate}</h3>
                  <p className="text-orange-600">Unemployment Rate</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📉</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-orange-100 rounded-full">
                <div className="h-full bg-orange-500 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Employment Sectors Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Employment by Sector</h3>
            <div className="space-y-4">
              {analytics.employmentSectors.map((sector, index) => (
                <div key={sector.sector} className="flex items-center justify-between">
                  <span className="text-gray-700 w-32 truncate font-medium">{sector.sector}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-blue-800 font-semibold w-20 text-right">
                    {formatNumber(sector.workers)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👥", label: "Employment Records", color: "from-blue-600 to-blue-700" },
              { icon: "📋", label: "Work Permits", color: "from-green-600 to-green-700" },
              { icon: "⚖️", label: "Labor Disputes", color: "from-purple-600 to-purple-700" },
              { icon: "📊", label: "Labor Statistics", color: "from-orange-600 to-orange-700" },
              { icon: "🤝", label: "Worker Rights", color: "from-red-600 to-red-700" },
              { icon: "⚙️", label: "Settings", color: "from-gray-600 to-gray-700" }
            ].map((action, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${action.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer text-white`}
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-semibold">{action.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Role-Based Access Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
            Role-Based Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: "👨‍💼", 
                label: "Ministry Employees", 
                color: "from-blue-600 to-blue-700",
                description: "Access to labour data, policy management, and system administration"
              },
              { 
                icon: "👥", 
                label: "Employment Officers", 
                color: "from-green-600 to-green-700",
                description: "Manage employment records, job placements, and workforce data"
              },
              { 
                icon: "📋", 
                label: "Permit Officers", 
                color: "from-purple-600 to-purple-700",
                description: "Process work permits, conduct verifications, and ensure compliance"
              },
              { 
                icon: "⚖️", 
                label: "Dispute Resolution", 
                color: "from-orange-600 to-orange-700",
                description: "Handle labor disputes, mediation, and conflict resolution processes"
              },
              { 
                icon: "🤝", 
                label: "Worker Rights", 
                color: "from-red-600 to-red-700",
                description: "Protect worker rights, conduct inspections, and enforce labor laws"
              },
              { 
                icon: "🔐", 
                label: "System Administrators", 
                color: "from-gray-600 to-gray-700",
                description: "Full system access, user management, and security configuration"
              }
            ].map((role, index) => (
              <div
                key={index}
                onClick={() => handleRoleAccessClick(role.label)}
                className={`bg-gradient-to-r ${role.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer text-white`}
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{role.label}</h3>
                <p className="text-sm opacity-90">{role.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-30 py-8 text-center bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ministry of Labour - Digital Liberia. All rights reserved.
          </p>
          <p className="text-gray-50 text-xs mt-2">
            Advanced Labour Management System • Powered by Digital Liberia NDMS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MollDashboard;
