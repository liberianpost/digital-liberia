// src/components/SchoolReports.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  Divider,
  Fab,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Button
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  FilterAlt as FilterIcon,
  Refresh as RefreshIcon,
  LocationOn as LocationIcon,
  Share as ShareIcon,
  School as SchoolIcon,
  People as StudentIcon,
  Person as TeacherIcon,
  Assessment as ComplianceIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Sample data
const counties = [
  {
    name: "Montserrado",
    districts: 4,
    cities: 12,
    communities: 87,
    schoolCount: 623
  },
  {
    name: "Bomi",
    districts: 2,
    cities: 8,
    communities: 42,
    schoolCount: 187
  }
  // Add other counties as needed
];

const StatCard = styled(Card)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  color: theme.palette.getContrastText(bgcolor),
  textAlign: 'center',
  padding: theme.spacing(2),
  flex: 1,
  margin: theme.spacing(0, 0.5)
}));

export default function SchoolReports() {
  const navigate = useNavigate();
  const [selectedCounty, setSelectedCounty] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleCountyFilter = (county) => {
    setSelectedCounty(county);
    // Here you would typically filter data
  };

  const handleRefresh = () => {
    setLoading(true);
    // Simulate data refresh
    setTimeout(() => setLoading(false), 1000);
  };

  const handleExport = () => {
    // Implement export functionality
    console.log("Export clicked");
  };

  const handleCountyClick = (countyName) => {
    // Navigate to district view or expand county card
    console.log(`Clicked on ${countyName}`);
  };

  const handleFilterClick = () => {
    // Show filter dialog
    console.log("Filter clicked");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={4} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2, color: 'primary.main' }}
          >
            <BackIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, color: 'primary.main' }}
          >
            Liberia School Reports
          </Typography>
          <IconButton color="inherit" onClick={handleFilterClick} sx={{ color: 'primary.main' }}>
            <FilterIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleRefresh} sx={{ color: 'primary.main' }}>
            <RefreshIcon />
          </IconButton>
        </Toolbar>

        {/* County Filter Chips */}
        <Box sx={{ px: 2, pb: 1, display: 'flex', overflowX: 'auto' }}>
          <Chip
            label="All Liberia"
            variant={selectedCounty === 'all' ? 'filled' : 'outlined'}
            onClick={() => handleCountyFilter('all')}
            color="primary"
            sx={{ mr: 1 }}
          />
          {counties.map((county) => (
            <Chip
              key={county.name}
              label={county.name}
              variant={selectedCounty === county.name.toLowerCase() ? 'filled' : 'outlined'}
              onClick={() => handleCountyFilter(county.name.toLowerCase())}
              color="primary"
              sx={{ mr: 1 }}
            />
          ))}
        </Box>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {loading ? (
          <LinearProgress />
        ) : (
          <>
            {/* Summary Card */}
            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                  Liberia Education Summary
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <StatCard bgcolor="#4CAF50">
                    <Typography variant="h5">1,842</Typography>
                    <Typography variant="body2">Schools</Typography>
                    <SchoolIcon sx={{ fontSize: 40, mt: 1 }} />
                  </StatCard>
                  <StatCard bgcolor="#2196F3">
                    <Typography variant="h5">624K</Typography>
                    <Typography variant="body2">Students</Typography>
                    <StudentIcon sx={{ fontSize: 40, mt: 1 }} />
                  </StatCard>
                  <StatCard bgcolor="#9C27B0">
                    <Typography variant="h5">28K</Typography>
                    <Typography variant="body2">Teachers</Typography>
                    <TeacherIcon sx={{ fontSize: 40, mt: 1 }} />
                  </StatCard>
                  <StatCard bgcolor="#FF9800">
                    <Typography variant="h5">89%</Typography>
                    <Typography variant="body2">Compliance</Typography>
                    <ComplianceIcon sx={{ fontSize: 40, mt: 1 }} />
                  </StatCard>
                </Box>
              </CardContent>
            </Card>

            {/* Geographic Hierarchy Section */}
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
              Reports by Location
            </Typography>

            {/* County Cards */}
            {counties.map((county) => (
              <Card 
                key={county.name}
                sx={{ mb: 2, borderRadius: 2, cursor: 'pointer' }}
                onClick={() => handleCountyClick(county.name)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {county.name} County
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {county.schoolCount} Schools
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={4}>
                      <Typography variant="body2">Districts</Typography>
                      <Typography variant="h6">{county.districts}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2">Cities</Typography>
                      <Typography variant="h6">{county.cities}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2">Communities</Typography>
                      <Typography variant="h6">{county.communities}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </Box>

      {/* Export FAB */}
      <Fab
        color="primary"
        aria-label="export"
        onClick={handleExport}
        sx={{ 
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
      >
        <ShareIcon />
      </Fab>
    </Box>
  );
}
