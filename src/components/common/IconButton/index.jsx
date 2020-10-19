import React from 'react'
import PropTypes from 'prop-types'

import { FlatButtonIcon, NormalButtonIcon } from './styles'

export const IconButton = ({ flat = false, alternate = false, ...props }) => {
  if (flat) {
    return <FlatButtonIcon alternate={alternate} {...props} />
  } else {
    return <NormalButtonIcon alternate={alternate} {...props} />
  }
}

IconButton.propTypes = {
  flat: PropTypes.bool,
  alternate: PropTypes.bool,
}
