import styled, { css } from 'styled-components'

import { transitionTimes } from '../../../../globalStyles/variables'

export const Label = styled.label`
  height: 28px;
  width: 50px;
  border-radius: 50px;
  cursor: pointer;
  transition: ${transitionTimes.normal} background;
  background: ${({ theme }) => theme.textSecondary};

  &::before {
    content: '';
    display: block;
    height: 28px;
    width: 28px;
    transform: scale(0.6);
    border-radius: inherit;
    background: ${({ theme }) => theme.background};
    transition: ${transitionTimes.normal} margin;
  }

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.workPrimary};

      &::before {
        margin-left: calc(100% - 28px);
      }
    `}
`

export const Input = styled.input`
  display: none;
`
