import React from 'react'
import Link from 'gatsby-link'

// <Link to={`/hess/2018${props.to}`}>{props.children}</Link>
const LinkList = props => (
  <li>
    <Link to={`${props.to}`}>{props.children}</Link>
  </li>
)

export default ({ children, data }) => (
  <ul className="sub-header container-fluid" data-hide="true">
    <LinkList to="/our-company">Our Company</LinkList>
    <LinkList to="/financial-highlights">
      Financial and<br />Organizational Highlights
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
