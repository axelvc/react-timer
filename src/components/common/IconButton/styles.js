import styled, { css } from 'styled-components'

import { transitionTimes } from '../../../globalStyles/variables'

const activeColors = ({ theme, alternate }) => css`
  color: ${alternate ? theme.restPrimary : theme.workPrimary};
  background: ${alternate ? theme.restSecondary : theme.workSecondary};
`

const flatColors = ({ theme, alternate }) => css`
  color: ${theme.textSecondary};

  &:hover {
    ${activeColors({ theme, alternate })}
  }
`

export const Button = styled.button`
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

  ${({ flat, ...props }) => (flat ? flatColors(props) : activeColors(props))}
`
