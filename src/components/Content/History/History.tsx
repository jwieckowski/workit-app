import React from 'react'

import Grid from '@mui/material/Grid';

import HistoryBar from './HistoryBar'
import HistoryContent from './HistoryContent'

import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducer'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

export default function History() {
  const { loading, error } = useSelector((state: RootState) => state.training)

  let content = <Spinner />
  if (!loading) {
    if (!error) {
      content = (
        <>
          <HistoryBar />
          <HistoryContent />
        </>
      )
    } else {
      content = <Page404 />
    }
  }


  return (
    <Grid
      container
      direction='column'
      justifyContent={loading || error ? 'center' : 'start'}
    >
      {content}
    </Grid>
  )
}
