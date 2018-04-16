import React from 'react'
import { navigateTo } from 'gatsby-link'
import HomeHero from '../assets/splash-hero.png'

const IndexPage = () => {
  function goTo() {
    navigateTo('/our-company')
  }

  setTimeout(goTo, 5000)

  return (
    <div className="splash" onClick={() => goTo()}>
      <img className="main-image" src={HomeHero} />
    </div>
  )
}

export default IndexPage
