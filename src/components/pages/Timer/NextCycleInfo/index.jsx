import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const MINUTE_IN_MILISECONDS = 60000

export const NextCycleInfo = ({ totalTime, useRestTime, isRest }) => (
  <div className={styles.container}>
    <h1 className={styles.minutesNumber}>
      {totalTime / MINUTE_IN_MILISECONDS}
    </h1>
    <p className={styles.minuteText}>
      {`${totalTime > 1 ? 'minutes' : 'minutes'}`}
    </p>
    {useRestTime && (
      <p className={`${isRest ? styles.restTime : styles.workTime}`}>
        {isRest ? 'Rest' : 'Work'} time
      </p>
    )}
  </div>
)

NextCycleInfo.propTypes = {
  totalTime: PropTypes.number.isRequired,
  useRestTime: PropTypes.bool.isRequired,
  isRest: PropTypes.bool.isRequired,
}

export default NextCycleInfo
