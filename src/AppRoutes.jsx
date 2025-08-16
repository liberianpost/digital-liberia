import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import ProtectedRoute from '@components/ProtectedRoute';
import LoadingFallback from '@components/LoadingFallback';

// Lazy load all components
const System = React.lazy(() => import('@components/System'));
const Dssn = React.lazy(() => import('./Dssn'));
const Libpay = React.lazy(() => import('./Libpay'));
const Digitalliberia = React.lazy(() => import('./Digitalliberia'));
const MoeDashboard = React.lazy(() => import('@components/MoeDashboard'));
const StudentProfile = React.lazy(() => import('@components/StudentProfile'));
const SystemSettings = React.lazy(() => import('@components/SystemSettings'));
const StudentRegistration = React.lazy(() => import('@components/StudentRegistration'));
const StudentReports = React.lazy(() => import('@components/StudentReports'));
const ClassManagement = React.lazy(() => import('@components/ClassManagement'));
const StudentRecords = React.lazy(() => import('@components/StudentRecords'));
const SchoolManagement = React.lazy(() => import('@components/SchoolManagement'));
const TeacherManagement = React.lazy(() => import('@components/TeacherManagement'));
const DistrictReports = React.lazy(() => import('@components/DistrictReports'));
const DistrictOverview = React.lazy(() => import('@components/DistrictOverview'));
const DatabaseTools = React.lazy(() => import('@components/DatabaseTools'));
const UserManagement = React.lazy(() => import('@components/UserManagement'));
const AddParent = React.lazy(() => import('@components/AddParent'));
const AnnouncementManagement = React.lazy(() => import('@components/AnnouncementManagement'));
const ComplianceReports = React.lazy(() => import('@components/ComplianceReports'));
const MinistryEmployeeManagement = React.lazy(() => import('@components/MinistryEmployeeManagement'));
const ParentDetails = React.lazy(() => import('@components/ParentDetails'));
const ParentManagement = React.lazy(() => import('@components/ParentManagement'));
const Reports = React.lazy(() => import('@components/Reports'));
const SchoolAdminManagement = React.lazy(() => import('@components/SchoolAdminManagement'));
const SchoolReports = React.lazy(() => import('@components/SchoolReports'));
const TeacherReports = React.lazy(() => import('@components/TeacherReports'));

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
