import React, { createContext } from 'react'
import { useStorage, handleUseContext } from './common'

const ThemeContext = createContext()

const NAME = 'theme'
const THEME_KEYS = [
  'background',
  'textPrimary',
  'textSecondary',
  'workPrimary',
  'workSecondary',
  'restPrimary',
  'restSecondary',
]

function keyToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function getCssColor(key) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--color-${keyToKebab(key)}`)
    .trim()
}

function updateCssColor(key, color) {
  document.documentElement.style.setProperty(
    `--color-${keyToKebab(key)}`,
    color,
  )
}

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useStorage(NAME)

  if (theme) {
    // Update css colors from theme
    for (const key in theme) {
      updateCssColor(key, theme[key])
    }
  } else {
    // Set default theme if there isn't in storage
    const defaultTheme = {}

    for (const key of THEME_KEYS) {
      defaultTheme[key] = getCssColor(key)
    }

    setTheme(defaultTheme)
  }

  function updateTheme(key, newValue) {
    updateCssColor(key, newValue)
    setTheme({
      ...theme,
      [key]: newValue,
    })
  }

  return <ThemeContext.Provider value={[theme, updateTheme]} {...props} />
}

export const useTheme = () => handleUseContext(ThemeContext, NAME)
