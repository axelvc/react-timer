import { css } from 'styled-components'
import { fontSizes, transitionTimes } from './variables'

export default css`
  body {
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 600;
  }

  #app {
    height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  main {
    padding: 25px;
    flex: 1;
    overflow: auto;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: ${fontSizes.title};
  }

  h6 {
    font-size: 1.1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  input,
  button,
  label {
    outline: none;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.restPrimary};
      z-index: 1;
    }
  }

  label {
    font-size: ${fontSizes.large};
    user-select: none;
  }

  input,
  button {
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    background: none;
    color: inherit;
    border: 1px solid ${({ theme }) => theme.textPrimary};
    padding: 0;
    margin: 0;
    height: 28px;

    ${'' /* &:focus {
    } */}
  }

  input {
    border: 1px solid ${({ theme }) => theme.textSecondary};
    border-radius: 3px;
    font-size: ${fontSizes.normal};
    padding: 0 8px;
    box-sizing: border-box;

    &::placeholder {
      filter: brightness(0.85);
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      cursor: default;
    }
  }

  a {
    color: ${({ theme }) => theme.workPrimary};
    transition: ${transitionTimes.fast};

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.restPrimary};
    }
  }

  hr,
  br {
    margin: 15px 0;
  }

  br {
    user-select: none;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.textSecondary};
    border-bottom: none;
  }
`
