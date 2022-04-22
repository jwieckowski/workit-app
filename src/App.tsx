import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Content/Layout'
import Dashboard from './components/Content/Dashboard'
import Statistics from './components/Content/Statistics'
import History from './components/Content/History'
import Body from './components/Content/Body'
import More from './components/Content/More'
import Exercises from './components/Content/ExercisesList'
import Training from './components/Content/Training'

import './common/locales'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/workit-app' element={<Dashboard />} />
          <Route path='/workit-app/exercises' element={<Exercises />} />
          <Route path='/workit-app/more' element={<More />} />
          <Route path='/workit-app/body' element={<Body />} />
          <Route path='/workit-app/history' element={<History />} />
          <Route path='/workit-app/statistics' element={<Statistics />} />
          <Route path='/workit-app/training' element={<Training />} />
          <Route path="*" element={<Navigate to='/workit-app' replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
