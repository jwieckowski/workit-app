import * as React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenterTwoTone';
import TodayIcon from '@mui/icons-material/Today';

import LanguageSelection from '../../UI/LanguageSelection'
import Calendar from '../../Content/Calendar'

import { useDispatch } from "react-redux"
import { openCalendar } from '../../../data/actions/calendar'

export default function Header() {
  const dispatch = useDispatch()

  return (
    <Grid container>
      <AppBar position="static" style={{padding: '10px 0'}}>
        <Toolbar>
          <Grid
            item
            xs={1}
            container
            justifyContent='end'
            alignItems='center'
          >
            <Link to='/workit'>
              <IconButton >
                <FitnessCenterIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid
            item
            xs={7}
            container
            justifyContent='start'
            alignItems='center'
          >
            <Typography variant='h4'>
                WorkIT
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <LanguageSelection />
            <IconButton onClick={() => dispatch(openCalendar())}>
              <TodayIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Calendar />
    </Grid>
  );
}
