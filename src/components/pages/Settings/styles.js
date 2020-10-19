import styled from 'styled-components'

import { Link } from '../../common/Link'

export const Main = styled.main`
  position: relative;

  input[type='checkbox'] {
    display: none;
  }
`

export const AboutLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
`
