import { useState } from 'react'

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../../redux/reducer'
import { closeCalendar } from '../../../data/actions/calendar'

import { useTranslation } from 'react-i18next'

export default function Calendar() {
  const [value, setValue] = useState<Date | null>(new Date());
  const dispatch = useDispatch()

  const { open } = useSelector((state: RootState) => state.calendar)
  const { t } = useTranslation()

  return (
    <Dialog
      open={open}
      onBackdropClick={() => dispatch(closeCalendar())}
    >
      <DialogTitle style={{textAlign: 'center'}}>{t('calendar:calendar')}</DialogTitle>

       <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Week picker"
          value={value}
          onChange={(newValue: Date | null) => {
            setValue(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
    </Dialog>
  )
}

