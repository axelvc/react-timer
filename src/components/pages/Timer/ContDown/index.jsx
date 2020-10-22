import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from '../../../common/IconButton'
import PlayCircleIcon from '../../../../assets/svg/play-circle-icon.svg'
import PauseCircleIcon from '../../../../assets/svg/pause-circle-icon.svg'
import CloseCircleIcon from '../../../../assets/svg/close-circle-icon.svg'

import { getMinutes } from '../utils'

import styles from './styles.module.scss'

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

    const minutes = fixTwoDigits(Math.floor(getMinutes(timeLeft)))
    const seconds = fixTwoDigits(Math.floor((timeLeft / 1000) % 60))

    return `${minutes}:${seconds}`
  }

  return (
    <>
      <h1 className={styles.contDown}>{humanTime()}</h1>
      <div className={styles.controls}>
        <IconButton alternative={isRest} onClick={paused ? onPlay : onPause}>
          {paused ? <PlayCircleIcon /> : <PauseCircleIcon />}
        </IconButton>
        <IconButton alternative={isRest} onClick={onCancel}>
          <CloseCircleIcon />
        </IconButton>
      </div>
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
