// src/components/ParentManagement.js
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
  Fab,
  Box,
  Chip
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Add as AddIcon,
  FamilyRestroom as ParentIcon,
  ChildCare as ChildIcon
} from '@mui/icons-material';

// Sample parent data
const parents = [
  { id: 'p1', name: 'Mary Johnson', children: '2 children', status: 'Active' },
  { id: 'p2', name: 'David Wilson', children: '1 child', status: 'Active' },
  { id: 'p3', name: 'Sarah Brown', children: '3 children', status: 'Inactive' }
];

export default function ParentManagement() {
  const navigate = useNavigate();

  const handleParentClick = (parentId) => {
    navigate(`/parent-details/${parentId}`);
  };

  const handleAddParent = () => {
    navigate('/add-parent');
  };

  const handleBack = () => {
    navigate('/school-management');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 2, color: 'black' }}
          >
            <BackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            Parent Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Parent List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {parents.map((parent, index) => (
          <React.Fragment key={parent.id}>
            <ListItem 
              button 
              onClick={() => handleParentClick(parent.id)}
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <ParentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={parent.name}
                secondary={
                  <>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <ChildIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {parent.children}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Chip 
                label={parent.status}
                color={parent.status === 'Active' ? 'success' : 'default'}
                size="small"
              />
            </ListItem>
            {index < parents.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      {/* Add Parent FAB */}
      <Fab
        color="primary"
        aria-label="add parent"
        onClick={handleAddParent}
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
