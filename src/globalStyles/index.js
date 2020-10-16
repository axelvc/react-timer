import { createGlobalStyle } from 'styled-components'

import styles from './styles'
import fonts from './fonts'

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${styles}
`
