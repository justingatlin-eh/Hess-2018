import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { withPrefix } from 'gatsby-link'
import './index.scss'
import DownloadDialog from './DownloadDialog'

const TemplateWrapper = props => {
  const path = props.location.pathname
  const isSplash = path === withPrefix('/')
  const pageClass = isSplash ? 'hero' : 'wrapper'

  function useHeader() {
    return isSplash ? '' : <Header location={props.location.pathname} />
  }

  const myprops = { path: path }

  return (
    <div>
      <Helmet>
        <title>Hess Annual Report</title>
      </Helmet>
      {useHeader()}
      <div className={pageClass}>
        <DownloadDialog />
        {props.children({ ...props, ...myprops })}
      </div>
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
