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
    <div className="items-center text-center justify-center p-5 py-10 relative mb-[100px] min-w-5xl" onMouseEnter={()=> setProjHover(true)}
    onMouseLeave={()=> setProjHover(false)}>
      <div className="relative rounded-xl overflow-hidden">
        <Image src={project.image} width={project.width} height={project.height} alt={'project'} />
        <div className={projHover ? "absolute top-0 bottom-0 left-0 right-0 bg-[#322d44]/80 text-secondary_text  " : "hidden"}>
          <div className="absolute bottom-[40%] ">
            <h1 className="text-4xl mb-5 mt-10">{project.name}</h1>
            <p className="text-lg mx-5">{project.description}</p>
          </div>
          
          <div className="absolute bottom-0 left-[47%] p-2 motion-safe:animate-bounce text-2xl" onClick={()=> setProjClick(!projClick)}>
              {projClick ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
            
          </div>
        </div>
      </div>
      {/* style="position: absolute; top: 0px; z-index: 3;" */}
      
      {
        projClick ? 
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:1.5}}}
        className={" text-center items-center justify-center flex"}
        >
          <div className="w-[500px] bg-primary_text/70 text-left p-5 mt-5 rounded-xl">
            <p className="text-dark_text">Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
      </motion.div> : ""
      }
      
    </div>
  )
}

export default PortfolioList;