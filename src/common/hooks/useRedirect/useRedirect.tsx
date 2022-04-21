import React, { useState, useEffect } from 'react';

import { RootState } from '../../../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setActiveRoutine } from '../../../data/actions/routines'
import { openActiveTrainingDialog } from '../../../data/actions/training'

export default function useRedirect() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState<string>('')

  const { item } = useSelector((state: RootState) => state.routines)
  const { active } = useSelector((state: RootState) => state.training)

  function checkRoutineExercises () {
    if (item === null) return
    if (currentPath === '/workit/exercises') {
      dispatch(setActiveRoutine({ _id: null }))
    }
  }

  function checkActiveTraining () {
    if (!active) return

    if (currentPath === '/workit/training') {
      navigate('/workit/training', { replace: true })
      dispatch(openActiveTrainingDialog({
        url: location.pathname
      }))
    }
  }

    useEffect(() => {
        checkRoutineExercises()
        checkActiveTraining()

        setCurrentPath(location.pathname)
    }, [location.pathname])

    return {

    }
};
