import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from '../../context/RouterContext.jsx'

import { Button } from './styles'

export const Link = ({ to: path, ...props }) => {
  const [, setRoute] = useRouter()

  return <Button onClick={() => setRoute(path)} {...props} />
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}
