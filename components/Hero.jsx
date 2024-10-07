import {React, useState, useEffect, useCallback, useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Blinker from './Blinker';
import Link from 'next/link';
import Line from './Line';
import {AiOutlineLine} from 'react-icons/ai';


function Hero({heading}){
  const [showDesc, setShowDesc] = useState(false)
  const [descTwo, setDescTwo] = useState(false)
  const [coord, setCoord]= useState(["0,0 0,0 0,0"])  
  const [animate, setAnimate] = useState(true)
  const [mobileAnimate, setMobileAnimate] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };


  const isBreakPoint = useMediaQuery(1300)



  const blinkers = [
    // Smoke Control System
    {
      name: 'blinker-1',
      bgColor: '#33FF33',
      delayTime: 2,
      repeatDelayTime : 15,
      classDesc: "md:absolute my-5 md:my-0 left-[40%] top-[48%]",
      svg_w: '',
      svg_h: '250px',
      svg_class: "relative  origin-top rotate-90 mt-6",
      poly_points:"0,0 130,140",
      div_parent_class: "absolute bottom-[140%] right-[-10%] w-[350px]",
      // svg_w: '',
      // svg_h: "200px",
      // svg_class: "relative rotate-180 origin-top right-[92%] mt-[-5%]",
      // poly_points: "30,0, 120,150",
      // div_parent_class: "absolute bottom-[145%] right-[130%] w-[300px]",
      desc: "Terminal will consist of a NFPA-92 compliant Smoke Control System serving required smoke-protected areas. Terminal's Architecture, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke remove.",
      heading: 'Smoke Control System',
      img: '/assets/clip-1.png'
    },
    // Mechanical Plants
    {
      name: 'blinker-2',
      bgColor: '#33FF33',
      delayTime:5,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 right-[27%] top-[42%]",
      svg_w: '',
      svg_h: '250px',
      svg_class: "relative  origin-top rotate-90 mt-6",
      poly_points:"0,0 130,140",
      div_parent_class: "absolute bottom-[140%] right-[-15%] w-[350px]",

      // div_parent_class: "absolute bottom-[140%] right-[20%] w-[350px]",
      desc: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly to conceal and not impact patron experience.",
      heading:"Mechanical Plants",
      img: "/assets/clip-1.png"


    },
    // Electric Vehicle Charging
    {
      name: 'blinker-3',
      bgColor: '#A117FD',
      delayTime:8,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 right-[10%]  top-[45%]",
      svg_w: 'w-0',
      svg_h: '300px',
      svg_class: "relative rotate-180 origin-left bottom-[5px] ml-2 h-full",
      // 55,-10 ,-40,480
      poly_points:"55,40 ,-50,480",
      div_parent_class: "absolute bottom-[-20%] right-[5%] mr-[-30px] w-[305px]",
      desc: "Garage consists 2,500+ Parking spaces with 250+ spaces of Level-2 Electrical (EV) charging infrastructure.",
      heading: "Electric Vehicle Charging",
      img: "/assets/clip-2.png"
      // classDesc : "md:absolute my-5 md:my-0 left-[33%] bottom-[42%]",
      // svg_w : "w-full",
      // svg_h: "250px",
      // svg_class: "relative rotate-90 right-[90%]",
      // poly_points: "10,0 200,200",
      // div_parent_class: "absolute top-[30%] ml-[-110%] w-[375px]",
      // heading: 'Shore Power',
      // img: '/assets/clip-2.png',
      // desc: "When finished, the Terminal will have the ability to probide (2) shore-side electrical power (15-kV) connections to service ships at Berth 8 and Berth 9, while their main and axillary diesel fueled engines are shut down.",
      // link: 'https://www.miamidade.gov/releases/2021-08-06-portmiami-shore-power-ready.asp'
      // classDesc : "md:absolute my-5 md:my-0 left-1/4 top-1/3"

      // classDesc: "md:absolute my-5 md:my-0 left-[445px] top-[480px]"
    },
    // Art in Public Places
    {
      name: 'blinker-4',
      bgColor: '#A117FD',
      delayTime:11,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 right-[45%] bottom-[41%]",
      svg_w: '',
      svg_h: '140px',
      svg_class: "relative rotate-90 right-[70%]",
      poly_points: "80,-15, 220,200",
      div_parent_class: " absolute top-[48%] right-[40%] w-[525px]",
      heading: "Art in Public Places",
      desc: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      link: {
        title: "Danielle Roney",
        url:"http://www.danielleroney.com/portfolio/the-eddies/"
      },
      img:'/assets/clip-2.png',
      

      // classDesc: "md:absolute my-5 md:my-0 right-[44%] bottom-[40%]",
      // svg_w: "",
      // svg_h: '150px',
      // svg_class: "relative rotate-180 origin-top right-[95%]",
      // poly_points: "8,15 200,200",
      // div_parent_class: "absolute bottom-[180%] ml-[-125%] w-[500px]"


    },
    // LEED
    {
      name: 'blinker-5',
      bgColor: '#A117FD',
      delayTime:14,
      repeatDelayTime: 15,
      classDesc : "md:absolute my-5 md:my-0 left-[15%] bottom-[40%]",
      svg_w : "",
      svg_h: "270px",
      svg_class: "relative rotate-180 right-[75%]",
      poly_points: "30,20 100,450",

      // poly_points: "20,-30 150,200",
      div_parent_class: "absolute top-[45%] right-[50%] 2xl:w-[375px] w-[325px]",
      heading: 'LEED',
      img: '/assets/clip-2.png',
      desc: 'The Terminal is on schedule to become LEED Gold Certified upon completion.',
    },
    // Shore Power
    {
      name: 'blinker-6',
      bgColor: '#A117FD',
      delayTime:17,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 left-[18%] top-[44%]",
      heading: 'Shore Power',
      img: '/assets/clip-2.png',
      desc: "When finished, the Terminal will have the ability to provide (2) shore-side electrical power (15-kV) connections to service ships at Berth 8 and Berth 9, while their main and auxiliary diesel fueled engines are shut down.",
      link: {
        title: 'Miami-Dade',
        url:'https://www.miamidade.gov/releases/2021-08-06-portmiami-shore-power-ready.asp'
      },
      svg_h: "200px",
      // relative rotate-90 origin-top left-[8%] mt-2
      svg_class: "relative rotate-180 origin-top right-[92%] mt-[-5%]",
      // ""20,0, 100,100""
      poly_points: "30,0, 120,150",
      div_parent_class: "absolute bottom-[145%] right-[55%] w-[350px]",
      svg_w : "",
      // svg_h: "143px",
      // svg_class: "relative rotate-90 origin-top",
      // poly_points : "20,-20, 244,260",
      // div_parent_class : " absolute bottom-[170%] left-[0%] w-[350px]",
      // classDesc: "md:absolute my-5 md:my-0 xl:right-[25%] 2xl:right-[30%] bottom-[43%]",
      // svg_w: '',
      // svg_h: '140px', 
      // svg_class: "relative rotate-90 right-[70%]",
      // poly_points: "63,2 200,200",
      // div_parent_class: " absolute top-[20%] ml-[-175%] w-[525px]",
      // desc: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      // link: "http://www.danielleroney.com/portfolio/the-eddies/",
      // img:'/assets/clip-2.png',
      // heading: "Art in Public Places"

      // classDesc: "md:absolute my-5 md:my-0 right-[460px] top-[345px]"


    },
  ]

  function handleMobileAnimate(){
    setAnimate(!animate)
    setMobileAnimate(!mobileAnimate)
  }

  return (
    <div className={isBreakPoint ? 'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover mobile-img' :'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover custom-img'}>
      <motion.div className=" mb-40 md:mb-0 ">
        { !isBreakPoint && !isInView ? 
        // ""
        blinkers.map((blinker)=> {
          return(
            <motion.div 
            initial={{opacity:0}}
            animate ={{opacity:1, transition: {delay:1.5, duration:1}}}
            key={blinker.name} className='z-20'>
              <Blinker blinker={blinker}  showDesc={showDesc} setShowDesc={setShowDesc}/>
            </motion.div>
          )
        }) 
        : 
        /* MOBILE HERO */
        <div className="text-center justify-center items-center flex">
          <div className='justify-center items-center ml-10'>
          
          
          
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{delay:2, duration:1}}}
            className='justify-center items-center '
          >
            <button id='mobile-button' aria-label='mobile_button' className={animate ? "bg-light_bg ease-in-out duration-200 p-2 rounded-xl animation-blimp-1 m-auto" : "bg-accent_1 text-primary_text ease-in-out duration-200 p-2 rounded-xl"} onClick={()=> handleMobileAnimate()}>
              What We're Working On
            </button>
          </motion.div>
            { mobileAnimate && !animate ? <div className="items-center justify-center text-center">
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:1}}}
              className="mobile-desc-div">
                <Link href={"/#projects"} >
                  <p className='mobile-desc'>
                    MSC Miami Cruise Terminal
                  </p>
                </Link>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:1.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:2}}}
              className="mobile-desc-div">
                <Link  href={'/#projects'} >
                  <p className='mobile-desc'>East End Food Institute (EEFI)</p>
                </Link>
                {/* <a href="#projects" >
                  <p className='mobile-desc'>
                    East End Food Institute (EEFI)
                  </p>
                
                </a> */}
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:2.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:3}}}
              
              className="mobile-desc-div">
                 <Link href={"/#projects"} >
                  <p className='mobile-desc'>
                  Private High-End Residence
                  </p>
                </Link>
              </motion.div>

              
            
            </div> : ""
            }
          </div>
        </div>
      }
      </motion.div>
      <motion.div 
      initial={{opacity:0.1}}
      whileInView={{opacity:[0.5, 0.8, 1], transition:{delay:1.2, duration:1}}}
      className='p-5 text-primary_text  outline-black z-0 mt-[-10rem]'
      >
        <h1 className='lg:text-[700%] text-7xl bg-slate-800/50 rounded-xl md:bg-white/0 m-2 md:m-0 absolute lg:font-thin lg:right-[1%] right-0 bottom-1 p-3 z-0'>{heading}</h1>
      </motion.div>
    </div>
  );
};

export default Hero;