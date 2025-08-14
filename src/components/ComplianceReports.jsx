// src/components/ComplianceReports.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  LinearProgress,
  Button
} from '@mui/material';
import { ArrowBack as BackIcon } from '@mui/icons-material';

export default function ComplianceReports() {
  const navigate = useNavigate();

  // Sample compliance data - replace with actual API data
  const complianceData = [
    { 
      category: "Curriculum Standards", 
      complianceRate: 92,
      compliantSchools: 850,
      nonCompliantSchools: 75
    },
    { 
      category: "Teacher Qualifications", 
      complianceRate: 87,
      compliantSchools: 800,
      nonCompliantSchools: 125
    },
    { 
      category: "Facility Requirements", 
      complianceRate: 78,
      compliantSchools: 720,
      nonCompliantSchools: 205
    },
    { 
      category: "Safety Regulations", 
      complianceRate: 95,
      compliantSchools: 875,
      nonCompliantSchools: 50
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button
          startIcon={<BackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" component="h1">
          Compliance Reports
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Compliance Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {complianceData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.category}
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: item.complianceRate >= 90 ? 'success.main' : 
                          item.complianceRate >= 75 ? 'warning.main' : 'error.main'
                  }}
                >
                  {item.complianceRate}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Compliance Rate
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={item.complianceRate} 
                    sx={{ 
                      height: 8,
                      mb: 1,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: item.complianceRate >= 90 ? 'success.main' : 
                                        item.complianceRate >= 75 ? 'warning.main' : 'error.main'
                      }
                    }} 
                  />
                  <Typography variant="body2">
                    {item.compliantSchools} compliant • {item.nonCompliantSchools} non-compliant
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detailed Compliance Section */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Detailed Compliance Overview
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This section would display detailed compliance metrics, trends over time, 
            and comparison between different regions or school types.
          </Typography>
          {/* Placeholder for charts/data tables */}
          <Box 
            sx={{ 
              height: 300, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: 'grey.100',
              borderRadius: 1,
              mt: 2
            }}
          >
            <Typography color="text.secondary">
              Compliance visualization charts would appear here
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Non-Compliance Breakdown */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Non-Compliance Breakdown
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Analysis of common reasons for non-compliance and recommended actions.
          </Typography>
          {/* Placeholder for non-compliance data */}
          <Box 
            sx={{ 
              height: 200, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: 'grey.100',
              borderRadius: 1,
              mt: 2
            }}
          >
            <Typography color="text.secondary">
              Non-compliance analysis would appear here
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
