import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/hess-logo-white.png'

export default () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </div>
)
