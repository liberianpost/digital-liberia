import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Toolbar, 
  AppBar,
  Fab
} from '@mui/material';
import { 
  Overview as OverviewIcon,
  School as SchoolIcon,
  Person as StudentIcon,
  PersonOutline as TeacherIcon,
  Assessment as ReportIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const reportItems = [
  {
    title: "Overview",
    description: "Summary of national education statistics",
    Icon: DashboardIcon,
    path: "overview",
    color: "#4CAF50" // green
  },
  {
    title: "Schools",
    description: "School performance and metrics",
    Icon: SchoolIcon,
    path: "school-reports",
    color: "#2196F3" // blue
  },
  {
    title: "Students",
    description: "Student enrollment and performance",
    Icon: StudentIcon,
    path: "student-reports",
    color: "#9C27B0" // purple
  },
  {
    title: "Teachers",
    description: "Teacher qualifications and distribution",
    Icon: TeacherIcon,
    path: "teacher-reports",
    color: "#FF9800" // orange
  },
  {
    title: "Compliance",
    description: "Policy and regulation compliance",
    Icon: ReportIcon,
    path: "compliance-reports",
    color: "#F44336" // red
  }
];

const ReportCard = styled(Card)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  color: theme.palette.getContrastText(bgcolor),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.03)'
  }
}));

export default function DistrictReports() {
  const navigate = useNavigate();

  const handleExport = () => {
    // Implement export dialog (PDF, CSV, Excel options)
    console.log("Export clicked");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate('/moe/dashboard')}
            sx={{ mr: 2 }}
          >
            {/* Back icon - consider using ArrowBack for better UX */}
            <span>←</span>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            National Education Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
        <Grid container spacing={3}>
          {reportItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ReportCard 
                bgcolor={item.color}
                onClick={() => navigate(item.path)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <item.Icon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </ReportCard>
            </Grid>
          ))}
        </Grid>
      </div>

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
        <ReportIcon />
      </Fab>

      {/* This renders the nested routes */}
      <Outlet />
    </div>
  );
}
