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
// Core Website Pages
// ====================
const Ecosystem = debugLazy(() => import('./Ecosystem'), 'Ecosystem');
const BusinessModel = debugLazy(() => import('./BusinessModel'), 'BusinessModel');
const Governance = debugLazy(() => import('./Governance'), 'Governance');

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* ==================== */}
      {/* Main Website Routes */}
      {/* ==================== */}
      <Route path="/" element={<Home />} />
      <Route path="/ecosystem" element={<SuspenseWrapper><Ecosystem /></SuspenseWrapper>} />
      <Route path="/business-model" element={<SuspenseWrapper><BusinessModel /></SuspenseWrapper>} />
      <Route path="/governance" element={<SuspenseWrapper><Governance /></SuspenseWrapper>} />

      {/* ==================== */}
      {/* Fallback Routes */}
      {/* ==================== */}
      <Route path="/404" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
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
