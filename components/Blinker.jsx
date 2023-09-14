import { delay, motion, useInView } from "framer-motion";
import {react, useState, useRef} from 'react';
import Line from "./Line";

function Blinker({blinker}){

  const ref = useRef(null)
  const isInView = useInView(ref)
  const [showDesc, setShowDesc] = useState(false)
  const [animate, setAnimate] = useState(true)


  function handleDesc(){
    setShowDesc(!showDesc)
  }


  return(
    <div ref={ref} className={blinker.classDesc} onClick={()=> setAnimate(!animate)}>
      <motion.div

        animate= { animate && isInView ? {scale:[3,5,5,3], opacity:[0.9,1,1,0.9], transition:{
          duration: 3,
          delay : blinker.delayTime,
          repeat: Infinity,
          repeatDelay: blinker.repeatDelayTime,
        }} : {opacity:1}}

        initial={{opacity:1}}
        className="z-30"
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        onClick={() => handleDesc()}
      >
        <button id={blinker.name} aria-label="blinker" style={{backgroundColor: `${blinker.bgColor}`}} 
        className={showDesc ? "border-solid border-4 w-5 h-5 rounded-full hover:shadow-2xl shadow-white" :" hover:border-solid hover:border-4 hover:w-5 hover:h-5 rounded-full w-3 h-3 hover:shadow-2xl shadow-white" }
        />
      </motion.div>
      <div className='absolute'>
        {showDesc ? <Line setShowDesc={setShowDesc} blinker={blinker}/> : ""}
      </div>
      
      
    </div>
    
  )
}

export default Blinker;