import React from 'react'
import { withPrefix } from 'gatsby-link'
import Logo from './Logo'
import MenuButton from './MenuButton'
import DownloadButton from './DownloadButton'
import SubHeader from './SubHeader'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="header" className="header" data-modalopen={this.props.modalopen}>
        <header>
          <div>
            <MenuButton />
            <Logo />
            <DownloadButton handleToggle={this.props.handleToggle} />
          </div>
          <nav className="navbar navbar-default">
            <SubHeader location={this.props.location} />
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
