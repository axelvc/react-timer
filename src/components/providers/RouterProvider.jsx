import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import { handleUseContext } from './common'

const RouterContext = createContext()

export const RouterProvider = (props) => {
  const [route, setRoute] = useState('/')

  return <RouterContext.Provider value={[route, setRoute]} {...props} />
}

export const useRouter = () => handleUseContext(RouterContext, 'router')

export const Route = ({ route, children, alwaysVisible }) => {
  const [visibleRoute] = useRouter()

  if (route === visibleRoute || alwaysVisible) {
    return children
  } else {
    return null
  }
}

Route.propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  alwaysVisible: PropTypes.bool,
}
