import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { getAvailableDashboardItems, getDefaultRouteForLevel } from '@/utils/dashboardManager';
import { getRoleName } from '@/utils/auth';

const MoeDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());

  useEffect(() => {
    if (!user) {
      navigate('/system');
    } else {
      // Redirect to default route for user's security level on mount
      const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
      if (window.location.pathname === '/moe/dashboard') {
        navigate(defaultRoute);
      }
    }
  }, [user, navigate]);

  const availableItems = getAvailableDashboardItems();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/logos/moe.png" 
              alt="MOE Logo" 
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome, {user?.username}
              </h1>
              <p className="text-gray-600">{formatDate(currentDate)}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.path)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl p-3 bg-blue-100 text-blue-600 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full">
                    {getRoleName(item.requiredLevel)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoeDashboard;
