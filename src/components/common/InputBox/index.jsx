import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export const InputBox = ({ title, disabled = false, children }) => {
  const humanTitle =
    title[0].toUpperCase() +
    title
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()

  return (
    <Container disabled={disabled}>
      <label htmlFor={title}> {humanTitle}</label>
      {children}
    </Container>
  )
}

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
}
