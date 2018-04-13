import React from 'react'
import Link from 'gatsby-link'
import Sustainability from '../components/MainContent/SustainabilityContent'
import dangerousHTML from '../components/MainContent/Helpers'

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node
  const body = node.html
  const pageTitle = node.frontmatter.title
  return (
    <div className="sustainability text-content">
      <Sustainability content={body} title={pageTitle} />
    </div>
  )
}

export const query = graphql`
  query SustainabilityQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sustainability/" } }
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
