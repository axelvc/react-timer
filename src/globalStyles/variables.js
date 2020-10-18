export const defaultTheme = JSON.parse(localStorage.getItem('theme')) || {
  background: '#fafafa',
  textPrimary: '#252627',
  textSecondary: '#abb8c3',
  workPrimary: '#0693e3',
  workSecondary: '#8ed1fc',
  restPrimary: '#f3537b',
  restSecondary: '#f78da7',
}

export const transitionTimes = {
  fast: '100ms',
  normal: '200ms',
  late: '500ms',
}

export const fontSizes = {
  small: '0.8rem',
  normal: '1rem',
  large: '1.1rem',
  extraLarge: '1.3rem',
  subTitle: '1.5rem',
  title: '3.5rem',
}
