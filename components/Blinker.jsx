import { delay, motion } from "framer-motion";
import {react, useState} from 'react';

function Blinker({delayTime, bgColor, repeatDelayTime, description, classDesc}){
  const [animate, setAnimate] = useState(true)
  return(
    <div className={classDesc} onMouseEnter={()=>{setAnimate(false)}} onMouseLeave={()=>{setAnimate(true)}}>
      <motion.div
        animate= { animate ? {scale:[1,3,3,1], opacity:[0.5,1,1,0.75], transition:{
          duration: 3,
          delay : delayTime,
          repeat: Infinity,
          repeatDelay: repeatDelayTime,
        }} : {scale:3, opacity:1}}
        
        initial={{opacity:0}}
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        className=""
        
        onClick={() => console.log("Description for Point 1")}
      >
        <button style={{backgroundColor: `${bgColor}`}} className=" rounded-full w-3 h-3 hover:shadow-2xl shadow-white"/>
      </motion.div>
    </div>
    
  )
}

export default Blinker;