import React, { useEffect } from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { useDispatch } from 'react-redux'
import { fetchExercises } from '../../../../data/actions/exercises'

import TrainingNav from './TrainingNav'
import TrainingResults from './TrainingResults'
import CirclesNav from './CirclesNav'

export default function TrainingContent() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExercises())
  }, [])

  return (
    <Grid
      component={Paper}
      elevation={4}
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
      style={{
        height: "65%"
      }}
    >
      <TrainingNav />
      <TrainingResults />
      <CirclesNav />
    </Grid>
  )
}
