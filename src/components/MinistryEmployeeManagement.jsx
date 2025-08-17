import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const MinistryEmployeeManagement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DATABASE_ADMIN;
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires DATABASE ADMIN privileges.');
      navigate(-1);
    } else {
      api.get('/employees')
        .then(response => setEmployees(response.data))
        .catch(error => {
          console.error('Error fetching employees:', error);
          alert('Failed to load employees.');
        });
    }
  }, [user, navigate]);

  const handleAddEmployee = async () => {
    try {
      await api.post('/employees/add');
      alert('Add New Employee feature initiated.');
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to initiate add employee.');
    }
  };

  const handleEmployeeAction = async (employee, action) => {
    try {
      await api.post(`/employees/${employee.id}/${action.toLowerCase()}`);
      alert(`${action} employee ${employee.name} initiated.`);
    } catch (error) {
      console.error(`Error performing ${action} on employee:`, error);
      alert(`Failed to ${action.toLowerCase()} employee ${employee.name}.`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-xl font-bold">Ministry Employees</h1>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-bold text-black">Ministry Employee Management</h2>
          <p className="mt-1 text-sm text-gray-600">Manage all ministry employees</p>
          <button
            onClick={handleAddEmployee}
            className="mt-4 w-full py-3 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Employee
          </button>
        </div>

        <div className="space-y-2">
          {employees.length === 0 ? (
            <p className="text-gray-500 text-center">No employees available.</p>
          ) : (
            employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                employee={employee}
                onAction={handleEmployeeAction}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const EmployeeCard = ({ employee, onAction }) => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500 text-white';
      case 'suspended':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logos/person.png"
            alt="Employee icon"
            className="w-10 h-10 object-contain"
            onError={(e) => {
              console.error('Failed to load employee icon');
              e.target.src = 'https://via.placeholder.com/40?text=Person';
            }}
          />
          <div className="ml-4">
            <h3 className="text-base font-bold text-black">{employee.name}</h3>
            <p className="text-sm text-gray-600">{employee.position}</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded ${getStatusStyles(employee.status)}`}
        >
          {employee.status}
        </span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onAction(employee, 'Edit')}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
        <button
          onClick={() => onAction(employee, 'Suspend')}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Suspend
        </button>
      </div>
    </div>
  );
};

export default MinistryEmployeeManagement;
