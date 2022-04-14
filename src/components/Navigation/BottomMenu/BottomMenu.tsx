import react, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HistoryIcon from '@mui/icons-material/History';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HomeIcon from '@mui/icons-material/Home';

export default function BottomMenu() {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();

  const urls = [
    '/workit',
    '/workit/statistics',
    '/workit/history',
    '/workit/body',
    '/workit/more'
  ]

  useEffect(() => {
    setValue(urls.indexOf(location.pathname))
  }, [location.pathname])

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Training"
          icon={<HomeIcon />}
          component={Link}
          to='/workit'
        />
        <BottomNavigationAction
          label="Statistics"
          icon={<QueryStatsIcon />}
          component={Link}
          to='/workit/statistics'
        />
        <BottomNavigationAction
          label="History"
          icon={<HistoryIcon />}
          component={Link}
          to='/workit/history'
        />
        <BottomNavigationAction
          label="Body"
          icon={<MonitorWeightIcon />}
          component={Link}
          to='/workit/body'
        />
        <BottomNavigationAction
          label="More"
          icon={<SummarizeIcon />}
          component={Link}
          to='/workit/more'
        />

      </BottomNavigation>
    </Box>
  );
}
