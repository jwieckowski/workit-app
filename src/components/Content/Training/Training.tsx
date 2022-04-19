import React from 'react'

import Grid from '@mui/material/Grid';

import TrainingBar from './TrainingBar'
import TrainingContent from './TrainingContent'
import TrainingForm from './TrainingForm'
// import TrainingDialog from './TrainingDialog'

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
      {/* <TrainingDialog /> */}
    </Grid>
  )
}
