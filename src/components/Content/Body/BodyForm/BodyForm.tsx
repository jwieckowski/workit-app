import react, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { postBody } from '../../../../data/actions/body'
import { RootState } from '../../../../redux/reducer'

import { getCurrentDate } from '../../helpers'

import { useTranslation } from 'react-i18next'

export default function BodyForm() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.body)
  const [currentDate, setCurrentDate] = useState<string>('')
  const [weight, setWeight] = useState<string>('0')

  const { t } = useTranslation()

  useEffect(() => {
    setCurrentDate(getCurrentDate())
  }, [])

  useEffect(() => {
    setWeight(data.length !== 0 ? data[0]?.weight.toString() : '0')
  }, [data])

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (currentDate === '' || weight === '') return

    const id = data.filter(d => d.date === currentDate).length !== 0
      ? data.filter(d => d.date === currentDate)[0]._id
      : data.length+1

    const newItem = {
      _id: id,
      weight: +weight,
      date: currentDate
    }
    dispatch(postBody({item: newItem}))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.target.id === 'date'
      ? setCurrentDate(e.target.value)
      : setWeight(e.target.value)
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='start'
      gap="20px"
      style={{
        width: '50%',
        marginTop: '100px'
      }}
    >
      <TextField
        id="date"
        label={t("body:date")}
        variant="outlined"
        value={currentDate}
        onChange={handleChange}
        />
      <TextField
        id="weight"
        label={t("body:weight")}
        variant="outlined"
        value={weight}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        {t("common:submit")}
      </Button>
    </Grid>
  );
}
