import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../common/InputBox'

export const NumberInput = ({ title, value, onChange, disabled }) => {
  const [defaultValue] = useState(value)

  function handleType(ev) {
    const { key, target } = ev
    const { value } = target

    if (Number.isNaN(Number(key)) || value.length >= 3) {
      ev.preventDefault()
    }
  }

  function handleChange(ev) {
    const newValue = Number(ev.target.value || defaultValue)

    onChange(title, newValue)
    ev.target.value = newValue
  }

  return (
    <InputBox title={title}>
      <input
        min="0"
        max="999"
        type="number"
        disabled={disabled}
        defaultValue={value}
        placeholder={defaultValue}
        onKeyPress={handleType}
        onBlur={handleChange}
      />
    </InputBox>
  )
}

NumberInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}
