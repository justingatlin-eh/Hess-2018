import React from 'react'
import Link from 'gatsby-link'
import constants from './Constants'

function isCurrentPage(to) {
  const re = new RegExp(to)
  return re.test(window.location.pathname) ? 'current-page' : ''
}

const LinkList = props => {
  return (
    <li className={isCurrentPage(props.to)}>
      <Link onClick={e => toggleMenu(e)} to={`${props.to}`}>
        {props.children}
      </Link>
    </li>
  )
}

export default ({ children, data }) => {
  return (
    <ul className="sub-header container-fluid" data-hide="true">
      <LinkList to="/our-company">Our Company</LinkList>
      <LinkList to="/financial-highlights">
        Financial and<br />Operational Highlights
      </LinkList>
      <LinkList to="/letter-to-shareholders">
        Letter to<br />Shareholders
      </LinkList>
      <LinkList to="/global-operations">
        Global<br />Operations
      </LinkList>
      <LinkList to="/sustainability">Sustainablity</LinkList>
      <LinkList to="/board-and-officers">
        Board of Directors and<br />Corporate Officers
      </LinkList>
    </ul>
  )
}
