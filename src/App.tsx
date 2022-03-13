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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/workit' element={<Dashboard />} />
          <Route path='/workit/exercises' element={<Exercises />} />
          <Route path='/workit/more' element={<More />} />
          <Route path='/workit/body' element={<Body />} />
          <Route path='/workit/history' element={<History />} />
          <Route path='/workit/statistics' element={<Statistics />} />
          <Route path='/workit/training' element={<Training />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
