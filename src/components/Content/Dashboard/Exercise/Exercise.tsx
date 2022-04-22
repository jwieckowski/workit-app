import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

import { useTranslation } from 'react-i18next'

export default function Exercise() {
  const { t } = useTranslation()

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{
        width: '100%',
        height: '10%',
        cursor: 'pointer'
      }}
    >
      <Link
        to='/workit-app/exercises'
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <IconButton aria-label='exercises' size='large'>
          <DirectionsBikeIcon />
        </IconButton>
        <Typography variant='h4' style={{paddingLeft: '20px'}}>{t('common:exercises')}</Typography>
      </Link>
    </Grid>
  )
}
