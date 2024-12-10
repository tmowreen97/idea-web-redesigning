import react from "react";
import Video from 'next-video';
import Link from "next/link";
import awesomeVideo from '/videos/EEFI-reverse.mp4';
import Image from "next/image";

// import BackgroundVideo from 'next-video-background-video';

function New_Landing(){
  return(
    <div id='container-top'>
      <video
      autoPlay
      loop
      muted
      playsInline
      id='background-video'
      // src="/videos/EEFI-video-trimmed.mp4"
      // type="video/mp4"
      >
      <source src="/EEFI-video-trimmed.mp4"
      type="video/mp4"/>
      </video>
      <Link id="enter-text" className="p-2 rounded-xl bg-light_bg animate-pulse" href={'https://www.ideaaec.com'}>
        <div >
          <Image className="rounded-xl overflow-hidden" src='/assets/icon.jpg' width={75} height={5}/>
        </div> 
      </Link>       
    </div>

    
  )
}

export default New_Landing;