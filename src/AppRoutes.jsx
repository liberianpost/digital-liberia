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
const Curriculum = debugLazy(() => import('@components/moe/Curriculum'), 'Curriculum');

// ====================
// Other Ministry Dashboards (Lazy loaded)
// ====================
const MohDashboard = debugLazy(() => import('@components/moh/MohDashboard'), 'MohDashboard');
const MofDashboard = debugLazy(() => import('@components/mof/MofDashboard'), 'MofDashboard');
const MojDashboard = debugLazy(() => import('@components/moj/MojDashboard'), 'MojDashboard');
const MotDashboard = debugLazy(() => import('@components/mot/MotDashboard'), 'MotDashboard');
const MofaDashboard = debugLazy(() => import('@components/mofa/MofaDashboard'), 'MofaDashboard');
const MoaDashboard = debugLazy(() => import('@components/moa/MoaDashboard'), 'MoaDashboard');
const MoiaDashboard = debugLazy(() => import('@components/moia/MoiaDashboard'), 'MoiaDashboard');
const MolDashboard = debugLazy(() => import('@components/mol/MolDashboard'), 'MolDashboard');
const MocDashboard = debugLazy(() => import('@components/moc/MocDashboard'), 'MocDashboard');
const MollDashboard = debugLazy(() => import('@components/moll/MollDashboard'), 'MollDashboard');
const MoyDashboard = debugLazy(() => import('@components/moy/MoyDashboard'), 'MoyDashboard');

// Simple authentication check components for each ministry
const SimpleAuthCheckMoe = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOE_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoh = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOH_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMof = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOF_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoj = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOJ_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMot = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOT_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMofa = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOFA_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoa = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOA_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoia = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOIA_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMol = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOL_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoc = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOC_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoll = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOLL_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
  return children;
};

const SimpleAuthCheckMoy = ({ children }) => {
  const isLoggedIn = localStorage.getItem("MOY_LOGGED_IN") === "true";
  if (!isLoggedIn) return <Navigate to="/system" replace />;
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
          <SimpleAuthCheckMoe>
            <MoeDashboard />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* School Management */}
      <Route path="/moe/school-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <SchoolManagement />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Student Management */}
      <Route path="/moe/student-profile/:studentId" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <StudentProfile />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      <Route path="/moe/student-records" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <StudentRecords />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Teacher Management */}
      <Route path="/moe/teacher-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <TeacherManagement />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Reports */}
      <Route path="/moe/reports" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <Reports />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* System Settings */}
      <Route path="/moe/system-settings" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <SystemSettings />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Class Management */}
      <Route path="/moe/class-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <ClassManagement />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* District Reports */}
      <Route path="/moe/district-reports" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <DistrictReports />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Database Tools */}
      <Route path="/moe/database-tools" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <DatabaseTools />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* User Management */}
      <Route path="/moe/user-management" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <UserManagement />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* Curriculum */}
      <Route path="/moe/curriculum" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoe>
            <Curriculum />
          </SimpleAuthCheckMoe>
        </SuspenseWrapper>
      } />

      {/* ==================== */}
      {/* Other Ministry Dashboards */}
      {/* ==================== */}
      
      {/* Ministry of Health */}
      <Route path="/moh/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoh>
            <MohDashboard />
          </SimpleAuthCheckMoh>
        </SuspenseWrapper>
      } />

      {/* Ministry of Finance */}
      <Route path="/mof/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMof>
            <MofDashboard />
          </SimpleAuthCheckMof>
        </SuspenseWrapper>
      } />

      {/* Ministry of Justice */}
      <Route path="/moj/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoj>
            <MojDashboard />
          </SimpleAuthCheckMoj>
        </SuspenseWrapper>
      } />

      {/* Ministry of Transport */}
      <Route path="/mot/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMot>
            <MotDashboard />
          </SimpleAuthCheckMot>
        </SuspenseWrapper>
      } />

      {/* Ministry of Foreign Affairs */}
      <Route path="/mofa/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMofa>
            <MofaDashboard />
          </SimpleAuthCheckMofa>
        </SuspenseWrapper>
      } />

      {/* Ministry of Agriculture */}
      <Route path="/moa/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoa>
            <MoaDashboard />
          </SimpleAuthCheckMoa>
        </SuspenseWrapper>
      } />

      {/* Ministry of Internal Affairs */}
      <Route path="/moia/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoia>
            <MoiaDashboard />
          </SimpleAuthCheckMoia>
        </SuspenseWrapper>
      } />

      {/* Ministry of Lands & Mines */}
      <Route path="/mol/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMol>
            <MolDashboard />
          </SimpleAuthCheckMol>
        </SuspenseWrapper>
      } />

      {/* Ministry of Commerce */}
      <Route path="/moc/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoc>
            <MocDashboard />
          </SimpleAuthCheckMoc>
        </SuspenseWrapper>
      } />

      {/* Ministry of Labour */}
      <Route path="/moll/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoll>
            <MollDashboard />
          </SimpleAuthCheckMoll>
        </SuspenseWrapper>
      } />

      {/* Ministry of Youth & Sports */}
      <Route path="/moy/dashboard" element={
        <SuspenseWrapper>
          <SimpleAuthCheckMoy>
            <MoyDashboard />
          </SimpleAuthCheckMoy>
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
