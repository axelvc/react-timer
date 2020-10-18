import React, { createContext, useState, useContext } from 'react'

const SettingsContext = createContext()

const defaultSettings = JSON.parse(localStorage.getItem('settings')) || {
  cycleTime: {
    type: 'number',
    value: 25,
  },
  useRestTime: {
    type: 'boolean',
    value: true,
  },
  restTime: {
    type: 'number',
    value: 5,
    dependencies: {
      useRestTime: true,
    },
  },
  longRestTime: {
    type: 'number',
    value: 20,
    dependencies: {
      useRestTime: true,
    },
  },
  cyclesForALongRest: {
    type: 'number',
    value: 4,
    dependencies: {
      useRestTime: true,
    },
  },
}

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useState(defaultSettings)

  function changeSettings(newValues) {
    const newSettings = {
      ...settings,
      ...newValues,
    }

    setSettings(newSettings)
    localStorage.setItem('settings', JSON.stringify(newSettings))
  }

  return (
    <SettingsContext.Provider value={[settings, changeSettings]} {...props} />
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
