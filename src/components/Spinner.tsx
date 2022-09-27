import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', color: 'grey.500' }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
