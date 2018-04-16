import React from 'react'
import dangerousHTML from './Helpers'

const Board = props => {
  return (
    <div>
      <section className="directors section">
        <h1 className="board title">Board of Directors</h1>
        <section className="content">
          <p>Board of Directors</p>
        </section>
      </section>

      <section className="officers section">
        <h2 className="officers">Officers</h2>
        <section className="content">
          <p>Officers</p>
        </section>
      </section>
    </div>
  )
}

export default Board
