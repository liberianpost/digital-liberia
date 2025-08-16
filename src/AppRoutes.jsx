import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from '@components/ProtectedRoute';
import LoadingFallback from '@components/LoadingFallback';

// Enhanced debugLazy with better error handling
function debugLazy(importFn, name) {
  return React.lazy(async () => {
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

// Lazy load only essential components first
const System = debugLazy(() => import('@components/System'), 'System');
const Dssn = debugLazy(() => import('./Dssn'), 'Dssn');
const Libpay = debugLazy(() => import('./Libpay'), 'Libpay');
const Digitalliberia = debugLazy(() => import('./Digitalliberia'), 'Digitalliberia');

// Protected components (load these only when needed)
const MoeDashboard = debugLazy(() => import('@components/MoeDashboard'), 'MoeDashboard');
const StudentProfile = debugLazy(() => import('@components/StudentProfile'), 'StudentProfile');
const SystemSettings = debugLazy(() => import('@components/SystemSettings'), 'SystemSettings');

const ProtectedRouteWithSuspense = ({ children, requiredLevel }) => (
  <ProtectedRoute requiredLevel={requiredLevel}>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </ProtectedRoute>
);

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<SuspenseWrapper><System /></SuspenseWrapper>} />
      <Route path="/dssn" element={<SuspenseWrapper><Dssn /></SuspenseWrapper>} />
      <Route path="/libpay" element={<SuspenseWrapper><Libpay /></SuspenseWrapper>} />
      <Route path="/digital-liberia" element={<SuspenseWrapper><Digitalliberia /></SuspenseWrapper>} />
      <Route path="/liberian-post" element={<div className="p-4">LiberianPost (Coming Soon)</div>} />

      {/* Protected MOE Routes */}
      <Route path="/moe/dashboard" element={
        <ProtectedRouteWithSuspense requiredLevel={SecurityLevels.MINISTRY_EMPLOYEE}>
          <MoeDashboard />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-profile/:studentId" element={
        <ProtectedRouteWithSuspense requiredLevel={SecurityLevels.SCHOOL_ADMIN}>
          <StudentProfile />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/system-settings" element={
        <ProtectedRouteWithSuspense requiredLevel={SecurityLevels.SYSTEM_ADMIN}>
          <SystemSettings />
        </ProtectedRouteWithSuspense>
      } />

      {/* Fallback Routes */}
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
