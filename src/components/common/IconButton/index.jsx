import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const IconButton = ({ flat = false, alternate = false, ...props }) => (
  <Button flat={flat} alternate={alternate} {...props} />
)

IconButton.propTypes = {
  flat: PropTypes.bool,
  alternate: PropTypes.bool,
}
