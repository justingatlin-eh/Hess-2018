import React from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import DownloadButton from './DownloadButton'
import SubHeader from './SubHeader'

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <MenuButton />
            <Logo />
            <DownloadButton />
          </div>
          <nav className="navbar navbar-default">
            <SubHeader />
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
