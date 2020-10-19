import React, { useState, useEffect } from 'react'

import { TimerCircle } from './TimerCircle'
import { ContDown } from './ContDown'
import { NextCycleInfo } from './NextCycleInfo'
import { Container, LargePlayButton } from './styles'
import PlayCircleIcon from '../../../assets/svg/play-circle-icon.svg'

import { useSettings } from '../../context/SettingsContext'

const MINUTE_IN_MILISECONDS = 60000
const UPDATE_INTERVAL_TIME = 100 // miliseconds

export const Timer = () => {
  const [settings] = useSettings()
  const [cycle, setCycle] = useState({
    running: false,
    paused: false,
    isRest: false,
    runs: 0,
    totalTime: settings.cycleTime.value * MINUTE_IN_MILISECONDS,
    timeLeft: settings.cycleTime.value * MINUTE_IN_MILISECONDS,
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
    let newTime = settings.cycleTime.value * MINUTE_IN_MILISECONDS
    let isRest = false
    let runs = cycle.runs

    // get long or normal rest time and update runs
    if (settings.useRestTime.value && !cycle.isRest) {
      isRest = true

      if (cycle.runs === settings.longRestAfter.value) {
        newTime = settings.longRestTime.value * MINUTE_IN_MILISECONDS
        runs = 0
      } else {
        newTime = settings.restTime.value * MINUTE_IN_MILISECONDS
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
    <Container>
      <TimerCircle
        isRest={cycle.isRest}
        totalTime={cycle.totalTime}
        timeLeft={cycle.timeLeft}
        running={cycle.running}
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
          <LargePlayButton alternate={cycle.isRest} onClick={playTimer}>
            <PlayCircleIcon />
          </LargePlayButton>
        )}
      </TimerCircle>
      {!cycle.running && (
        <NextCycleInfo
          totalTime={cycle.totalTime}
          useRestTime={settings.useRestTime.value}
          isRest={cycle.isRest}
        />
      )}
    </Container>
  )
}
