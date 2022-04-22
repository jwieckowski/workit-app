import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducer'
import { closeRoutineExercises } from '../../../data/actions/exercises'
import { postRoutineExercises } from '../../../data/actions/routines'

import ExercisesItem from './ExercisesItem';
import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

import { useTranslation } from 'react-i18next'

export default function ExercisesList() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, data, error, openForRoutine } = useSelector((state: RootState) => state.exercises)
  const { item } = useSelector((state: RootState) => state.routines)
  const favorites = useSelector((state: RootState) => state.favorites)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item === null) return

    await dispatch(postRoutineExercises({
      item: item
    }))
    dispatch(closeRoutineExercises())
    navigate('/workit-app', { replace: true })
  }

  let content = <Spinner />

  if (!loading && !favorites.loading) {
    if (!error && !favorites.error) {
        content = (
          <List
            sx={{
              width: '80%',
              position: 'relative',
              overflow: 'auto',
              maxHeight: '75%',
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
            >
            {Object.keys(data).map((key, idx) => (
              <ExercisesItem
                idx={idx}
                part={key}
                exercises={data[key]}
                favorites={favorites.data}
                />
            ))}
          </List>
        )
    } else {
      content = <Page404 />
    }
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
      style={{ maxHeight: '95%'}}
    >
      <Grid
        container
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        style= {{ padding: '10px'}}
        >
        <Grid
          container
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          style= {{ padding: '5px'}}
        >
          <Typography variant='h4'>
            {t('common:exercises-list')}
          </Typography>
          {
            openForRoutine &&
            <Typography variant='h6' style={{ padding: '10px' }}>
            {item?.name}
          </Typography>
          }
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection='column'
        justifyContent={loading || error ? 'center' : 'start'}
        alignItems='center'
        style= {{ padding: '10px', height: '75%'}}
      >
        {content}
      </Grid>
      {
        openForRoutine &&
        <Grid style={{ paddingTop: '10px' }}>
          <Button variant='contained' onClick={handleClick}>
            {t('common:submit')}
          </Button>
        </Grid>
      }
    </Grid>
  );
}
