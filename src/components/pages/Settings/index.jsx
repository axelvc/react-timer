import React from 'react'

import { NumberInput } from './NumberInput'
import { SwitchButton } from './SwitchButton'
import { Link } from '../../common/Link'

import { useSettings, settingsSchema } from '../../providers/SettingsProvider'

import styles from './styles.module.scss'

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
    <main className={styles.container}>
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
          </React.Fragment>
        )
      })}
      <Link to="about" className={styles.aboutLink}>
        About app
      </Link>
    </main>
  )
}
