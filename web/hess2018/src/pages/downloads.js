import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <div>Download Page</div>
    <div>{data.site.siteMetadata.title}</div>
  </div>
)

export const query = graphql`
  query DownloadsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
