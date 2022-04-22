import react from 'react'

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../redux/reducer'
import { closeTrainingDialog } from '../../../../../data/actions/routines'

import { useTranslation } from 'react-i18next'

export default function ExerciseStartDialog() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { startTrainingOpen } = useSelector((state: RootState) => state.routines)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(closeTrainingDialog())
  }

  return (
    <Dialog
      open={startTrainingOpen}
      onBackdropClick={() => dispatch(closeTrainingDialog())}
    >
      <DialogTitle style={{textAlign: 'center'}}>{t('training:start-training')}</DialogTitle>
      <Grid
        container
        direction='column'
        justifyContent='center'
        gap="20px"
        style={{
          width: '100%',
          padding: '50px'
        }}
      >
        <Typography>
          {t('training:start-info')}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          {t('common:close')}
        </Button>
      </Grid>
    </Dialog>
  )
}

