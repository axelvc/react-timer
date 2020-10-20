import React, { createContext, useState, useContext } from 'react'

const SettingsContext = createContext()

export const settingsSchema = {
  cycleTime: {
    type: 'number',
    defaultValue: 25,
  },
  useRestTime: {
    type: 'boolean',
    defaultValue: true,
  },
  restTime: {
    type: 'number',
    defaultValue: 5,
    dependencies: {
      useRestTime: true,
    },
  },
  longRestTime: {
    type: 'number',
    defaultValue: 20,
    dependencies: {
      useRestTime: true,
    },
  },
  longRestAfter: {
    type: 'number',
    defaultValue: 4,
    dependencies: {
      useRestTime: true,
    },
  },
}

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = JSON.parse(localStorage.getItem('settings')) || {}

    for (const key in settingsSchema) {
      savedSettings[key] = settingsSchema[key].defaultValue
    }

    return savedSettings
  })

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
