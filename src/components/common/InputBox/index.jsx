import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const InputBox = ({ title, disabled = false, children }) => {
  const humanTitle =
    title[0].toUpperCase() +
    title
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()

  return (
    <div className={`${disabled ? styles.inputBoxDisabled : styles.inputBox}`}>
      <label htmlFor={title}> {humanTitle}</label>
      {children}
    </div>
  )
}

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
}
