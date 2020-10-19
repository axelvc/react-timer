import styled from 'styled-components'

import { transitionTimes } from '../../../../globalStyles/variables'

export const Label = styled.label`
  height: 28px;
  width: 50px;
  border-radius: 50px;
  cursor: pointer;
  transition: ${transitionTimes.normal} background;
  background: ${({ theme, active }) =>
    active ? theme.workPrimary : theme.textSecondary};

  &::before {
    content: '';
    display: block;
    height: 28px;
    width: 28px;
    transform: scale(0.6);
    border-radius: inherit;
    background: ${({ theme }) => theme.background};
    margin-left: ${({ active }) => (active ? 'calc(100% - 28px)' : 'unset')};
    transition: ${transitionTimes.normal} margin;
  }
`
