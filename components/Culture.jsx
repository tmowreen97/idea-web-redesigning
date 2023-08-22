import Image from "next/image";
import {React, useState, useEffect, useCallback} from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";


function CulturePage(){

  const [isClient, setIsClient] = useState(false)

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      setIsClient(true)
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };


  const isBreakPoint = useMediaQuery(900)

  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1, duration:1}}}
      className="md:px-20 pt-20 pb-[80px]">
        <h1 className="md:text-[1100%] text-center text-8xl font-thin text-primary_text md:text-left tracking-wider">Culture</h1>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1.5, duration:1}}}
      >
        <div className="pb-[25px]">
          <h1 className="md:text-[500%] text-4xl text-center items-center tracking-wide font-light text-primary_text/70">The IDEA Times</h1>
        </div>
      { isClient ? <div className="justify-center items-center flex md:w-[100%] md:h=[100%] overflow-hidden">
          {
            !isBreakPoint ? 
            <ReactPlayer 
            url={'https://www.youtube.com/watch?v=9g08kucPQtE&ab_channel=Gunna'}
            playing
            loop
            muted
            controls
            width='900px'
            height='500px'
          /> : 
          <ReactPlayer 
            url={'https://www.youtube.com/watch?v=9g08kucPQtE&ab_channel=Gunna'}
            playing
            loop
            muted
            controls
            width='375px'
            height='250px'
          />
          }

      </div> : ""}
      
      
      <div className="flex justify-center items-center p-5  md:pb-20">
        <div className="culture__parent justify-center py-10 md:mx-[10%] md:grid flexbox">
          <div className="culture__child1 md:p-20 p-5 flex bg-secondary/40 rounded-xl">
            <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA HOSTS MIAMI BBQ</h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light tracking-wide">1</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
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
          <div className="culture__child2 md:p-20 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA HOSTS ...</h1>
              <h2 className=" ml-6 text-primary_text text-3xl font-light tracking-wide">2</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
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
          <div className="culture__child3 md:p-20 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA HOSTS ... </h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light tracking-wide">3</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
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
          <div className="culture__child4 md:p-20 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA HOSTS ... </h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light tracking-wide">4</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
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
          <div className="culture__child5 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA Turns 1!</h1>
              <h2 className=" ml-6  text-primary_text text-3xl font-light tracking-wide">April 5, 2022</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <Image src={'/assets/filler-3.jpg'} width={500} height={300}/>
              </div>
              <div className="pt-10 m-5 text-lg">
                <p>
                Thank you to all of our Team Members, and supporters for being a part of our continued success! We look forward to designing and manigesting more World Class IDEAs!
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child6 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">MSC Groundbreaking </h1>
              <h2 className=" ml-6  text-primary_text text-2xl font-light tracking-wide">March 10, 2022</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <ReactPlayer 
                url={'https://fb.watch/mz-rmFIevK/'}
                loop
                playing
                muted
                height='100%'
                width='100%'/>
              </div>
              <div className="pt-10 mx-5 text-lg">
                <p>
                For the past year, IDEA has been providing MEP-FP Engineering services & expertise on MSC’s World’s Largest Cruise Ship Terminal project. We celebrated this achievement with a Groundbreaking Ceremony at PortMiami March 10, 2022
                </p>

              </div>
            </div>
          </div>
          <div className="culture__child7 md:p-10 p-5 mt-5 md:mt-0 flex bg-secondary/40 rounded-xl">
          <div>
              <h1 className="md:text-[300%] px-5 pt-5 text-primary_text font-light tracking-wide">IDEA is Founded </h1>
              <h2 className=" ml-6  text-primary_text text-2xl font-light tracking-wide">April 5, 2021</h2>
              <h2 className=" ml-6 mb-3 text-primary_text text-2xl font-light tracking-wide">Nancy Karim</h2>
              <div className="items-center justify-center rounded-xl overflow-hidden">
                <Image src={'/assets/filler-3.jpg'} width={500} height={300}/>
              </div>
              <div className="pt-10 mx-5 text-lg">
                <p>
                On April 5, 2021 Kazi Karim, PE took on the initiative to contribute to and improve the Architectural Engineering community by founding IDEA. With the intent to provide client-specific high-quality MEP-FP Engineering services, Kazi is facilitating the growth of IDEAs. He is now the Founder and Managing Principal for IDEA and currently servicing a variety of World Class IDEAs.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
     
    </motion.div>
    </div>
  )
}

export default CulturePage;