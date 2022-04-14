import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'
import { addTrainingSeries } from '../../../../data/actions/training'


export default function TrainingForm() {
  const dispatch = useDispatch()
  const [reps, setReps] = useState<string>('')
  const [weights, setWeights] = useState<string>('')

  const { exerciseID } = useSelector((state: RootState) => state.training)

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (exerciseID === null) return

    dispatch(addTrainingSeries({
      exerciseID: exerciseID,
      weights: parseFloat(weights),
      reps: parseFloat(reps)
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.target.id === 'reps'
      ? setReps(e.target.value)
      : setWeights(e.target.value)
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      gap="20px"
      style={{
        height: "20%"
      }}
    >
      <TextField
        id="reps"
        label="Reps"
        variant="outlined"
        value={reps}
        onChange={handleChange}
      />
      <TextField
        id="weight"
        label="Weight"
        variant="outlined"
        value={weights}
        onChange={handleChange}
      />
      <IconButton
        onClick={handleSubmit}
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        <CheckIcon />
      </IconButton>
    </Grid>
  )
}
