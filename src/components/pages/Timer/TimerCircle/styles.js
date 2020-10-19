import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100%;

  & > svg:first-child {
    height: 100%;
    color: ${({ theme, isRest }) =>
      isRest ? theme.restSecondary : theme.workSecondary};

    & circle:last-child {
      color: ${({ theme, isRest }) =>
        isRest ? theme.restPrimary : theme.workPrimary};
      transform-origin: center;
      transform: rotate(-90deg) rotateX(-180deg);
      transition: stroke-dashoffset linear 1000ms;
    }
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
