import styled from 'styled-components'

import { IconButton } from '../../common/IconButton'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  user-select: none;
`
export const LargePlayButton = styled(IconButton)`
  height: 60%;
  width: 60%;
`
