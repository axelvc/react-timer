import React from 'react'

import { RouterProvider, Route } from './components/context/RouterContext.jsx'
import { ThemeProvider } from './components/context/ThemeContext'
import { GlobalStyles } from './globalStyles'
import { Timer } from './components/pages/Timer'
import { ThemeSettings } from './components/pages/ThemeSettings'
import { Settings } from './components/pages/Settings'
import { About } from './components/pages/About'
import { Navbar } from './components/Navbar'

export const App = () => (
  <ThemeProvider>
    <GlobalStyles />
    <RouterProvider>
      <Route route="/">
        <Timer />
      </Route>
      <Route route="theme">
        <ThemeSettings />
      </Route>
      <Route route="settings">
        <Settings />
      </Route>
      <Route route="about">
        <About />
      </Route>
      <Navbar />
    </RouterProvider>
  </ThemeProvider>
)
