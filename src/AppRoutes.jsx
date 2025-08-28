import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import LoadingFallback from '@components/LoadingFallback';

// Enhanced debugLazy with better error handling and logging
function debugLazy(importFn, name) {
  return React.lazy(async () => {
    console.log(`🌀 Attempting to load module: ${name}`);
    try {
      const module = await importFn();
      
      if (!module?.default) {
        console.error(`🚨 Module "${name}" has no default export`, module);
        return {
          default: () => (
            <div className="p-4 text-red-600">
              <p>Component <strong>{name}</strong> is missing a default export</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
              >
                Reload
              </button>
            </div>
          )
        };
      }
      console.log(`✅ Successfully loaded module: ${name}`);
      return module;
    } catch (error) {
      console.error(`🔥 Failed to load "${name}"`, error);
      return {
        default: () => (
          <div className="p-4 text-red-600">
            <p>Failed to load <strong>{name}</strong></p>
            <pre className="text-xs mt-2 p-2 bg-gray-100 overflow-x-auto">
              {error.message}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Retry
            </button>
          </div>
        )
      };
    }
  });
}

// ====================
// Core Components (Loaded first)
// ====================
const System = debugLazy(() => import('@components/System'), 'System');
const Dssn = debugLazy(() => import('./Dssn'), 'Dssn');
const Libpay = debugLazy(() => import('./Libpay'), 'Libpay');
const Digitalliberia = debugLazy(() => import('./Digitalliberia'), 'Digitalliberia');

// ====================
// MOE Education Components (Lazy loaded)
// ====================
const MoeDashboard = debugLazy(() => import('@components/moe/MoeDashboard'), 'MoeDashboard');
const SchoolManagement = debugLazy(() => import('@components/moe/SchoolManagement'), 'SchoolManagement');
const StudentProfile = debugLazy(() => import('@components/moe/StudentProfile'), 'StudentProfile');
const SystemSettings = debugLazy(() => import('@components/moe/SystemSettings'), 'SystemSettings');
const StudentRecords = debugLazy(() => import('@components/moe/StudentRecords'), 'StudentRecords');
const TeacherManagement = debugLazy(() => import('@components/moe/TeacherManagement'), 'TeacherManagement');
const Reports = debugLazy(() => import('@components/moe/Reports'), 'Reports');
const ClassManagement = debugLazy(() => import('@components/moe/ClassManagement'), 'ClassManagement');
const DistrictReports = debugLazy(() => import('@components/moe/DistrictReports'), 'DistrictReports');
const DatabaseTools = debugLazy(() => import('@components/moe/DatabaseTools'), 'DatabaseTools');
const UserManagement = debugLazy(() => import('@components/moe/UserManagement'), 'UserManagement');

// Simple authentication check component
const SimpleAuthCheck = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOE_LOGGED_IN") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/system" replace />;
  }
  
  return children;
};

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* ==================== */}
      {/* Public Routes */}
      {/* ==================== */}
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<SuspenseWrapper><System /></SuspenseWrapper>} />
      <Route path="/dssn" element={<SuspenseWrapper><Dssn /></SuspenseWrapper>} />
      <Route path="/libpay" element={<SuspenseWrapper><Libpay /></SuspenseWrapper>} />
      <Route path="/digital-liberia" element={<SuspenseWrapper><Digitalliberia /></SuspenseWrapper>} />
      <Route path="/liberian-post" element={<div className="p-4">LiberianPost (Coming Soon)</div>} />

      {/* ==================== */}
      {/* Protected MOE Routes - Simplified Authentication */}
      {/* ==================== */}
      {/* Main Dashboard */}
      <Route path="/moe/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <MoeDashboard />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* School Management */}
      <Route path="/moe/school-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <SchoolManagement />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* Student Management */}
      <Route path="/moe/student-profile/:studentId" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <StudentProfile />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      <Route path="/moe/student-records" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <StudentRecords />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* Teacher Management */}
      <Route path="/moe/teacher-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <TeacherManagement />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* Reports */}
      <Route path="/moe/reports" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <Reports />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* System Settings */}
      <Route path="/moe/system-settings" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <SystemSettings />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* Class Management */}
      <Route path="/moe/class-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <ClassManagement />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* District Reports */}
      <Route path="/moe/district-reports" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <DistrictReports />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* Database Tools */}
      <Route path="/moe/database-tools" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <DatabaseTools />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* User Management */}
      <Route path="/moe/user-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheck>
            <UserManagement />
          </SimpleAuthCheck>
        </SuspenseWrapper>
      } />

      {/* ==================== */}
      {/* Fallback Routes */}
      {/* ==================== */}
      <Route path="/404" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Return Home
            </button>
          </div>
        </div>
      } />
      
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
