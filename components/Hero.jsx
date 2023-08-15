import {React, useState, useEffect, useCallback} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Blinker from './Blinker';
import {AiOutlineLine} from 'react-icons/ai';


function Hero({heading, message}){
  const [descTwo, setDescTwo] = useState(false)
  const [coord, setCoord]= useState(["0,0 0,0 0,0"])  
  const [animate, setAnimate] = useState(true)
  const [mobileAnimate, setMobileAnimate] = useState(true)
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


  const isBreakPoint = useMediaQuery(900)
  console.log(isBreakPoint, 'break')

 
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
  const blinkers = [
    {
      name: 'blinker-1',
      bgColor: '#FF1493',
      delayTime: 2,
      repeatDelayTime : 22,
      classDesc : "md:absolute my-5 md:my-0 left-1/4 top-1/3"
    },
    {
      name: 'blinker-2',
      bgColor: '#00FF00',
      delayTime:5,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 left-2/4 top-1/3"
    },
    {
      name: 'blinker-3',
      bgColor: '#FFFF00',
      delayTime:8,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 left-2/4 top-2/3"
    },
    {
      name: 'blinker-4',
      bgColor: '#FFA500',
      delayTime:11,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 left-1/4 top-2/4"
    },
    {
      name: 'blinker-5',
      bgColor: '#BF00FF',
      delayTime:14,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 left-24 top-80"
    },
    {
      name: 'blinker-6',
      bgColor: '#00FFFF',
      delayTime:17,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 right-40 top-80"
    },
    {
      name: 'blinker-7',
      bgColor: '#33FF33',
      delayTime:20,
      repeatDelayTime: 23,
      classDesc: "md:absolute my-5 md:my-0 right-20 bottom-80"
    },
    {
      name: 'blinker-8',
      bgColor: '#FF00FF',
      delayTime:23,
      repeatDelayTime: 20,
      classDesc: "md:absolute my-5 md:my-0 right-80 bottom-80"
    }
  ]

  return (
    <div className='flex items-center justify-center  h-screen pb-16 bg-fixed bg-center bg-cover custom-img'>
      {/* <div className='absolute left-0 top-0 h-[100%] w-[100%]'>
        <Image src={'/assets/miami-port.jpeg'} alt='MiamiPort' fill style={{objectFit:'cover'}} priority/>
      </div> */}
      
      {/* <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    /> */}
      {/* Overlay */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <div className=" mb-40 md:mb-0 ">
        { !isBreakPoint ? 
        blinkers.map((blinker)=> {
          return(
            <div key={blinker.name}>
              <Blinker delayTime={blinker.delayTime} repeatDelayTime={blinker.repeatDelayTime} bgColor={blinker.bgColor} classDesc={blinker.classDesc}/>
            </div>
          )
        }) : 
        <div className="text-center justify-center items-center ml-[50px]">
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{delay:2, duration:1}}}
          >
            <button className={mobileAnimate ? "bg-button_bg p-2 rounded-xl animation-blimp-1" : "bg-button_bg p-2 rounded-xl"} onClick={()=> setMobileAnimate(!mobileAnimate)}>What We're Working On</button>
           </motion.div>
            { !mobileAnimate ? <div className="items-center justify-center text-center">
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
        {descTwo ? 
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
        <h1 className='md:text-9xl text-7xl absolute font-thin left-5 bottom-5'>{heading}</h1>

        {/* <button className='px-8 py-2 border'>Book</button> */}
      </motion.div>
    </div>
  );
};

export default Hero;