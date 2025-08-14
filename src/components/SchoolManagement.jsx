// src/components/SchoolManagement.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  useTheme
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  People as TeacherIcon,
  School as SchoolIcon,
  Person as StudentIcon,
  FamilyRestroom as ParentIcon,
  Announcement as AnnouncementIcon
} from '@mui/icons-material';

const managementItems = [
  {
    title: "Teacher Management",
    description: "Manage teacher profiles and assignments",
    Icon: TeacherIcon,
    color: '#4CAF50', // Green
    path: '/teacher-management'
  },
  {
    title: "Students Registration",
    description: "Register new students and enrollments",
    Icon: StudentIcon,
    color: '#2196F3', // Blue
    path: '/student-registration'
  },
  {
    title: "Student Management",
    description: "Manage existing student records",
    Icon: StudentIcon,
    color: '#9C27B0', // Purple
    path: '/student-management'
  },
  {
    title: "Parent Management",
    description: "Manage parent accounts and connections",
    Icon: ParentIcon,
    color: '#FF9800', // Orange
    path: '/parent-management'
  },
  {
    title: "Announcement Management",
    description: "Create and manage school announcements",
    Icon: AnnouncementIcon,
    color: '#F44336', // Red
    path: '/announcement-management'
  }
];

const ManagementCard = ({ item }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Determine text color based on card background
  const getContrastText = (bgColor) => {
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'black' : 'white';
  };

  const textColor = getContrastText(item.color);

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: item.color,
        color: textColor,
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.03)'
        }
      }}
      onClick={() => navigate(item.path)}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.2)', 
            mr: 2,
            color: textColor 
          }}>
            <item.Icon />
          </Avatar>
          <Typography variant="h6" component="h3">
            {item.title}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: textColor }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function SchoolManagement() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={4} sx={{ backgroundColor: 'white' }}>
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
            School Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Management Grid */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
        <Grid container spacing={3}>
          {managementItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ManagementCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
