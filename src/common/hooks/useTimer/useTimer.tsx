import React, { useState, useEffect } from 'react';

export default function useTimer() {
  const [minutes, setMinutes] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: number | ReturnType<typeof setInterval>  = 0;
    if (isActive) {
      interval = setInterval(() => {
        setMinutes(m => m + 1);
      }, 60000);
    } else if (!isActive && minutes !== 0) {
      if (typeof(interval) !== 'number') {
          clearInterval(interval);
      }
    }
    return () => {
        if (typeof(interval) !== 'number') clearInterval(interval);
    }
  }, [isActive]);

    return {
      minutes,
      toggle,
      reset
    }
};
