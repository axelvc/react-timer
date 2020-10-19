import styled, { css } from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

const getColors = ({ theme, alternate }) => css`
  color: ${alternate ? theme.restPrimary : theme.workPrimary};
  background: ${alternate ? theme.restSecondary : theme.workSecondary};
`

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
  ${getColors}
`

export const FlatButtonIcon = styled(BaseButton)`
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    ${getColors}
  }
`
