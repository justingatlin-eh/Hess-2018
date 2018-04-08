import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <title>Hess Annual Report</title>
    </Helmet>
    <Header />
    <div className="wrapper">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
