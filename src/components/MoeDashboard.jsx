import React, { useEffect, useState, Component } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { getAvailableDashboardItems, getDefaultRouteForLevel } from '@utils/dashboardManager';
import { getRoleName } from '@utils/auth';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      console.error('MoeDashboard ErrorBoundary caught:', this.state.error);
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

const MoeDashboard = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDate] = useState(new Date());

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.log('MoeDashboard: No user, redirecting to /system');
      navigate('/system', { replace: true });
    } else {
      const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
      if (location.pathname === '/moe/dashboard') {
        console.log(`MoeDashboard: Redirecting to ${defaultRoute} for ${user.securityLevel}`);
        navigate(defaultRoute, { replace: true });
      }
    }
  }, [user, loading, navigate, location.pathname]);

  const availableItems = getAvailableDashboardItems(user?.securityLevel);

  const handleCardClick = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-8 w-8 text-gray-600"
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

  if (!user) {
    return null; // Handled by useEffect redirect
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="/logos/moe.png"
                alt="MOE Logo"
                className="w-16 h-16"
                onError={() => console.error('Failed to load MOE logo')}
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Welcome, {user.username || 'User'}
                </h1>
                <p className="text-gray-600">{formatDate(currentDate)}</p>
              </div>
            </div>
            <button
              onClick={() => {
                console.log('Logging out:', user);
                logout();
                navigate('/system', { replace: true });
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableItems.length > 0 ? (
              availableItems.map((item) => (
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
              ))
            ) : (
              <p className="text-gray-600">No tools available for your role.</p>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MoeDashboard;
