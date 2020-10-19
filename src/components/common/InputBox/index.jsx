import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export const InputBox = ({ title, children }) => {
  const humanTitle =
    title[0].toUpperCase() +
    title
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()

  return (
    <Container>
      <label htmlFor={title}> {humanTitle}</label>
      {children}
    </Container>
  )
}

InputBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}
