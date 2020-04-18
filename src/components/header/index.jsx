import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../routes'

const navItems = [
  {
    label: 'Home',
    url: routes.home
  },
  /*{
    label: 'My Account',
    url: routes.myAccount
  },
*/  {
    label: 'Login',
    url: routes.login
  },
  {
    label: 'Logout',
    url: routes.logout
  }
]

const PageHeader = () => (
  <header>
    <ul className="pageHeader">
      {navItems.map(({ label, url }) => (
        <li className="pageHeaderList" button key={url}>
          <Link className="headerLink" to={url}>
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </header>
)

export default PageHeader
