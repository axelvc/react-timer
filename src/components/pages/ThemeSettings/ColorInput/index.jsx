import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../../common/InputBox'
import { Input, BorderedInput } from './styles'

export const ColorInput = ({ title, color, onChange }) => {
  const attrs = {
    type: 'color',
    id: title,
    defaultValue: color,
    onBlur: ({ target: { value } }) => onChange({ [title]: value }),
  }

  return (
    <InputBox title={title}>
      {title === 'background' ? (
        <BorderedInput {...attrs} />
      ) : (
        <Input {...attrs} />
      )}
    </InputBox>
  )
}

ColorInput.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
