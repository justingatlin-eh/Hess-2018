import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'
import MainContent from '../components/MainContent'
import img1 from '../assets/first-gas-small.jpg'
import img2 from '../assets/Sawyer-v2-small.jpg'
import ArrowOnOff from '../assets/arrow-on-off.png'

const CompanyPage = props => {
  function key() {
    return String(Math.random() * 100 + Date.now()).replace('.')
  }
  const arr = [
    '<span class="first"><span class="large">Hess Corporation</span> is a leading global independent energy company engaged in the exploration and production of crude oil and natural gas.</span>',
    'We are committed to meeting the highest standards of corporate citizenship by protecting the health and safety of our employees, safeguarding the environment and making a positive impact on the communities in which we do business.',
  ]

  const tagClicked = url => {
    navigateTo(url)
  }

  return (
    <div className="company">
      <div className="inner-content">
        {arr.map(val => <MainContent key={key()} content={val} />)}
        <div className="content buttons">
          <Link to="/letter-to-shareholders">
            <button>
              Letter to Shareholders<span className="arrow">&nbsp;</span>
            </button>
          </Link>
          <Link to="/financial-highlights">
            <button>
              Financial Highlights<span className="arrow">&nbsp;</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <span className="a" onClick={() => tagClicked('/global-operations')}>
          <img src={img1} />
          <span>
            <span>Global Operations</span>
          </span>
        </span>
        <span className="a" onClick={() => tagClicked('/sustainability')}>
          <img src={img2} />
          <span>
            <span>Sustainability</span>
          </span>
        </span>
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
