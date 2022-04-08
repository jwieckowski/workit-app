import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import ExercisesItem from './ExercisesItem';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducer'
import { fetchExercises } from '../../../data/actions/exercises'
import { fetchFavorites } from '../../../data/actions/favorites'

import Spinner from '../../UI/Spinner'
import Page404 from '../../UI/Page404'

export default function ExercisesList() {
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state: RootState) => state.exercises)
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    dispatch(fetchExercises())
    dispatch(fetchFavorites())
  }, [])

  let content = <Spinner />

  if (!loading && !favorites.loading) {
    if (!error && !favorites.error) {
        content = (
          <List
            sx={{
              width: '80%',
              position: 'relative',
              overflow: 'auto',
              maxHeight: '80%',
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
      style={{ maxHeight: '80%'}}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        style= {{ padding: '20px'}}
      >
        <Typography variant='h4'>
          Exercises list
        </Typography>
      </Grid>
      {content}
    </Grid>
  );
}
