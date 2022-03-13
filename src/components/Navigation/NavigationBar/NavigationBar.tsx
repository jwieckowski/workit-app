import React from 'react'
import { Grid } from '@material-ui/core'

import Header from '../Header'
import BottomMenu from '../BottomMenu'

interface LayoutType {
  position: string
}

export default function NavigationBar({position}: LayoutType) {
  return (
    <Grid item xs={12}>
      {position === 'top' ? <Header /> : <BottomMenu />}
    </Grid>
  )
}
