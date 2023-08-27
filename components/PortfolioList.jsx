import Image from "next/image";
import Carousel from "./Carousel";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Catamaran } from "next/font/google";

function PortfolioList({project}){

  const [projHover, setProjHover] = useState(false)
  const [projClick, setProjClick] = useState(false)

  const [projIndex, setProjIndex] = useState(0)
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
    <div className=" relative p-1 " onMouseEnter={()=> setProjHover(true)}
    onMouseLeave={()=> setProjHover(false)}>
      <div className="relative rounded-xl  overflow-hidden">
        <img src={project.image} className={project.custom ? `${project.custom}` : 'max-h-[800px] w-full max-w-[900px] rounded-lg'}/>
        {/* <Image src={project.image} width={project.width} height={project.height} alt={'project'}  /> */}
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
        //This ensures the user can't click outside of the box
        <div className="w-full h-full bg-none fixed top-0 bottom-0 right-0 left-0 z-10">

        <motion.div 
        initial={{opacity:.5}}
        animate={{opacity:1, transition: {duration:1}}}
        className={"z-20"}
        >
          <div className="mx-10 my-5 justify-center items-center bg-light_bg text-left p-5 rounded-xl z-20 fixed left-0 right-0 top-0 bottom-0">
            <div className="flex justify-end my-[-10px]">
              <AiOutlineCloseCircle 
              onClick={()=> setProjClick(false)}
              className="cursor-pointer hover:bg-accent_2 hover:text-primary_text  rounded-full overflow-hidden text-2xl z-10" />
            </div>
            <div className="grid grid-cols-4 items-center justify-center h-full gap-5">
              <div className="col-start-1 col-end-3 flex items-center justify-center ">
              {/* <div className=" md:w-[500px] md:h-[475px] 2xl:w-[525px] max-w-[1000px] items-center justify-center relative group  my-10 ">
                  <Carousel
                    array={project.images}
                    currentIndex={projIndex}
                    setCurrentIndex={setProjIndex}
                    custom={"md:w-[500px] h-[425px] 2xl:w-[525px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
                  />
                </div>  */}
                
                {project.images_array.length>0 ? 

                  <Carousel
                    array={project.images_array}
                    currentIndex={projIndex}
                    setCurrentIndex={setProjIndex}
                    // custom={'w-[500px] h-[400px] bg-cover bg-center bg-fixed'}
                    custom={" 2xl:w-[1000px] 2xl:h-[500px] w-[500px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
                    />

                
                :
                <Image src={project.image} width={project.width} height={project.height} className="rounded-xl flex overflow-hidden max-h-[750px] justify-center"/>
                }
              </div>
              <div className="col-start-3 col-end-5">
                <div className="m-2">
                  <h2 className="text-dark_text">{project.name}</h2>
                </div>
                <div className="m-3">
                  <div className="flex">
                   {
                    project.heading.map((sect, index)=> {
                      return(
                        <span className="flex">
                          <h3 className="text-dark_text text-2xl ">{sect}</h3>
                          {index < project.heading.length-1 ? <p className="text-dark_text text-2xl mr-2">,</p> : '' }
                        </span>
                        
                      )
                      
                    })
                  } 
                  </div>
                  
                  
                  <h3 className="text-dark_text text-2xl">{project.size}</h3>
                  <h3 className="text-dark_text text-2xl">Completion Date: {project.year}</h3>
                </div>
                <div className="m-3">
                  {
                    project.description.map((desc, index)=> {
                      return(
                        <p key={index} className="text-dark_text">{desc}</p>
                      )
                      
                    })
                  }
                  </div>
                  <div className="m-3">
                  {
                    project.awards.map((award, index)=> {
                      return(
                        <p key={index} className="text-dark_text">{award}</p>
                      )
                      
                    })
                  }
                  </div>
                  <div className="m-5 flex justify-evenly items-center">
                    <div>
                      <h4 className="text-xl">Services:</h4>
                      <ul className="list-disc mx-5 m-3">
                        {project.services.map((service, index) => {
                          return(
                            <li key={index} >{service}</li>
                          )
                        })}
                    </ul>
                    </div>
                    { project.resources.length > 0 ? <div className="">
                      <h4 className="text-xl">Resources:</h4>
                      <ul className="mx-5 m-3">
                        {project.resources.map((link, index) => {
                          return(
                            <li key={index} >
                              <a href={link.url} className="hover:text-accent_1" target="__blank" rel="noopener noreferrer">{link.title}</a>
                            </li>
                          )
                        })}
                    </ul>
                      
                    </div> : ""}
                    
                </div>
                <div className="m-5 flex justify-left bottom-0">
                  {
                    project.disclaimer ? <p className="text-dark_text text-xs">{project.disclaimer}</p>: ''
                  }
                    
                </div>
              </div>
              
              
            </div>
            
            
          </div>
      </motion.div>
      </div> : ""
      }
    </>
    
  )
}

export default PortfolioList;