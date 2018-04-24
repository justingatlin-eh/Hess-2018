import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { withPrefix } from 'gatsby-link'
import './index.scss'

import TenK from '../assets/Hess_10Kcover.png'
import ARCover from '../assets/Hess_AR2017_Cover.png'
import Hess10K from '../assets/Hess_10Kcover.png'
import img1 from '../assets/first-gas-small.jpg'
import img2 from '../assets/Sawyer-v2-small.jpg'
import ArrowOnOff from '../assets/arrow-on-off.png'
import HomeHero from '../assets/splash-page-image.jpg'
import HeadImg from '../assets/first-gas-large.jpg'
import OilRig from '../assets/NorthDakota_MMorrison.jpg'
import DrillingOperations from '../assets/Stena_Carron.jpg'
import Sawyer from '../assets/Sawyer-v2-large.jpg'
import Riders from '../assets/ms-bike-race.jpg'

const TemplateWrapper = props => {
  const path = props.location.pathname
  const isSplash = path === withPrefix('/')
  const pageClass = isSplash ? 'hero' : 'wrapper'

  function useHeader() {
    return isSplash ? '' : <Header location={props.location.pathname} />
  }

  function getImages() {
    const imgList = [
      TenK,
      ARCover,
      Hess10K,
      img1,
      img2,
      ArrowOnOff,
      HomeHero,
      HeadImg,
      OilRig,
      DrillingOperations,
      Sawyer,
      Riders,
    ]
    return imgList
  }

  const myprops = { path: path }

  getImages()

  return (
    <div>
      <Helmet>
        <title>Hess Annual Report</title>
      </Helmet>
      {useHeader()}
      <div className={pageClass}>
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
