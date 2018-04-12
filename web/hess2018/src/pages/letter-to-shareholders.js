import React from 'react'

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node
  const body = node.html
  const pageTitle = node.frontmatter.title
  return (
    <div>
      <div>{pageTitle}</div>
      <div dangerouslySetInnerHTML={{ __html: body }} />
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
