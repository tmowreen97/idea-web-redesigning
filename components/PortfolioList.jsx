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
  const [hide, setHide] = useState(false)

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

  function handleClick(){
    setProjClick(!projClick)
    setHide(!hide)
  }

  return(
    <>
    <div className=" relative p-1" onMouseEnter={()=> setProjHover(true)}
    onMouseLeave={()=> setProjHover(false)}>
      <div className={hide ? "relative rounded-xl overflow-hidden hidden h-full" : "relative rounded-xl overflow-hidden h-full"}>
      {/* <img src={project.image} width={'auto'} height={'auto'} alt={project.name} className={project.custom ? `${project.custom}` : 'w-full h-full rounded-lg'}/> */}
        <Image src={project.image}  width={800} height={200} sizes="200vw" alt={project.name} className={project.custom ? `${project.custom}` : 'w-full h-full rounded-lg'}/>
        <div className={projHover ? "absolute top-0 bottom-0 left-0 right-0 bg-[#322d44]/80 text-secondary_text  " : "hidden"}>
          <div className={project.spacing ? project.spacing : "relative top-1/4"}>
            <div className="relative justify-center items-center text-center m-2 ">
              <h1 className="md:text-4xl text-lg md:mb-5 items-center justify-center">{project.name}</h1>
              {project.subheading? <h1 className="md:text-4xl text-lg md:mb-5 items-center justify-center"></h1> : ""}
              <div className="flex justify-center items-center text-center">
              {project.heading.map((sector, index)=> {
                return(
                  <span key={index} className="flex">
                    <p  className="md:text-lg text-xs">{sector}</p>
                    {index < project.heading.length-1 ? <p className="md:text-lg text-xs lg:mr-2 mr-1">,</p> : '' }
                  </span>
                    
                  
                )
              })}
              </div>
              <p className="md:text-lg text-xs">{project.location}</p>
              <button
              id='our_team_button'
              aria-label='our_team_button'
              onClick={()=> handleClick()}
              className="hover:bg-accent_2 hover:text-primary_text  bg-light_bg text-dark_text rounded-full overflow-hidden md:text-lg text-xs p-1 md:p-3 m-2"
              >Click to Learn More</button>
            </div>
              
            
          </div>
          
          {/* <div className="absolute bottom-0 left-[47%] p-2 motion-safe:animate-bounce text-2xl" onClick={()=> setProjClick(!projClick)}>
              {projClick ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
            
          </div> */}

      </div>
  </div>
      {/* style="position: absolute; top: 0px; z-index: 3;" */}
      
      
    
    {
        projClick ?
        //This ensures the user can't click outside of the box
        <div className="w-full h-full bg-none lg:fixed top-0 bottom-0 right-0 left-0 z-10">

        <motion.div 
        initial={{opacity:.5}}
        animate={{opacity:1, transition: {duration:1}}}
        className={"lg:z-20 flex h-full w-full items-center justify-center  bg-tertiary/80"}
        >
          <div className="justify-center items-center bg-light_bg text-left p-5 rounded-2xl  z-9 lg:z-20 m-5  h-full md:h-auto max-w-[2500px]  md:top-[10%] md:bottom-[10%] bottom-[0] ">
            <div className="flex justify-end lg:my-[-10px] my-2">
              <AiOutlineCloseCircle 
              onClick={()=> handleClick()}
              className="cursor-pointer hover:bg-accent_2 hover:text-primary_text  rounded-full overflow-hidden text-2xl lg:z-10" />
            </div>
            <div className="lg:grid lg:grid-cols-4 grid-cols-1 sm:flexbox items-center justify-center h-full md:gap-5">
              <div className="lg:col-start-1 lg:col-end-3 md:flex items-center justify-center sm:w-[100%] w-[300px]">
              {/* <div className=" md:w-[500px] md:h-[475px] 2xl:w-[525px] max-w-[1000px] items-center justify-center relative group  my-10 ">
                  <Carousel
                    array={project.images}
                    currentIndex={projIndex}
                    setCurrentIndex={setProjIndex}
                    custom={"md:w-[500px] h-[425px] 2xl:w-[525px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
                  />
                </div>  */}
                
                {project.images_array ? 
                <div className="flex justify-center">


                  <Carousel
                    array={project.images_array}
                    // currentIndex={projIndex}
                    // setCurrentIndex={setProjIndex}
                    // custom={'w-[500px] h-[400px] bg-cover bg-center bg-fixed'}
                    custom={" xl:w-[700px] xl:h-[490px] md:w-[400px] w-[275px] h-[200px] m-3 right-0 rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
                    />

                </div>
                  

                
                :
                <Image src={project.image} width={project.width} height={project.height} alt={'proj_image'} className="rounded-xl flex overflow-hidden max-h-[750px] justify-center"/>
                }
              </div>
              <div className="lg:col-start-3 lg:col-end-5 mz-1">
                <div className="m-2">
                  <h2 className="text-dark_text md:text-4xl text-2xl">{project.name}</h2>
                </div>
                <div className="m-3">
                  <div className="md:flex">
                   {
                    project.heading.map((sect, index)=> {
                      return(
                        <span className="flex" key={sect}>
                            <h3 className="text-dark_text md:text-2xl text-xl">{sect}</h3>
                            {index < project.heading.length-1 ? <p className="text-dark_text text-xl md:text-2xl mr-2">,</p> : '' }
                          
                        </span>
                        
                      )
                      
                    })
                  } 
                  </div>
                  
                  
                  <h3 className="text-dark_text text-lg md:text-2xl">{project.size}</h3>
                  <h3 className="text-dark_text text-lg md:text-2xl">Completion Date: {project.year}</h3>
                </div>
                <div className="m-3">
                  {
                    project.description.map((desc, index)=> {
                      return(
                        <p key={index} className="text-dark_text text-sm md:text-lg">{desc}</p>
                      )
                      
                    })
                  }
                  </div>
                  <div className="m-3">
                  { project.awards ? 
                    <div>
                      <h3>Awards:</h3>
                      {project.awards.map((award, index)=> {
                        return(
                          <p key={index} className="text-dark_text text-sm">{award}</p>
                        )
                        
                      })}
                    
                    </div>
                    
                    : ""
                  }
                  </div>
                  <div className="m-5 flex justify-evenly ">
                    <div>
                      <h3 className="md:text-2xl text-xl">Services:</h3>
                      <ul className="list-disc mx-5 m-3">
                        {project.services.map((service, index) => {
                          return(
                            <li key={index} className="text-sm md:text-lg" >{service}</li>
                          )
                        })}
                    </ul>
                    </div>
                    { project.resources ? 
                    <div >
                      <h3 className="md:text-2xl text-xl">Resources:</h3>
                      <ul className="mx-4 m-3">
                        {project.resources.map((link, index) => {
                          return(
                            <li key={index} >
                              <a href={link.url} className="hover:text-accent_2 hover:underline text-sm md:text-lg" target="__blank" rel="noopener noreferrer" aria-label="Resource">{link.title}</a>
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

</div>
    </>
    
  )

}

export default PortfolioList;