import React, { useState, createContext, useContext } from 'react'

const RouterContext = createContext()

export const RouterProvider = (props) => {
  const [route, setRoute] = useState('about')

  return <RouterContext.Provider value={[route, setRoute]} {...props} />
}

export const Route = ({ route, ...props }) => {
  const [visibleRoute] = useContext(RouterContext)

  if (route === visibleRoute) {
    return <React.Fragment {...props} />
  } else {
    return null
  }
}

export const useRouter = () => {
  const context = useContext(RouterContext)

  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }

  return context
}
