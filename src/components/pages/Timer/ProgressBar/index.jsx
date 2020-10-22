import React from 'react'
import PropTypes from 'prop-types'

import ProgressCircle from '../../../../assets/svg/progress-circle.svg'

import styles from './styles.module.scss'

const STROKE_LENGTH = 723

export const ProgressBar = ({ isRest, totalTime, timeLeft, ...props }) => {
  function getDashOffset() {
    const progress = (timeLeft * 100) / totalTime
    const offsetLeft = STROKE_LENGTH * (progress / 100)

    return (STROKE_LENGTH - offsetLeft).toFixed(2)
  }

  return (
    <div className={isRest ? styles.restTimer : styles.workTimer}>
      <ProgressCircle strokeDashoffset={getDashOffset(timeLeft, totalTime)} />
      <div className={styles.wrapper} {...props} />
    </div>
  )
}

ProgressBar.propTypes = {
  isRest: PropTypes.bool.isRequired,
  totalTime: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
}
