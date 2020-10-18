import { css } from 'styled-components'

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.woff2'
import MontserratMedium from '../assets/fonts/Montserrat/Montserrat-Medium.woff2'
import MontserratSemi from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2'

import { fontWeights } from './variables'

export default css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('woff2');
    font-weight: ${fontWeights.regular};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('woff2');
    font-weight: ${fontWeights.medium};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemi}) format('woff2');
    font-weight: ${fontWeights.semiBold};
    font-style: normal;
    font-display: swap;
  }
`
