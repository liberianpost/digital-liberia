import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SecurityLevels, hasPermission } from '../utils/auth';

// Dashboard items configuration
const dashboardItems = [
  {
    id: 1,
    title: "My Profile",
    icon: "👤",
    path: "/student-profile",
    requiredLevel: SecurityLevels.STUDENT
  },
  {
    id: 2,
    title: "Student Reports",
    icon: "📊",
    path: "/student-reports",
    requiredLevel: SecurityLevels.PARENT
  },
  {
    id: 3,
    title: "Class Management",
    icon: "🏫",
    path: "/class-management",
    requiredLevel: SecurityLevels.TEACHER
  },
  {
    id: 4,
    title: "Student Records",
    icon: "📝",
    path: "/student-records",
    requiredLevel: SecurityLevels.TEACHER
  },
  {
    id: 5,
    title: "School Management",
    icon: "🏢",
    path: "/school-management",
    requiredLevel: SecurityLevels.SCHOOL_ADMIN
  },
  {
    id: 6,
    title: "Teacher Management",
    icon: "👩‍🏫",
    path: "/teacher-management",
    requiredLevel: SecurityLevels.SCHOOL_ADMIN
  },
  {
    id: 7,
    title: "District Reports",
    icon: "📑",
    path: "/district-reports",
    requiredLevel: SecurityLevels.MINISTRY_OFFICIAL
  },
  {
    id: 8,
    title: "Database Tools",
    icon: "🗃️",
    path: "/database-tools",
    requiredLevel: SecurityLevels.DATABASE_ADMIN
  },
  {
    id: 9,
    title: "System Settings",
    icon: "⚙️",
    path: "/system-settings",
    requiredLevel: SecurityLevels.SYSTEM_ADMIN
  },
  {
    id: 10,
    title: "User Management",
    icon: "👥",
    path: "/user-management",
    requiredLevel: SecurityLevels.SYSTEM_ADMIN
  }
];

const MoeDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Filter dashboard items based on user's security level
  const availableItems = dashboardItems
    .filter(item => hasPermission(item.requiredLevel))
    .sort((a, b) => a.requiredLevel - b.requiredLevel);

  const handleCardClick = (item) => {
    if (hasPermission(item.requiredLevel)) {
      navigate(item.path);
    } else {
      alert(`Access denied. Requires ${SecurityLevels[item.requiredLevel]} privileges.`);
    }
  };

  const getBadgeText = (requiredLevel) => {
    switch(requiredLevel) {
      case SecurityLevels.SCHOOL_ADMIN: return "ADMIN";
      case SecurityLevels.MINISTRY_OFFICIAL: return "MINISTRY";
      case SecurityLevels.DATABASE_ADMIN: return "DB ADMIN";
      case SecurityLevels.SYSTEM_ADMIN: return "SYS ADMIN";
      default: return "";
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDisplayName = () => {
    if (user?.firstName || user?.lastName) {
      return `${user.firstName || ''} ${user.lastName || ''}`.trim();
    }
    return user?.username || "User";
  };

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img 
            src="/logos/moe.png" 
            alt="MOE Logo" 
            className="w-12 h-12 object-contain"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900">
              Welcome, {getDisplayName()}
            </h1>
            <p className="text-gray-600 text-sm">
              {formatDate(currentDate)}
            </p>
          </div>
        </div>
        <button 
          onClick={logout}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
          aria-label="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>

      {/* Dashboard Grid */}
      {availableItems.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No dashboard items available for your security level
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start">
                <div className="text-2xl p-2 bg-blue-50 text-blue-600 rounded-lg mr-3">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    {item.requiredLevel >= SecurityLevels.SCHOOL_ADMIN && (
                      <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded-full">
                        {getBadgeText(item.requiredLevel)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoeDashboard;
