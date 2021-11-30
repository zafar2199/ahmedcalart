import React ,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {ReactComponent as UpArrow } from '../images/arrow-up-outline.svg'

const tl = gsap.timeline();


const Header = () =>{
  const [menuState,setMenuState] = useState({menuOpend:false})

  useEffect(() =>{
    if(menuState.menuOpend === true){
      // run open menu  animation
      gsap.to("body",{css:{overflow:"hidden"}})
      tl.to(".columns-container",{
        duration:1,
        y:"100vh",
        ease:"expo.inOut"
      })
      tl.to(".App",{
        duration:1.3,
        delay:-0.8,
        y:"40vh",
        ease:"expo.inOut"
      })
      .to(".hamburg-menu",{
        duration:0.6,
        delay:-1,
        scaleX:0,
        transformOrigin: "50% 0",
        ease:"expo.inOut"
      }).to(".hamburg-menu-close",{
        duration:1,
        delay:-0.8,
        css:{
          display:"flex"
        }
      })
    }else{
      // Run close menu animation
      tl.to(".columns-container",{
        duration:1,
        y:"-100vh",
        ease:"expo.inOut"
      })
      .to(".App",{
        duration:1.3,
        delay:-0.8,
        y:0,
        ease:"expo.inOut"
      })
      .to(".hamburg-menu",{
        duration:0.6,
        delay:-0.6,
        scaleX:1,
        transformOrigin: "50% 0",
        ease:"expo.inOut"
      }).to(".hamburg-menu-close",{
        duration:1,
        delay:-2 ,
        css:{
          display:"none"
        }
      })
    }
  })
  return(
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <Link to="/" >CALART</Link>
            </div>
            <div className='nav-toggle'>
              <div onClick={() => setMenuState({menuOpend:true})} className="hamburg-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div onClick={() => setMenuState({menuOpend:false})} className="hamburg-menu-close">
                  <UpArrow />
                  <UpArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header;