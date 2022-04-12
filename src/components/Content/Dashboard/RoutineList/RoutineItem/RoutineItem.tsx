import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { deleteRoutine, openRoutineDialog, setActiveRoutine } from '../../../../../data/actions/routines'
import { openRoutineExercises } from '../../../../../data/actions/exercises'
import { startTraining } from '../../../../../data/actions/training'
interface ItemProps {
  _id: number
  name: string
}

export default function RoutineItem({_id, name}: ItemProps) {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setActiveRoutine({ _id }))
    dispatch(startTraining())
    navigate('/workit/training')
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(openRoutineExercises())
    dispatch(setActiveRoutine({ _id }))
    navigate('/workit/exercises', { replace: true })
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(openRoutineDialog({
      updating: true,
      _id
    }))
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteRoutine({
      item: {
        _id,
        name,
        exercises: []
      }
    }))
  }

  return (
    <ListItem style={{borderBottom: '1px solid black', cursor: 'pointer'}}>
      <ListItemText
        primary={
          <Typography variant='body1'>
            {name}
          </Typography>
        }
        secondary={
          <Typography variant='body2'>
            Last training:
          </Typography>
        }
      />
      <IconButton onClick={handleStart}>
        <PlayCircleIcon />
      </IconButton>
      <IconButton onClick={handleClick}>
        <ListIcon />
      </IconButton>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}