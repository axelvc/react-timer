import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from '../../../common/IconButton'
import PlayCircleIcon from '../../../../assets/svg/play-circle-icon.svg'
import PauseCircleIcon from '../../../../assets/svg/pause-circle-icon.svg'
import CloseCircleIcon from '../../../../assets/svg/close-circle-icon.svg'
import { ButtonsContainer, H1 } from './styles'

export const ContDown = ({
  timeLeft,
  paused,
  isRest,
  onPlay,
  onPause,
  onCancel,
}) => {
  function humanTime() {
    const fixTwoDigits = (n) => n.toString().padStart(2, 0)

    const minutes = fixTwoDigits(Math.floor(timeLeft / 60))
    const seconds = fixTwoDigits(timeLeft % 60)

    return `${minutes}:${seconds}`
  }

  return (
    <>
      <H1>{humanTime()}</H1>
      <ButtonsContainer>
        <IconButton alternate={isRest} onClick={paused ? onPlay : onPause}>
          {paused ? <PlayCircleIcon /> : <PauseCircleIcon />}
        </IconButton>
        <IconButton alternate={isRest} onClick={onCancel}>
          <CloseCircleIcon />
        </IconButton>
      </ButtonsContainer>
    </>
  )
}

ContDown.propTypes = {
  paused: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
  isRest: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
