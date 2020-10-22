import React, { useState, useEffect } from 'react'

import { ProgressBar } from './ProgressBar'
import { ContDown } from './ContDown'
import { NextCycleInfo } from './NextCycleInfo'
import { IconButton } from '../../common/IconButton'
import PlayCircleIcon from '../../../assets/svg/play-circle-icon.svg'

import { useSettings } from '../../providers/SettingsProvider'
import { useRouter } from '../../providers/RouterProvider'
import { getMilliseconds } from './utils'

import styles from './styles.module.scss'

const UPDATE_INTERVAL_TIME = 100 // miliseconds

export const Timer = () => {
  const [route] = useRouter()
  const [settings] = useSettings()
  const [cycle, setCycle] = useState({
    running: false,
    paused: false,
    isRest: false,
    runs: 0,
    totalTime: 0,
    timeLeft: 0,
    endTime: null,
  })

  // Update cycle time when settings changed and the timer isn't running
  useEffect(() => {
    if (cycle.running) return

    setCycle({
      ...cycle,
      totalTime: getMilliseconds(settings.cycleTime),
      timeLeft: getMilliseconds(settings.cycleTime),
    })
  }, [settings])

  // Update timer
  useEffect(() => {
    if (!cycle.running || cycle.paused) return

    const timeoutId = setTimeout(() => {
      if (cycle.timeLeft < UPDATE_INTERVAL_TIME) {
        finishTimer()
      } else {
        setCycle((cycle) => ({
          ...cycle,
          timeLeft: cycle.endTime - new Date().getTime(),
        }))
      }
    }, UPDATE_INTERVAL_TIME)

    return () => clearTimeout(timeoutId)
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
    // End if is last seconds
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
    let newTime = getMilliseconds(settings.cycleTime)
    let isRest = false
    let runs = cycle.runs

    // Get long or normal rest time and update runs
    if (settings.useRestTime && !cycle.isRest) {
      isRest = true

      if (cycle.runs === settings.cyclesBeforeLongRest) {
        newTime = getMilliseconds(settings.longRestTime)
        runs = 0
      } else {
        newTime = getMilliseconds(settings.restTime)
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

  if (route !== '/') return null

  return (
    <main className={styles.container}>
      <ProgressBar
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
      </ProgressBar>
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
