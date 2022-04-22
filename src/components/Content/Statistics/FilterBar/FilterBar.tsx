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

import { useTranslation } from 'react-i18next'

export default function FilterBar() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.exercises)
  const { part } = useSelector((state: RootState) => state.statistics)

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
        {t('statistics:params')}
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems='center'
      >
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="date-label">{t('statistics:date')}</InputLabel>
            <Select
              labelId="date-label"
              name="date-select"
              value={undefined}
              label={t('statistics:date')}
              onChange={handleChange}
              >
              <MenuItem value={'0'}>{t('statistics:week')}</MenuItem>
              <MenuItem value={'1'}>{t('statistics:month')}</MenuItem>
              <MenuItem value={'2'}>{t('statistics:six-months')}</MenuItem>
              <MenuItem value={'3'}>{t('statistics:year')}</MenuItem>
              <MenuItem value={'4'}>{t('statistics:all-time')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="part-label">{t('statistics:part')}</InputLabel>
            <Select
              labelId="part-label"
              name="part-select"
              value={undefined}
              label={t('statistics:part')}
              onChange={handleChange}
            >
              {
                Object.keys(data).length !== 1
                  ? [...Object.keys(data), t('statistics:all-parts')].map((key, idx) => {
                      return (
                        <MenuItem value={idx.toString()}>{key}</MenuItem>
                      )
                  })
                  : <MenuItem value='0'>{t('statistics:all-parts')}</MenuItem>
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="exercise-label">{t('statistics:exercise')}</InputLabel>
            <Select
              labelId="exercise-label"
              name="exercise-select"
              value={undefined}
              label={t('statistics:exercise')}
              onChange={handleChange}
            >
              { parseInt(part) !== Object.keys(data).length
                  ? [...Object.values(data[Object.keys(data)[parseInt(part)]]), {name: t('statistics:all-exercises')}].map((val, idx) => {
                    return (
                      <MenuItem value={idx.toString()}>{val.name}</MenuItem>
                      )
                    })
                  : <MenuItem value={0}>{t('statistics:all-exercises')}</MenuItem>
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={5} md={2} lg={2} justifyContent='end'>
          <FormControl fullWidth>
            <InputLabel id="type-label">{t('statistics:type')}</InputLabel>
            <Select
              labelId="type-label"
              name="type-select"
              value={undefined}
              label={t('statistics:type')}
              onChange={handleChange}
              >
              <MenuItem value={'0'}>{t('common:weights')}</MenuItem>
              <MenuItem value={'1'}>{t('common:reps')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
