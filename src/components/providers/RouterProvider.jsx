import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const RouterContext = createContext()

export const RouterProvider = (props) => {
  const [route, setRoute] = useState('/')

  return <RouterContext.Provider value={[route, setRoute]} {...props} />
}

export const useRouter = () => {
  const context = useContext(RouterContext)

  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }

  return context
}

export const Route = ({ route, children }) => {
  const [visibleRoute] = useContext(RouterContext)

  if (route === visibleRoute) {
    return children
  } else {
    return null
  }
}

Route.propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
