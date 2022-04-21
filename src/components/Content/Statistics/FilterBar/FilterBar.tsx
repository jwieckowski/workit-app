import react from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../redux/reducer'

import {
  setDate,
  setPart,
  setExercise,
  setType
} from '../../../../data/actions/statistics'

export default function FilterBar() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.exercises)
  const { date, part, exercise, type } = useSelector((state: RootState) => state.statistics)

  const handleChange = (e: SelectChangeEvent) => {
    const selects = ['date-select', 'part-select', 'exercise-select', 'type-select']
    const sets = [
      setDate,
      setPart,
      setExercise,
      setType
    ]
    dispatch(sets[selects.indexOf(e.target.name)]({ id: e.target.value }))
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent="center"
      alignItems='center'
      gap={'20px'}
      style={{padding: '20px 0'}}
    >
      <Typography variant='h5'>
        Training parameters
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems='center'
      >
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="date-label">Date</InputLabel>
            <Select
              labelId="date-label"
              name="date-select"
              value={undefined}
              label="Date"
              onChange={handleChange}
              >
              <MenuItem value={'0'}>One week</MenuItem>
              <MenuItem value={'1'}>One month</MenuItem>
              <MenuItem value={'2'}>Six months</MenuItem>
              <MenuItem value={'3'}>One year</MenuItem>
              <MenuItem value={'4'}>All time</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="part-label">Part</InputLabel>
            <Select
              labelId="part-label"
              name="part-select"
              value={undefined}
              label="Part"
              onChange={handleChange}
            >
              {
                Object.keys(data).length !== 1 &&
                Object.keys(data).map((key, idx) => {
                  return (
                    <MenuItem value={idx.toString()}>{key}</MenuItem>
                    )
                  })
                }
                <MenuItem value={Object.keys(data).length !== 1 ? Object.keys(data).length.toString() : 0}>All parts</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="exercise-label">Exercise</InputLabel>
            <Select
              labelId="exercise-label"
              name="exercise-select"
              value={undefined}
              label="Exercise"
              onChange={handleChange}
            >
              { parseInt(part) !== Object.keys(data).length
                  ? Object.values(data[Object.keys(data)[parseInt(part)]]).map((val, idx) => {
                    return (
                      <MenuItem value={idx.toString()}>{val.name}</MenuItem>
                      )
                    })
                  : <MenuItem value={0}>All exercises</MenuItem>
                }
                <MenuItem value={Object.values(data[Object.keys(data)[parseInt(part)]]).length}>All exercises</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              name="type-select"
              value={undefined}
              label="Type"
              onChange={handleChange}
              >
              <MenuItem value={'0'}>Weights</MenuItem>
              <MenuItem value={'1'}>Reps</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
