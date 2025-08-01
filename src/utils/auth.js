// src/utils/auth.js
export const SecurityLevels = {
  STUDENT: 1,
  PARENT: 2,
  TEACHER: 3,
  SCHOOL_ADMIN: 4,
  MINISTRY_OFFICIAL: 5,
  DATABASE_ADMIN: 6,
  SYSTEM_ADMIN: 7
};

// Get current user's security level
export function getCurrentSecurityLevel() {
  const user = JSON.parse(localStorage.getItem("moeAuth") || "null");
  return user?.securityLevel || SecurityLevels.STUDENT;
}

// Check if user has required permission
export function hasPermission(requiredLevel) {
  const currentLevel = getCurrentSecurityLevel();
  return currentLevel >= requiredLevel;
}

// Get role name for display
export function getRoleName(level) {
  const roles = {
    [SecurityLevels.STUDENT]: "Student",
    [SecurityLevels.PARENT]: "Parent",
    [SecurityLevels.TEACHER]: "Teacher",
    [SecurityLevels.SCHOOL_ADMIN]: "School Admin",
    [SecurityLevels.MINISTRY_OFFICIAL]: "Ministry Official",
    [SecurityLevels.DATABASE_ADMIN]: "Database Admin",
    [SecurityLevels.SYSTEM_ADMIN]: "System Admin"
  };
  return roles[level] || "Unknown Role";
}
