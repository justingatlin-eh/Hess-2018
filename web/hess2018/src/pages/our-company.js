import React from 'react'
import Link from 'gatsby-link'

const CompanyPage = () => (
  <div>
    <p>Company Page.</p>
  </div>
)

export default CompanyPage

export const query = graphql`
  query CompanyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/our-company/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
          }
          headings {
            value
          }
          html
        }
      }
    }
  }
`
