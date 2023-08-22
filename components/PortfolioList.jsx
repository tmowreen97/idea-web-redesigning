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
          <div className="relative mx-auto justify-center items-center top-1/4">
            <div className="relative justify-center items-center text-center">
              <h1 className="text-4xl mb-5 ">{project.name}</h1>
              <p className="text-lg ">{project.heading}</p>
              <p className="text-lg ">{project.location}</p>
            </div>
              
            
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
            <p className="text-dark_text">{project.description}</p>
          </div>
      </motion.div> : ""
      }
      
    </div>
  )
}

export default PortfolioList;