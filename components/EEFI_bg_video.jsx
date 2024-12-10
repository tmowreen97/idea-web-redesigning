import React from 'react';
import Video from 'next-video';
import awesomeVideo from '/videos/EEFI-reverse.mp4';
import Link from 'next/link';
import {motion} from 'framer-motion';

function Hero3(){
  return(
    <div className='video-background'>
      <Video
        src= {awesomeVideo}
        autoPlay
        loop
        muted
        playsInline
        controls = {false}
        className = 'video'
      />
      <div>
       <motion.div 
          id='intro_button' 
          className='z-[9] tracking-wider'
          initial={{opacity:0}}
          whileInView={{opacity:1, transition: {delay:1.8, duration:1}}}
          >
            <Link href={'#eefi-page'} id='intro-button-link' className=' bg-light_bg hover:bg-button_highlight hover:animate-none rounded-lg p-3 motion-safe:animate-pulse md:text-base text-sm'>Click Here to Enter</Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero3;
