import React, { ReactChildren, ReactChild } from 'react';

import { Grid } from '@material-ui/core'
import NavigationBar from '../../Navigation/NavigationBar'

interface LayoutChildren {
    children: ReactChildren | ReactChild
}

export default function Layout({children}: LayoutChildren) {
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
