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

const ProtectedRouteWithLogging = ({ children }) => {
  console.log('ProtectedRoute - Checking authentication');
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

const AppRoutes = () => {
  console.log('AppRoutes.jsx - Rendering AppRoutes component');
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering Home component')}
            <Home />
          </div>
        }
      />
      <Route
        path="/system"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering System component')}
            <System />
          </div>
        }
      />
      <Route
        path="/dssn"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering Dssn component')}
            <Dssn />
          </div>
        }
      />
      <Route
        path="/libpay"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering Libpay component')}
            <Libpay />
          </div>
        }
      />
      <Route
        path="/digital-liberia"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering Digitalliberia component')}
            <Digitalliberia />
          </div>
        }
      />
      <Route
        path="/liberian-post"
        element={
          <div>
            {console.log('AppRoutes.jsx - Rendering LiberianPost component')}
            <div>LiberianPost component placeholder</div>
          </div>
        }
      />
      <Route
        path="/moe/dashboard"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering MoeDashboard component')}
              <MoeDashboard />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/student-profile/:studentId"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentProfile component')}
              <StudentProfile />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/system-settings"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering SystemSettings component')}
              <SystemSettings />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/app-settings"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AppSettings component')}
              <div>AppSettings component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/backup-settings"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering BackupSettings component')}
              <div>BackupSettings component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/student-registration"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentRegistration component')}
              <StudentRegistration />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/student-reports"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentReports component')}
              <StudentReports />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/class-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering ClassManagement component')}
              <ClassManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/add-class"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AddClass component')}
              <div>AddClass component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/student-records"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentRecords component')}
              <StudentRecords />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/school-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering SchoolManagement component')}
              <SchoolManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/teacher-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering TeacherManagement component')}
              <TeacherManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/teacher-details/:teacherId"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering TeacherDetails component')}
              <div>TeacherDetails component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/district-reports"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering DistrictReports component')}
              <DistrictReports />
            </div>
          </ProtectedRouteWithLogging>
        }
      >
        <Route
          path="overview"
          element={
            <div>
              {console.log('AppRoutes.jsx - Rendering DistrictOverview component')}
              <DistrictOverview />
            </div>
          }
        />
        <Route
          path="school-reports"
          element={
            <div>
              {console.log('AppRoutes.jsx - Rendering SchoolReports component')}
              <SchoolReports />
            </div>
          }
        />
        <Route
          path="student-reports"
          element={
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentReports component')}
              <StudentReports />
            </div>
          }
        />
        <Route
          path="teacher-reports"
          element={
            <div>
              {console.log('AppRoutes.jsx - Rendering TeacherReports component')}
              <TeacherReports />
            </div>
          }
        />
        <Route
          path="compliance-reports"
          element={
            <div>
              {console.log('AppRoutes.jsx - Rendering ComplianceReports component')}
              <ComplianceReports />
            </div>
          }
        />
      </Route>
      <Route
        path="/moe/database-tools"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering DatabaseTools component')}
              <DatabaseTools />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/ministry-employee-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering MinistryEmployeeManagement component')}
              <MinistryEmployeeManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/school-admin-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering SchoolAdminManagement component')}
              <SchoolAdminManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/user-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering UserManagement component')}
              <UserManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/add-user"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AddUser component')}
              <div>AddUser component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/user-details/:userId"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering UserDetails component')}
              <div>UserDetails component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/add-parent"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AddParent component')}
              <AddParent />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/parent-details/:parentId"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering ParentDetails component')}
              <ParentDetails />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/parent-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering ParentManagement component')}
              <ParentManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/reports"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering Reports component')}
              <Reports />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/announcement-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AnnouncementManagement component')}
              <AnnouncementManagement />
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/add-announcement"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AddAnnouncement component')}
              <div>AddAnnouncement component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/announcement-details"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering AnnouncementDetails component')}
              <div>AnnouncementDetails component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route
        path="/moe/student-management"
        element={
          <ProtectedRouteWithLogging>
            <div>
              {console.log('AppRoutes.jsx - Rendering StudentManagement component')}
              <div>StudentManagement component placeholder</div>
            </div>
          </ProtectedRouteWithLogging>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
