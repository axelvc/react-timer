import React from 'react'

import { NumberInput } from './NumberInput'
import { SwitchButton } from './SwitchButton'
import { Link } from '../../common/Link'

import { useSettings } from '../../providers/SettingsProvider'

import styles from './styles.module.scss'

export const Settings = () => {
  const [settings, setSettings, schema] = useSettings()

  function handleDisabled(dependencies) {
    for (const key in dependencies) {
      if (settings[key] !== dependencies[key]) {
        return true
      }
    }

    return false
  }

  return (
    <main className={styles.container}>
      {Object.entries(settings).map(([key, value]) => {
        const { type, defaultValue, dependencies } = schema[key]

        return (
          <React.Fragment key={key}>
            {type === 'number' ? (
              <NumberInput
                title={key}
                value={value}
                defaultValue={defaultValue}
                onChange={setSettings}
                disabled={dependencies && handleDisabled(dependencies)}
              />
            ) : (
              <SwitchButton title={key} active={value} onChange={setSettings} />
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
