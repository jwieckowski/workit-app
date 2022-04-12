import React, { ReactChildren, ReactChild, useEffect, useState } from 'react';

import { Grid } from '@material-ui/core'
import NavigationBar from '../../Navigation/NavigationBar'

import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducer'
import { setActiveRoutine } from '../../../data/actions/routines'

interface LayoutChildren {
    children: ReactChildren | ReactChild
}

export default function Layout({children}: LayoutChildren) {
  const location = useLocation()
  const dispatch = useDispatch()
  const [currentPath, setCurrentPath] = useState<string>('')
  const state = useSelector((state: RootState) => state)

  // TODO do individual hook for this
  useEffect(() => {

    if (state.routines.item !== null) {
      if (currentPath === '/workit/exercises')
      dispatch(setActiveRoutine({ _id: null }))
    }
    setCurrentPath(location.pathname)
  }, [location.pathname])

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
