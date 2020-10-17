import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../../common/InputBox'

export const ColorInput = ({ title, color, onChange }) => (
  <InputBox title={title}>
    <input
      type="color"
      id={title}
      defaultValue={color}
      onBlur={({ target: { value } }) => onChange({ [title]: value })}
    />
  </InputBox>
)

ColorInput.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
