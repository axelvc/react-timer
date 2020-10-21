import React from 'react'

import { RouterProvider, Route } from './components/providers/RouterProvider'
import { SettingsProvider } from './components/providers/SettingsProvider'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { Timer } from './components/pages/Timer'
import { ThemeSettings } from './components/pages/ThemeSettings'
import { Settings } from './components/pages/Settings'
import { About } from './components/pages/About'
import { Navbar } from './components/Navbar'

import './globalStyles.scss'

export const App = () => (
  <SettingsProvider>
    <ThemeProvider>
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
  </SettingsProvider>
)
