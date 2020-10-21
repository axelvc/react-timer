import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const IconButton = ({
  flat = false,
  alternative = false,
  className = '',
  ...props
}) => (
  <button
    className={`${flat ? styles.flatButton : styles.normalButton} ${
      alternative ? styles.alternative : ''
    } ${className}`}
    {...props}
  />
)

IconButton.propTypes = {
  flat: PropTypes.bool,
  alternative: PropTypes.bool,
  className: PropTypes.string,
}
