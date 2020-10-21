import React from 'react'

import { InputBox } from '../../common/InputBox'

import { useTheme } from '../../providers/ThemeProvider'

import styles from './styles.module.scss'

export const ThemeSettings = () => {
  const [theme, setTheme] = useTheme()

  return (
    <main>
      {Object.entries(theme).map(([key, color]) => (
        <InputBox key={key} title={key}>
          <input
            id={key}
            type="color"
            defaultValue={color}
            onBlur={(ev) => setTheme(key, ev.target.value)}
            className={
              key === 'background' ? styles.borderedInput : styles.input
            }
          />
        </InputBox>
      ))}
    </main>
  )
}
