import React from 'react';

import Grid from '@mui/material/Grid';

import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducer'

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  // responsive: true,
  aspectRation: 1,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Training data',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const tempData = [
  [400, 200, 160, 780, 1200, -10, 900],
  [-400, 700, 60, 380, -20, 780, 500]
]

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: tempData[0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: tempData[1],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function StatisticsChart() {
  const { date, part, exercise, type } = useSelector((state: RootState) => state.statistics)

  console.log(date, part, exercise, type)

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{width: '70%', marginLeft: '15%'}}
    >
      <Line
        // options={options}
        options={{
          aspectRatio: 2,  // this would be a 1:1 aspect ratio
        }}
        data={data}
        redraw={true}
      />
    </Grid>
  )
}
