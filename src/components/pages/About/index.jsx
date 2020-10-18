import React from 'react'

import { Container, Details, SettingsLink } from './styles'

export const About = () => {
  return (
    <Container>
      <h6>A timer inspired by the pomodoro technique</h6>
      <Details>
        Hi. My name is Axel, this app is a simple timer inspired by the pomodoro
        technique, I hope this application helps you to be more productive in
        your work or project. If you want to see the source code or fork this
        project you can&nbsp;
        <a href="https://github.com" target="_blank" rel="noreferrer">
          here.
        </a>
      </Details>
      <SettingsLink to="settings">Settings</SettingsLink>
    </Container>
  )
}
