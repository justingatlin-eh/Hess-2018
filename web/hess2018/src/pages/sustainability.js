import React from 'react'
import Link from 'gatsby-link'
import Sustainability from '../components/MainContent/SustainabilityContent'
import dangerousHTML from '../components/MainContent/Helpers'

class SustainabilityPage extends React.Component {
  constructor(props) {
    super(props)
    //console.log('Sustainability', this.props)
  }

  node = this.props.data.allMarkdownRemark.edges[0].node
  body = this.node.html
  pageTitle = this.node.frontmatter.title

  componentDidMount() {
    this.props.handlePage(this.props.location.pathname)
  }

  render() {
    return (
      <div className="sustainability text-content">
        <Sustainability content={this.body} title={this.pageTitle} />
      </div>
    )
  }
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

export default SustainabilityPage
