import React from 'react'

import Grid from '@mui/material/Grid';
import Exercise from './Exercise'
import RoutineList from './RoutineList'

export default function Dashboard() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
    >
      <Exercise />
      <RoutineList />
    </Grid>
  )
}
