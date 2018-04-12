import React from 'react'
import MenuList from './MenuList'
import MenuButton from '../../assets/menubutton.png'

export default ({ children }) => (
  <div className="menu-button">
    <div>
      <div>
        <a href="javascript: void(0);">
          <img
            src={MenuButton}
            alt="Menu Button"
            onClick={e => {
              const el = document.querySelector('.sub-header')
              const current = el.getAttribute('data-hide')
              const toggled = String(/true/i.test(current) ? false : true)
              el.setAttribute('data-hide', toggled)
            }}
          />
        </a>
      </div>
    </div>
  </div>
)
