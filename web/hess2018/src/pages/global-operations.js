import React from 'react'
import Link from 'gatsby-link'
import GlobalOperations from '../components/MainContent/GlobalOperations'

class GlobalOperationsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  node = this.props.data.allMarkdownRemark.edges[0].node
  body = this.node.html
  pageTitle = this.node.frontmatter.title

  componentDidMount() {
    this.props.handlePage(this.props.location.pathname)
  }

  render() {
    return (
      <div className="global text-content">
        <GlobalOperations title={this.pageTitle} />
      </div>
    )
  }
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
export default GlobalOperationsPage
