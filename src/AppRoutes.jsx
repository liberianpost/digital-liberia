import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import System from '@components/System';
import MoeDashboard from '@components/MoeDashboard';
import ProtectedRoute from '@components/ProtectedRoute';
import StudentProfile from '@components/StudentProfile';
import SystemSettings from '@components/SystemSettings';
import StudentRegistration from '@components/StudentRegistration';
import StudentReports from '@components/StudentReports';
import ClassManagement from '@components/ClassManagement';
import StudentRecords from '@components/StudentRecords';
import SchoolManagement from '@components/SchoolManagement';
import TeacherManagement from '@components/TeacherManagement';
import DistrictReports from '@components/DistrictReports';
import DatabaseTools from '@components/DatabaseTools';
import UserManagement from '@components/UserManagement';

const AppRoutes = () => {
  console.log('AppRoutes.jsx - Rendering AppRoutes component');
  return (
    <Routes>
      <Route
        path="/system"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering System component')}
            <System />
          </>
        }
      />
      <Route
        path="/moe/dashboard"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering MoeDashboard component')}
            <MoeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/student-profile"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering StudentProfile component')}
            <StudentProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/system-settings"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering SystemSettings component')}
            <SystemSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/student-registration"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering StudentRegistration component')}
            <StudentRegistration />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/student-reports"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering StudentReports component')}
            <StudentReports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/class-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering ClassManagement component')}
            <ClassManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/student-records"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering StudentRecords component')}
            <StudentRecords />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/school-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering SchoolManagement component')}
            <SchoolManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/teacher-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering TeacherManagement component')}
            <TeacherManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/district-reports"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering DistrictReports component')}
            <DistrictReports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/database-tools"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering DatabaseTools component')}
            <DatabaseTools />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/user-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering UserManagement component')}
            <UserManagement />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/system" replace />} />
    </Routes>
  );
};

export default AppRoutes;
