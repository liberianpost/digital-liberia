import { Routes, Route, Navigate, Component } from 'react-router-dom';
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

function AppRoutes() {
  const { user, isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<System />} />
      <Route path="/system" element={<System />} />
      <Route
        path="/moe/dashboard"
        element={isAuthenticated ? <MoeDashboard /> : <Navigate to="/system" />}
      />
      <Route
        path="/moe/system-settings"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SYSTEM_ADMIN) ? (
            <SystemSettings />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/school-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <SchoolManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/student-registration"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <StudentRegistration />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/student-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
            <StudentManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/parent-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <ParentManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/parent-details"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
            <ParentDetails />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/add-parent"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <AddParent />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/announcement-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <AnnouncementManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/student-records"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
            <StudentRecords />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/teacher-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <TeacherManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
            <Reports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/student-profile"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.STUDENT) ? (
            <StudentProfile />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/class-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.TEACHER) ? (
            <ClassManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/district-reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
            <DistrictReports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/district-overview"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
            <DistrictOverview />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/school-reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <SchoolReports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/student-reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.PARENT) ? (
            <StudentReports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/teacher-reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SCHOOL_ADMIN) ? (
            <TeacherReports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/compliance-reports"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
            <ComplianceReports />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/database-tools"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.DATABASE_ADMIN) ? (
            <DatabaseTools />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/user-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.SYSTEM_ADMIN) ? (
            <UserManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/ministry-employee-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
            <MinistryEmployeeManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route
        path="/moe/school-admin-management"
        element={
          isAuthenticated && hasPermission(user?.securityLevel, SecurityLevels.MINISTRY_OFFICIAL) ? (
            <SchoolAdminManagement />
          ) : (
            <Navigate to="/system" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/system" />} />
    </Routes>
  );
}

export default AppRoutes;
