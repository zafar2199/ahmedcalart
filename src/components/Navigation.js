import React from 'react';
import { NavLink } from 'react-router-dom';
import { closeMenu } from '../animations/menuAnimation';

const Navigation = () => {
  return(
    <div className="container-fluid">
      <div className="columns-container">
         <div className="nav-columns">
          <div className="nav-column-left">
          <ul className="nav-links">
            <li>
              <NavLink onClick={() => closeMenu()} to="/">Study</NavLink>
            </li>
            <li>
              <NavLink onClick={() => closeMenu()} to="/portfolio">Projects</NavLink>
            </li>
            <li>
              <NavLink onClick={() => closeMenu()} to="/about">About</NavLink>
            </li>
          </ul>
          </div>
          <div className="nav-column-right">
            <div className="nav-column">
               <ul className="nav-infos">
            <li>Al-Xorazmiy ko'cha</li>
            <li>tel:+99-899-132-80-00</li>
            <li>Al-Xorazmiy ko'cha</li>
               </ul>
            </div>
            <div className="nav-column">
              <ul className="nav-infos">
            <li>Al-Xorazmiy ko'cha</li>
            <li>tel:+99-899-132-80-00</li>
            <li>Al-Xorazmiy ko'cha</li>
              </ul>
            </div>

            <div className="nav-column">
          <ul className="nav-infos">
            <li><NavLink to="/">Instagram.</NavLink></li>
            <li><NavLink to="/">Telegram.</NavLink></li>
            <li><NavLink to="/">Behance.</NavLink></li>

          </ul>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navigation;