import React from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import DownloadButton from './DownloadButton'
import SubHeader from './SubHeader'

const Header = () => (
  <div>
    <header>
      <div>
        <MenuButton />
        <Logo />
        <DownloadButton />
      </div>
      <nav>
        <SubHeader />
      </nav>
    </header>
  </div>
)

export default Header
