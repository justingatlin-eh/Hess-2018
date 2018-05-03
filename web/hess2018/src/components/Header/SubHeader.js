import React from 'react'
import Link from 'gatsby-link'
import constants from './Constants'
import { toggleMenu } from './CustomEvents'

const LinkList = props => {
  const arr = [
    '/board-and-officers',
    '/404',
    '/financial-highlights',
    '/global-operations',
    '/letter-to-shareholders',
    '/sustainability',
    '/our-company',
  ]
  const re = new RegExp(props.to, 'i')
  const isFound = arr.find(function(e) {
    return props.currentlocation.search(re) !== -1
  })
  const isCurrentPage = isFound ? 'current-page' : ''
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

class SubHeaderSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="sub-header container-fluid" data-hide="true">
        <LinkList currentlocation={this.props.location} to="/our-company">
          Our Company
        </LinkList>
        <LinkList
          currentlocation={this.props.location}
          to="/financial-highlights"
        >
          Financial and<div className="br" />Operational Highlights
        </LinkList>
        <LinkList
          currentlocation={this.props.location}
          to="/letter-to-shareholders"
        >
          Letter to<div className="br" />Shareholders
        </LinkList>
        <LinkList currentlocation={this.props.location} to="/global-operations">
          Global<div className="br" />Operations
        </LinkList>
        <LinkList currentlocation={this.props.location} to="/sustainability">
          Sustainablity
        </LinkList>
        <LinkList
          currentlocation={this.props.location}
          to="/board-and-officers"
        >
          Board of Directors and<div className="br" />Corporate Officers
        </LinkList>
      </ul>
    )
  }
}

export default SubHeaderSection
