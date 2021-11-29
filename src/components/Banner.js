import React from 'react';
import MainImg from '../images/bg.png'

const Banner = () => {
  return(
    <section className="main">
      <div className="container-fluid">
        <div className="row">
          <h2>
            <div className="line">
              <span>We create places that connect,</span>
            </div>
            <div className="line">
              <span>sustain & inspire.</span>
            </div>
          </h2>
          <img className="main-img" src={MainImg} alt="main-img" />
        </div>
      </div>
    </section>
  )
}

export default Banner;