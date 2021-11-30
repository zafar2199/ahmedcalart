import React from 'react';

const Navigation = () => {
  return(
    <div className="container-fluid">
      <div className="columns-container">
         <div className="nav-columns">
          <div className="nav-column-left">
          <ul className="nav-links">
            <li>
              <a href="#">Study</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
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
            <li><a href="#">Instagram.</a></li>
            <li><a href="#">Telegram.</a></li>
            <li><a href="#">Behance.</a></li>

          </ul>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navigation;