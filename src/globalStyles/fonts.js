import { css } from 'styled-components'

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.woff2'
import MontserratMedium from '../assets/fonts/Montserrat/Montserrat-Medium.woff2'
import MontserratSemi from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2'

export default css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemi}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`
