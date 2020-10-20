import React from 'react'

import { NumberInput } from './NumberInput'
import { SwitchButton } from './SwitchButton'
import { Main, AboutLink } from './styles'

import { useSettings, settingsSchema } from '../../providers/SettingsProvider'

export const Settings = () => {
  const [settings, updateSettings] = useSettings()

  function handleDisabled(dependencies) {
    for (const key in dependencies) {
      if (settings[key] !== dependencies[key]) {
        return true
      }
    }

    return false
  }

  function handleChange(key, value) {
    updateSettings({ [key]: value })
  }

  return (
    <Main>
      {Object.entries(settings).map(([key, value]) => {
        const { type, defaultValue, dependencies } = settingsSchema[key]

        return (
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
            <br />
          </React.Fragment>
        )
      })}
      <AboutLink to="about">About app</AboutLink>
    </Main>
  )
}
