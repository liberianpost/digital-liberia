import { SecurityLevels } from '@/utils/auth';

console.log('dashboardItems.js - Loaded DashboardItems configuration');

export const DashboardItems = [
  {
    id: 'my-profile',
    title: "My Profile",
    icon: "👤",
    path: "/moe/student-profile",
    requiredLevel: SecurityLevels.STUDENT
  },
  {
    id: 'student-reports',
    title: "Student Reports",
    icon: "📊",
    path: "/moe/student-reports",
    requiredLevel: SecurityLevels.PARENT
  },
  {
    id: 'class-management',
    title: "Class Management",
    icon: "🏫",
    path: "/moe/class-management",
    requiredLevel: SecurityLevels.TEACHER
  },
  {
    id: 'student-records',
    title: "Student Records",
    icon: "🎓",
    path: "/moe/student-records",
    requiredLevel: SecurityLevels.TEACHER
  },
  {
    id: 'school-management',
    title: "School Management",
    icon: "🏢",
    path: "/moe/school-management",
    requiredLevel: SecurityLevels.SCHOOL_ADMIN
  },
  {
    id: 'teacher-management',
    title: "Teacher Management",
    icon: "👩‍🏫",
    path: "/moe/teacher-management",
    requiredLevel: SecurityLevels.SCHOOL_ADMIN
  },
  {
    id: 'district-reports',
    title: "District Reports",
    icon: "📑",
    path: "/moe/district-reports",
    requiredLevel: SecurityLevels.MINISTRY_OFFICIAL
  },
  {
    id: 'database-tools',
    title: "Database Tools",
    icon: "🗄️",
    path: "/moe/database-tools",
    requiredLevel: SecurityLevels.DATABASE_ADMIN
  },
  {
    id: 'system-settings',
    title: "System Settings",
    icon: "⚙️",
    path: "/moe/system-settings",
    requiredLevel: SecurityLevels.SYSTEM_ADMIN
  },
  {
    id: 'user-management',
    title: "User Management",
    icon: "👥",
    path: "/moe/user-management",
    requiredLevel: SecurityLevels.SYSTEM_ADMIN
  }
];
