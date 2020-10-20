import React from 'react'

import { Nav, Ul, Li, LiExpanded } from './styles'
import { IconButton } from '../common/IconButton'
import CloseIcon from '../../assets/svg/close-icon.svg'
import ThemeIcon from '../../assets/svg/theme-icon.svg'
import SettingsIcon from '../../assets/svg/settings-icon.svg'

import { useRouter } from '../providers/RouterProvider'

const routesList = [
  { path: 'theme', Icon: ThemeIcon },
  { path: 'settings', Icon: SettingsIcon },
]

export const Navbar = () => {
  const [route, setRoute] = useRouter()

  return (
    <Nav>
      <Ul>
        <LiExpanded>
          {route !== '/' && (
            <IconButton flat onClick={() => setRoute('/')}>
              <CloseIcon />
            </IconButton>
          )}
        </LiExpanded>
        {routesList.map(({ path, Icon }) => (
          <Li key={path}>
            <IconButton
              flat={path !== route}
              alternate={path === route}
              onClick={() => setRoute(path)}
            >
              <Icon />
            </IconButton>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}
