import React from 'react'
import Link from 'gatsby-link'
import Board from '../components/MainContent/Board'

class BoardAndOfficersPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.handlePage(this.props.location.pathname)
  }

  render() {
    return (
      <div className="board text-content">
        <Board />
      </div>
    )
  }
}

export default BoardAndOfficersPage
