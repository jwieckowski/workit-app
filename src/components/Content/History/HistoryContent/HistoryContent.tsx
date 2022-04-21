import React from 'react'

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'

import HistoryItem from './HistoryItem'

export default function HistoryContent() {
  const { active } = useSelector((state: RootState) => state.history)
  const { data } = useSelector((state: RootState) => state.training)
  const exercises = useSelector((state: RootState) => state.exercises)

  const getExerciseName = (idx: number) => {
    const filtered = data[active].trainingSeries.filter((d, i) => i === idx)
    if (filtered.length === 0) return ''
    const exerciseID = filtered[0].exerciseID
    return Object.values(exercises.data).flat().filter(d => d._id === exerciseID)[0]?.name
  }

  return (
    <Grid
      container
      justifyContent='center'
    >
      <List style={{width: '60%'}}>
        {
          data.length !== 0 && data[active].trainingSeries.length !== 0
          ? data[active].trainingSeries.map((d, idx) => {
            return (
              <HistoryItem
                key={idx}
                idx={idx}
                name={getExerciseName(idx)}
                data={d.data}
              />
            )
          })
          : <Typography variant='h5' align='center'>No data recorded</Typography>

        }
      </List>
    </Grid>
  )
}
