import {React, useState, useEffect, useCallback} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Blinker from './Blinker';
import Line from './Line';
import {AiOutlineLine} from 'react-icons/ai';


function Hero({heading}){
  const [descTwo, setDescTwo] = useState(false)
  const [coord, setCoord]= useState(["0,0 0,0 0,0"])  
  const [animate, setAnimate] = useState(true)
  const [mobileAnimate, setMobileAnimate] = useState(false)
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


  const isBreakPoint = useMediaQuery(1510)

 
  function handleDescTwo(e){
    // console.log(e)
    // console.log('current coord', e.clientX, e.clientY)
    let y1= e.clientY-47
    let x2 = e.clientX+150
    let y2= y1-100
    // console.log('clientX, clientY', e.clientX, e.clientY, 'y1', y1, 'x2,y2', x2, y2)

    setCoord(`${e.clientX},${y1}, ${x2},${y1}, ${x2}, ${y2}`)
    setDescTwo(true)
    // "1145,426 1301,426 1301,350"
    // original is 1140, 423 changed to 1142, 375
    // original x - 145, y +26

  }
  // console.log('coord',coord)


  // WORKING ON BLINKER INFO

  // blinker 5 -> blinker 1
  // blinker 7 -> blinker 2
  // blinker 8 -> blinker 3
  // blinker 6 -> blinker 4
  // blinker 3 -> blinker 5
  // blinker 2 -> blinker 6

  const blinkers = [
    {
      name: 'blinker-1',
      bgColor: '#33FF33',
      delayTime: 2,
      repeatDelayTime : 15,
      classDesc: "md:absolute my-5 md:my-0 left-[42%] top-[41%]",
      svg_w: 'w-full',
      svg_h: "170px",
      svg_class: "relative rotate-90 origin-top left-[8%] mt-2",
      poly_points: "20,50 150,200",
      div_parent_class: "absolute bottom-[145%] ml-[25%] w-[375px]",
      desc: "Terminal will consist of a NFPA-92 compliant Smoke Control System serving the whole smoke-protected areas. Terminal's Architecture, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke remove.",
      heading: 'Smoke Control System',
      img: '/assets/clip-1.png'
      // classDesc: "md:absolute my-5 md:my-0 left-[9%] bottom-[55%]",
      // svg_w : "",
      // svg_h: "50px",
      // svg_class: "relative rotate-6",
      // poly_points: "0,0 120,260",
      // div_parent_class: " absolute top-[80%] ml-[-40%] w-[350px]",
    },
    {
      name: 'blinker-2',
      bgColor: '#33FF33',
      delayTime:5,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 right-[18%] top-[35%] 2xl:right-[22%]",
      svg_w: '',
      svg_h: '200px',
      svg_class: "relative  origin-top rotate-90 ",
      poly_points:"0,0 130,140",
      div_parent_class: "absolute bottom-[131%] ml-[-25%] w-[350px]",
      desc: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly to conceal and not impact patron experience.",
      heading:"Mechanical Plants",
      img: "/assets/clip-1.png"

      // classDesc: "md:absolute my-5 md:my-0 left-[20%] top-[22%]",
      // desc: 'The Terminal is on schedule to become LEED Silver Certified upon completion. LEED Gold Certification is currently being studied.',
      // heading: 'LEED',
      // img: '/assets/clip-2.png',
      // svg_w : "",
      // svg_h: "143px",
      // svg_class: "relative rotate-90 origin-top",
      // poly_points : "0,0 244,260",
      // div_parent_class : " absolute bottom-[118%] ml-[15%] w-[350px]",

    },
    {
      name: 'blinker-3',
      bgColor: '#A117FD',
      delayTime:8,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 right-[7%] 3xl:right-[15%] bottom-[54%]",
      svg_w: 'w-[100px]',
      svg_h: '150px',
      svg_class: "relative rotate-180 origin-left bottom-[35px] ml-2",
      poly_points:"10,0 0,120",
      div_parent_class: "absolute bottom-[-100%] ml-[-200%] w-[300px]",
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
    {
      name: 'blinker-4',
      bgColor: '#A117FD',
      delayTime:11,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 xl:right-[25%] 2xl:right-[30%] bottom-[43%]",
      svg_w: '',
      svg_h: '140px',
      svg_class: "relative rotate-90 right-[70%]",
      poly_points: "63,2 200,200",
      div_parent_class: " absolute top-[15%] ml-[-198%] w-[525px]",
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
    {
      name: 'blinker-5',
      bgColor: '#A117FD',
      delayTime:14,
      repeatDelayTime: 15,
      classDesc : "md:absolute my-5 md:my-0 left-[33%] bottom-[42%]",
      svg_w : "w-20px",
      svg_h: "250px",
      svg_class: "relative rotate-90 right-[90%]",
      poly_points: "10,0 200,200",
      div_parent_class: "absolute top-[30%] ml-[-155%] w-[375px]",
      heading: 'Shore Power',
      img: '/assets/clip-2.png',
      desc: "When finished, the Terminal will have the ability to probide (2) shore-side electrical power (15-kV) connections to service ships at Berth 8 and Berth 9, while their main and auxiliary diesel fueled engines are shut down.",
      link: {
        title: 'Miami-Dade',
        url:'https://www.miamidade.gov/releases/2021-08-06-portmiami-shore-power-ready.asp'
      }
      // classDesc: "md:absolute my-5 md:my-0 left-[42%] top-[41%]",
      // svg_w: 'w-full',
      // svg_h: "170px",
      // svg_class: "relative rotate-90 origin-top left-[8%] mt-2",
      // poly_points: "20,50 150,200",
      // div_parent_class: "absolute bottom-[145%] ml-[25%] w-[375px]",
      // desc: "Terminal will consist of a NFPA-92 compliant Smoke Control System serving the whole smoke-protected areas. Terminal's Architecture, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke remove.",
      // heading: 'Smoke Control System',
      // img: '/assets/clip-1.png'

      // classDesc: "md:absolute my-5 md:my-0 left-[130px] top-[360px]"
    },
    {
      name: 'blinker-6',
      bgColor: '#A117FD',
      delayTime:17,
      repeatDelayTime: 15,
      classDesc: "md:absolute my-5 md:my-0 left-[20%] top-[22%]",
      desc: 'The Terminal is on schedule to become LEED Silver Certified upon completion. LEED Gold Certification is currently being studied.',
      heading: 'LEED',
      img: '/assets/clip-2.png',
      svg_w : "",
      svg_h: "143px",
      svg_class: "relative rotate-90 origin-top",
      poly_points : "0,0 244,260",
      div_parent_class : " absolute bottom-[118%] ml-[15%] w-[350px]",
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
    <div className='flex items-center justify-center  h-screen pb-16 bg-center bg-cover custom-img'>
      {/* Overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <div className=" mb-40 md:mb-0 ">
        { !isBreakPoint ? 
        blinkers.map((blinker)=> {
          return(
            <motion.div 
            initial={{opacity:0}}
            animate ={{opacity:1, transition: {delay:1.5, duration:1}}}
            key={blinker.name} onClick={(e)=> handleDescTwo(e)}>
              <Blinker blinker={blinker} delayTime={blinker.delayTime} blinker_name={blinker.name} repeatDelayTime={blinker.repeatDelayTime} bgColor={blinker.bgColor} classDesc={blinker.classDesc}/>

              {/* {descTwo? <svg width='100%' height='100%'>
                <line x1="0" y1="0" x2="200" y2="200" strokeWidth="5" stroke='blue' fill='blue'/>
              </svg>: ""} */}
            </motion.div>
          )
        }) : 
        <div className="text-center justify-center items-center ">
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{delay:2, duration:1}}}
          >
            <button className={animate ? "bg-button_bg p-2 rounded-xl animation-blimp-1" : "bg-button_bg p-2 rounded-xl"} onClick={()=> handleMobileAnimate()}>What We're Working On</button>
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
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:3.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:4}}}
              className="mobile-desc-div">
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:4.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:5}}}
              className="mobile-desc-div">
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:5.5}}}
              className="justify-center flex">
                <AiOutlineLine className="rotate-90 text-lg text-white" />
              </motion.div>
              <motion.div 
              initial={{opacity:0}}
              whileInView={{opacity:1, transition:{duration:1, delay:6}}}
              className="mobile-desc-div">
                <p className='mobile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
            </div> : ""
            }
          
        </div>
      }
      </div>
      





        {/* <motion.button
        
        animate= { animate ? {scale:[1,3,3,1], opacity:[0.5,1,1,0.75], transition:{
          duration: 3,
          delay : 2,
          repeat: Infinity,
          repeatDelay: 19
        }} : {scale:3, opacity:1}}
        
        initial={{opacity:0}}
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        className="absolute left-1/4 top-1/3 bg-[#FF1493] rounded-full w-3 h-3 hover:shadow-2xl shadow-white"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 5,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute left-2/4 top-1/3 bg-[#00FF00] rounded-full w-3 h-3  hover:scale-3"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 8,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute left-2/4 top-2/3 bg-[#FFFF00] rounded-full w-3 h-3 hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 11,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute left-1/4 top-2/4 bg-[#FFA500] rounded-full w-3 h-3 hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 14,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute left-24 top-80  bg-[#BF00FF] rounded-full w-3 h-3 hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 17,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute right-20 top-80  bg-[#00FFFF] rounded-full w-3 h-3 hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      {/* <motion.button
        initial={{opacity:0}}
        animate= {{scale:[1,3,3,1], opacity:[0.5,1,1,0.75]}}
        transition={{
          duration: 3,
          delay : 20,
          repeat: Infinity,
          repeatDelay: 20
        }}
        className="absolute right-20 bottom-80  bg-[#33FF33] rounded-full w-3 h-3 hover:animate-none"
        onClick={() => console.log("Description for Point 1")}
      /> */}
      
      <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:0, transition:{delay:5, duration:1}}}
          className="md:absolute md:left-3/4 md:top-1/2 bg-[#FF00FF] rounded-full w-3 h-3 hover:animate-none"
          onClick={(e)=> handleDescTwo(e)}
        />
        {false ? 
        <>
          <svg  width="100%" height="100%" className="relative"><polyline points={coord} stroke="white" strokeWidth={1} fill="none" animation="dash 5s linear"/></svg>
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1, transition:{delay:.7}}}
          className='bg-white/60 w-[350px] absolute right-[3%] top-[10%] rounded-xl px-5 py-4'>
            <div className='text-right items-center'>
              <button className='bg-white/60 rounded-full px-1 hover:bg-accent_2 hover:text-secondary_text' onClick={()=> setDescTwo(false)}>
                ⓧ
              </button>
            </div>
            
            <p className="text-dark_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div>
          {/* <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1.1}}} id="desc" className="fixed md:right-[5%] md:bottom-[55%] w-60 bg-[#F5F4F9]/40 rounded-xl" onClick={(e)=>console.log(e)}>
            <button className="absolute right-1 p-2 ease-out 200" onClick={()=> {setDescTwo(false)}}>
              <AiOutlineCloseCircle/>
            </button>
            <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div> */}
        </> : ""}
        {/* {descTwo ? <div>
          <svg width="2000" height="500" className="relative"><polyline points={coord} stroke="white" strokeWidth={1.5} fill="none" animation="dash 5s linear"/></svg>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1.1}}} id="desc" className="fixed md:right-[5%] md:bottom-[55%] w-60 bg-[#F5F4F9]/40 rounded-xl" onClick={(e)=>console.log(e)}>
            <button className="absolute right-1 p-2 ease-out 200" onClick={()=> setDescTwo(false)}>
              <AiOutlineCloseCircle/>
            </button>
            <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </motion.div> 
          </div> : ""
        } */}
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{delay:1.2, duration:1}}}
      className='p-5 text-primary_text z-[2] mt-[-10rem]'
      >
        <h1 className='lg:text-[700%] text-7xl absolute font-thin right-[1%] bottom-1 py-3'>{heading}</h1>

        {/* <button className='px-8 py-2 border'>Book</button> */}
      </motion.div>
    </div>
  );
};

export default Hero;