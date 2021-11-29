import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
  return(
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <Link to="/" >AHMEDCALART</Link>
            </div>
            <div className='nav-toggle'>
              <div className="hamburg-menu">
                <span></span>
                <span></span>
              </div>
              <div className="hamburg-menu-close">
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header;