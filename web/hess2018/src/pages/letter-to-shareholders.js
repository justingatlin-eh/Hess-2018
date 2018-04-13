import React from 'react'
import ShareHolders from '../components/MainContent/Shareholders'

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node
  const body = node.html
  const pageTitle = node.frontmatter.title
  return (
    <div className="shareholders text-content">
      <ShareHolders />
    </div>
  )
}

export const query = graphql`
  query LetterToShareholdersQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/letter-to-shareholders/" } }
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
