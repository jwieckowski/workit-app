import * as React from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import RoutineItem from './RoutineItem'

const routines = [
  {
    name: "Routine 1",
    message: "Last training: 01.03.2022"
  },
  {
    name: "Routine 2",
    message: "Last training: 02.03.2022"
  },
  {
    name: "Routine 3",
    message: "Last training: 03.03.2022"
  },
]

export default function RoutineList() {
  return (
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
        <IconButton>
          <AddCircleIcon fontSize='large'/>
        </IconButton>
      </ListSubheader>
      <Divider />
      {
        routines.map((routine, idx) => {
          return (
            <RoutineItem
              key={idx}
              name={routine.name}
              message={routine.message}
            />
          )
        })
      }
    </List>
  );
}