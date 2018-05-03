import React from 'react'
import Link from 'gatsby-link'
import FinancialData from '../components/MainContent/FinancialData'

class FinancialHighlightsPage extends React.Component {
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
      <div className="financial">
        <FinancialData />
      </div>
    )
  }
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
export default FinancialHighlightsPage
