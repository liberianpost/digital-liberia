import { DashboardItems } from '@/config/dashboardItems';
import { getCurrentSecurityLevel } from '@/utils/auth';
import { SecurityLevels } from '@/utils/auth';

// Default routes mapped to security levels (inferred from Kotlin's defaultFragments)
const defaultRoutes = {
  [SecurityLevels.STUDENT]: '/moe/student-profile',
  [SecurityLevels.PARENT]: '/moe/student-reports',
  [SecurityLevels.TEACHER]: '/moe/class-management',
  [SecurityLevels.SCHOOL_ADMIN]: '/moe/school-management',
  [SecurityLevels.MINISTRY_OFFICIAL]: '/moe/district-reports',
  [SecurityLevels.DATABASE_ADMIN]: '/moe/database-tools',
  [SecurityLevels.SYSTEM_ADMIN]: '/moe/system-settings'
};

export function getDefaultRouteForLevel(securityLevel) {
  return defaultRoutes[securityLevel] || '/moe/dashboard'; // Fallback to a generic dashboard
}

export function getAvailableDashboardItems() {
  const currentLevel = getCurrentSecurityLevel();
  console.log(`=== START getAvailableDashboardItems ===`);
  console.log(`Input security level: ${currentLevel}`);

  console.log('All dashboard items:');
  DashboardItems.forEach(item => {
    console.log(`- ${item.title} (Level ${item.requiredLevel}) -> ${item.path}`);
  });

  const availableItems = DashboardItems.filter(item => item.requiredLevel <= currentLevel);

  console.log(`Filtered items for level ${currentLevel}:`);
  availableItems.forEach(item => {
    console.log(`- ${item.title} (Level ${item.requiredLevel})`);
  });

  console.log(`=== END getAvailableDashboardItems ===`);
  return availableItems;
}
