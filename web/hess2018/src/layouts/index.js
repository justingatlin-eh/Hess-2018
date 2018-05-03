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
import handlePage from '../utils/handlePage'

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
      isSplash: true,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.path = props.location.pathname
    this.toggleModal = this.toggleModal.bind(this)
    this.uaObj = this.uaObj.bind(this)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.ua = null
    this.pathname = this.props.location.pathname
    this.handlePage = this.handlePage.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
    document.addEventListener('scroll', this.trackScrolling)
    this.ua = window.navigator.userAgent
    this.updateWindowDimensions()
  }

  handlePage(isSplash) {
    const arr = [
      '/board-and-officers',
      '/404',
      '/financial-highlights',
      '/global-operations',
      '/letter-to-shareholders',
      '/sustainability',
      '/our-company',
    ]
    //this.pageClass = this.state.isSplash ? 'hero' : 'wrapper'

    const isFound = !arr.find(function(e) {
      const re = new RegExp(e, 'i')
      return re.test(isSplash)
    })

    this.setState(prevState => {
      return {
        isSplash: Boolean(isFound),
        pageClass: Boolean(isFound) ? 'hero' : 'wrapper',
        currentLocation: isSplash,
      }
    })
  }

  trackScrolling(event) {
    const isBottom = el => {
      if (el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight
      }
      return 0
    }
    const isTop = el => {
      if (el) {
        return el.getBoundingClientRect().top <= window.innerHeight
      }
      return 0
    }
    this.setState(prevState => {
      return { showBTT: false }
    })
    const wrappedElement = document.getElementById('dload')
    let b = isBottom(wrappedElement)
    let t = isTop(wrappedElement)
    if (b) {
      this.setState(prevState => {
        return { showBTT: true }
      })
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
    this.setState(prevState => {
      return { width, height, isPortrait, isMobile }
    })
  }

  uaObj() {
    const ua = this.ua
    const isIE = /Trident/i.test(ua)
    const isFireFox = /FireFox/i.test(ua)
    return { isIE, isFireFox }
  }

  toggleModal(s) {
    this.setState(prevState => {
      return { isopen: !this.state.isopen }
    })
  }

  useHeader() {
    return this.state.isSplash ? (
      ''
    ) : (
      <Header
        location={this.state.currentLocation}
        handleToggle={this.toggleModal}
      />
    )
  }

  useFooter() {
    return this.state.isSplash ? '' : <Footer />
  }

  backToTop() {
    const isMobile = this.state.isMobile
    return !this.state.isSplash && isMobile ? (
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
      isSplash: this.state.isSplash,
      handlePage: this.handlePage,
      currentLocation: this.state.currentLocation,
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
        data-issplash={this.state.isSplash}
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
        <div
          data-modalopen={this.state.isopen}
          className={this.state.pageClass}
        >
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
