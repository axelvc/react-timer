import React from 'react'

import { Link } from '../../common/Link'

import styles from './styles.module.scss'

export const About = () => (
  <main className={styles.container}>
    <h6>A timer inspired by the pomodoro technique</h6>
    <p className={styles.details}>
      Hi. My name is Axel, this app is a simple timer inspired by the pomodoro
      technique, I hope this application helps you to be more productive in your
      work or project. If you want to see the source code or fork this project
      you can&nbsp;
      <a href="https://github.com" target="_blank" rel="noreferrer">
        here.
      </a>
    </p>
    <Link to="settings">Settings</Link>
  </main>
)
