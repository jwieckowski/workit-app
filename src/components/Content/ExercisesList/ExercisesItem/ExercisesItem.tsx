import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { postFavorite, deleteFavorite } from '../../../../data/actions/favorites'
import { addRoutineExercise, deleteRoutineExercise } from '../../../../data/actions/routines'
import { RootState } from '../../../../redux/reducer'


import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface ExercisesProps {
  _id: number
  name: string
  type: string
}

interface Favorites {
  _id: number
}

interface ExercisesItemProps {
  idx: number
  part: string
  exercises: ExercisesProps[] | [],
  favorites: Favorites[] | []
}

export default function ExercisesItem({idx, part, exercises, favorites}: ExercisesItemProps) {
  const dispatch = useDispatch()
  const { item } = useSelector((state: RootState) => state.routines)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>, exerciseID: number) => {
    e.preventDefault()
    favorites.filter(d => d._id === exerciseID).length === 0
      ? dispatch(postFavorite({
        item: {
          _id: exerciseID
        }
      }))
      : dispatch(deleteFavorite({
        item: {
          _id: exerciseID
        }
      }))
  }

  const handleExerciseClick = (e: React.MouseEvent<HTMLButtonElement>, exerciseID: number) => {
    e.preventDefault()
    item?.exercises.filter(d => d._id === exerciseID).length === 0
      ? dispatch(addRoutineExercise({ _id: exerciseID }))
      : dispatch(deleteRoutineExercise({ _id: exerciseID }))
  }

  return (
    <li key={part}>
      <ul key={idx}>
        <ListSubheader style={{paddingTop: '10px'}}>
          <Typography variant='h5' style={{color: 'black'}}>
            {part}
          </Typography>
        </ListSubheader>
        {exercises.map((exercise) => (
          <ListItem key={exercise._id} style={{borderBottom: '1px solid black'}}>
            <ListItemText primary={
              <Typography variant='body1'>
                {exercise.name}
              </Typography>
              }
            />
            { item !== null &&
              <IconButton onClick={(e) => handleExerciseClick(e, exercise._id)}>
                {
                  item?.exercises.filter(d => d._id === exercise._id).length === 0
                    ? <CheckBoxOutlineBlankIcon/>
                    : <CheckBoxIcon/>
                }
              </IconButton>
            }
            <IconButton onClick={(e) => handleFavoriteClick(e, exercise._id)}>
              {
                favorites.filter(d => d._id === exercise._id).length === 0
                  ? <StarBorderIcon/>
                  : <StarIcon style={{color: '#d4af37'}}/>
              }
            </IconButton>
          </ListItem>
        ))}
      </ul>
    </li>
  );
}
