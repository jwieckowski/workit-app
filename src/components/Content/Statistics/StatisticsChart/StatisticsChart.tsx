import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'
import { TrainingDataItem } from '../../../../common/types/training'
import { ExercisesList } from '../../../../common/types/exercises'
import { StatisticsState } from '../../../../common/types/statistics'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useTranslation } from 'react-i18next'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StatisticsChart() {
  const { t } = useTranslation()
  const [chartData, setChartData]  = useState<any>({ labels: [], datasets: []});

  const { date, part, exercise, type } = useSelector((state: RootState) => state.statistics)
  const { data } = useSelector((state: RootState) => state.training)
  const exercises = useSelector((state: RootState) => state.exercises)

  useEffect(() => {
  const params = {
    labels: [],
    datasets: [
      {
        label: t('statistics:training-data'),
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      }
    ]
  }
  setChartData(params)
  }, []);

  useEffect(() => {
    const newData = filterData(data, exercises.data, { date, part, exercise, type })
    const params = {
      labels: data.filter((d, idx) => idx < newData.length).map(d => d.date).reverse(),
      datasets: [
        {
          label: t('statistics:training-data'),
          data: newData.reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }
      ]
    }
    setChartData(params)
  }, [date, part, exercise, type]);

  const filterByDate = (data: TrainingDataItem[], date: number) => {
    if (date === 4) return data

    // one week
    if (date === 0) {
      const offsetDate = new Date()
      offsetDate.setDate(offsetDate.getDate() - 7)
      return data.filter(d => new Date(d.date) > offsetDate)
    }

    // one month
    if (date === 1) {
      const offsetDate = new Date()
      offsetDate.setMonth(offsetDate.getMonth() - 1)
      return data.filter(d => new Date(d.date) > offsetDate)
    }

    // six months
    if (date === 2) {
      const offsetDate = new Date()
      offsetDate.setMonth(offsetDate.getMonth() - 6)
      return data.filter(d => new Date(d.date) > offsetDate)
    }

    // one year
    if (date === 3) {
      const offsetDate = new Date()
      offsetDate.setFullYear(offsetDate.getFullYear() - 1)
      return data.filter(d => new Date(d.date) > offsetDate)
    }
    return data
  }

  const filterByPart = (data: TrainingDataItem[], exercises: ExercisesList, part: number) => {
    if (part === Object.keys(exercises).length) return data
    const exercisesID = Object.values(exercises)[part].map(e => e._id)
    return data.map(d => {
      return {
        ...d,
        trainingSeries: d.trainingSeries.filter(s => exercisesID.includes(s.exerciseID))
      }
    })
  }

  const filterByExercise = (data: TrainingDataItem[], exercises: ExercisesList, part: number, exercise: number) => {
    if (part === Object.keys(exercises).length) return data

    if (exercise === Object.values(exercises[Object.keys(exercises)[part]]).length) return data

    const exerciseID = Object.values(exercises)[part].filter((e, idx) => idx === exercise)[0]?._id
    return data.map(d => {
      return {
        ...d,
        trainingSeries: d.trainingSeries.filter(s => s.exerciseID === exerciseID)
      }
    })
  }

  const filterByType = (data: TrainingDataItem[], type: number) => {
    const res = type === 0
    ? data.map(d => d.trainingSeries.map(s => {
      return s.data.map(a => a.weights).reduce((a=0, b) => a + b)
      }))
      : data.map(d => d.trainingSeries.map(s => {
        return s.data.map(a => a.reps).reduce((a=0, b) => a + b)
      }))
    return res.map(r => {
      return r.length !== 0
        ? r.reduce((a, b) => a + b)
        : 0
    })
  }

  const filterData = (data: TrainingDataItem[], exercises: ExercisesList, options: StatisticsState) => {
    const { date, part, exercise, type } = options
    const byDate = filterByDate(data, parseInt(date))
    const byPart = filterByPart(byDate, exercises, parseInt(part))
    const byExercise = filterByExercise(byPart, exercises, parseInt(part), parseInt(exercise))
    const byType = filterByType(byExercise, parseInt(type))
    return byType
  }

  const options = {
    // responsive: true,
    aspectRation: 2,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('statistics:training-data'),
      },
    },
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{width: '70%', marginLeft: '15%'}}
    >
      <Line
        options={options}
        data={chartData}
        redraw={true}
      />
    </Grid>
  )
}
