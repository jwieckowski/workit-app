import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import ExercisesItem from './ExercisesItem';

const data = [
  {
    part: 'Chest',
    exercises: [
      {
        name: 'Exercise 1',
      },
      {
        name: 'Exercise 2',
      },
      {
        name: 'Exercise 3',
      },
      {
        name: 'Exercise 4',
      },
      {
        name: 'Exercise 5',
      },
    ]
  },
  {
    part: 'Back',
    exercises: [
      {
        name: 'Exercise 1',
      },
      {
        name: 'Exercise 2',
      },
      {
        name: 'Exercise 3',
      },
      {
        name: 'Exercise 4',
      },
      {
        name: 'Exercise 5',
      },
    ]
  },
  {
    part: 'Biceps',
    exercises: [
      {
        name: 'Exercise 1',
      },
      {
        name: 'Exercise 2',
      },
      {
        name: 'Exercise 3',
      },
      {
        name: 'Exercise 4',
      },
      {
        name: 'Exercise 5',
      },
    ]
  },
]

export default function ExercisesList() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
      gap='20px'
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style={{height: '10%'}}
      >
        <Typography variant='h4'>
          Exercises list
        </Typography>
      </Grid>
      <List
        sx={{
          width: '80%',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '50%',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
        >
        {data.map(({part, exercises}, idx) => (
          <ExercisesItem
            idx={idx}
            part={part}
            exercises={exercises}
          />
        ))}
      </List>
    </Grid>
  );
}
