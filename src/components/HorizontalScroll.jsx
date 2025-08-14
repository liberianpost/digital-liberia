// src/components/HorizontalScroll.js
import React from 'react';
import { Box } from '@mui/material';

export function HorizontalScroll({ children }) {
  return (
    <Box sx={{
      display: 'flex',
      overflowX: 'auto',
      py: 1,
      px: 1,
      '&::-webkit-scrollbar': {
        height: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '3px',
      },
    }}>
      {children}
    </Box>
  );
}
