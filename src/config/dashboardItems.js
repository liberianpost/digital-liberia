// src/config/dashboardItems.js
import { SecurityLevels } from '../utils/auth';

export const DashboardItems = [
  {
    id: 1,
    title: "My Profile",
    icon: "user",
    path: "/student-profile",
    requiredLevel: SecurityLevels.STUDENT
  },
  {
    id: 2,
    title: "Student Reports",
    icon: "file-text",
    path: "/student-reports",
    requiredLevel: SecurityLevels.PARENT
  },
  // ... Add all other items following the same pattern
];

export function getAvailableItems() {
  const currentLevel = getCurrentSecurityLevel();
  return DashboardItems.filter(item => item.requiredLevel <= currentLevel);
}
