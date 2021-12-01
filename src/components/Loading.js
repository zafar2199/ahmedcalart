import React , {useState, useEffect} from 'react';
import gsap from 'gsap';

const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {
  tl.to("body",0,{css:{overflow:"hidden"}})
  .to(".span-line div",1.8,{
    y:"-100px",
    ease:"power4.out",
    delay:1,
    skewY:10,
    stagger:{
      amount:.5
    }
  }).to(".span-line2 div",1.2,{
    y:"-100px",
    ease:"power4.out",
    delay:-2.3,
    // skewY:8,
    stagger:{
      amount:.2
    }
  })

  .to("body",0,{css:{overflow:"hidden"}})
  .to(".loading-container",1.2,{
    y:"-100vh",
    ease:"power4.out",
    onComplete:completeAnimation
  })
  .from(".App",{
    duration:1.2,
    delay:-1.2  ,
    y:"100vh",
    ease:"power4.out",
  })
  .to("body",0,{css:{overflow:"auto"}})
}

const Loading = () => {

  const [animateComplite,setAnimateComplite] = useState(false);

  const completeAnimation = () => {
    setAnimateComplite(true)
  }


    useEffect(()=>{
      homeAnimation(completeAnimation)
    },[])
  return(
      <>
        {animateComplite === false ?
                <div className="loading-container">
                <div className="loading-text">
                    <div className="span-lines">
                      <div className="span-line">
                        <div>A</div>
                        <div>H</div>
                        <div>M</div>
                        <div>E</div>
                        <div>D </div>
                        <div>C</div>
                        <div>A</div>
                        <div>L</div>
                        <div>A</div>
                        <div>R</div>
                        <div>D</div>

                      </div>
                      <div className="span-line2">
                      <div>A</div>
                        <div>H</div>
                        <div>M</div>
                        <div>E</div>
                        <div>D</div>
                        <div>C</div>
                        <div>A</div>
                        <div>L</div>
                        <div>A</div>
                        <div>R</div>
                        <div>D</div>
                      </div>
                    </div>
                </div>
              </div> : ""


      }
      </>
    )
}

export default Loading;