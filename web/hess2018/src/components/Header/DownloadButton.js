/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import Link from 'gatsby-link'
import DownloadIcon from '../../assets/download-small.png'

class DownloadButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img
          className="button"
          id="dload"
          src={DownloadIcon}
          onClick={this.props.handleToggle}
        />
      </div>
    )
  }
}

export default DownloadButton
