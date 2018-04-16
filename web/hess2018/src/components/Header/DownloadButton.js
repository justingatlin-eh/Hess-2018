import React from 'react'
import Link from 'gatsby-link'
import DownloadIcon from '../../assets/download-icon.png'

// this.openDialog

export default props => (
  <div className="download-button">
    <img
      className="button"
      src={DownloadIcon}
      onClick={e => {
        console.log('clicked')
      }}
    />
  </div>
)
