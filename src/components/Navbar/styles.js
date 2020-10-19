import styled from 'styled-components'

import { fontSizes } from '../../globalStyles/variables'

export const Nav = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.textSecondary};
  font-size: ${fontSizes.subTitle};
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
`

export const Li = styled.li`
  margin-left: 5px;
`

export const LiExpanded = styled(Li)`
  margin-left: 0;
  margin-right: auto;
`
