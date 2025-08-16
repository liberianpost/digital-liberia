import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from '@components/ProtectedRoute';
import LoadingFallback from '@components/LoadingFallback';

// 🔍 Debug wrapper for lazy imports (prevents blank screen and logs the real cause)
function debugLazy(importFn, name) {
  return React.lazy(() =>
    importFn()
      .then((mod) => {
        if (!mod || !('default' in mod)) {
          console.error(`⚠️ Module "${name}" loaded but has NO default export.`, mod);
          return {
            default: () => (
              <div style={{ padding: 16 }}>
                Module "<strong>{name}</strong>" is missing a <code>default export</code>.
              </div>
            ),
          };
        }
        return mod;
      })
      .catch((err) => {
        console.error(`❌ Failed to load "${name}"`, err);
        return {
          default: () => (
            <div style={{ padding: 16 }}>
              Error loading "<strong>{name}</strong>". Check console for details.
            </div>
          ),
        };
      })
  );
}

// Lazy load all components (wrapped with debugLazy)
const System = debugLazy(() => import('@components/System'), 'System (@components/System)');
const Dssn = debugLazy(() => import('./Dssn'), 'Dssn (./Dssn)');
const Libpay = debugLazy(() => import('./Libpay'), 'Libpay (./Libpay)');
const Digitalliberia = debugLazy(() => import('./Digitalliberia'), 'Digitalliberia (./Digitalliberia)');
const MoeDashboard = debugLazy(() => import('@components/MoeDashboard'), 'MoeDashboard (@components/MoeDashboard)');
const StudentProfile = debugLazy(() => import('@components/StudentProfile'), 'StudentProfile (@components/StudentProfile)');
const SystemSettings = debugLazy(() => import('@components/SystemSettings'), 'SystemSettings (@components/SystemSettings)');
const StudentRegistration = debugLazy(() => import('@components/StudentRegistration'), 'StudentRegistration (@components/StudentRegistration)');
const StudentReports = debugLazy(() => import('@components/StudentReports'), 'StudentReports (@components/StudentReports)');
const ClassManagement = debugLazy(() => import('@components/ClassManagement'), 'ClassManagement (@components/ClassManagement)');
const StudentRecords = debugLazy(() => import('@components/StudentRecords'), 'StudentRecords (@components/StudentRecords)');
const SchoolManagement = debugLazy(() => import('@components/SchoolManagement'), 'SchoolManagement (@components/SchoolManagement)');
const TeacherManagement = debugLazy(() => import('@components/TeacherManagement'), 'TeacherManagement (@components/TeacherManagement)');
const DistrictReports = debugLazy(() => import('@components/DistrictReports'), 'DistrictReports (@components/DistrictReports)');
const DistrictOverview = debugLazy(() => import('@components/DistrictOverview'), 'DistrictOverview (@components/DistrictOverview)');
const DatabaseTools = debugLazy(() => import('@components/DatabaseTools'), 'DatabaseTools (@components/DatabaseTools)');
const UserManagement = debugLazy(() => import('@components/UserManagement'), 'UserManagement (@components/UserManagement)');
const AddParent = debugLazy(() => import('@components/AddParent'), 'AddParent (@components/AddParent)');
const AnnouncementManagement = debugLazy(() => import('@components/AnnouncementManagement'), 'AnnouncementManagement (@components/AnnouncementManagement)');
const ComplianceReports = debugLazy(() => import('@components/ComplianceReports'), 'ComplianceReports (@components/ComplianceReports)');
const MinistryEmployeeManagement = debugLazy(() => import('@components/MinistryEmployeeManagement'), 'MinistryEmployeeManagement (@components/MinistryEmployeeManagement)');
const ParentDetails = debugLazy(() => import('@components/ParentDetails'), 'ParentDetails (@components/ParentDetails)');
const ParentManagement = debugLazy(() => import('@components/ParentManagement'), 'ParentManagement (@components/ParentManagement)');
const Reports = debugLazy(() => import('@components/Reports'), 'Reports (@components/Reports)');
const SchoolAdminManagement = debugLazy(() => import('@components/SchoolAdminManagement'), 'SchoolAdminManagement (@components/SchoolAdminManagement)');
const SchoolReports = debugLazy(() => import('@components/SchoolReports'), 'SchoolReports (@components/SchoolReports)');
const TeacherReports = debugLazy(() => import('@components/TeacherReports'), 'TeacherReports (@components/TeacherReports)');

const ProtectedRouteWithSuspense = ({ children }) => (
  <ProtectedRoute>
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
      <Route path="/" element={<Home />} />
      
      {/* Public Lazy Routes */}
      <Route path="/system" element={<SuspenseWrapper><System /></SuspenseWrapper>} />
      <Route path="/dssn" element={<SuspenseWrapper><Dssn /></SuspenseWrapper>} />
      <Route path="/libpay" element={<SuspenseWrapper><Libpay /></SuspenseWrapper>} />
      <Route path="/digital-liberia" element={<SuspenseWrapper><Digitalliberia /></SuspenseWrapper>} />
      <Route path="/liberian-post" element={<div>LiberianPost component placeholder</div>} />

      {/* Protected Routes */}
      <Route path="/moe/dashboard" element={
        <ProtectedRouteWithSuspense>
          <MoeDashboard />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-profile/:studentId" element={
        <ProtectedRouteWithSuspense>
          <StudentProfile />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/system-settings" element={
        <ProtectedRouteWithSuspense>
          <SystemSettings />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/app-settings" element={
        <ProtectedRouteWithSuspense>
          <div>AppSettings component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/backup-settings" element={
        <ProtectedRouteWithSuspense>
          <div>BackupSettings component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-registration" element={
        <ProtectedRouteWithSuspense>
          <StudentRegistration />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-reports" element={
        <ProtectedRouteWithSuspense>
          <StudentReports />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/class-management" element={
        <ProtectedRouteWithSuspense>
          <ClassManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/add-class" element={
        <ProtectedRouteWithSuspense>
          <div>AddClass component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-records" element={
        <ProtectedRouteWithSuspense>
          <StudentRecords />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/school-management" element={
        <ProtectedRouteWithSuspense>
          <SchoolManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/teacher-management" element={
        <ProtectedRouteWithSuspense>
          <TeacherManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/teacher-details/:teacherId" element={
        <ProtectedRouteWithSuspense>
          <div>TeacherDetails component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/district-reports" element={
        <ProtectedRouteWithSuspense>
          <DistrictReports />
        </ProtectedRouteWithSuspense>
      }>
        <Route path="overview" element={<SuspenseWrapper><DistrictOverview /></SuspenseWrapper>} />
        <Route path="school-reports" element={<SuspenseWrapper><SchoolReports /></SuspenseWrapper>} />
        <Route path="student-reports" element={<SuspenseWrapper><StudentReports /></SuspenseWrapper>} />
        <Route path="teacher-reports" element={<SuspenseWrapper><TeacherReports /></SuspenseWrapper>} />
        <Route path="compliance-reports" element={<SuspenseWrapper><ComplianceReports /></SuspenseWrapper>} />
      </Route>

      <Route path="/moe/database-tools" element={
        <ProtectedRouteWithSuspense>
          <DatabaseTools />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/ministry-employee-management" element={
        <ProtectedRouteWithSuspense>
          <MinistryEmployeeManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/school-admin-management" element={
        <ProtectedRouteWithSuspense>
          <SchoolAdminManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/user-management" element={
        <ProtectedRouteWithSuspense>
          <UserManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/add-user" element={
        <ProtectedRouteWithSuspense>
          <div>AddUser component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/user-details/:userId" element={
        <ProtectedRouteWithSuspense>
          <div>UserDetails component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/add-parent" element={
        <ProtectedRouteWithSuspense>
          <AddParent />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/parent-details/:parentId" element={
        <ProtectedRouteWithSuspense>
          <ParentDetails />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/parent-management" element={
        <ProtectedRouteWithSuspense>
          <ParentManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/reports" element={
        <ProtectedRouteWithSuspense>
          <Reports />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/announcement-management" element={
        <ProtectedRouteWithSuspense>
          <AnnouncementManagement />
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/add-announcement" element={
        <ProtectedRouteWithSuspense>
          <div>AddAnnouncement component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/announcement-details" element={
        <ProtectedRouteWithSuspense>
          <div>AnnouncementDetails component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      <Route path="/moe/student-management" element={
        <ProtectedRouteWithSuspense>
          <div>StudentManagement component placeholder</div>
        </ProtectedRouteWithSuspense>
      } />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
