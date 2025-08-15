import { getDefaultRouteForLevel } from './dashboardManager';

export const SecurityLevels = {
  STUDENT: 'STUDENT',
  PARENT: 'PARENT',
  TEACHER: 'TEACHER',
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  MINISTRY_OFFICIAL: 'MINISTRY_OFFICIAL',
  DATABASE_ADMIN: 'DATABASE_ADMIN',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN',
};

// Get current user's security level
export function getCurrentSecurityLevel() {
  const user = JSON.parse(localStorage.getItem('moeAuth') || 'null');
  console.log('auth.js - getCurrentSecurityLevel:', user?.securityLevel || SecurityLevels.STUDENT);
  return user?.securityLevel || SecurityLevels.STUDENT;
}

// Check if user has required permission
export function hasPermission(requiredLevel, userLevel = getCurrentSecurityLevel()) {
  const levels = Object.values(SecurityLevels);
  const requiredIndex = levels.indexOf(requiredLevel);
  const userIndex = levels.indexOf(userLevel);
  console.log('auth.js - hasPermission:', { requiredLevel, userLevel, hasAccess: userIndex >= requiredIndex });
  return userIndex >= requiredIndex;
}

// Get role name for display
export function getRoleName(level) {
  const roles = {
    [SecurityLevels.STUDENT]: 'Student',
    [SecurityLevels.PARENT]: 'Parent',
    [SecurityLevels.TEACHER]: 'Teacher',
    [SecurityLevels.SCHOOL_ADMIN]: 'School Admin',
    [SecurityLevels.MINISTRY_OFFICIAL]: 'Ministry Official',
    [SecurityLevels.DATABASE_ADMIN]: 'Database Admin',
    [SecurityLevels.SYSTEM_ADMIN]: 'System Admin',
  };
  return roles[level] || 'Unknown Role';
}

// Handle login success and redirect to default route
export function handleLoginSuccess(userData, navigate) {
  console.log('auth.js - handleLoginSuccess:', userData);
  localStorage.setItem('moeAuth', JSON.stringify(userData));
  const defaultRoute = getDefaultRouteForLevel(userData.securityLevel);
  navigate(defaultRoute, { replace: true });
}
