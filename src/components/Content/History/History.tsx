import React from 'react'

import Grid from '@mui/material/Grid';

import HistoryBar from './HistoryBar'
import HistoryContent from './HistoryContent'

export default function History() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
    >
      <HistoryBar />
      <HistoryContent />
    </Grid>
  )
}
