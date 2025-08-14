// src/components/DistrictOverview.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  ButtonGroup,
  Fab,
  Box,
  LinearProgress
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  Save as ExportIcon,
  FilterAlt as FilterIcon,
  Share as ShareIcon,
  School as SchoolIcon,
  Person as StudentIcon,
  PersonOutline as TeacherIcon,
  Assessment as ReportIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { HorizontalScroll } from './HorizontalScroll';

// Mock data for statistics cards
const statsData = [
  { title: "Total Schools", value: "24,578", color: "#4CAF50", Icon: SchoolIcon },
  { title: "Students Enrolled", value: "8.2M", color: "#2196F3", Icon: StudentIcon },
  { title: "Teachers", value: "452K", color: "#9C27B0", Icon: TeacherIcon },
  { title: "Compliance Rate", value: "92%", color: "#FF9800", Icon: ReportIcon }
];

// Styled stat card component
const StatCard = styled(Card)(({ theme, bgcolor }) => ({
  minWidth: 200,
  height: 150,
  margin: theme.spacing(0, 1),
  backgroundColor: bgcolor,
  color: theme.palette.getContrastText(bgcolor),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: 40,
    marginBottom: theme.spacing(1)
  }
}));

export default function DistrictOverview() {
  const navigate = useNavigate();
  const [timePeriod, setTimePeriod] = React.useState('monthly');
  const [chartLoading, setChartLoading] = React.useState(true);

  // Simulate chart loading
  React.useEffect(() => {
    const timer = setTimeout(() => setChartLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleExport = () => {
    // Implement export functionality
    console.log("Export clicked");
  };

  const handleTimePeriodChange = (newPeriod) => {
    setTimePeriod(newPeriod);
    setChartLoading(true);
    // Here you would typically reload chart data
    setTimeout(() => setChartLoading(false), 1000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2 }}
          >
            <BackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            District Reports
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {/* Key Statistics Section */}
        <Card sx={{ mb: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'primary.main' }}>
              Key Statistics
            </Typography>
            
            <HorizontalScroll>
              {statsData.map((stat, index) => (
                <StatCard key={index} bgcolor={stat.color}>
                  <stat.Icon />
                  <Typography variant="h6">{stat.value}</Typography>
                  <Typography variant="body2">{stat.title}</Typography>
                </StatCard>
              ))}
            </HorizontalScroll>
          </CardContent>
        </Card>

        {/* Quick Actions Row */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<ExportIcon />}
            sx={{ flex: 1 }}
          >
            Export
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{ flex: 1 }}
          >
            Filter
          </Button>
        </Box>

        {/* Performance Trends Section */}
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'primary.main' }}>
              Performance Trends
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Card sx={{ height: 250, borderRadius: 1, boxShadow: 0 }}>
              {chartLoading ? (
                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LinearProgress sx={{ width: '80%' }} />
                </Box>
              ) : (
                <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography color="text.secondary">Chart visualization would appear here</Typography>
                </Box>
              )}
            </Card>

            {/* Time Period Selector */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <ButtonGroup variant="outlined">
                <Button 
                  onClick={() => handleTimePeriodChange('weekly')}
                  variant={timePeriod === 'weekly' ? 'contained' : 'outlined'}
                >
                  Weekly
                </Button>
                <Button 
                  onClick={() => handleTimePeriodChange('monthly')}
                  variant={timePeriod === 'monthly' ? 'contained' : 'outlined'}
                >
                  Monthly
                </Button>
                <Button 
                  onClick={() => handleTimePeriodChange('yearly')}
                  variant={timePeriod === 'yearly' ? 'contained' : 'outlined'}
                >
                  Yearly
                </Button>
              </ButtonGroup>
            </Box>
          </CardContent>
        </Card>

        {/* Spacer for FAB */}
        <Box sx={{ height: 72 }} />
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="share"
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
