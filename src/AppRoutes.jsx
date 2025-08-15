import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { SecurityLevels, hasPermission } from './utils/auth';
import { getDefaultRouteForLevel } from './utils/dashboardManager';

// Import components (stubbed missing ones for safety)
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
import Home from './Home';
import System from './System';
import Dssn from './Dssn';
import Digitalliberia from './Digitalliberia';
import Libpay from './Libpay';

// Placeholder for UnauthorizedPage (was missing in original)
const UnauthorizedPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
      <p className="text-gray-600 mb-6">You don't have permission to access this page.</p>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go Back
      </button>
    </div>
  </div>
);

function ProtectedRoute({ children, requiredLevel }) {
  const { user } = useAuth();

  // Fallback if user is undefined or null
  if (!user) {
    return <Navigate to="/system" replace />;
  }

  // Check permission with fallback to prevent crashes
  if (requiredLevel && !hasPermission(requiredLevel, user.securityLevel)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

function DefaultRoute() {
  const { user } = useAuth();

  // Fallback for unauthenticated users
  if (!user) {
    return <Navigate to="/system" replace />;
  }

  // Ensure defaultRoute is valid, fallback to /moe/dashboard
  const defaultRoute = getDefaultRouteForLevel(user.securityLevel) || '/moe/dashboard';
  return <Navigate to={defaultRoute} replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/system" element={<System />} />
      <Route path="/dssn" element={<Dssn />} />
      <Route path="/digital-liberia" element={<Digitalliberia />} />
      <Route path="/libpay" element={<Libpay />} />
      <Route path="/liberian-post" element={<div>Coming Soon</div>} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      
      {/* Default redirect */}
      <Route path="/" element={<DefaultRoute />} />

      {/* MOE Dashboard - Accessible to all authenticated users */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.STUDENT} />}>
        <Route path="/moe/dashboard" element={<MoeDashboard />} />
      </Route>

      {/* Student Profile */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.STUDENT} />}>
        <Route path="/moe/student-profile" element={<StudentProfile />} />
      </Route>

      {/* Student Reports - Requires PARENT */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.PARENT} />}>
        <Route path="/moe/student-reports" element={<StudentReports />} />
      </Route>

      {/* Class Management - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/moe/class-management" element={<ClassManagement />} />
      </Route>

      {/* Student Records - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/moe/student-records" element={<StudentRecords />} />
      </Route>

      {/* Reports - Requires TEACHER */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.TEACHER} />}>
        <Route path="/moe/reports" element={<Reports />} />
      </Route>

      {/* School Management - Requires SCHOOL_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SCHOOL_ADMIN} />}>
        <Route path="/moe/school-management" element={<SchoolManagement />} />
        <Route path="/moe/student-registration" element={<StudentRegistration />} />
        <Route path="/moe/student-management" element={<StudentManagement />} />
        <Route path="/moe/parent-management" element={<ParentManagement />} />
        <Route path="/moe/parent-management/parent-details/:parentId" element={<ParentDetails />} />
        <Route path="/moe/parent-management/add-parent" element={<AddParent />} />
        <Route path="/moe/announcement-management" element={<AnnouncementManagement />} />
        <Route path="/moe/teacher-management" element={<TeacherManagement />} />
      </Route>

      {/* District Reports - Requires MINISTRY_OFFICIAL */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.MINISTRY_OFFICIAL} />}>
        <Route path="/moe/district-reports" element={<DistrictReports />}>
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
        <Route path="/moe/database-tools" element={<DatabaseTools />} />
        <Route path="/moe/ministry-employee-management" element={<MinistryEmployeeManagement />} />
        <Route path="/moe/school-admin-management" element={<SchoolAdminManagement />} />
      </Route>

      {/* User Management - Requires SYSTEM_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SYSTEM_ADMIN} />}>
        <Route path="/moe/user-management" element={<UserManagement />} />
      </Route>

      {/* System Settings - Requires SYSTEM_ADMIN */}
      <Route element={<ProtectedRoute requiredLevel={SecurityLevels.SYSTEM_ADMIN} />}>
        <Route path="/moe/system-settings" element={<SystemSettings />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<DefaultRoute />} />
    </Routes>
  );
}

export default AppRoutes;
