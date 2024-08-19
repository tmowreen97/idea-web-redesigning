import Link from "next/link";
import { motion } from "framer-motion";
import Video from 'next-video';
import awesomeVideo from '/videos/EEFI-video-trimmed.mp4';
// import awesomeVideo from '/video/v1/assets/wlIIjx02q61CCaYPRJwrMhAm8Kzol6kNKMzMTjusBOIg';

function Hero2(){
  return(
    <main id='main' className=' bg-cyan'>
      <div id='intro_contents' className=''>
          <motion.div 
          id='intro_button' 
          className='z-[9] tracking-wider'
          initial={{opacity:0}}
          whileInView={{opacity:1, transition: {delay:1.8, duration:1}}}
          >
            <Link href={'#eefi-page'} id='intro-button-link' className=' bg-light_bg hover:bg-button_highlight hover:animate-none rounded-lg p-3 motion-safe:animate-pulse md:text-base text-sm'>Click Here to Enter</Link>
          </motion.div>
      </div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:[0.25,0.5,0.75,1], transition: {duration:1}}}
      id='video_container'
      >
        <Video
          src={awesomeVideo}
          autoPlay
          muted
          loop
          playsInline
          controls = {false}
          id='video'
        /> 
      </motion.div>
       
      {/* </motion.div> */}
      
  </main>
  )
}

export default Hero2;