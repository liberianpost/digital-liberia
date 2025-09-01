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

const LlaDashboard = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const [activeLogo, setActiveLogo] = useState(0);
  const [userDSSN, setUserDSSN] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    landDeeds: 0,
    propertyRecords: 0,
    landSurveys: 0,
    landDisputes: 0,
    landUseTypes: []
  });
  
  // UPTC Generation State
  const [generateData, setGenerateData] = useState({
    county: "",
    postal_code: "",
    latitude: "",
    longitude: "",
    surveyor_license_id: ""
  });
  const [generatedUPTC, setGeneratedUPTC] = useState("");
  const [generating, setGenerating] = useState(false);
  
  // UPTC Verification State
  const [verifyUPTC, setVerifyUPTC] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const isLoggedIn = localStorage.getItem("LLA_LOGGED_IN") === "true";
      const dssn = localStorage.getItem("LLA_DSSN") || "";
      
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
            image: "/logos/lla-user.png",
            phone: "Not available",
            address: "Digital Liberia User",
            postal_address: "Monrovia, Liberia"
          });
        }

        // Mock analytics data
        const mockAnalytics = {
          landDeeds: 185000,
          propertyRecords: 285000,
          landSurveys: 12500,
          landDisputes: 3250,
          landUseTypes: [
            { type: "Residential", records: 120000, percentage: 42 },
            { type: "Commercial", records: 75000, percentage: 26 },
            { type: "Agricultural", records: 50000, percentage: 18 },
            { type: "Industrial", records: 25000, percentage: 9 },
            { type: "Government", records: 15000, percentage: 5 }
          ]
        };
        
        setAnalytics(mockAnalytics);
      } catch (error) {
        console.error('Error in data processing:', error);
        setUserProfile({
          first_name: "DSSN",
          last_name: "User",
          email: `${dssn}@digitalliberia.gov.lr`,
          image: "/logos/lla-user.png",
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
    const keys = Object.keys(localStorage).filter(key => key.startsWith('LLA_'));
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

  // Handle UPTC Generation
  const handleGenerateUPTC = async (e) => {
    e.preventDefault();
    setGenerating(true);
    setGeneratedUPTC("");
    
    try {
      const response = await api.post('/generate-uptc', generateData);
      
      if (response.data.success) {
        setGeneratedUPTC(response.data.uptc_code);
      } else {
        alert("Error generating UPTC: " + response.data.message);
      }
    } catch (error) {
      console.error('Error generating UPTC:', error);
      alert("Failed to generate UPTC. Please check your inputs and try again.");
    } finally {
      setGenerating(false);
    }
  };

  // Handle UPTC Verification
  const handleVerifyUPTC = async (e) => {
    e.preventDefault();
    setVerifying(true);
    setVerificationResult(null);
    
    try {
      const response = await api.get(`/verify-uptc/${verifyUPTC}`);
      
      if (response.data.success) {
        setVerificationResult(response.data.data);
      } else {
        alert("Error verifying UPTC: " + response.data.message);
      }
    } catch (error) {
      console.error('Error verifying UPTC:', error);
      alert("Failed to verify UPTC. Please check the code and try again.");
    } finally {
      setVerifying(false);
    }
  };

  // Handle input changes for UPTC generation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGenerateData(prev => ({
      ...prev,
      [name]: value
    }));
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

          {/* Liberia Land Authority Logo and Title - Bottom Row */}
          <div className="flex items-center justify-center space-x-4">
            <img src="/logos/lla.png" alt="LLA Logo" className="w-12 h-12 object-contain" />
            <div className="text-center">
              <h1 className="text-xl font-bold text-blue-800">
                Liberia Land Authority
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
                        src={userProfile?.image || "/logos/lla-user.png"}
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

        {/* UPTC Management Section */}
        <section className="max-w-7xl mx-auto mb-12">
          {/* Generate UPTC Container */}
          <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h2 className="text-2xl font-bold">Generate Unique Property Token Code (UPTC)</h2>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleGenerateUPTC} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">County</label>
                    <input
                      type="text"
                      name="county"
                      value={generateData.county}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Enter county"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postal_code"
                      value={generateData.postal_code}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Enter postal code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                    <input
                      type="text"
                      name="latitude"
                      value={generateData.latitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="e.g., 6.300774"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                    <input
                      type="text"
                      name="longitude"
                      value={generateData.longitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="e.g., -10.79716"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Surveyor License ID</label>
                    <input
                      type="text"
                      name="surveyor_license_id"
                      value={generateData.surveyor_license_id}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Enter your surveyor license ID"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={generating}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg font-semibold disabled:opacity-50"
                >
                  {generating ? "Generating..." : "Generate UPTC"}
                </button>
              </form>

              {generatedUPTC && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">UPTC Generated Successfully!</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-green-700 font-mono break-all">{generatedUPTC}</p>
                      <p className="text-sm text-green-600 mt-2">
                        This UPTC code can now be used to verify the land credentials.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Verify UPTC Container */}
          <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
              <h2 className="text-2xl font-bold">Verify Unique Property Token Code (UPTC)</h2>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleVerifyUPTC} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">UPTC Code</label>
                  <input
                    type="text"
                    value={verifyUPTC}
                    onChange={(e) => setVerifyUPTC(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    placeholder="Enter UPTC code to verify"
                  />
                </div>
                <button
                  type="submit"
                  disabled={verifying}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg font-semibold disabled:opacity-50"
                >
                  {verifying ? "Verifying..." : "Verify UPTC"}
                </button>
              </form>

              {verificationResult && (
                <div className="mt-8">
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">UPTC Verification Results</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Land Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Parcel ID:</span> {verificationResult.land_parcel.parcel_id}</p>
                          <p><span className="font-medium">County:</span> {verificationResult.land_parcel.county}</p>
                          <p><span className="font-medium">Postal Code:</span> {verificationResult.land_parcel.postal_code}</p>
                          <p><span className="font-medium">Coordinates:</span> {verificationResult.land_parcel.latitude}, {verificationResult.land_parcel.longitude}</p>
                          <p><span className="font-medium">Date Surveyed:</span> {new Date(verificationResult.land_parcel.date_surveyed).toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Surveyor Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">License ID:</span> {verificationResult.surveyor.license_id}</p>
                          <p><span className="font-medium">Name:</span> {verificationResult.surveyor.first_name} {verificationResult.surveyor.last_name}</p>
                          <p><span className="font-medium">DSSN:</span> {verificationResult.surveyor.dssn}</p>
                        </div>
                        
                        {verificationResult.owners.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-medium text-blue-700 mb-2">Owners</h4>
                            <div className="space-y-2 text-sm">
                              {verificationResult.owners.map((owner, index) => (
                                <div key={index} className="border-t border-blue-100 pt-2">
                                  <p><span className="font-medium">Name:</span> {owner.first_name} {owner.last_name}</p>
                                  <p><span className="font-medium">DSSN:</span> {owner.dssn}</p>
                                  <p><span className="font-medium">Address:</span> {owner.address}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Integration */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Location</h3>
                    <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-300">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyATNMTYKT2bvDzWMBSKGl-HvYqNz1BzYfs&q=${verificationResult.land_parcel.latitude},${verificationResult.land_parcel.longitude}&zoom=15`}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      Coordinates: {verificationResult.land_parcel.latitude}, {verificationResult.land_parcel.longitude}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Analytics Dashboard */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
            Land Administration Analytics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Land Deeds */}
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">{formatNumber(analytics.landDeeds)}</h3>
                  <p className="text-blue-600">Land Deeds</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-blue-100 rounded-full">
                <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Property Records */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-purple-800">{formatNumber(analytics.propertyRecords)}</h3>
                  <p className="text-purple-600">Property Records</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-purple-100 rounded-full">
                <div className="h-full bg-purple-500 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Land surveys */}
            <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-green-800">{formatNumber(analytics.landSurveys)}</h3>
                  <p className="text-green-600">Land Surveys</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🗺️</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-green-100 rounded-full">
                <div className="h-full bg-green-500 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Land Disputes */}
            <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-orange-800">{formatNumber(analytics.landDisputes)}</h3>
                  <p className="text-orange-600">Land Disputes</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
              <div className="mt-4 h-2 bg-orange-100 rounded-full">
                <div className="h-full bg-orange-500 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>

          {/* Land Use Types Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Land Use Types Distribution</h3>
            <div className="space-y-4">
              {analytics.landUseTypes.map((landUse, index) => (
                <div key={landUse.type} className="flex items-center justify-between">
                  <span className="text-gray-700 w-32 truncate font-medium">{landUse.type}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        style={{ width: `${landUse.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-blue-800 font-semibold w-20 text-right">
                    {formatNumber(landUse.records)}
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
              { icon: "🏠", label: "Land Deeds", color: "from-blue-600 to-blue-700" },
              { icon: "📋", label: "Property Records", color: "from-purple-600 to-purple-700" },
              { icon: "🗺️", label: "Land Survey", color: "from-green-600 to-green-700" },
              { icon: "⚖️", label: "Dispute Resolution", color: "from-orange-600 to-orange-700" },
              { icon: "📝", label: "Land Registration", color: "from-red-600 to-red-700" },
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
                label: "Authority Employees", 
                color: "from-blue-600 to-blue-700",
                description: "Access to land administration data, policy management, and system administration"
              },
              { 
                icon: "🏠", 
                label: "Land Officers", 
                color: "from-blue-600 to-blue-700",
                description: "Process land deeds, property records, and land use approvals"
              },
              { 
                icon: "🗺️", 
                label: "Surveyors", 
                color: "from-green-600 to-green-700",
                description: "Conduct land surveys, boundary demarcation, and mapping services"
              },
              { 
                icon: "⚖️", 
                label: "Dispute Resolution", 
                color: "from-orange-600 to-orange-700",
                description: "Handle land disputes, mediation, and conflict resolution processes"
              },
              { 
                icon: "📝", 
                label: "Registration Officers", 
                color: "from-red-600 to-red-700",
                description: "Process land registration, title deeds, and ownership transfers"
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
            © {new Date().getFullYear()} Liberia Land Authority - Digital Liberia. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Advanced Land Administration System • Powered by Digital Liberia NDMS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LlaDashboard;
