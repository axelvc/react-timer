import React from 'react'

import { ColorInput } from './ColorInput'

import { useTheme } from 'styled-components'

const divisionIndexes = [0, 2, 4]

export const ThemeSettings = () => {
  const { changeTheme, ...theme } = useTheme()

  return (
    <main>
      {Object.entries(theme).map(([key, color], index, arr) => (
        <React.Fragment key={key}>
          <ColorInput
            title={key}
            color={color}
            onChange={(newValue) => changeTheme(newValue)}
          />
          {index !== arr.length - 1 &&
            (divisionIndexes.includes(index) ? <hr /> : <br />)}
        </React.Fragment>
      ))}
    </main>
  )
}
