import React, { Dispatch, SetStateAction } from 'react'

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';

import { useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/reducer'

interface PropsTypes {
  activeExercise: number;
  setActiveExercise: Dispatch<SetStateAction<number>>;
}

export default function CirclesNav({ activeExercise, setActiveExercise }: PropsTypes) {
  const { item }  = useSelector((state: RootState) => state.routines)

  const handleClickCircle = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault()
    if (item === null || item.exercises.length === 0) return
    setActiveExercise(id)
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
        item?.exercises.map((e, idx) => {
          return (
            <IconButton
              key={idx}
              onClick={(e) => handleClickCircle(e, idx)}
              style={{ color: activeExercise === idx ? 'blue' : 'black' }}
            >
              <CircleIcon />
            </IconButton>
          )
        })
      }
    </Grid>
  )
}
