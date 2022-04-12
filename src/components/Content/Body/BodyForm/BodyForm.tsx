import react, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { postBody } from '../../../../data/actions/body'
import { RootState } from '../../../../redux/reducer'

import { getCurrentDate } from '../../helpers'

export default function BodyForm() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.body)
  const [currentDate, setCurrentDate] = useState<string>('')
  const [weight, setWeight] = useState<string>('0')

  useEffect(() => {
    setCurrentDate(getCurrentDate())
  }, [])

  useEffect(() => {
    setWeight(data.length !== 0 ? data[0]?.weight.toString() : '0')
  }, [data])


  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
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
        label="Date"
        variant="outlined"
        value={currentDate}
        onChange={handleChange}
        />
      <TextField
        id="weight"
        label="Weight"
        variant="outlined"
        value={weight}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Grid>
  );
}
