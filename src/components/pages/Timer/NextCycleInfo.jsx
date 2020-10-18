import React from 'react'
import PropTypes from 'prop-types'

export const NextCycleInfo = ({ totalTime, useRestTime, isRest }) => {
  return (
    <div>
      <h1>{totalTime / 60}</h1>
      <p>
        minute
        {totalTime > 1 && 's'}
      </p>
      {useRestTime && (
        <p>
          {isRest ? 'Rest' : 'Work'} time
          <br />
        </p>
      )}
    </div>
  )
}

NextCycleInfo.propTypes = {
  totalTime: PropTypes.number.isRequired,
  useRestTime: PropTypes.bool.isRequired,
  isRest: PropTypes.bool.isRequired,
}

export default NextCycleInfo
