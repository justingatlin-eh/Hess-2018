import React from 'react'
import Link from 'gatsby-link'

const MainContent = props => {
  function createHTML(html) {
    return { __html: html }
  }
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={createHTML(props.content)}
    />
  )
}

export default MainContent
