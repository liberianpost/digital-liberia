// src/components/StudentRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper
} from '@mui/material';
import { 
  ArrowBack as BackIcon,
  Save as SaveIcon
} from '@mui/icons-material';

export default function StudentRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    parentName: '',
    parentContact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add validation, API call, etc.
    navigate(-1); // Go back after submission
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
            Student Registration
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form Content */}
      <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1, overflow: 'auto', p: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel>Grade</InputLabel>
                <Select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  label="Grade"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <MenuItem key={i+1} value={`Grade ${i+1}`}>Grade {i+1}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Parent/Guardian Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parent Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parent Contact"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                fullWidth
              >
                Register Student
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
