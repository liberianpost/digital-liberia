// src/components/TeacherManagement.js
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
  Box
} from '@mui/material';
import { ArrowBack as BackIcon, ChevronRight as ChevronIcon } from '@mui/icons-material';
import { Person as TeacherIcon } from '@mui/icons-material';

// Teacher data model
const teachers = [
  { id: 'T-001', name: 'John Smith', subject: 'Mathematics' },
  { id: 'T-002', name: 'Sarah Johnson', subject: 'Science' },
  { id: 'T-003', name: 'Michael Brown', subject: 'English' },
  { id: 'T-004', name: 'Emily Davis', subject: 'History' }
];

export default function TeacherManagement() {
  const navigate = useNavigate();

  const handleTeacherClick = (teacherId) => {
    // Navigate to teacher details
    console.log(`View details for teacher ${teacherId}`);
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
            Teacher Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Teacher List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {teachers.map((teacher) => (
          <React.Fragment key={teacher.id}>
            <ListItem 
              button 
              onClick={() => handleTeacherClick(teacher.id)}
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <TeacherIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={teacher.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {teacher.subject}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      ID: {teacher.id}
                    </Typography>
                  </>
                }
              />
              <ChevronIcon color="action" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
