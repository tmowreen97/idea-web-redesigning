import react from "react";
import Video from 'next-video';
import Link from "next/link";
import awesomeVideo from '/videos/EEFI-reverse.mp4';
import Image from "next/image";
import { motion } from "framer-motion";

function New_Landing(){
  return(
    <div id='container-top'>
      <video
      autoPlay
      loop
      muted
      playsInline
      id='background-video'
      >
      <source src="/New_Landing_Video.mp4"
      type="video/mp4"/>
      </video>
      <motion.div
        initial={{opacity:0}}
        animate= {{
          opacity:1,
          transition:{
            delay:3
          }
        }}
      >
        <Link id="enter-text" className="p-3 rounded-xl bg-light_bg animate-pulse" href={'https://www.ideaaec.com'}>
          <div >
            <Image className="rounded-xl overflow-hidden" src='/assets/icon.jpg' width={75} height={5}/>
          </div> 
        </Link>   
      </motion.div>
          
    </div>

    
  )
}

export default New_Landing;