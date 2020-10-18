import React from 'react'

import { NumberInput } from './NumberInput'
import { SwitchButton } from './SwitchButton'

import { useSettings } from '../../context/SettingsContext'

export const Settings = () => {
  const [settings, setSettings] = useSettings()

  function handleDisabled(dependencies) {
    for (const key in dependencies) {
      if (settings[key].value !== dependencies[key]) {
        return true
      }
    }

    return false
  }

  function handleChange(key, value) {
    setSettings({
      ...settings,
      [key]: {
        ...settings[key],
        value,
      },
    })
  }

  return (
    <main>
      {Object.entries(settings).map(
        ([key, { type, value, defaultValue, dependencies }], index, arr) => (
          <React.Fragment key={key}>
            {type === 'number' ? (
              <NumberInput
                title={key}
                value={value}
                defaultValue={defaultValue}
                onChange={handleChange}
                disabled={dependencies && handleDisabled(dependencies)}
              />
            ) : (
              <SwitchButton
                title={key}
                active={value}
                onChange={handleChange}
              />
            )}
            {index !== arr.length - 1 && <br />}
          </React.Fragment>
        ),
      )}
    </main>
  )
}
