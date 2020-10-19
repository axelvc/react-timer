import styled, { css } from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100%;

  & > svg:first-child {
    height: 100%;
    color: ${({ theme }) => theme.workSecondary};

    & circle:last-child {
      color: ${({ theme }) => theme.workPrimary};
      transform-origin: center;
      transform: rotate(-90deg) rotateX(-180deg);
      transition: stroke-dashoffset ease-out 500ms;
    }

    ${({ theme, isRest }) =>
      isRest &&
      css`
        color: ${theme.restSecondary};

        circle:last-child {
          color: ${theme.restPrimary};
        }
      `}
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
