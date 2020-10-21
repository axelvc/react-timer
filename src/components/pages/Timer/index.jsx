import React, { useState, useEffect } from 'react'

import { TimerCircle } from './TimerCircle'
import { ContDown } from './ContDown'
import { NextCycleInfo } from './NextCycleInfo'
import { IconButton } from '../../common/IconButton'
import PlayCircleIcon from '../../../assets/svg/play-circle-icon.svg'

import { useSettings } from '../../providers/SettingsProvider'

import styles from './styles.module.scss'

const MINUTE_IN_MILISECONDS = 60000
const UPDATE_INTERVAL_TIME = 100 // miliseconds

export const Timer = () => {
  const [settings] = useSettings()
  const [cycle, setCycle] = useState({
    running: false,
    paused: false,
    isRest: false,
    runs: 0,
    totalTime: settings.cycleTime * MINUTE_IN_MILISECONDS,
    timeLeft: settings.cycleTime * MINUTE_IN_MILISECONDS,
    endTime: null,
  })

  // update timer
  useEffect(() => {
    if (!cycle.running || cycle.paused) return

    const invervalId = setInterval(() => {
      if (cycle.timeLeft < UPDATE_INTERVAL_TIME) {
        finishTimer()
      } else {
        setCycle((cycle) => ({
          ...cycle,
          timeLeft: cycle.endTime - new Date().getTime(),
        }))
      }
    }, UPDATE_INTERVAL_TIME)

    return () => clearInterval(invervalId)
  }, [cycle])

  function playTimer() {
    const timeLeft = cycle.paused ? cycle.timeLeft : cycle.totalTime

    setCycle({
      ...cycle,
      running: true,
      paused: false,
      endTime: new Date().getTime() + timeLeft,
    })
  }

  function pauseTimer() {
    // end if is last seconds
    if (cycle.timeLeft < 1000) {
      finishTimer()
    } else {
      setCycle({
        ...cycle,
        paused: true,
      })
    }
  }

  function finishTimer() {
    let newTime = settings.cycleTime * MINUTE_IN_MILISECONDS
    let isRest = false
    let runs = cycle.runs

    // get long or normal rest time and update runs
    if (settings.useRestTime && !cycle.isRest) {
      isRest = true

      if (cycle.runs === settings.longRestAfter) {
        newTime = settings.longRestTime * MINUTE_IN_MILISECONDS
        runs = 0
      } else {
        newTime = settings.restTime * MINUTE_IN_MILISECONDS
        runs += 1
      }
    }

    setCycle({
      runs,
      isRest,
      paused: false,
      running: false,
      totalTime: newTime,
      timeLeft: newTime,
      endTime: null,
    })
  }

  return (
    <main className={styles.container}>
      <TimerCircle
        isRest={cycle.isRest}
        totalTime={cycle.totalTime}
        timeLeft={cycle.timeLeft}
      >
        {cycle.running ? (
          <ContDown
            isRest={cycle.isRest}
            paused={cycle.paused}
            timeLeft={cycle.timeLeft}
            onPlay={playTimer}
            onPause={pauseTimer}
            onCancel={finishTimer}
          />
        ) : (
          <IconButton
            className={styles.largePlayButton}
            alternative={cycle.isRest}
            onClick={playTimer}
          >
            <PlayCircleIcon />
          </IconButton>
        )}
      </TimerCircle>
      {!cycle.running && (
        <NextCycleInfo
          totalTime={cycle.totalTime}
          useRestTime={settings.useRestTime}
          isRest={cycle.isRest}
        />
      )}
    </main>
  )
}
