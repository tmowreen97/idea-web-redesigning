import {React, useRef, useEffect, useState} from "react";
import Video from 'next-video';
import Link from "next/link";
import awesomeVideo from '/videos/EEFI-reverse.mp4';
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

function New_Landing(){
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect after 30 seconds
    const timer = setTimeout(() => {
      router.replace('/home');  // Replace '/another-page' with your target page
    }, 65000); // 30000ms = 30 seconds

    // Clean up the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [router]);

  const handleOutsideClick = ()=> {
    router.replace('/home')
  }

  return(
    <div id='container-top'>
      <video
      autoPlay
      loop
      muted
      playsInline
      id='background-video'
      onClick={()=>{handleOutsideClick()}}
      >
      <source src="/4_year_video_resized.mp4"
      type="video/mp4"/>
      </video>
      <motion.div
        initial={{opacity:0}}
        animate= {{
          opacity:1,
          transition:{
            delay:15
          }
        }}
      >
        <Link id="enter-text" className="p-3 rounded-xl bg-light_bg animate-pulse" href={'https://www.ideaaec.com/home'}>
          <div >
            <p className='text-dark_text'>Click Here to Enter</p>
            {/* <Image className="rounded-xl overflow-hidden" src='/assets/icon.jpg' width={75} height={5}/> */}
          </div> 
        </Link>   
      </motion.div>
          
    </div>

    
  )
}

export default New_Landing;