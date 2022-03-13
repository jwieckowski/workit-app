import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <Grid
      container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px'
      }}
    >
      <Typography component='h2' style={{fontSize: '2rem'}}>
        Loading
      </Typography>
      <CircularProgress />
    </Grid>
  )
}
