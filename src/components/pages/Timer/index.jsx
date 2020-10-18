import React, { useState, useEffect } from 'react'

import { NextCycleInfo } from './NextCycleInfo'
import { useSettings } from '../../context/SettingsContext'

export const Timer = () => {
  const [settings] = useSettings()
  const [cycle, setCycle] = useState({
    running: false,
    paused: false,
    isRest: false,
    runs: 0,
    totalTime: settings.cycleTime.value * 60,
    timeLeft: settings.cycleTime.value * 60,
  })

  useEffect(() => {
    if (!cycle.running || cycle.paused) return

    const ref = setTimeout(updateTimer, 1000)
    return () => clearTimeout(ref)
  }, [cycle])

  function playTimer() {
    setCycle({
      ...cycle,
      running: true,
      paused: false,
    })
  }

  function pauseTimer() {
    setCycle({
      ...cycle,
      paused: true,
    })
  }

  function updateTimer() {
    if (cycle.timeLeft > 0) {
      setCycle({
        ...cycle,
        timeLeft: cycle.timeLeft - 1,
      })
    } else {
      endTimer()
    }
  }

  function endTimer() {
    let nexTime = settings.cycleTime.value * 60
    let isRest = false
    let runs = cycle.runs

    if (settings.useRestTime.value && !cycle.isRest) {
      isRest = true

      if (cycle.runs === settings.cyclesForALongRest.value) {
        nexTime = settings.longRestTime.value * 60
        runs = 0
      } else {
        runs += 1
        nexTime = settings.restTime.value * 60
      }
    }

    setCycle({
      ...cycle,
      running: false,
      paused: false,
      timeLeft: nexTime,
      totalTime: nexTime,
      isRest,
      runs,
    })
  }

  function humanTime() {
    const { timeLeft } = cycle
    const fixTwoDigits = (n) => n.toString().padStart(2, 0)

    const minutes = fixTwoDigits(Math.floor(timeLeft / 60))
    const seconds = fixTwoDigits(timeLeft % 60)

    return `${minutes}:${seconds}`
  }

  return (
    <main>
      <div>
        {cycle.running ? (
          <div>
            <p>{humanTime()}</p>
            <button onClick={cycle.paused ? playTimer : pauseTimer}>
              {cycle.paused ? 'continue' : 'pause'}
            </button>
            <button onClick={endTimer}>cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={playTimer}>play</button>
          </div>
        )}
      </div>
      {!cycle.running && (
        <NextCycleInfo
          totalTime={cycle.totalTime}
          useRestTime={settings.useRestTime.value}
          isRest={cycle.isRest}
        />
      )}
    </main>
  )
}
