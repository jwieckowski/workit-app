import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TrainingResults() {

  const formatTrainingResults = () => {
    
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{
          height: '50%'
      }}
    >
      <Grid
        item
        xs={12} md={6}
        container
        alignItems='center'
        justifyContent='center'
      >
        {/* https://icons8.com/icons/set/sport */}
        <img
        src="https://img.icons8.com/ios/100/000000/strength.png"
        alt="Gym icon"
        />
      </Grid>
      <Grid
        item
        xs={12} md={6}
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
        <Typography>
          2022-04-22: 10x50, 10x50, 10x50, 10x50
        </Typography>
      </Grid>
    </Grid>
  )
}
