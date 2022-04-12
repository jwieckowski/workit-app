import React from 'react'

import Grid from '@mui/material/Grid';

import TrainingBar from './TrainingBar'
import TrainingContent from './TrainingContent'
import TrainingForm from './TrainingForm'

export default function Training() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
    >
      <TrainingBar />
      <TrainingContent />
      <TrainingForm />
    </Grid>
  )
}
