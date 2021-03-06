import React, { ReactChildren, ReactChild, useEffect } from 'react';

import { Grid } from '@material-ui/core'
import NavigationBar from '../../Navigation/NavigationBar'

import { useDispatch } from 'react-redux'
import { fetchTrainings } from '../../../data/actions/training'
import { fetchExercises } from '../../../data/actions/exercises'
import { fetchFavorites } from '../../../data/actions/favorites'

import useRedirect from '../../../common/hooks/useRedirect'

interface LayoutChildren {
    children: ReactChildren | ReactChild
}

export default function Layout({children}: LayoutChildren) {
  const dispatch = useDispatch()
  useRedirect()

  useEffect(() => {
    dispatch(fetchTrainings())
    dispatch(fetchExercises())
    dispatch(fetchFavorites())
  }, [])

  return (
    <Grid container >
        <NavigationBar position='top' />
        <Grid container style={{height: '85vh'}}>
          { children }
        </Grid>
        <NavigationBar position='bottom' />
    </Grid>
  )
}
