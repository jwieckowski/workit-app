import React from 'react'

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'

export default function HistoryContent() {
  return (
    <Grid
      container
      justifyContent='center'
    >
      <List style={{width: '60%'}}>
        <ListItem style={{ borderBottom: '1px solid black'}}>
          <ListItemText
            primary={
              <Typography>
                Nazwa ćwiczenia
              </Typography>
            }
            secondary={
              <Typography>
                10x8, 10x8, 10x8, 10x8
              </Typography>
            }
            />
        </ListItem>
        <ListItem style={{ borderBottom: '1px solid black'}}>
          <ListItemText
            primary={
              <Typography>
                Nazwa ćwiczenia
              </Typography>
            }
            secondary={
              <Typography>
                10x8, 10x8, 10x8, 10x8
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Grid>
  )
}
