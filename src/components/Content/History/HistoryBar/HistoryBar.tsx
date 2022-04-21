import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'
import { getNextTraining, getPrevTraining } from '../../../../data/actions/history'

export default function HistoryBar() {
  const dispatch = useDispatch()
  const { active } = useSelector((state: RootState) => state.history)
  const { data } = useSelector((state: RootState) => state.training)
  const routines = useSelector((state: RootState) => state.routines)

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (active === 0) return
    dispatch(getNextTraining())
  }

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (active === data.length - 1) return
    dispatch(getPrevTraining())
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems='center'
      style={{padding: '30px 0'}}
    >
      <Grid container item xs={3} md={3} lg={2} justifyContent='end'>
        <IconButton onClick={handlePrev}>
          <ArrowLeftIcon />
        </IconButton>
      </Grid>
      <Grid
        container
        item
        xs={6} md={6} lg={4}
        direction='column'
        justifyContent='center'
      >
        <Typography variant='h6' align='center'>
          {routines.data.filter(d => d._id === data[active]?.routineID)[0]?.name}
        </Typography>
        <Typography variant='body2' align='center'>
           {data[active]?.date}
        </Typography>
      </Grid>
      <Grid container item xs={3} md={3} lg={2} justifyContent='start'>
        <IconButton onClick={handleNext}>
          <ArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
