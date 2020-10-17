import styled from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

const BaseButton = styled.button`
  border: none;
  border-radius: 50%;
  transition: ${transitionTimes.normal};
`

export const NormalButtonIcon = styled(BaseButton)`
  background: ${({ theme }) => theme.workSecondary};
  color: ${({ theme }) => theme.workPrimary};
`

export const FlatButtonIcon = styled(BaseButton)`
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    background: ${({ theme }) => theme.restSecondary};
    color: ${({ theme }) => theme.restPrimary};
  }
`
