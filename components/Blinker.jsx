import { delay, motion, useInView } from "framer-motion";
import {react, useState, useRef} from 'react';
import Line from "./Line";

function Blinker({blinker}){

  const ref = useRef(null)
  const isInView = useInView(ref)
  const [showDesc, setShowDesc] = useState(false)
  const [coord, setCoord] = useState(["0,0 0,0 0,0"]) 
  const [animate, setAnimate] = useState(true)


  function handleDesc(e){
    // console.log(e)
    // console.log('current coord', e.clientX, e.clientY)
    // console.log(e)
    console.log(blinker)
    let y1= e.clientY-47
    let x2 = e.clientX+150
    let y2= y1-100
    // console.log('clientX, clientY', e.clientX, e.clientY, 'y1', y1, 'x2,y2', x2, y2)

    setCoord(`${e.clientX},${y1}, ${x2},${y1}, ${x2}, ${y2}`)
    setShowDesc(!showDesc)
    // setAnimate(fas)
    // "1145,426 1301,426 1301,350"
    // original is 1140, 423 changed to 1142, 375
    // original x - 145, y +26
  }


  return(
    <div ref={ref} className={blinker.classDesc} onClick={()=> setAnimate(!animate)}>
      <motion.div

        animate= { animate && isInView ? {scale:[1,3,3,1], opacity:[0.8,1,1,0.75], transition:{
          duration: 3,
          delay : blinker.delayTime,
          repeat: Infinity,
          repeatDelay: blinker.repeatDelayTime,
        }} : {opacity:1}}
        
        initial={{opacity:1}}
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        
      >
        <button className=" bg-white rounded-full w-3 h-3 hover:shadow-2xl shadow-white" onClick={(e) => handleDesc(e)}/>
      </motion.div>
      <div className='absolute'>
        {showDesc ? <Line setShowDesc={setShowDesc} blinker={blinker}/> : ""}
      </div>
      
      
    </div>
    
  )
}

export default Blinker;


{/* <motion.button
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
  </motion.div> */}