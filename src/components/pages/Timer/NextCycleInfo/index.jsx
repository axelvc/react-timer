import React from 'react'
import PropTypes from 'prop-types'

import { Container, H1, CycleType } from './styles'

const MINUTE_IN_MILISECONDS = 60000

export const NextCycleInfo = ({ totalTime, useRestTime, isRest }) => (
  <Container>
    <H1>{totalTime / MINUTE_IN_MILISECONDS}</H1>
    <p>
      minute
      {totalTime > 1 && 's'}
    </p>
    {useRestTime && (
      <CycleType isRest={isRest}>{isRest ? 'Rest' : 'Work'} time</CycleType>
    )}
  </Container>
)

NextCycleInfo.propTypes = {
  totalTime: PropTypes.number.isRequired,
  useRestTime: PropTypes.bool.isRequired,
  isRest: PropTypes.bool.isRequired,
}

export default NextCycleInfo
