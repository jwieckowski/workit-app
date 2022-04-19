import React, { useState, Dispatch, SetStateAction } from 'react'

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import MoreIcon from '@mui/icons-material/More';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'
import {
  startEditMode,
  addTrainingSeries,
  editTrainingSeries,
  deleteTrainingSeries
} from '../../../../data/actions/training'


export default function TrainingForm() {
  const dispatch = useDispatch()
  const [reps, setReps] = useState<string>('')
  const [weights, setWeights] = useState<string>('')
  const [series, setSeries] = useState<string>('')

  const { exerciseID, editMode } = useSelector((state: RootState) => state.training)

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (exerciseID === null) return

    dispatch(addTrainingSeries({
      exerciseID: exerciseID,
      weights: parseFloat(weights),
      reps: parseInt(reps)
    }))
  }

  const handleEditMode = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(startEditMode())
  }

  const handleEditSeries = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (exerciseID === null) return

    dispatch(editTrainingSeries({
      exerciseID: exerciseID,
      series: parseInt(series),
      weights: parseFloat(weights),
      reps: parseInt(reps)
    }))
    setSeries('')
  }

  const handleDeleteSeries = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (exerciseID === null) return

    dispatch(deleteTrainingSeries({
      exerciseID: exerciseID,
      series: parseInt(series)
    }))
    setSeries('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const setters: { [name: string]: Dispatch<SetStateAction<string>>} = {
      'reps': setReps,
      'weight': setWeights,
      'series': setSeries
    }
    setters[e.target.id](e.target.value)
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
      {
        editMode &&
        <TextField
        id="series"
        label="Series"
        variant="outlined"
        value={series}
        onChange={handleChange}
        />
      }
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
      {
        !editMode
        ? <>
            <IconButton
            onClick={handleSubmit}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            onClick={handleEditMode}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
            >
            <MoreIcon />
          </IconButton>
        </>
        : <>
          <IconButton
            onClick={handleEditSeries}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
            >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={handleDeleteSeries}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
            >
            <DeleteIcon />
          </IconButton>
        </>
      }
    </Grid>
  )
}
