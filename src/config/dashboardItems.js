import { SecurityLevels } from '@/utils/auth';

export const DashboardItems = [
  {
    id: 'student-profile',
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
    id: 'school-management',
    title: "School Management",
    icon: "🏢",
    path: "/moe/school-management",
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
    id: 'system-settings',
    title: "System Settings",
    icon: "⚙️",
    path: "/moe/system-settings",
    requiredLevel: SecurityLevels.SYSTEM_ADMIN
  }
];
