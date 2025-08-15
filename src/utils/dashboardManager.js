import { DashboardItems } from '@config/dashboardItems';
import { SecurityLevels } from './auth';

const defaultRoutes = {
  [SecurityLevels.STUDENT]: '/moe/student-profile',
  [SecurityLevels.PARENT]: '/moe/student-reports',
  [SecurityLevels.TEACHER]: '/moe/class-management',
  [SecurityLevels.SCHOOL_ADMIN]: '/moe/school-management',
  [SecurityLevels.MINISTRY_OFFICIAL]: '/moe/district-reports',
  [SecurityLevels.DATABASE_ADMIN]: '/moe/database-tools',
  [SecurityLevels.SYSTEM_ADMIN]: '/moe/system-settings',
};

export function getDefaultRouteForLevel(securityLevel) {
  return defaultRoutes[securityLevel] || '/moe/dashboard';
}

export function getAvailableDashboardItems(securityLevel) {
  const currentLevel = securityLevel || SecurityLevels.STUDENT;
  return DashboardItems.filter((item) => {
    const levels = Object.values(SecurityLevels);
    const requiredIndex = levels.indexOf(item.requiredLevel);
    const userIndex = levels.indexOf(currentLevel);
    return userIndex >= requiredIndex;
  });
}
