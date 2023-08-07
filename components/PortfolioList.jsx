import Image from "next/image";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="items-center text-center justify-center p-5 py-10 relative" onMouseEnter={()=> setProjHover(true)}
    onMouseLeave={()=> setProjHover(false)}>
      <Image src={project.image} width={650} height={500} alt={'project'}/>
      {/* style="position: absolute; top: 0px; z-index: 3;" */}
      <div className={projHover ? "absolute w-[638px] h-[330px] top-5 bg-[#322d44]/80 text-secondary_text  text-center justify-center items-center mt-5" : "hidden"}>
          <h1 className="mx-10 mt-[80px] text-4xl ">{project.name}</h1>
          <p className="mx-32 mt-2 ">{project.description}</p>
          <div className="absolute bottom-0 left-[47%] p-2 motion-safe:animate-bounce text-2xl" onClick={()=> setProjClick(!projClick)}>
            {projClick ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
          </div>
      </div>
      {
        projClick ? 
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:1.5}}}
        className={" text-center items-center justify-center flex"}
        >
          <div className="w-[500px] bg-white/60 text-left p-5 mt-5 rounded-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
      </motion.div> : ""
      }
      
    </div>
  )
}

export default PortfolioList;