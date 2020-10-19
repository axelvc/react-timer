import React from 'react'
import PropTypes from 'prop-types'

import ProgressCircle from '../../../../assets/svg/progress-circle.svg'
import { Container, Wrapper } from './styles'

const STROKE_LENGTH = 723

export const TimerCircle = ({ isRest, totalTime, timeLeft, ...props }) => {
  function getDashOffset() {
    const progress = (timeLeft * 100) / totalTime
    const offsetLeft = STROKE_LENGTH * (progress / 100)

    return STROKE_LENGTH - offsetLeft
  }

  return (
    <Container isRest={isRest} {...props}>
      <ProgressCircle strokeDashoffset={getDashOffset(timeLeft, totalTime)} />
      <Wrapper {...props} />
    </Container>
  )
}

TimerCircle.propTypes = {
  isRest: PropTypes.bool.isRequired,
  totalTime: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
}
