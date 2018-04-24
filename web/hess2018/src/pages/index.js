import React from 'react'
import { navigateTo } from 'gatsby-link'
import HomeHero from '../assets/splash-page-image.jpg'
import MobileHero from '../assets/Mobile-Splash.jpg'

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
  }

  goTo = () => {
    // Needs to fade
    clearTimeout(this.timer2)
    navigateTo('/our-company')
  }

  changeOpa = () => {
    //console.log('opa started')

    if (this.timer2) {
      clearTimeout(this.timer2)
      //console.log('stopped timer2')
    }
    try {
      this.setState(prevState => ({ opa: prevState.opa - 0.038 }))
      if (this.state.opa <= 0) {
        //console.log('done opa')
        clearTimeout(this.timer2)
        this.goTo()
        return
      }
      this.timer2 = setTimeout(this.changeOpa, 100)
    } catch (e) {
      clearTimeout(this.timer2)
    }
    //console.log('opa complete', this.state.opa)
  }

  componentDidUpdate() {
    //console.log('component unmounted')
    clearTimeout(this.timer2)
  }

  componentWillUnmount() {
    //console.log('component unmounted')
    clearTimeout(this.timer2)
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
