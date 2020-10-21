import React from 'react'

import { IconButton } from '../common/IconButton'
import CloseIcon from '../../assets/svg/close-icon.svg'
import ThemeIcon from '../../assets/svg/theme-icon.svg'
import SettingsIcon from '../../assets/svg/settings-icon.svg'

import { useRouter } from '../providers/RouterProvider'

import styles from './styles.module.scss'

const routesList = [
  { path: 'theme', Icon: ThemeIcon },
  { path: 'settings', Icon: SettingsIcon },
]

export const Navbar = () => {
  const [route, setRoute] = useRouter()

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.closeButton}>
          {route !== '/' && (
            <IconButton flat onClick={() => setRoute('/')}>
              <CloseIcon />
            </IconButton>
          )}
        </li>
        {routesList.map(({ path, Icon }) => (
          <li key={path} className={styles.navOption}>
            <IconButton
              flat={path !== route}
              alternative={path === route}
              onClick={() => setRoute(path)}
            >
              <Icon />
            </IconButton>
          </li>
        ))}
      </ul>
    </nav>
  )
}
