import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/reducer'
import { formatRepsWeights } from '../../../helpers'

export default function TrainingResults() {
  const { data, item, exerciseID } = useSelector((state: RootState) => state.training)
  const routines = useSelector((state: RootState) => state.routines)

  const getHistoryExerciseResults = () => {
    const routineHistoryData = data.filter(d => d.routineID === routines.item?._id)
    if (routineHistoryData.length === 0) return []

    return routineHistoryData.map(d => {
      return {
        ...d.trainingSeries.filter(s => s.exerciseID === exerciseID)[0],
        date: d.date
      }
    }).filter(d => Object.keys(d).includes('data'))
  }

  const getCurrentExerciseResults = () => {
    const result = item?.trainingSeries.filter(s => s.exerciseID === exerciseID)
    return result !== undefined && result?.length !== 0
      ? [
        {
          date: item?.date,
          data: result[0].data
        }
      ]
      : []
  }

  const getResultsText = () => {
    const results = getHistoryExerciseResults()
    const currentResults = getCurrentExerciseResults()

    if (results.length === 0 && currentResults?.length === 0) {
      return <Typography variant='h6'>No data recorded</Typography>
    }

    const allResults = currentResults !== undefined
      ? [...currentResults, ...results]
      : [...results]

    return allResults.map((r, idx) => {
      return (
        <Typography key={idx}>
          {r.date}: {formatRepsWeights(r.data)}
        </Typography>
      )
    })
  }

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      style={{
          height: '50%'
      }}
    >
      <Grid
        item
        xs={12} md={6}
        container
        alignItems='center'
        justifyContent='center'
      >
        {/* https://icons8.com/icons/set/sport */}
        <img
        src="https://img.icons8.com/ios/100/000000/strength.png"
        alt="Gym icon"
        />
      </Grid>
      <Grid
        item
        xs={12} md={6}
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        {getResultsText()}
      </Grid>
    </Grid>
  )
}
