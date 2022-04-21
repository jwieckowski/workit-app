import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setActiveRoutine } from '../../../data/actions/routines'

export default function useRedirect() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState<string>('')

  // function homeChanged(callback) {
  //   if (currentPath === '/workit')
  //       console.log('Home location changed');
  // }

//   function reset() {
//     setMinutes(0);
//     setIsActive(false);
//   }

    useEffect(() => {
        // homeChanged()
        console.log(`Location changed: ${location.pathname}`)
        console.dir(location)

        setCurrentPath(location.pathname)
    }, [location.pathname])


    return {
        location,
        // homeChanged
    }
};
