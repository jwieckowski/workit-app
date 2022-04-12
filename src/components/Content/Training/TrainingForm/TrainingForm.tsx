import React from 'react'

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

export default function TrainingForm() {

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // const id = data.filter(d => d.date === currentDate).length !== 0
    //   ? data.filter(d => d.date === currentDate)[0]._id
    //   : data.length+1

    // const newItem = {
    //   _id: id,
    //   weight: +weight,
    //   date: currentDate
    // }
    // dispatch(postBody({item: newItem}))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // e.target.id === 'date'
    //   ? setCurrentDate(e.target.value)
    //   : setWeight(e.target.value)
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      gap="20px"
      style={{
        height: "20%"
      }}
    >
      <TextField
        id="reps"
        label="Reps"
        variant="outlined"
        // value={weight}
        onChange={handleChange}
      />
      <TextField
        id="weight"
        label="Weight"
        variant="outlined"
        // value={weight}
        onChange={handleChange}
      />
      <IconButton
        onClick={handleSubmit}
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        <CheckIcon />
      </IconButton>
    </Grid>
  )
}
