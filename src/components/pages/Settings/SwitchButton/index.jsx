import React from 'react'
import PropTypes from 'prop-types'

import { InputBox } from '../../../common/InputBox'
import { Label } from './styles'

export const SwitchButton = ({ title, active, onChange }) => {
  function handleClickSwitch(ev) {
    if (/\s|Enter/.test(ev.key)) {
      ev.target.firstElementChild.click()
    }
  }

  return (
    <InputBox title={title}>
      <Label
        active={active}
        tabIndex="0"
        htmlFor={title}
        onKeyPress={handleClickSwitch}
      >
        <input
          tabIndex="-1"
          id={title}
          type="checkbox"
          checked={active}
          onChange={({ target: { checked } }) => onChange(title, checked)}
        />
      </Label>
    </InputBox>
  )
}

SwitchButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
