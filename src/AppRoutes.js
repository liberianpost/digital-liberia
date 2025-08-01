// src/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { SecurityLevels } from './utils/auth';

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected routes */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.STUDENT} />}>
        <Route path="/moe-dashboard" element={<MoeDashboard />} />
      </Route>

      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/class-management" element={<ClassManagement />} />
      </Route>

      {/* Admin-only routes */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SYSTEM_ADMIN} />}>
        <Route path="/system-settings" element={<SystemSettings />} />
      </Route>
    </Routes>
  );
}
