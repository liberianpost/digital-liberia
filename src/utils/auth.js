import { getDefaultRouteForLevel } from './dashboardManager';
import { 
  SecurityLevels,
  getSecurityLevelValue,
  getSecurityLevelRank,
  getSecurityLevelDisplayName
} from './securityLevels';

console.log('auth.js - Initializing auth utilities');

// Enhanced auth state management
export function getCurrentSecurityLevel() {
  try {
    const user = JSON.parse(localStorage.getItem('moeAuth') || 'null');
    const level = user?.securityLevel ? getSecurityLevelValue(user.securityLevel) : SecurityLevels.STUDENT.value;
    
    console.log('auth.js - Current security level:', {
      storedLevel: user?.securityLevel,
      resolvedLevel: level
    });
    
    return level;
  } catch (error) {
    console.error('auth.js - Error in getCurrentSecurityLevel:', {
      error: error.message,
      stack: error.stack
    });
    return SecurityLevels.STUDENT.value;
  }
}

export function hasPermission(requiredLevel, userLevel = getCurrentSecurityLevel()) {
  try {
    const requiredRank = getSecurityLevelRank(requiredLevel);
    const userRank = getSecurityLevelRank(userLevel);
    const hasAccess = userRank >= requiredRank;
    
    console.log('auth.js - Permission check:', {
      requiredLevel,
      requiredRank,
      userLevel,
      userRank,
      hasAccess
    });
    
    return hasAccess;
  } catch (error) {
    console.error('auth.js - Error in hasPermission:', {
      error: error.message,
      stack: error.stack,
      requiredLevel,
      userLevel
    });
    return false;
  }
}

export function getRoleName(level) {
  try {
    const displayName = getSecurityLevelDisplayName(level);
    console.log('auth.js - Role name resolved:', { level, displayName });
    return displayName;
  } catch (error) {
    console.error('auth.js - Error in getRoleName:', {
      error: error.message,
      stack: error.stack,
      inputLevel: level
    });
    return 'Unknown Role';
  }
}

export function handleLoginSuccess(userData, navigate) {
  try {
    if (!userData?.securityLevel) {
      throw new Error('Invalid user data - missing securityLevel');
    }

    console.log('auth.js - Processing login success:', {
      userId: userData.id,
      username: userData.username,
      securityLevel: userData.securityLevel
    });

    // Validate and normalize security level
    const validatedLevel = getSecurityLevelValue(userData.securityLevel);
    const normalizedUserData = {
      ...userData,
      securityLevel: validatedLevel
    };

    localStorage.setItem('moeAuth', JSON.stringify(normalizedUserData));
    
    const defaultRoute = getDefaultRouteForLevel(validatedLevel);
    console.log('auth.js - Navigating to:', defaultRoute);
    
    navigate(defaultRoute, { 
      replace: true,
      state: { fromLogin: true }
    });
  } catch (error) {
    console.error('auth.js - Error in handleLoginSuccess:', {
      error: error.message,
      stack: error.stack,
      userData: {
        id: userData?.id,
        username: userData?.username,
        securityLevel: userData?.securityLevel
      }
    });
    throw error;
  }
}

// Additional utility function
export function clearAuthData() {
  try {
    console.log('auth.js - Clearing authentication data');
    localStorage.removeItem('moeAuth');
  } catch (error) {
    console.error('auth.js - Error clearing auth data:', error);
  }
}

console.log('auth.js - Initialization complete');
