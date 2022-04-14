import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TimerIcon from '@mui/icons-material/Timer';
import StopCircle from '@mui/icons-material/StopCircle';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'
import { finishTraining, postTraining } from '../../../../data/actions/training'
import { setActiveRoutine } from '../../../../data/actions/routines'

export default function TrainingBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const routines = useSelector((state: RootState) => state.routines)
  const { item } = useSelector((state: RootState) => state.training)

  const handleFinish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item === null) return

    dispatch(finishTraining())
    dispatch(setActiveRoutine({ _id: null }))
    dispatch(postTraining({
      item: item
    }))
    navigate('/workit', { replace: true })
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{
        height: "15%"
      }}
    >
      <Grid
        item
        xs={4}
        container
        justifyContent='center'
        alignItems='center'
      >
        <TimerIcon />
        <Typography>
          {} min
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h5'>
          {routines.item?.name}
        </Typography>
        <Typography variant='body2'>
          Last training:
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        container
        justifyContent='center'
        alignItems='center'
      >
        <IconButton onClick={handleFinish}>
          <StopCircle />
        </IconButton>
        <Typography>Finish training</Typography>
      </Grid>
    </Grid>
  )
}
