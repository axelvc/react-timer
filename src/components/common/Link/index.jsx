import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from '../../providers/RouterProvider'

import styles from './styles.module.scss'

export const Link = ({ to: path, className = '', ...props }) => {
  const [, setRoute] = useRouter()

  return (
    <button
      className={`${styles.link} ${className}`}
      onClick={() => setRoute(path)}
      {...props}
    />
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}
