import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../../common/InputBox'

import styles from './styles.module.scss'

export const NumberInput = ({
  title,
  defaultValue,
  value,
  onChange,
  disabled,
}) => {
  function handleType(ev) {
    const { key, target } = ev

    if (Number.isNaN(Number(key)) || target.value.length >= 3) {
      ev.preventDefault()
    }
  }

  function handleChange(ev) {
    const newValue = Number(ev.target.value) || defaultValue

    onChange(title, newValue)
    ev.target.value = newValue
  }

  return (
    <InputBox title={title} disabled={disabled}>
      <input
        className={styles.input}
        type="number"
        id={title}
        min="0"
        max="999"
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
  defaultValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}
