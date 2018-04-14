import React from 'react'
import Link from 'gatsby-link'
import HomeHero from '../assets/splash-hero.png'
// import Logo from '../assets/hess-logo-white.png'

// <img className="logo" src={Logo} />
//   <img className="main-image" src={HomeHero} />
//   <div className="bottom-copy">
//     <div className="big">HESS CORPORATION</div>
//     <div className="small">2017 Annual Report</div>
//   </div>

const IndexPage = () => (
  <div className="splash">
    <Link to="/our-company">
      <img className="main-image" src={HomeHero} />
    </Link>
  </div>
)

export default IndexPage
