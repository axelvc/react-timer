import React, { useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { defaultTheme } from '../../globalStyles/variables'

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(defaultTheme)

  const changeTheme = (newValues) => {
    const newTheme = {
      ...theme,
      ...newValues,
    }

    localStorage.setItem('theme', JSON.stringify(newTheme))
    setTheme(newTheme)
  }

  return <Provider theme={{ ...theme, changeTheme }} {...props} />
}
