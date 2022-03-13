import * as React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BodyForm() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      gap="20px"
      style={{
        width: '50%',
        marginTop: '100px'
      }}
    >
      <TextField id="date" label="Date" variant="outlined" />
      <TextField id="weight" label="Weight" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </Grid>
  );
}
