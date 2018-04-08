import React from 'react'
import Link from 'gatsby-link'

const FinancialPage = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0].node.html
  return (
    <div>
      <div>Financial Page</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default FinancialPage

export const query = graphql`
  query FinancialQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
