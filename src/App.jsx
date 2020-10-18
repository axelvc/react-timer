import React from 'react'

import { RouterProvider, Route } from './components/context/RouterContext'
import { ThemeProvider } from './components/context/ThemeContext'
import { SettingsProvider } from './components/context/SettingsContext'
import { GlobalStyles } from './globalStyles'
import { Timer } from './components/pages/Timer'
import { ThemeSettings } from './components/pages/ThemeSettings'
import { Settings } from './components/pages/Settings'
import { About } from './components/pages/About'
import { Navbar } from './components/Navbar'

export const App = () => (
  <ThemeProvider>
    <GlobalStyles />
    <SettingsProvider>
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
    </SettingsProvider>
  </ThemeProvider>
)
