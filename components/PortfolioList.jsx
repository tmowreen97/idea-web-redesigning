import Image from "next/image";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

function PortfolioList({project}){

  const [projHover, setProjHover] = useState(false)
  const [projClick, setProjClick] = useState(false)
  function mouse (){
    setProjHover(true)
    myStopFunction();
    myFunction();
  }
  function myFunction() {
    let myVar = setTimeout(function(){
        setProjHover(false)
      }, 3000);
  }   
  function myStopFunction() {
      if(typeof myVar != 'undefined'){
          clearTimeout(myVar);
      }
  }
  return(
    <>
    <div className="items-center text-center justify-center p-5 py-10 relative mb-[100px] min-w-5xl" onMouseEnter={()=> setProjHover(true)}
    onMouseLeave={()=> setProjHover(false)}>
      <div className="relative rounded-xl overflow-hidden">
        <Image src={project.image} width={project.width} height={project.height} alt={'project'} />
        <div className={projHover ? "absolute top-0 bottom-0 left-0 right-0 bg-[#322d44]/80 text-secondary_text  " : "hidden"}>
          <div className="relative mx-auto justify-center items-center top-1/4">
            <div className="relative justify-center items-center text-center">
              <h1 className="text-4xl mb-5 ">{project.name}</h1>
              <p className="text-lg ">{project.heading}</p>
              <p className="text-lg ">{project.location}</p>
              <button
              onClick={()=> {setProjClick(true)}}
              className="hover:bg-accent_2 hover:text-primary_text  bg-light_bg text-dark_text rounded-full overflow-hidden text-lg p-3 m-2"
              >Click to Learn More</button>
            </div>
              
            
          </div>
          
          {/* <div className="absolute bottom-0 left-[47%] p-2 motion-safe:animate-bounce text-2xl" onClick={()=> setProjClick(!projClick)}>
              {projClick ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
            
          </div> */}
        </div>
      </div>
      {/* style="position: absolute; top: 0px; z-index: 3;" */}
      
      
      
    </div>
    {
        projClick ? 
        <motion.div 
        initial={{opacity:0.85}}
        animate={{opacity:1, transition:{duration:1}}}
        className={"z-10"}
        >
          <div className="mx-10 my-5 justify-center items-center bg-light_bg text-left p-5 rounded-xl z-10 fixed left-0 right-0 top-0 bottom-0">
            <div className="flex justify-end ">
              <AiOutlineCloseCircle 
              onClick={()=> setProjClick(false)}
              className="cursor-pointer hover:bg-accent_2 hover:text-primary_text  rounded-full overflow-hidden text-2xl z-10" />
            </div>
            <div className="grid grid-cols-2 items-center justify-center h-full gap-5">
              <div className="flex m-2">
                <Image src={'/assets/filler-1.jpg'} width={700} height={400} className="rounded-xl overflow-hidden"/>
              </div>
              <div className="m-2">
                <h2 className="text-dark_text">{project.name}</h2>
                <h3 className="text-dark_text text-2xl">{project.heading}</h3>
                <p className="text-dark_text">{project.description}</p>
                <p className="text-dark_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="list-disc m-4">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                  <li>Five</li>
                  <li>Six</li>
                </ul>
              </div>
              
            </div>
            
            
          </div>
      </motion.div> : ""
      }
    </>
    
  )
}

export default PortfolioList;