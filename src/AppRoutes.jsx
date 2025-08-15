import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels, hasPermission } from '@utils/auth';
import System from './System';
import MoeDashboard from '@components/MoeDashboard';
import SystemSettings from '@components/SystemSettings';
import SchoolManagement from '@components/SchoolManagement';
import StudentRegistration from '@components/StudentRegistration';
import StudentManagement from '@components/StudentManagement';
import ParentManagement from '@components/ParentManagement';
import ParentDetails from '@components/ParentDetails';
import AddParent from '@components/AddParent';
import AnnouncementManagement from '@components/AnnouncementManagement';
import StudentRecords from '@components/StudentRecords';
import TeacherManagement from '@components/TeacherManagement';
import Reports from '@components/Reports';
import StudentProfile from '@components/StudentProfile';
import ClassManagement from '@components/ClassManagement';
import DistrictReports from '@components/DistrictReports';
import DistrictOverview from '@components/DistrictOverview';
import SchoolReports from '@components/SchoolReports';
import StudentReports from '@components/StudentReports';
import TeacherReports from '@components/TeacherReports';
import ComplianceReports from '@components/ComplianceReports';
import DatabaseTools from '@components/DatabaseTools';
import UserManagement from '@components/UserManagement';
import MinistryEmployeeManagement from '@components/MinistryEmployeeManagement';
import SchoolAdminManagement from '@components/SchoolAdminManagement';
import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={4}>
          <Typography color="error" variant="h6">
            Route Error: {this.state.error?.message || 'Failed to render component'}
          </Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

function AppRoutes() {
  const { user, isAuthenticated, loading } = useAuth() || { user: null, isAuthenticated: false, loading: false };
  console.log('AppRoutes - user:', user, 'isAuthenticated:', isAuthenticated, 'loading:', loading);

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography>Loading routes...</Typography>
      </Box>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <System />
          </ErrorBoundary>
        }
      />
      <Route
        path="/system"
        element={
          <ErrorBoundary>
            <System />
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/dashboard"
        element={
          <ErrorBoundary>
            {isAuthenticated ? <MoeDashboard /> : <Navigate to="/system" />}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/system-settings"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SYSTEM_ADMIN) ? (
              <SystemSettings />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/school-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <SchoolManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/student-registration"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <StudentRegistration />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/student-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
              <StudentManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/parent-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <ParentManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/parent-details"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
              <ParentDetails />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/add-parent"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <AddParent />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/announcement-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <AnnouncementManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/student-records"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
              <StudentRecords />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/teacher-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <TeacherManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
              <Reports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/student-profile"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.STUDENT) ? (
              <StudentProfile />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/class-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
              <ClassManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/district-reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
              <DistrictReports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/district-overview"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
              <DistrictOverview />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/school-reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <SchoolReports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/student-reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.PARENT) ? (
              <StudentReports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/teacher-reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
              <TeacherReports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/compliance-reports"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
              <ComplianceReports />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/database-tools"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.DATABASE_ADMIN) ? (
              <DatabaseTools />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/user-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SYSTEM_ADMIN) ? (
              <UserManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/ministry-employee-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
              <MinistryEmployeeManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="/moe/school-admin-management"
        element={
          <ErrorBoundary>
            {isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
              <SchoolAdminManagement />
            ) : (
              <Navigate to="/system" />
            )}
          </ErrorBoundary>
        }
      />
      <Route
        path="*"
        element={
          <ErrorBoundary>
            <Navigate to="/system" />
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
