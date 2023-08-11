import { delay, motion } from "framer-motion";
import react from 'react';

function Blinker({delayTime, bgColor, description}){
  const [animate, setAnimate] = useState(true)
  return(
    <motion.button
        
        animate= { animate ? {scale:[1,3,3,1], opacity:[0.5,1,1,0.75], transition:{
          duration: 3,
          delay : delayTime,
          repeat: Infinity,
          repeatDelay: 19
        }} : {scale:3, opacity:1}}
        
        initial={{opacity:0}}
        // whileInView={{opacity:1, transition:{delay:2, duration:1, repeat: Infinity, repeatDelay: 20}}}
        className="absolute left-1/4 top-1/3 bg-[] rounded-full w-3 h-3 hover:shadow-2xl shadow-white"
        style={{backgroundColor: `${bgColor}`}}
        onClick={() => console.log("Description for Point 1")}
      />
  )
}

export default Blinker;