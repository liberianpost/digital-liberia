import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const ParentDetails = () => {
  const navigate = useNavigate();
  const { parentId } = useParams();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [parent, setParent] = useState(null);
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate(-1);
    } else {
      setLoading(true);
      Promise.all([
        api.get(`/parents/${parentId}`),
        api.get(`/parents/${parentId}/children`)
      ])
        .then(([parentResponse, childrenResponse]) => {
          setParent(parentResponse.data);
          setChildren(childrenResponse.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching parent data:', error);
          alert('Failed to load parent details.');
          setLoading(false);
          navigate(-1);
        });
    }
  }, [user, parentId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-4/5 bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '50%' }}></div>
        </div>
      </div>
    );
  }

  if (!parent) {
    return null; // Handled by useEffect redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-xl font-bold">Parent Details</h1>
          </div>
          <span
            className={`px-2 py-1 text-xs rounded ${
              parent.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
            }`}
          >
            {parent.status}
          </span>
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold">{parent.name}</h2>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-gray-600">{parent.childrenInfo}</p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-blue-600 mb-2">Contact Information</h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-800">Phone</p>
                <p className="text-sm text-gray-600">{parent.phone}</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-800">Email</p>
                <p className="text-sm text-gray-600">{parent.email}</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-800">Address</p>
                <p className="text-sm text-gray-600">{parent.address}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-blue-600 mb-2">Children Details</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="space-y-4">
            {children.length === 0 ? (
              <p className="text-gray-500 text-center">No children data available.</p>
            ) : (
              children.map((child, index) => (
                <div key={index}>
                  <div className="flex items-center">
                    <p className="text-sm font-bold text-gray-800">{child.name}</p>
                    <p className="text-sm text-gray-600 ml-2">{child.grade} - {child.studentId}</p>
                  </div>
                  {index < children.length - 1 && <hr />}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDetails;
