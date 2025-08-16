import { DashboardItems } from '@config/dashboardItems';
import { 
  SecurityLevels,
  getSecurityLevelValue,
  getSecurityLevelRank 
} from './securityLevels';

console.log('dashboardManager.js - Initializing dashboardManager');

// Enhanced default routes with fallbacks
const defaultRoutes = {
  [SecurityLevels.STUDENT.value]: '/moe/student-profile',
  [SecurityLevels.PARENT.value]: '/moe/student-reports',
  [SecurityLevels.TEACHER.value]: '/moe/class-management',
  [SecurityLevels.SCHOOL_ADMIN.value]: '/moe/school-management',
  [SecurityLevels.MINISTRY_OFFICIAL.value]: '/moe/district-reports',
  [SecurityLevels.DATABASE_ADMIN.value]: '/moe/database-tools',
  [SecurityLevels.SYSTEM_ADMIN.value]: '/moe/system-settings',
};

export function getDefaultRouteForLevel(securityLevel) {
  try {
    const levelValue = getSecurityLevelValue(securityLevel);
    const route = defaultRoutes[levelValue] || '/moe/dashboard';
    
    console.log('dashboardManager.js - Resolved default route:', {
      inputLevel: securityLevel,
      resolvedLevel: levelValue,
      route
    });
    
    return route;
  } catch (error) {
    console.error('dashboardManager.js - Error in getDefaultRouteForLevel:', {
      error: error.message,
      stack: error.stack,
      inputLevel: securityLevel
    });
    return '/moe/dashboard';
  }
}

export function getAvailableDashboardItems(securityLevel) {
  try {
    const levelValue = getSecurityLevelValue(securityLevel);
    const userRank = getSecurityLevelRank(levelValue);
    
    console.log('dashboardManager.js - Filtering dashboard items for:', {
      inputLevel: securityLevel,
      resolvedLevel: levelValue,
      userRank
    });

    return DashboardItems.filter(item => {
      const itemRank = getSecurityLevelRank(item.requiredLevel);
      const hasAccess = userRank >= itemRank;
      
      if (process.env.NODE_ENV === 'development') {
        console.debug('Item access check:', {
          item: item.title,
          requiredLevel: item.requiredLevel,
          requiredRank: itemRank,
          hasAccess
        });
      }
      
      return hasAccess;
    });
  } catch (error) {
    console.error('dashboardManager.js - Error in getAvailableDashboardItems:', {
      error: error.message,
      stack: error.stack,
      inputLevel: securityLevel
    });
    return [];
  }
}

// Validation function
export function validateSecurityLevel(level) {
  const validLevels = Object.values(SecurityLevels).map(l => l.value);
  if (!validLevels.includes(level)) {
    console.warn('Invalid security level detected:', level);
    return SecurityLevels.STUDENT.value;
  }
  return level;
}

console.log('dashboardManager.js - Initialization complete');
