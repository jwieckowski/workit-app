import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';


interface ItemProps {
  name: string
  message: string
}


export default function RoutineItem({name, message}: ItemProps) {
  return (
    <ListItem style={{borderBottom: '1px solid black'}}>
      <ListItemText
        primary={
          <Typography variant='body1'>
            {name}
          </Typography>
        }
        secondary={
          <Typography variant='body2'>
            {message}
          </Typography>
        }
      />
      <IconButton>
        <ListIcon />
      </IconButton>
    </ListItem>
  );
}