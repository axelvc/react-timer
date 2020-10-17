import styled from 'styled-components'

export const Input = styled.input`
  padding: 0;
  width: 28px;
  border: none;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: none;
    border-radius: 3px;
  }
`

export const BorderedInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.textSecondary};
`
