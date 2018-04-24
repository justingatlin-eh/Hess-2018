import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { withPrefix } from 'gatsby-link'
import './index.scss'
import DownloadModal from '../components/Header/DownloadModal'

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
import Footer from './Footer'
class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isopen: false,
      width: 0,
      height: 0,
      isPortrait: null,
      isMobile: null,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.path = props.location.pathname
    this.toggleModal = this.toggleModal.bind(this)

    this.pageClass = this.isSplash ? 'hero' : 'wrapper'
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
    this.updateWindowDimensions()
  }

  updateWindowDimensions() {
    const ua = window.navigator.userAgent
    const isMobile = /mobile/i.test(ua)
    const width = window.innerWidth
    const height = window.innerHeight
    const isPortrait = height >= width
    this.setState(prevState => ({ width, height, isPortrait, isMobile }))
  }

  toggleModal(s) {
    this.setState(prevState => ({ isopen: !this.state.isopen }))
  }

  useHeader() {
    const pathname = this.props.location.pathname
    const isSplash = pathname === withPrefix('/')
    return isSplash ? (
      ''
    ) : (
      <Header location={pathname} handleToggle={this.toggleModal} />
    )
  }

  useFooter() {
    const pathname = this.props.location.pathname
    const isSplash = pathname === withPrefix('/')
    return isSplash ? '' : <Footer />
  }

  getImages() {
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

  myprops = s => {
    return {
      path: this.props.path,
      toggleModal: this.toggleModal,
      height: s.height,
      width: s.width,
      isPortrait: s.isPortrait,
      isMobile: s.isMobile,
    }
  }

  render() {
    const myprops = this.myprops(this.state)
    return (
      <div
        data-ismobile={this.state.isMobile}
        data-isportrait={this.state.isPortrait}
      >
        <Helmet>
          <title>Hess Annual Report</title>
          <link
            rel="shortcut icon"
            href="//www.hess.com/Sitefinity/WebsiteTemplates/HessBootstrap/App_Themes/HessBootstrap/Images/favicon.ico"
          />
          <link
            rel="icon"
            href="//www.hess.com/Sitefinity/WebsiteTemplates/HessBootstrap/App_Themes/HessBootstrap/Images/favicon.ico"
            type="image/ico"
          />
        </Helmet>
        {this.useHeader()}

        <div data-modalopen={this.state.isopen} className={this.pageClass}>
          {this.props.children({ ...this.props, ...myprops })}
        </div>
        <DownloadModal
          handleToggle={this.toggleModal}
          isopen={this.state.isopen}
        />
        {this.useFooter()}
      </div>
    )
  }
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
