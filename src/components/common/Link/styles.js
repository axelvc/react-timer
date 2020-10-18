import styled from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

export const Button = styled.button`
  border: none;
  padding: 0 8px;
  border-radius: 3px;
  transition: ${transitionTimes.fast};
  opacity: 0.7;

  &:focus,
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.restPrimary};
  }
`
