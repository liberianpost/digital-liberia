// src/components/StudentProfile.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  TextField,
  Divider,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Button
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Grade as GradeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon
} from '@mui/icons-material';

// Mock data - replace with API calls
const mockStudents = [
  {
    id: 'LNHS-2023-001',
    name: 'James Doe',
    grade: 'Grade 10',
    email: 'james.doe@school.edu',
    phone: '+1234567890',
    address: '123 Main St, Monrovia',
    profileImage: '/profile-placeholder.png'
  },
  {
    id: 'LNHS-2023-002',
    name: 'Mary Johnson',
    grade: 'Grade 11',
    email: 'mary.johnson@school.edu',
    phone: '+1987654321',
    address: '456 Oak Ave, Monrovia',
    profileImage: '/profile-placeholder.png'
  }
];

export default function StudentProfile() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchStudent = () => {
      setLoading(true);
      setTimeout(() => {
        const foundStudent = mockStudents.find(s => s.id === studentId);
        setStudent(foundStudent);
        setLoading(false);
      }, 500);
    };

    fetchStudent();
  }, [studentId]);

  const handleSave = () => {
    // Save logic would go here
    setEditMode(false);
  };

  if (loading) {
    return <LinearProgress />;
  }

  if (!student) {
    navigate(-1); // Go back if student not found
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
            Student Profile
          </Typography>
          {editMode ? (
            <Button 
              color="primary" 
              onClick={handleSave}
              startIcon={<EditIcon />}
            >
              Save
            </Button>
          ) : (
            <Button 
              color="primary" 
              onClick={() => setEditMode(true)}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Profile Content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={student.profileImage}
            sx={{ 
              width: 120, 
              height: 120,
              mb: 2,
              bgcolor: 'primary.main'
            }}
          >
            <PersonIcon sx={{ fontSize: 60 }} />
          </Avatar>
        </Box>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Basic Information
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={student.name}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Grade"
                  value={student.grade}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <GradeIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Student ID"
                  value={student.id}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <SchoolIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={student.email}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={student.phone}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <PhoneIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  value={student.address}
                  variant="outlined"
                  multiline
                  rows={2}
                  InputProps={{
                    startAdornment: <LocationIcon color="action" sx={{ mr: 1 }} />
                  }}
                  disabled={!editMode}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
