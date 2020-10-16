import React, { useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { defaultTheme } from '../../globalStyles/variables'

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(defaultTheme)

  const changeTheme = (newTheme) => {
    setTheme({
      ...theme,
      ...newTheme,
    })
  }

  return <Provider theme={{ ...theme, changeTheme }} {...props} />
}
