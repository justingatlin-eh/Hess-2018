import React from 'react'
import Link from 'gatsby-link'
import GlobalOperations from '../components/MainContent/GlobalOperations'

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node
  const body = node.html
  const pageTitle = node.frontmatter.title

  return (
    <div className="global text-content">
      <GlobalOperations title={pageTitle} />
    </div>
  )
}

export const query = graphql`
  query GlobalOperationsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/global-operations/" } }
    ) {
      edges {
        node {
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
