import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'

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

import { useTranslation } from 'react-i18next'

export default function TrainingForm() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [reps, setReps] = useState<string>('')
  const [weights, setWeights] = useState<string>('')
  const [series, setSeries] = useState<string>('')

  const { data, item, exerciseID, editMode } = useSelector((state: RootState) => state.training)
  const routines = useSelector((state: RootState) => state.routines)

  const getLastTrainingData = () => {
    const lastTraining = data.filter(d => d.routineID === routines.item?._id && d.trainingSeries.length !== 0)[0]

    if (lastTraining.trainingSeries.length === 0) return null
    return lastTraining.trainingSeries.filter(s => s.exerciseID === exerciseID)[0]?.data[0]
  }

  useEffect(() => {
    const last = getLastTrainingData()
    const current = item?.trainingSeries.filter(s => s.exerciseID === exerciseID)

    if (current === undefined || current?.length === 0) {
      if (!last) {
        setReps('')
        setWeights('')
        return
      }
      setReps(last.reps.toString())
      setWeights(last.weights.toString())
    } else {
      const stats = current[0].data[current[0].data.length - 1]
      setReps(stats.reps.toString())
      setWeights(stats.weights.toString())
    }
  }, [exerciseID])

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
      style={{
        height: "20%"
      }}
    >
      {
        editMode &&
        <Grid
          item
          container
          xs={2}
          justifyContent='center'
        >
        <TextField
          id="series"
          label={t('common:series')}
          variant="outlined"
          value={series}
          onChange={handleChange}
          />
        </Grid>
      }
      <Grid
        item
        container
        xs={2}
        justifyContent='center'
      >
        <TextField
          id="weight"
          label={t('common:weights')}
          variant="outlined"
          value={weights}
          onChange={handleChange}
        />
      </Grid>
      <Grid
        item
        container
        xs={2}
        justifyContent='center'
      >
        <TextField
          id="reps"
          label={t('common:reps')}
          variant="outlined"
          value={reps}
          onChange={handleChange}
        />
      </Grid>
      {
        !editMode
        ? <>
            <Grid
              item
              container
              md={1} xs={2}
              justifyContent='center'
            >
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
            <Grid
              item
              container
              md={1} xs={2}
              justifyContent='center'
            >
              <IconButton
                onClick={handleEditMode}
                style={{
                  backgroundColor: 'black',
                  color: 'white'
                }}
                >
                <MoreIcon />
              </IconButton>
            </Grid>
        </>
        : <>
            <Grid
              item
              container
              md={1} xs={2}
              justifyContent='center'
            >
              <IconButton
                onClick={handleEditSeries}
                style={{
                  backgroundColor: 'black',
                  color: 'white'
                }}
                >
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              container
              md={1} xs={2}
              justifyContent='center'
            >
              <IconButton
                onClick={handleDeleteSeries}
                style={{
                  backgroundColor: 'black',
                  color: 'white'
                }}
                >
                <DeleteIcon />
              </IconButton>
            </Grid>
        </>
      }
    </Grid>
  )
}
