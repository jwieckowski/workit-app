import React from 'react'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';

import { useTranslation } from 'react-i18next'

export default function Page404() {
  const { t } = useTranslation()

  return (
    <Grid
      container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px'
      }}
    >
      <Typography component='h2' style={{fontSize: '2rem'}}>
        {t('common-error')}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        endIcon={<RefreshIcon />}
      >
        {t('common:refresh')}
      </Button>
    </Grid>
  )
}
