import React from 'react'

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/reducer'
import { setActiveExercise } from '../../../../../data/actions/training'

export default function CirclesNav() {
  const dispatch = useDispatch()
  const { item }  = useSelector((state: RootState) => state.routines)
  const { exerciseID } = useSelector((state: RootState) => state.training)

  const handleClickCircle = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault()
    if (item === null || item.exercises.length === 0) return
    dispatch(setActiveExercise({ exerciseID: id }))
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{
        height: '30%'
      }}
    >
      {
        item?.exercises.map((i, idx) => {
          return (
            <IconButton
              key={idx}
              onClick={(e) => handleClickCircle(e, i._id)}
              style={{ color: exerciseID === i._id ? 'blue' : 'black' }}
            >
              <CircleIcon />
            </IconButton>
          )
        })
      }
    </Grid>
  )
}
