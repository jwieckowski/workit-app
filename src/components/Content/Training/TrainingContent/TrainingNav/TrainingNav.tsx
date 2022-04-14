import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../../redux/reducer'
import { setActiveExercises } from '../../../../../data/actions/training'

export default function TrainingNav() {
  const dispatch = useDispatch()
  const { item } = useSelector((state: RootState) => state.routines)
  const { data } = useSelector((state: RootState) => state.exercises)
  const { exerciseID } = useSelector((state: RootState) => state.training)


  const getNextExerciseID = (step: number) => {
    if (item === null || item.exercises.length === 0) return
    const currentIndex = item.exercises.findIndex((element) => element._id === exerciseID)
    let nextIndex = currentIndex + step
    nextIndex = nextIndex === -1
      ? item.exercises.length - 1
      : nextIndex === item.exercises.length
        ? 0
        : nextIndex
    return  item.exercises[nextIndex]._id
  }

  const getExercise = () => {
    if (Object.keys(data).length === 1) return
    if (item === null || item.exercises.length === 0) return

    return Object.values(data).map(items => {
      return items.filter(item => item._id === exerciseID)
    }).filter(item => item.length !== 0)[0][0]
  }

  const handleClickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item === null || item.exercises.length === 0) return
    dispatch(setActiveExercises({ exerciseID: getNextExerciseID(1)}))
  }

  const handleClickPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item === null || item.exercises.length === 0) return
    dispatch(setActiveExercises({ exerciseID: getNextExerciseID(-1)}))
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{
        height: '20%'
      }}
    >
      <Grid
        item
        xs={3} md={4}
        container
        justifyContent='end'
      >
        <IconButton onClick={handleClickPrev}>
          <ArrowLeftIcon />
        </IconButton>
      </Grid>
      <Grid
        xs={6} md={4}
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography>
          {getExercise()?.name}
        </Typography>
        <Typography>
          {getExercise()?.type}
        </Typography>
      </Grid>
      <Grid
        xs={3} md={4}
        item
        container
        justifyContent='start'
      >
        <IconButton onClick={handleClickNext}>
          <ArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
