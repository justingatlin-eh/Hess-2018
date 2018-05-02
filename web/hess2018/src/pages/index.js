import React from 'react'
import { navigateTo } from 'gatsby-link'
import HomeHero from '../assets/splash-page-image.jpg'
import MobileHero from '../assets/Mobile-Splash.jpg'
import { withPrefix } from 'gatsby-link'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.goTo = this.goTo.bind(this)
    this.getSplash = function() {}
    this.state = { opa: 1 }
    this.changeOpa = this.changeOpa.bind(this)
    this.timer2 = null
  }

  componentDidMount() {
    this.timer = setTimeout(this.changeOpa, 2500)
    this.SplashMounted = true;
  }

  goTo = () => {
    // Needs to fade
    clearTimeout(this.timer2)
    navigateTo('/media_files/IROL/10/101801/2018_AR/our-company')
  }

  changeOpa = () => {
    clearTimeout(this.timer2)
    if (this.state.opa <= 0) {
      //console.log('done opa')
      this.goTo()
    } else {
      const pathname = this.props.location.pathname
      const isSplash = pathname === withPrefix('/')
        if (this.SplashMounted){ 
        this.setState(prevState => ({ opa: prevState.opa - 0.038 }))
        this.timer2 = setTimeout(this.changeOpa, 100)
        }
      }
    }

  componentDidUpdate() {
    //console.log('component unmounted')
    clearTimeout(this.timer2)
  }

  componentWillUnmount() {
    //console.log('component unmounted')
    clearTimeout(this.timer2)
    this.SplashMounted = false;
  }

  render() {
    return (
      <div
        style={{ opacity: this.state.opa }}
        className="splash"
        onClick={() => {
          //console.log('pages/layout', this)
          //clearTimeout(this.timer)
          this.goTo()
        }}
      >
        <img
          className="main-image"
          src={
            this.props.isMobile && this.props.isPortrait ? MobileHero : HomeHero
          }
        />
      </div>
    )
  }
}

export default IndexPage
