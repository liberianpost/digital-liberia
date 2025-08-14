// src/components/StudentRecords.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Box,
  Chip
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Person as StudentIcon,
  Grade as GradeIcon,
  School as SchoolIcon
} from '@mui/icons-material';

// Sample student data
const students = [
  {
    name: "James Doe",
    grade: "Grade 10",
    studentId: "LNHS-2023-001"
  },
  {
    name: "Mary Johnson",
    grade: "Grade 11", 
    studentId: "LNHS-2023-002"
  },
  {
    name: "Robert Smith",
    grade: "Grade 9",
    studentId: "LNHS-2023-003"
  },
  {
    name: "Elizabeth Brown",
    grade: "Grade 12",
    studentId: "LNHS-2023-004"
  }
];

export default function StudentRecords() {
  const navigate = useNavigate();

  const handleStudentClick = (studentId) => {
    navigate(`/student-records/${studentId}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2, color: 'black' }}
          >
            <BackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            Student Records
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Student List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {students.map((student, index) => (
          <React.Fragment key={student.studentId}>
            <ListItem 
              button 
              onClick={() => handleStudentClick(student.studentId)}
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <StudentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={student.name}
                secondary={
                  <>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <GradeIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {student.grade}
                      </Typography>
                    </Box>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {student.studentId}
                    </Typography>
                  </>
                }
              />
              <Chip 
                label="View Records" 
                color="primary" 
                size="small" 
                clickable
              />
            </ListItem>
            {index < students.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
