import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const AnnouncementManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate(-1);
    } else {
      // Fetch announcements
      api.get('/announcements')
        .then(response => setAnnouncements(response.data))
        .catch(error => {
          console.error('Error fetching announcements:', error);
          alert('Failed to load announcements.');
        });
    }
  }, [user, navigate]);

  const handleAddAnnouncement = () => {
    navigate('/moe/add-announcement');
  };

  const handleAnnouncementClick = (announcement) => {
    navigate('/moe/announcement-details', { state: { announcement } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="bg-white text-black p-4 shadow-md border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 text-black"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <h1 className="text-xl font-bold">Announcement Management</h1>
          </div>
        </div>
      </div>

      {/* Announcement List */}
      <div className="p-4 max-w-3xl mx-auto">
        {announcements.length === 0 ? (
          <p className="text-gray-500 text-center">No announcements available.</p>
        ) : (
          <ul className="space-y-2">
            {announcements.map((announcement, index) => (
              <li
                key={index}
                onClick={() => handleAnnouncementClick(announcement)}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.379c.484 0 .951.214 1.29.585"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold">{announcement.title}</h3>
                    <p className="text-sm text-gray-600">{announcement.date}</p>
                    <p className="text-gray-700">{announcement.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Announcement Button */}
      <button
        onClick={handleAddAnnouncement}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementManagement;
