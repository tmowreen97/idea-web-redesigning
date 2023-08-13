import { delay, motion, useInView } from "framer-motion";
import {react, useState, useRef} from 'react';

function Blinker({delayTime, bgColor, repeatDelayTime, description, classDesc}){

  const ref = useRef(null)
  const isInView = useInView(ref)

  const [animate, setAnimate] = useState(true)
  return(
    <div ref={ref} className={classDesc} onMouseEnter={()=>{setAnimate(false)}} onMouseLeave={()=>{setAnimate(true)}}>
      <motion.div
        animate= { animate && isInView ? {scale:[1,3,3,1], opacity:[0.8,1,1,0.75], transition:{
          duration: 3,
          delay : delayTime,
          repeat: Infinity,
          repeatDelay: repeatDelayTime,
        }} : {scale:3, opacity:1}}
        
        initial={{opacity:0}}
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        onClick={() => console.log("Description for Point 1")}
      >
        <button className="bg-white rounded-full w-3 h-3 hover:shadow-2xl shadow-white"/>
      </motion.div>
    </div>
    
  )
}

export default Blinker;