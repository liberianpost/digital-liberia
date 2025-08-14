// src/components/ClassManagement.js
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
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Fab
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Add as AddIcon,
  Class as ClassIcon,
  People as PeopleIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`class-tabpanel-${index}`}
      aria-labelledby={`class-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function ClassManagement() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  // Sample data - replace with API calls
  const classes = [
    { id: 'c1', name: 'Grade 10 - Section A', teacher: 'Mr. Johnson', studentCount: 32 },
    { id: 'c2', name: 'Grade 9 - Section B', teacher: 'Ms. Williams', studentCount: 28 },
    { id: 'c3', name: 'Grade 11 - Science', teacher: 'Dr. Smith', studentCount: 25 }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddClass = () => {
    navigate('/add-class');
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
            Class Management
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
          <Tab label="All Classes" />
          <Tab label="By Grade" />
          <Tab label="By Teacher" />
        </Tabs>
      </AppBar>

      {/* Tab Content */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {classes.map((cls) => (
              <Grid item xs={12} sm={6} md={4} key={cls.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ClassIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" component="div">
                        {cls.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Teacher: {cls.teacher}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Students: {cls.studentCount}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Classes by Grade
            </Typography>
            <List>
              {['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((grade) => (
                <React.Fragment key={grade}>
                  <ListItem button onClick={() => navigate(`/classes/grade/${grade.toLowerCase()}`)}>
                    <ListItemText 
                      primary={grade} 
                      secondary={`${Math.floor(Math.random() * 5) + 1} classes`} 
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Classes by Teacher
            </Typography>
            <List>
              {['Mr. Johnson', 'Ms. Williams', 'Dr. Smith', 'Mrs. Brown'].map((teacher) => (
                <React.Fragment key={teacher}>
                  <ListItem button onClick={() => navigate(`/classes/teacher/${teacher.toLowerCase().replace(' ', '-')}`)}>
                    <ListItemText 
                      primary={teacher} 
                      secondary={`${Math.floor(Math.random() * 3) + 1} classes`} 
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </TabPanel>
      </Box>

      {/* Add Class FAB */}
      <Fab
        color="primary"
        aria-label="add class"
        onClick={handleAddClass}
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
