import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../common/InputBox'

export const SwitchButton = ({ title, active, onChange }) => {
  return (
    <InputBox title={title}>
      <input
        id={title}
        type="checkbox"
        checked={active}
        onChange={({ target: { checked } }) => onChange(title, checked)}
      />
    </InputBox>
  )
}

SwitchButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
