import react from 'react'

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'

import { postTraining, finishTraining, closeActiveTrainingDialog } from '../../../../data/actions/training'
import { setActiveRoutine } from '../../../../data/actions/routines'

import { useTranslation } from 'react-i18next'

export default function TrainingDialog() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { item, open, url } = useSelector((state: RootState) => state.training)

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (item === null) return

    dispatch(finishTraining())
    dispatch(setActiveRoutine({ _id: null }))
    await dispatch(postTraining({
        item: item
    }))
    dispatch(closeActiveTrainingDialog())

    navigate(url, { replace: true })
}

const handleDiscard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    dispatch(finishTraining())
    dispatch(setActiveRoutine({ _id: null }))
    dispatch(closeActiveTrainingDialog())

    navigate(url, { replace: true })
}

  return (
    <Dialog
      open={open}
      onBackdropClick={() => dispatch(closeActiveTrainingDialog())}
    >
      <DialogTitle style={{textAlign: 'center'}}>{t('training:leave')}</DialogTitle>
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
          {t('training:leave-message')}
        </Typography>
        <Button
          variant="contained"
          onClick={handleSave}
        >
          {t('training:save')}
        </Button>
        <Button
          variant="contained"
          onClick={handleDiscard}
        >
          {t('training:discard')}
        </Button>
      </Grid>
    </Dialog>
  )
}

