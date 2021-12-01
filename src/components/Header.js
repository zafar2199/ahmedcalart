import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UpArrow } from "../images/arrow-up-outline.svg";
import { openMenu, closeMenu } from "../animations/menuAnimation";


const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpend: false });

  useEffect(() => {
    if (menuState.menuOpend === true) {
      // run open menu  animation
      openMenu();
    } else {
      // Run close menu animation
      closeMenu();
    }
  });
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">CALART</Link>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpend: true })}
              className="hamburg-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpend: false })}
              className="hamburg-menu-close"
            >
              <UpArrow />
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
