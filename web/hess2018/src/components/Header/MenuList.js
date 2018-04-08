import React from 'react'
import Link from 'gatsby-link'

const MenuList = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default MenuList
