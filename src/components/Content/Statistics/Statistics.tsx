import React from 'react'

import Grid from '@mui/material/Grid';

import FilterBar from './FilterBar'
import StatisticsChart from './StatisticsChart'

export default function Statistics() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
    >
      <FilterBar />
      <StatisticsChart />
    </Grid>
  )
}
