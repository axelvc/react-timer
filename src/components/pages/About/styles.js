import styled from 'styled-components'

import { Link } from '../../common/Link'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Details = styled.p`
  margin-top: 30px;
  text-align: justify;
`

export const SettingsLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
`
