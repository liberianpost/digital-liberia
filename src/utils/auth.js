import { getDefaultRouteForLevel } from './dashboardManager';
import { SecurityLevels } from './securityLevels';

console.log('auth.js - Starting to load auth utilities');

export function getCurrentSecurityLevel() {
  try {
    const user = JSON.parse(localStorage.getItem('moeAuth') || 'null');
    const level = user?.securityLevel || SecurityLevels.STUDENT;
    console.log('auth.js - getCurrentSecurityLevel:', level);
    return level;
  } catch (error) {
    console.error('auth.js - getCurrentSecurityLevel error:', error);
    return SecurityLevels.STUDENT;
  }
}

export function hasPermission(requiredLevel, userLevel = getCurrentSecurityLevel()) {
  try {
    const levels = Object.values(SecurityLevels);
    const requiredIndex = levels.indexOf(requiredLevel);
    const userIndex = levels.indexOf(userLevel);
    const hasAccess = userIndex >= requiredIndex;
    console.log('auth.js - hasPermission:', { requiredLevel, userLevel, hasAccess });
    return hasAccess;
  } catch (error) {
    console.error('auth.js - hasPermission error:', error);
    return false;
  }
}

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
  const roleName = roles[level] || 'Unknown Role';
  console.log('auth.js - getRoleName:', { level, roleName });
  return roleName;
}

export function handleLoginSuccess(userData, navigate) {
  try {
    console.log('auth.js - handleLoginSuccess:', userData);
    localStorage.setItem('moeAuth', JSON.stringify(userData));
    const defaultRoute = getDefaultRouteForLevel(userData.securityLevel);
    navigate(defaultRoute, { replace: true });
  } catch (error) {
    console.error('auth.js - handleLoginSuccess error:', error);
    throw error;
  }
}

console.log('auth.js - Auth utilities loaded successfully');
