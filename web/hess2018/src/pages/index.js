import React from 'react'
import Link from 'gatsby-link'
import HomeHero from '../assets/main-hero.png'
import Logo from '../assets/hess-logo-white.png'

const IndexPage = () => (
  <div className="splash">
    <Link to="/our-company">
      <img className="logo" src={Logo} />
      <img className="main-image" src={HomeHero} />
      <div className="bottom-copy">
        <div className="big">HESS CORPORATION</div>
        <div className="small">2017 Annual Report</div>
      </div>
    </Link>
  </div>
)

export default IndexPage
