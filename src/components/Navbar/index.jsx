import React from 'react'
import { Link } from '@reach/router'

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Timer</Link>
      </li>
      <li>
        <Link to="settings">Settings</Link>
      </li>
      <li>
        <Link to="theme">Theme</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
    </ul>
  )
}
