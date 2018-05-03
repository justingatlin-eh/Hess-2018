import React from 'react'
import ShareHolders from '../components/MainContent/Shareholders'

class LetterToShareholders extends React.Component {
  constructor(props) {
    super(props)
  }

  //this.props.handlePage()
  node = this.props.data.allMarkdownRemark.edges[0].node
  body = this.node.html
  pageTitle = this.node.frontmatter.title

  componentDidMount() {
    this.props.handlePage(this.props.location.pathname)
  }

  render() {
    return (
      <div className="shareholders text-content">
        <ShareHolders />
      </div>
    )
  }
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

export default LetterToShareholders
