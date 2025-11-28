import React from 'react';

import { Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

function Quiz1() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>
    </DashboardContent>
  );
}

export default Quiz1;