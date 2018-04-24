import React from 'react'
import Link from 'gatsby-link'
import constants from './Constants'
import { toggleMenu } from './CustomEvents'

const LinkList = props => {
  const isCurrentPage = props.currentlocation == props.to ? 'current-page' : ''
  return (
    <li className={isCurrentPage}>
      <Link
        className={props.to.replace('/', '')}
        onClick={e => toggleMenu(e)}
        to={`${props.to}`}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default props => {
  return (
    <ul className="sub-header container-fluid" data-hide="true">
      <LinkList currentlocation={props.location} to="/our-company">
        Our Company
      </LinkList>
      <LinkList currentlocation={props.location} to="/financial-highlights">
        Financial and<div className="br" />Operational Highlights
      </LinkList>
      <LinkList currentlocation={props.location} to="/letter-to-shareholders">
        Letter to<div className="br" />Shareholders
      </LinkList>
      <LinkList currentlocation={props.location} to="/global-operations">
        Global<div className="br" />Operations
      </LinkList>
      <LinkList currentlocation={props.location} to="/sustainability">
        Sustainablity
      </LinkList>
      <LinkList currentlocation={props.location} to="/board-and-officers">
        Board of Directors and<div className="br" />Corporate Officers
      </LinkList>
    </ul>
  )
}
