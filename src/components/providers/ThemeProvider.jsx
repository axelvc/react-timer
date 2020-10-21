import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

function keyToKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function updateThemeVariable(key, color) {
  document.documentElement.style.setProperty(
    `--color-${keyToKebab(key)}`,
    color,
  )
}

function getDefaultTheme() {
  const savedTheme = JSON.parse(localStorage.getItem('theme'))
  if (savedTheme) {
    for (const [key, color] of Object.entries(savedTheme)) {
      updateThemeVariable(key, color)
    }

    return savedTheme
  } else {
    const theme = {}
    const themeKeys = [
      'background',
      'textPrimary',
      'textSecondary',
      'workPrimary',
      'workSecondary',
      'restPrimary',
      'restSecondary',
    ]

    const rootStyles = getComputedStyle(document.documentElement)

    for (const key of themeKeys) {
      theme[key] = rootStyles
        .getPropertyValue(`--color-${keyToKebab(key)}`)
        .trim()
    }

    console.log(theme)
    return theme
  }
}

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(getDefaultTheme())

  function updateTheme(key, color) {
    const newTheme = {
      ...theme,
      [key]: color,
    }

    updateThemeVariable(key, color)
    localStorage.setItem('theme', JSON.stringify(newTheme))
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={[theme, updateTheme]} {...props} />
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
