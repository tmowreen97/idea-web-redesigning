'use client'
import React from "react";
import ReactPlayer from "react-player/lazy";


function CulturePage(){
  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Culture</h1>
      </div>
      <div>
        <ReactPlayer 
        url={'https://www.youtube.com/watch?v=fmdLsdmYzTo&ab_channel=TravisScottVEVO'}
        playing
        loop
        
        />
      </div>
    </div>
  )
}

export default CulturePage;