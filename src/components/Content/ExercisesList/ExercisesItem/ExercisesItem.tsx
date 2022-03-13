import * as React from 'react';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface ExercisesProps {
  name: string
}

interface ExercisesItemProps {
  idx: number
  part: string
  exercises: ExercisesProps[] | []
}

export default function ExercisesItem({idx, part, exercises}: ExercisesItemProps) {
  return (
    <li key={idx}>
      <ul>
        <ListSubheader style={{paddingTop: '10px'}}>
          <Typography variant='h5' style={{color: 'black'}}>
            {part}
          </Typography>
        </ListSubheader>
        {exercises.map((exercise, idx2) => (
          <ListItem key={`${idx}_${idx2}`} style={{borderBottom: '1px solid black'}}>
            <ListItemText primary={
              <Typography variant='body1'>
                {exercise.name}
              </Typography>
              }
            />
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </ListItem>
        ))}
      </ul>
    </li>
  );
}
