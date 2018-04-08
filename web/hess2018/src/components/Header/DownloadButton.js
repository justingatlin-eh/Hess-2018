import React from 'react'
import Link from 'gatsby-link'
import DownloadIcon from '../../assets/download-icon.png'

export default () => (
  <div className="download-button">
    <Link to="/downloads">
      <img src={DownloadIcon} alt="Download" />
    </Link>
  </div>
)
