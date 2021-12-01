import React from "react";
import { Link } from "react-router-dom";
// import imgItem from "../../images/gridImg/gridImg0.jpg";
// import imgItem2 from "../../images/gridImg/gridImg0.jpg";

const sliderItems = [
  {
    to: "/",
    imgSpan: "Restoran amerika",
    img: 'gridImg0',
    bottomSpan1: "Urganch",
    bottomSpan2: "Modern",
  },
  {
    to: "/sava",
    imgSpan: "Home Austaralia",
    img: 'gridImg1',
    bottomSpan1: "Austarali",
    bottomSpan2: "Modern",
  },
  {
    to: "/sava",
    imgSpan: "Home Austaralia",
    img: 'gridImg2',
    bottomSpan1: "Austarali",
    bottomSpan2: "Modern",
  },
  {
    to: "/sava",
    imgSpan: "Home Austaralia",
    img: 'gridImg3',
    bottomSpan1: "Austarali",
    bottomSpan2: "Modern",
  },



];
const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="title">More projects</h2>
      </div>
      <div className="slider-container">
        {
          sliderItems.map(({to,imgSpan,img,bottomSpan1,bottomSpan2}) =>(
            <Link key={bottomSpan1} to={to} className="slider-item" >
              <div className="img-blog">
                <span>{imgSpan}</span>
                <img src={require(`../../images/imgslider/${img}.jpg`).default} alt={imgSpan} />
              </div>
              <div className='img-blog-bottom'>
                <span>{bottomSpan1}</span>
                <span>{bottomSpan2}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Slider;
