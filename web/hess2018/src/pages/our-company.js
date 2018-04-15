import React from 'react'
import Link from 'gatsby-link'
import MainContent from '../components/MainContent'
import img1 from '../assets/our-company-global-operations.png'
import img2 from '../assets/our-company-sawyer1.png'

const CompanyPage = props => {
  function key() {
    return String(Math.random() * 100 + Date.now()).replace('.')
  }
  const arr = [
    'Hess Corporation is a leading global independent energy company engaged in the exploration and production of crude oil and natural gas.',
    'We are committed to meeting the highest standards of corporate citizenship by protecting the health and safety of our employees, safeguarding the environment and making a positive impact on the communities in which we do business.',
  ]

  return (
    <div className="company">
      <div className="inner-content">
        {arr.map(val => <MainContent key={key()} content={val} />)}
        <div className="content buttons">
          <Link to="/letter-to-shareholders">
            <button>Letter to Shareholders</button>
          </Link>
          <Link to="/financial-highlights">
            <button>Financial Highlights</button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img src={img1} />
        <img src={img2} />
      </div>
    </div>
  )
}

export default CompanyPage

export const query = graphql`
  query CompanyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/our-company/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            layout
          }
          html
        }
      }
    }
  }
`
