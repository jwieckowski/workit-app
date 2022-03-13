import React from 'react'

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

export default function More() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
      gap={'30px'}
    >
      <Typography variant='h5' style={{paddingTop: '30px'}}>
        Settings
      </Typography>
      <List style={{width: '50%'}}>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                Records
              </Typography>
              } />
          </ListItemButton>
        </ListItem>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkAddIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                Favorites
              </Typography>
              } />
          </ListItemButton>
        </ListItem>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                Contact
              </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                About
              </Typography>
              } />
          </ListItemButton>
        </ListItem>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                Application
              </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  )
}
