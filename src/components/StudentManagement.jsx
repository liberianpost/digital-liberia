// src/components/StudentManagement.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Fab
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Add as AddIcon,
  Person as StudentIcon
} from '@mui/icons-material';

// Sample student data
const students = [
  {
    name: "John Doe",
    grade: "Grade 10",
    studentId: "LNHS-2023-001"
  },
  {
    name: "Jane Smith",
    grade: "Grade 9",
    studentId: "LNHS-2023-002"
  },
  {
    name: "Michael Johnson",
    grade: "Grade 11",
    studentId: "LNHS-2023-003"
  }
];

export default function StudentManagement() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Filter students based on tab selection
    // Implement your filtering logic here
  };

  const handleStudentClick = (student) => {
    // Navigate to student details
    navigate('/student-profile', { state: { student } });
  };

  const handleAddStudent = () => {
    navigate('/student-registration');
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
            Student Management
          </Typography>
        </Toolbar>

        {/* Tabs */}
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main'
            }
          }}
        >
          <Tab label="All" />
          <Tab label="Active" />
          <Tab label="Inactive" />
        </Tabs>
      </AppBar>

      {/* Student List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {students.map((student, index) => (
          <React.Fragment key={student.studentId}>
            <ListItem 
              button 
              onClick={() => handleStudentClick(student)}
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
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {student.grade}
                    </Typography>
                    <br />
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
            </ListItem>
            {index < students.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      {/* Add Student FAB */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleAddStudent}
        sx={{ 
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
