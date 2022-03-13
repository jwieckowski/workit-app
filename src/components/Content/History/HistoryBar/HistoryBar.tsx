import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function HistoryBar() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems='center'
      style={{padding: '30px 0'}}
    >
      <Grid container item xs={3} md={3} lg={2} justifyContent='end'>
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
      </Grid>
      <Grid container item xs={6} md={6} lg={4} justifyContent='center'>
        <Typography variant='h6' align='center'>
          Training routine name and date
        </Typography>
      </Grid>
      <Grid container item xs={3} md={3} lg={2} justifyContent='start'>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
