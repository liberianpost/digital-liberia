console.log('securityLevels.js - Initializing SecurityLevels');

// Enhanced security levels with metadata
export const SecurityLevels = Object.freeze({
  STUDENT: {
    value: 'STUDENT',
    rank: 0,
    displayName: 'Student'
  },
  PARENT: {
    value: 'PARENT',
    rank: 1,
    displayName: 'Parent'
  },
  TEACHER: {
    value: 'TEACHER',
    rank: 2,
    displayName: 'Teacher'
  },
  SCHOOL_ADMIN: {
    value: 'SCHOOL_ADMIN',
    rank: 3,
    displayName: 'School Admin'
  },
  MINISTRY_OFFICIAL: {
    value: 'MINISTRY_OFFICIAL',
    rank: 4,
    displayName: 'Ministry Official'
  },
  DATABASE_ADMIN: {
    value: 'DATABASE_ADMIN',
    rank: 5,
    displayName: 'Database Admin'
  },
  SYSTEM_ADMIN: {
    value: 'SYSTEM_ADMIN',
    rank: 6,
    displayName: 'System Admin'
  }
});

// Helper functions
export const getSecurityLevelValue = (level) => {
  if (!level) return SecurityLevels.STUDENT.value;
  const found = Object.values(SecurityLevels).find(l => l.value === level);
  return found ? found.value : SecurityLevels.STUDENT.value;
};

export const getSecurityLevelRank = (level) => {
  if (!level) return SecurityLevels.STUDENT.rank;
  const found = Object.values(SecurityLevels).find(l => l.value === level);
  return found ? found.rank : SecurityLevels.STUDENT.rank;
};

export const getSecurityLevelDisplayName = (level) => {
  if (!level) return SecurityLevels.STUDENT.displayName;
  const found = Object.values(SecurityLevels).find(l => l.value === level);
  return found ? found.displayName : SecurityLevels.STUDENT.displayName;
};

console.log('securityLevels.js - SecurityLevels initialized successfully');
