import React from 'react'
import MenuList from './MenuList'
import MenuButton from '../../assets/menubutton.png'

export default ({ children }) => (
  <div className="menu-button">
    <div>
      <div>
        <a href="javascript: void(0);">
          <img src={MenuButton} alt="Menu Button" />
        </a>
      </div>
    </div>
  </div>
)
