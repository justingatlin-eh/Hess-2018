import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { withPrefix } from 'gatsby-link'
import './index.scss'

const TemplateWrapper = ({ children, data, location }) => {
  const isSplash = location.pathname === withPrefix('/')
  const pageClass = isSplash ? 'hero' : 'wrapper'

  function useHeader() {
    return isSplash ? '' : <Header />
  }

  return (
    <div>
      <Helmet>
        <title>Hess Annual Report</title>
      </Helmet>
      {useHeader()}
      <div className={pageClass}>{children()}</div>
    </div>
  )
}

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
