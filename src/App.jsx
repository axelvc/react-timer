import React from 'react'

import { ThemeProvider } from './components/Theme'
import { GlobalStyles } from './globalStyles'

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <p>hello world</p>
    </ThemeProvider>
  )
}
