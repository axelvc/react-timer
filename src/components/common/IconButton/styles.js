import styled from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

const BaseButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 28px;
  transition: ${transitionTimes.normal};

  & > * {
    height: 100%;
    width: 100%;
    transform-origin: center;
    transform: scale(0.8);
  }
`

export const NormalButtonIcon = styled(BaseButton)`
  background: ${({ theme, alternate }) =>
    alternate ? theme.restSecondary : theme.workSecondary};
  color: ${({ theme, alternate }) =>
    alternate ? theme.restPrimary : theme.workPrimary};
`

export const FlatButtonIcon = styled(BaseButton)`
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    background: ${({ theme, alternate }) =>
      alternate ? theme.restSecondary : theme.workSecondary};

    color: ${({ theme, alternate }) =>
      alternate ? theme.restPrimary : theme.workPrimary};
  }
`
