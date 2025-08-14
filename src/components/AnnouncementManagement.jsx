// src/components/AnnouncementManagement.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  Fab,
  Box,
  List,
  ListItem,
  Divider,
  Chip
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Add as AddIcon,
  Announcement as AnnouncementIcon
} from '@mui/icons-material';

// Sample announcement data
const announcements = [
  {
    title: "School Reopening",
    date: "Jan 15, 2023",
    description: "All classes resume on Monday"
  },
  {
    title: "Parent-Teacher Meeting",
    date: "Feb 2, 2023",
    description: "Scheduled for next week"
  },
  {
    title: "Holiday Notice",
    date: "Mar 10, 2023",
    description: "School will be closed on Friday"
  }
];

export default function AnnouncementManagement() {
  const navigate = useNavigate();

  const handleAddAnnouncement = () => {
    navigate('/add-announcement');
  };

  const handleAnnouncementClick = (announcement) => {
    // Navigate to announcement details
    navigate('/announcement-details', { state: { announcement } });
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
            Announcement Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Announcement List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {announcements.map((announcement, index) => (
          <React.Fragment key={index}>
            <ListItem 
              button 
              onClick={() => handleAnnouncementClick(announcement)}
              sx={{ p: 0 }}
            >
              <Card sx={{ width: '100%', mx: 2, my: 1 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AnnouncementIcon color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div">
                      {announcement.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mt: 1, ml: 6 }}
                  >
                    {announcement.date}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ mt: 1, ml: 6 }}
                  >
                    {announcement.description}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            {index < announcements.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      {/* Add Announcement FAB */}
      <Fab
        color="primary"
        aria-label="add announcement"
        onClick={handleAddAnnouncement}
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
