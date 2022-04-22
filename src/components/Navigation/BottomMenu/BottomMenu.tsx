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

import { useTranslation } from 'react-i18next';

export default function BottomMenu() {
  const { t } = useTranslation()
  const [value, setValue] = useState<number>(0);
  const location = useLocation();

  const urls = [
    '/workit-app',
    '/workit-app/statistics',
    '/workit-app/history',
    '/workit-app/body',
    '/workit-app/more'
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
          label={t('menu:training')}
          icon={<HomeIcon />}
          component={Link}
          to='/workit-app'
        />
        <BottomNavigationAction
          label={t('menu:statistics')}
          icon={<QueryStatsIcon />}
          component={Link}
          to='/workit-app/statistics'
        />
        <BottomNavigationAction
          label={t('menu:history')}
          icon={<HistoryIcon />}
          component={Link}
          to='/workit-app/history'
        />
        <BottomNavigationAction
          label={t('menu:body')}
          icon={<MonitorWeightIcon />}
          component={Link}
          to='/workit-app/body'
        />
        <BottomNavigationAction
          label={t('menu:more')}
          icon={<SummarizeIcon />}
          component={Link}
          to='/workit-app/more'
        />

      </BottomNavigation>
    </Box>
  );
}
