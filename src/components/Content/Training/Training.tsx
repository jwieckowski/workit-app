import React, { useEffect } from 'react'

import Grid from '@mui/material/Grid';

import TrainingBar from './TrainingBar'
import TrainingContent from './TrainingContent'
import TrainingForm from './TrainingForm'
// import TrainingDialog from './TrainingDialog'

import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducer'
import { useNavigate } from 'react-router-dom'

export default function Training() {
  const navigate = useNavigate()
  const { active } = useSelector((state: RootState) => state.training)

  useEffect(() => {
    if (!active) navigate('/workit', { replace: true })
  }, [])

  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
    >
      <TrainingBar />
      <TrainingContent />
      <TrainingForm />
      {/* <TrainingDialog /> */}
    </Grid>
  )
}
