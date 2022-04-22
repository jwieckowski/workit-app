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

import { useTranslation } from 'react-i18next'

export default function More() {
  const { t } = useTranslation()

  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      alignItems='center'
      gap={'30px'}
    >
      <Typography variant='h5' style={{paddingTop: '30px'}}>
        {t('more:settings')}
      </Typography>
      <List style={{width: '50%'}}>
        <ListItem style={{borderBottom: '1px solid black'}}>
          <ListItemButton>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='h6'>
                {t('more:records')}
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
                {t('more:favorites')}
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
                {t('more:contact')}
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
                {t('more:about')}
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
                {t('more:application')}
              </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  )
}
