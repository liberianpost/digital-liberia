import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import System from '@components/System';
import Dssn from './Dssn';
import Libpay from './Libpay';
import Digitalliberia from './Digitalliberia';
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
import DistrictOverview from '@components/DistrictOverview';
import DatabaseTools from '@components/DatabaseTools';
import UserManagement from '@components/UserManagement';
import AddParent from '@components/AddParent';
import AnnouncementManagement from '@components/AnnouncementManagement';
import ComplianceReports from '@components/ComplianceReports';
import MinistryEmployeeManagement from '@components/MinistryEmployeeManagement';
import ParentDetails from '@components/ParentDetails';
import ParentManagement from '@components/ParentManagement';
import Reports from '@components/Reports';
import SchoolAdminManagement from '@components/SchoolAdminManagement';
import SchoolReports from '@components/SchoolReports';
import TeacherReports from '@components/TeacherReports';

const AppRoutes = () => {
  console.log('AppRoutes.jsx - Rendering AppRoutes component');
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering Home component')}
            <Home />
          </>
        }
      />
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
        path="/dssn"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering Dssn component')}
            <Dssn />
          </>
        }
      />
      <Route
        path="/libpay"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering Libpay component')}
            <LibPay />
          </>
        }
      />
      <Route
        path="/digital-liberia"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering Digitalliberia component')}
            <Digitalliberia />
          </>
        }
      />
      <Route
        path="/liberian-post"
        element={
          <>
            {console.log('AppRoutes.jsx - Rendering LiberianPost component')}
            <div>LiberianPost component placeholder</div>
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
        path="/moe/student-profile/:studentId"
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
        path="/app-settings"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AppSettings component')}
            <div>AppSettings component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/backup-settings"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering BackupSettings component')}
            <div>BackupSettings component placeholder</div>
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
        path="/moe/add-class"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AddClass component')}
            <div>AddClass component placeholder</div>
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
        path="/moe/teacher-details/:teacherId"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering TeacherDetails component')}
            <div>TeacherDetails component placeholder</div>
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
      >
        <Route
          path="overview"
          element={
            <>
              {console.log('AppRoutes.jsx - Rendering DistrictOverview component')}
              <DistrictOverview />
            </>
          }
        />
        <Route
          path="school-reports"
          element={
            <>
              {console.log('AppRoutes.jsx - Rendering SchoolReports component')}
              <SchoolReports />
            </>
          }
        />
        <Route
          path="student-reports"
          element={
            <>
              {console.log('AppRoutes.jsx - Rendering StudentReports component')}
              <StudentReports />
            </>
          }
        />
        <Route
          path="teacher-reports"
          element={
            <>
              {console.log('AppRoutes.jsx - Rendering TeacherReports component')}
              <TeacherReports />
            </>
          }
        />
        <Route
          path="compliance-reports"
          element={
            <>
              {console.log('AppRoutes.jsx - Rendering ComplianceReports component')}
              <ComplianceReports />
            </>
          }
        />
      </Route>
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
        path="/moe/ministry-employee-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering MinistryEmployeeManagement component')}
            <MinistryEmployeeManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/school-admin-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering SchoolAdminManagement component')}
            <SchoolAdminManagement />
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
      <Route
        path="/moe/add-user"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AddUser component')}
            <div>AddUser component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/user-details/:userId"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering UserDetails component')}
            <div>UserDetails component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/add-parent"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AddParent component')}
            <AddParent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/parent-details/:parentId"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering ParentDetails component')}
            <ParentDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/parent-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering ParentManagement component')}
            <ParentManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/reports"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering Reports component')}
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/announcement-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AnnouncementManagement component')}
            <AnnouncementManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/add-announcement"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AddAnnouncement component')}
            <div>AddAnnouncement component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/announcement-details"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering AnnouncementDetails component')}
            <div>AnnouncementDetails component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/moe/student-management"
        element={
          <ProtectedRoute>
            {console.log('AppRoutes.jsx - Rendering StudentManagement component')}
            <div>StudentManagement component placeholder</div>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
