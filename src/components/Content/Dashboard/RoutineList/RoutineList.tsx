import react, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { fetchRoutines, openRoutineDialog } from '../../../../data/actions/routines'
import { RootState } from '../../../../redux/reducer'

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import RoutineItem from './RoutineItem'
import RoutineDialog from './RoutineDialog'
import ExerciseStartDialog  from './ExerciseStartDialog';

import Spinner from '../../../UI/Spinner'
import Page404 from '../../../UI/Page404'

export default function RoutineList() {
  const { loading, data, error } = useSelector((state: RootState) => state.routines)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoutines())
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(openRoutineDialog())
  }

  let content = <Spinner />
  if (!loading) {
    if (!error) {
      content = (
        <>
          {
            <List sx={{ width: '80%', padding: '0 10%'}}>
              <ListSubheader
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6'>
                  Training routines
                </Typography>
                <IconButton onClick={handleClick}>
                  <AddCircleIcon fontSize='large'/>
                </IconButton>
              </ListSubheader>
              <Divider />
              {
                data.map((routine, idx) => {
                  return (
                    <RoutineItem
                      key={idx}
                      _id={routine._id}
                      name={routine.name}
                      exercises={routine.exercises}
                    />
                  )
                })
              }
              <RoutineDialog />
              <ExerciseStartDialog />
            </List>
          }
        </>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems={loading || error ? 'center' : 'start'}
      style={{height: '90%'}}
    >
      {content}
    </Grid>
  );
}