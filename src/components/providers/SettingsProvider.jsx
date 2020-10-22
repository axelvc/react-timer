import React, { createContext } from 'react'
import { useStorage, handleUseContext } from './common'

const SettingsContext = createContext()

const NAME = 'settings'
export const SETTINGS_SCHEMA = {
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
  cyclesBeforeLongRest: {
    type: 'number',
    defaultValue: 4,
    dependencies: {
      useRestTime: true,
    },
  },
}

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useStorage(NAME)

  // Set default settings if there isn't in storage
  if (!settings) {
    const defaultSettings = {}

    for (const key in SETTINGS_SCHEMA) {
      defaultSettings[key] = SETTINGS_SCHEMA[key].defaultValue
    }

    setSettings(defaultSettings)
  }

  function changeSettings(key, newValue) {
    setSettings({
      ...settings,
      [key]: newValue,
    })
  }

  return (
    <SettingsContext.Provider
      value={[settings, changeSettings, SETTINGS_SCHEMA]}
      {...props}
    />
  )
}

export const useSettings = () => handleUseContext(SettingsContext, NAME)
