// src/components/ParentDetails.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  LinearProgress
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  FamilyRestroom as ParentIcon,
  ChildCare as ChildIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

// Mock data - replace with API calls
const mockParents = [
  { 
    id: 'p1', 
    name: 'Mary Johnson', 
    childrenInfo: '2 children (John - Grade 10, Sarah - Grade 8)',
    status: 'Active',
    phone: '+1234567890',
    email: 'mary.johnson@example.com',
    address: '123 Main St, Monrovia'
  },
  { 
    id: 'p2', 
    name: 'David Wilson', 
    childrenInfo: '1 child (Michael - Grade 9)',
    status: 'Active',
    phone: '+1987654321',
    email: 'david.wilson@example.com',
    address: '456 Oak Ave, Monrovia'
  },
  { 
    id: 'p3', 
    name: 'Sarah Brown', 
    childrenInfo: '3 children (Emma - Grade 7, James - Grade 5, Lily - Grade 3)',
    status: 'Inactive',
    phone: '+1122334455',
    email: 'sarah.brown@example.com',
    address: '789 Pine Rd, Monrovia'
  }
];

export default function ParentDetails() {
  const navigate = useNavigate();
  const { parentId } = useParams();
  const [parent, setParent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchParent = () => {
      setLoading(true);
      setTimeout(() => {
        const foundParent = mockParents.find(p => p.id === parentId);
        setParent(foundParent);
        setLoading(false);
      }, 500);
    };

    fetchParent();
  }, [parentId]);

  if (loading) {
    return <LinearProgress />;
  }

  if (!parent) {
    navigate(-1); // Go back if parent not found
    return null;
  }

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
            Parent Details
          </Typography>
          <Chip 
            label={parent.status}
            color={parent.status === 'Active' ? 'success' : 'default'}
            size="small"
          />
        </Toolbar>
      </AppBar>

      {/* Parent Details */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 56, height: 56 }}>
                <ParentIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="div">
                {parent.name}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <ChildIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body1">
                {parent.childrenInfo}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contact Information
        </Typography>
        <Card>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'grey.100' }}>
                  <PhoneIcon color="action" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Phone" 
                secondary={parent.phone} 
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'grey.100' }}>
                  <EmailIcon color="action" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Email" 
                secondary={parent.email} 
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'grey.100' }}>
                  <LocationIcon color="action" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Address" 
                secondary={parent.address} 
              />
            </ListItem>
          </List>
        </Card>

        {/* Children List - Would be populated from API */}
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Children Details
        </Typography>
        <Card>
          <List>
            <ListItem>
              <ListItemText 
                primary="John Doe" 
                secondary="Grade 10 - LNHS-2023-001" 
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText 
                primary="Sarah Doe" 
                secondary="Grade 8 - LNHS-2023-002" 
              />
            </ListItem>
          </List>
        </Card>
      </Box>
    </Box>
  );
}
