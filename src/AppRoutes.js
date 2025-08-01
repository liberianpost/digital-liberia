// src/AppRoutes.js
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { SecurityLevels, hasPermission } from './utils/auth';

// Import all components
import MoeDashboard from './components/MoeDashboard';
import SystemSettings from './components/SystemSettings';
import SchoolManagement from './components/SchoolManagement';
import StudentRegistration from './components/StudentRegistration';
import StudentManagement from './components/StudentManagement';
import ParentManagement from './components/ParentManagement';
import ParentDetails from './components/ParentDetails';
import AddParent from './components/AddParent';
import AnnouncementManagement from './components/AnnouncementManagement';
import StudentRecords from './components/StudentRecords';
import TeacherManagement from './components/TeacherManagement';
import Reports from './components/Reports';
import StudentProfile from './components/StudentProfile';
import ClassManagement from './components/ClassManagement';
import DistrictReports from './components/DistrictReports';
import DistrictOverview from './components/DistrictOverview';
import SchoolReports from './components/SchoolReports';
import StudentReports from './components/StudentReports';
import TeacherReports from './components/TeacherReports';
import ComplianceReports from './components/ComplianceReports';
import DatabaseTools from './components/DatabaseTools';
import UserManagement from './components/UserManagement';
import MinistryEmployeeManagement from './components/MinistryEmployeeManagement';
import SchoolAdminManagement from './components/SchoolAdminManagement';
import LoginPage from './components/LoginPage';
import UnauthorizedPage from './components/UnauthorizedPage';

function ProtectedRoute({ children, requiredLevel }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!hasPermission(requiredLevel)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/moe-dashboard" replace />} />

      {/* MOE Dashboard - Accessible to all authenticated users */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.STUDENT} />}>
        <Route path="/moe-dashboard" element={<MoeDashboard />} />
      </Route>

      {/* School Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/school-management" element={<SchoolManagement />} />
      </Route>

      {/* Student Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/student-management" element={<StudentManagement />} />
      </Route>

      {/* Parent Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/parent-management" element={<ParentManagement />} />
        <Route path="/parent-details/:parentId" element={<ParentDetails />} />
        <Route path="/add-parent" element={<AddParent />} />
      </Route>

      {/* Announcement Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/announcement-management" element={<AnnouncementManagement />} />
      </Route>

      {/* Student Records - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/student-records" element={<StudentRecords />} />
      </Route>

      {/* Teacher Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/teacher-management" element={<TeacherManagement />} />
      </Route>

      {/* Reports - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/reports" element={<Reports />} />
      </Route>

      {/* System Settings - Requires SYSTEM_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SYSTEM_ADMIN} />}>
        <Route path="/system-settings" element={<SystemSettings />} />
      </Route>

      {/* Student Profile - Accessible to all authenticated users */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.STUDENT} />}>
        <Route path="/student-profile" element={<StudentProfile />} />
      </Route>

      {/* Class Management - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/class-management" element={<ClassManagement />} />
      </Route>

      {/* District Reports - Requires MINISTRY_OFFICIAL */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.MINISTRY_OFFICIAL} />}>
        <Route path="/district-reports" element={<DistrictReports />}>
          <Route index element={<DistrictOverview />} />
          <Route path="overview" element={<DistrictOverview />} />
          <Route path="school-reports" element={<SchoolReports />} />
          <Route path="student-reports" element={<StudentReports />} />
          <Route path="teacher-reports" element={<TeacherReports />} />
          <Route path="compliance-reports" element={<ComplianceReports />} />
        </Route>
      </Route>

      {/* Database Tools - Requires DATABASE_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.DATABASE_ADMIN} />}>
        <Route path="/database-tools" element={<DatabaseTools />} />
      </Route>

      {/* User Management - Requires SYSTEM_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SYSTEM_ADMIN} />}>
        <Route path="/user-management" element={<UserManagement />} />
      </Route>

      {/* Ministry Employee Management - Requires DATABASE_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.DATABASE_ADMIN} />}>
        <Route path="/ministry-employee-management" element={<MinistryEmployeeManagement />} />
      </Route>

      {/* School Admin Management - Requires DATABASE_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.DATABASE_ADMIN} />}>
        <Route path="/school-admin-management" element={<SchoolAdminManagement />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/moe-dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
