import React from 'react'

import { RouterProvider, Route } from './components/providers/RouterProvider'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { SettingsProvider } from './components/providers/SettingsProvider'
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
