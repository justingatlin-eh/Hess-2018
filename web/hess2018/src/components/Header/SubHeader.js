import React from 'react'
import Link from 'gatsby-link'

const LinkList = props => (
  <li>
    <Link to={`/hess/2018${props.to}`}>{props.children}</Link>
  </li>
)

export default ({ children, data }) => (
  <ul className="sub-header">
    <LinkList to="/company">Our Company</LinkList>
    <LinkList to="/financial-highlights">
      Financial and<br />Organizational Highlights
    </LinkList>
    <LinkList to="/shareholders-and-officers">
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
