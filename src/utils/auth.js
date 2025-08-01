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

export function hasRequiredLevel(requiredLevel) {
  const user = JSON.parse(localStorage.getItem("moeAuth"));
  return user?.securityLevel >= requiredLevel;
}

export function getAvailableItems() {
  const user = JSON.parse(localStorage.getItem("moeAuth"));
  if (!user) return [];
  
  return DashboardItems.filter(item => 
    item.requiredLevel <= user.securityLevel
  );
}
