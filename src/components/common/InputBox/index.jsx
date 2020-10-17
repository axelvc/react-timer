import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function camelToHuman(str) {
  return (
    str[0].toUpperCase() +
    str
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
  )
}

export const InputBox = ({ title, children }) => (
  <Container>
    <label htmlFor={title}> {camelToHuman(title)}</label>
    {children}
  </Container>
)

InputBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}
