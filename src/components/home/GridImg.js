import gridImg1 from "../../images/gridImg/gridImg1.png";
import gridImg2 from "../../images/gridImg/gridImg2.png";
import gridImg3 from "../../images/gridImg/gridImg3.png";
import gridImg4 from "../../images/gridImg/gridImg4.png";
import gridImg5 from "../../images/gridImg/gridImg5.png";
import gridImg6 from "../../images/gridImg/gridImg6.png";
import gridImg7 from "../../images/gridImg/gridImg7.png";
import gridImg8 from "../../images/gridImg/gridImg8.png";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const GridImg = () => {
  return (
    <div className="container-fluid">
      <div className="grid-container">
        <div className="grid-item-1 grid-item ">
          <img src={gridImg1} alt="img" />
        </div>
        <div className="grid-item-2 grid-item">
          <img src={gridImg2} alt="img" />
        </div>
        <div className="grid-item-3 grid-item">
          <img src={gridImg3} alt="img" />
        </div>
        <div className="grid-item-4 grid-item">
          <img src={gridImg4} alt="img" />
        </div>
        <div className="grid-item-5 grid-item">
          <img src={gridImg5} alt="img" />
        </div>
        <div className="grid-item-6 grid-item">
          <img src={gridImg6} alt="img" />
        </div>
        <div className="grid-item-7 grid-item">
          <img src={gridImg7} alt="img" />
        </div>
        <div className="grid-item-8 grid-item">
          <img src={gridImg8} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default GridImg;
