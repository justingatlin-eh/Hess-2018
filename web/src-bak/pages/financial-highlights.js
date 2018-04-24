import React from 'react'
import Link from 'gatsby-link'
import FinancialData from '../components/MainContent/FinancialData'

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node
  const body = node.html
  const pageTitle = node.frontmatter.title

  return (
    <div className="financial">
      <FinancialData />
    </div>
  )
}

export const query = graphql`
  query FinancialQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/financial-highlights/" } }
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
