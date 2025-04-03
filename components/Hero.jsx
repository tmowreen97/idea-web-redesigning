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
      // classDesc: "md:absolute my-5 md:my-0 left-[40%] top-[48%]",
      classDesc: "md:absolute my-5 md:my-0 left-[48%] top-[51%]",
      svg_w: '',
      svg_h: '250px',
      svg_class: "relative  origin-top rotate-90 mt-6",
      poly_points:"0,0 130,140",
      // div_parent_class: "absolute bottom-[140%] right-[-10%] w-[350px]",
      div_parent_class: "absolute bottom-[140%] right-[2%] w-[360px]",
      desc: "Terminal will consist of an NFPA-92 compliant smoke control system serving required smoke-protected areas. Terminal's Architectural, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke removal and associated requirements.",
      heading: 'Smoke Control System',
      img: '/assets/clip-1.png'
    },
    // Mechanical Plants
    {
      name: 'blinker-2',
      bgColor: '#33FF33',
      delayTime:5,
      repeatDelayTime: 15,
      // classDesc: "md:absolute my-5 md:my-0 right-[27%] top-[42%]",
      classDesc: "md:absolute my-5 md:my-0 right-[25%] top-[48%]",
      svg_w: '',
      svg_h: '250px',
      svg_class: "relative  origin-top rotate-90 mt-6",
      poly_points:"0,0 130,140",
      div_parent_class: "absolute bottom-[140%] right-[-15%] w-[350px]",
      desc: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly and coordinated to align with project's Architectural and Acoustic aspirations and performance requirements.",
      heading:"Mechanical Plants",
      img: "/assets/clip-1.png"


    },
    // Electric Vehicle Charging
    {
      name: 'blinker-3',
      bgColor: '#A117FD',
      delayTime:8,
      repeatDelayTime: 15,
      // classDesc: "md:absolute my-5 md:my-0 right-[10%]  top-[45%]",
      classDesc: "md:absolute my-5 md:my-0 right-[12%] top-[51%]",
      svg_w: 'w-0',
      svg_h: '300px',
      svg_class: "relative rotate-180 origin-left bottom-[5px] ml-2 h-full",
      poly_points:"55,40 ,-50,480",
      // div_parent_class: "absolute bottom-[-20%] right-[5%] mr-[-30px] w-[305px]",
      div_parent_class: "absolute bottom-[-5%] right-[0%] mr-[-95px] w-[305px]",
      desc: "Garage consists 2,500+ Parking spaces with 250+ spaces of Level-2 Electrical (EV) charging infrastructure.",
      heading: "Electric Vehicle Charging",
      img: "/assets/clip-2.png"
    },
    // Art in Public Places
    {
      name: 'blinker-4',
      bgColor: '#A117FD',
      delayTime:11,
      repeatDelayTime: 15,
      // classDesc: "md:absolute my-5 md:my-0 right-[45%] bottom-[41%]",
      classDesc: "md:absolute my-5 md:my-0 right-[31%] bottom-[41%]",
      svg_w: '',
      svg_h: '140px',
      // svg_class: "relative rotate-90 right-[70%]",
      // poly_points: "80,-15, 220,200",
      svg_class: "relative rotate-180 origin-left bottom-[5px] ml-[48px] h-full",
      poly_points:"55,40 ,-50,480",
      // div_parent_class: " absolute top-[48%] right-[40%] w-[525px]",
      div_parent_class: " absolute top-[47%] right-[95%] w-[530px]",

      heading: "Art in Public Places",
      desc: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      link: {
        title: "Danielle Roney",
        url:"http://www.danielleroney.com/portfolio/the-eddies/"
      },
      img:'/assets/clip-2.png',
    },
    // LEED
    {
      name: 'blinker-5',
      bgColor: '#A117FD',
      delayTime:14,
      repeatDelayTime: 15,
      // classDesc : "md:absolute my-5 md:my-0 left-[15%] bottom-[40%]",
      classDesc : "md:absolute my-5 md:my-0 left-[21%] bottom-[40%]",
      svg_w : "",
      svg_h: "270px",
      svg_class: "relative rotate-180 right-[75%]",
      poly_points: "30,20 100,450",
      // div_parent_class: "absolute top-[45%] right-[50%] 2xl:w-[375px] w-[325px]",
      div_parent_class: "absolute top-[40%] lg:right-[70%] 2xl:right-[45%] w-[350px]",
      heading: 'LEED Gold',
      img: '/assets/clip-2.png',
      desc: 'The Terminal is on schedule to become LEED Gold Certified.',
    },
    // Shore Power
    {
      name: 'blinker-6',
      bgColor: '#A117FD',
      delayTime:17,
      repeatDelayTime: 15,
      // classDesc: "md:absolute my-5 md:my-0 left-[18%] top-[44%]",
      classDesc: "md:absolute my-5 md:my-0 left-[30%] top-[49%]",
      heading: 'Shore Power',
      img: '/assets/clip-2.png',
      desc: "When finished, the Terminal will have the ability to provide shore-side electrical power (15-kV) connections to service ships at berth. This feature allows shore-to-ship connections without using ship's auxiliary diesel fueled power generators, and limiting environmental impact.",
      link: {
        title: 'Miami-Dade',
        url:'https://www.miamidade.gov/releases/2021-08-06-portmiami-shore-power-ready.asp'
      },
      svg_h: "200px",
      svg_class: "relative rotate-180 origin-top right-[92%] mt-[-5%]",
      poly_points: "30,0, 120,150",
      // div_parent_class: "absolute bottom-[145%] right-[55%] w-[350px]",
      div_parent_class: "absolute bottom-[145%] right-[50%] w-[350px]",
      svg_w : "",
    },
  ]

  function handleMobileAnimate(){
    setAnimate(!animate)
    setMobileAnimate(!mobileAnimate)
  }

  return (
    <div className={isBreakPoint ? 'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover mobile-img' :'flex items-center justify-center h-screen w-screen pb-16 bg-center bg-cover custom-img overflow-hidden'}>
      <motion.div className=" mb-40 md:mb-0 ">
        { !isBreakPoint && !isInView ? 
        // ""
        blinkers.map((blinker)=> {
          return(
            <motion.div 
            initial={{opacity:0}}
            animate ={{opacity:1, transition: {delay:1.5, duration:1}}}
            key={blinker.name} className='z-40'>
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
                <Link href={"/home#projects"} >
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
                <Link  href={'/home#projects'} >
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
                 <Link href={"/home#projects"} >
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
      {/* We Empower IDEAs Heading */}
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