import styled, { css } from 'styled-components'

import { fontSizes } from '../../../../globalStyles/variables'

export const Container = styled.section`
  font-size: ${fontSizes.extraLarge};
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`

export const H1 = styled.h1`
  line-height: 1;
  color: ${({ theme }) => theme.textPrimary};
`

export const CycleType = styled.p`
  padding: 0 5px;
  border-radius: 3px;
  opacity: 0.8;

  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.workSecondary};

  ${({ isRest, theme }) =>
    isRest &&
    css`
      background: ${theme.restSecondary};
    `}
`
