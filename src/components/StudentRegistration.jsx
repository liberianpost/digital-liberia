import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const StudentRegistration = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    parentName: '',
    parentContact: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate('/moe/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';
    if (!formData.parentName) newErrors.parentName = 'Parent Name is required';
    if (!formData.parentContact || !/^\+\d{10,}$/.test(formData.parentContact)) {
      newErrors.parentContact = 'Valid phone number is required (e.g., +1234567890)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await api.post('/students/register', formData);
      alert('Student registered successfully.');
      navigate(-1);
    } catch (error) {
      console.error('Error registering student:', error);
      alert('Failed to register student.');
    }
  };

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
            <h1 className="text-xl font-bold">Student Registration</h1>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Grade</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Grade</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                ))}
              </select>
              {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
            </div>
            <div className="sm:col-span-2">
              <h2 className="text-lg font-bold text-gray-800 mt-4">Parent/Guardian Information</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Parent Contact</label>
              <input
                type="tel"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.parentContact && <p className="text-red-500 text-xs mt-1">{errors.parentContact}</p>}
            </div>
            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                Register Student
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
