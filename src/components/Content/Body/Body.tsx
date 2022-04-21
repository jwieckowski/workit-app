import React, { useEffect } from 'react'

import Grid from '@mui/material/Grid';
import BodyTable from './BodyTable'
import BodyForm from './BodyForm'

import { useDispatch, useSelector } from 'react-redux'
import { fetchBody } from '../../../data/actions/body'
import { RootState } from '../../../redux/reducer'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'


export default function Body() {
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state: RootState) => state.body)

  useEffect(() => {
    dispatch(fetchBody())
  }, [])

  let content = <Spinner />
  if (!loading) {
    if (!error) {
      content = (
        <>
          <BodyTable />
          <BodyForm />
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
      justifyContent={loading || error ? 'center': 'start'}
      alignItems='center'
    >
      {content}
    </Grid>
  )
}
