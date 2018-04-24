import React from 'react'
import MenuList from './MenuList'
import MenuButton from '../../assets/menubutton.png'
import { toggleMenu } from './CustomEvents'

export default ({ children }) => (
  <div className="menu-button">
    <div>
      <div>
        <a href="javascript: void(0);">
          <img
            src={MenuButton}
            alt="Menu Button"
            onClick={e => toggleMenu(e)}
          />
        </a>
      </div>
    </div>
  </div>
)
