import styled from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  transition: ${transitionTimes.normal} opacity;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
