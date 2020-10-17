import React from 'react'

import { FlatButtonIcon, NormalButtonIcon } from './styles'

export const IconButton = ({ flat = false, ...props }) => {
  if (flat) {
    return <FlatButtonIcon {...props} />
  } else {
    return <NormalButtonIcon {...props} />
  }
}
