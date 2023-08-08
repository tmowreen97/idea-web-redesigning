'use client'
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player/lazy";


function CulturePage(){
  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Culture</h1>
      </div>
      <div className="justify-center items-center flex">
        <div>
          <ReactPlayer 
            url={'https://www.youtube.com/watch?v=pz6P2vCF6tg&ab_channel=TravisScottVEVO'}
            playing
            loop
            muted
            controls
            width={'1000px'}
            height={'600px'}
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-5 ">
        <div className="culture__parent justify-center py-10">
          <div className="culture__child1 p-20 flex bg-secondary/40 rounded-xl">
            <div>
              <h2 className="p-5">June 2023</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <Image src={'/assets/filler-1.jpg'} width={700} height={300}/>
              </div>
              <div className="pt-10 m-5 text-lg" >
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child2 p-20 flex bg-secondary/40 rounded-xl">
          <div>
              <h2 className="p-5">Jan 2023</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <Image src={'/assets/filler-2.jpg'} width={500} height={300}/>
              </div>
              <div className="pt-10 m-5 text-lg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

              </div>
            </div>
          </div>
          {/* <div className="row-border"/> */}
          <div className="culture__child3  p-20 flex bg-secondary/40 rounded-xl">
          <div>
              <h2 className="p-5">June 2023</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <Image src={'/assets/filler-3.jpg'} width={500} height={300}/>
              </div>
              <div className="pt-10 m-5 text-lg">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default CulturePage;