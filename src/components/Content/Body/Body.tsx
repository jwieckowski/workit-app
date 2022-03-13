import React from 'react'

import Grid from '@mui/material/Grid';
import BodyTable from './BodyTable'
import BodyForm from './BodyForm'

export default function Body() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
    >
      <BodyTable />
      <BodyForm />
    </Grid>
  )
}
