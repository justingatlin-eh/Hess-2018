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
import BTT from '../assets/back-to-top.png'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isopen: false,
      width: 0,
      height: 0,
      isPortrait: null,
      isMobile: null,
      showBTT: null,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.path = props.location.pathname
    this.toggleModal = this.toggleModal.bind(this)

    this.pageClass = this.isSplash ? 'hero' : 'wrapper'
    this.uaObj = this.uaObj.bind(this)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.ua = null
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
    document.addEventListener('scroll', this.trackScrolling)
    this.ua = window.navigator.userAgent
    this.updateWindowDimensions()
  }

  trackScrolling(event) {
    const isBottom = el => {
      return el.getBoundingClientRect().bottom <= window.innerHeight
    }
    const isTop = el => {
      return el.getBoundingClientRect().top <= window.innerHeight
    }
    // console.log('track scrolling', event)
    this.setState(prevState => ({ showBTT: false }))
    const wrappedElement = document.getElementById('dload')
    let b = isBottom(wrappedElement)
    let t = isTop(wrappedElement)
    if (b) {
      this.setState(prevState => ({ showBTT: true }))
    }
    if (t) {
      //this.setState(prevState => ({ showBTT: false }))
    }
  }

  updateWindowDimensions() {
    const ua = window.navigator.userAgent
    const isMobile = /mobile/i.test(ua)
    const width = window.innerWidth
    const height = window.innerHeight
    const isPortrait = height >= width
    this.setState(prevState => ({ width, height, isPortrait, isMobile }))
  }

  uaObj() {
    const ua = this.ua
    const isIE = /Trident/i.test(ua)
    const isFireFox = /FireFox/i.test(ua)
    return { isIE, isFireFox }
  }

  toggleModal(s) {
    this.setState(prevState => ({ isopen: !this.state.isopen }))
  }

  useHeader() {
    const pathname = this.props.location.pathname
    const isSplash = pathname === withPrefix('/')
    //console.log('isSplash', isSplash)
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

  backToTop() {
    const pathname = this.props.location.pathname
    const isSplash = pathname === withPrefix('/')
    const isMobile = this.state.isMobile
    // console.log(isMobile)
    return !isSplash && isMobile ? (
      <a
        data-show={this.state.showBTT}
        onClick={e => {
          window.scrollTo(0, 0)
        }}
        className="back-to-top"
        href="javascript: void(0);"
      >
        <img src={BTT} />
      </a>
    ) : (
      ''
    )
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
    const obj = this.uaObj()
    const isFireFox = obj.isFireFox
    const isIE = obj.isIE
    return (
      <div
        data-ismobile={this.state.isMobile}
        data-isportrait={this.state.isPortrait}
        data-isie={isIE}
        data-isfirefox={obj.isFireFox}
        data-issplash={this.useHeader() ? false : true}
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
        {this.backToTop()}
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
