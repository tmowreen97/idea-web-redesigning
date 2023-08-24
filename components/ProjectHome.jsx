import React, { useState } from "react";
import Carousel from "./Carousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import Link from "next/link";

function ProjectHome(){
  const [projectSelect, setProjectSelect]= useState(0)
  const[showDropDown, setShowDropDown] = useState(false)
  const projects = [
    {
      id: 1,
      name: 'MSC Miami Cruise Terminal',
      location: 'PortMiami, Miami, FL',
      sector: 'Transportation',
      year: '2024 (Construction Completion)',
      image: "/assets/miami-terminal.avif",
      desc: "A 4-Story cruise terminal capable of serving a total of 36,000 cruise ship passengers daily (embarking & disembarking). The facility consists of 495,000 SF of interior space and 1,200,000 SF garage (2500 parking spaces). Project will be LEED Silver Certified upon completion.",
    },
    {
      id:2,
      name: 'East End Food Hub - East End Food Institute (EEFI)',
      image: '/assets/project-home/eefi-exterior.png',
      location:"Riverhead, NY",
      sector: "Institutional",
      year: "2023 (Construction Completion)",
      desc: "Full renovation and upgrade of existing year-round farmers market and community kitchen facility. Facility encompasses a state of the art commercial kitchen installation and associated programming. ",
    },
    {
      id: 3,
      name: 'Johnson Private High-End Residence',
      location: "Great Harbor Cay, Bahamas",
      year: "2024 (Construction Completion)",
      sector: "High-End Residential",
      image: '/assets/project-home/johnson-res-home.jpg',
      desc: "High-end residence consisting of two separate single-story glass enveloped structures located in the Bahamas.",
    }
  ]

  return(
    <div id='projects' className='w-screen md:h-full bg-primary'>
      <div className='relative flex items-center justify-center p-4 pt-[5%]'>
      <div className="projecthome__parent md:grid flexbox  ">
        <div className="projecthome__title mr-2 ml-5 ">
          <h1 className="md:text-[1000%] text-8xl tracking-wide text-left md:ml-[65px] font-thin mb-10 md:mt-[8%] text-primary_text">Projects</h1>
        </div>
        <div className="projecthome__child1 md:p-10 p-2 bg-secondary/50 rounded-xl md:mr-5 md:ml-4  md:m-0">
          <div className="md:max-w-[720px] md:h-[450px] md:w-full m-auto md:px-4 p-1  mb-[0%]">
            <Carousel 
              array={projects} 
              setCurrentIndex={setProjectSelect} 
              currentIndex={projectSelect} 
              custom={"md:w-[620px] xl:w-[700px] md:h-[400px] w-[355px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform"}
            />
            </div>
        </div>
        <div className="projecthome__img relative bg-secondary/50 items-center text-center justify-center p-5 rounded-xl md:w-[450px] md:h-[45%] md:mt-20 md:m-0 m-4">
          <div className="relative">
            <button 
            onClick={()=> {setShowDropDown(!showDropDown)}}  
            data-dropdown-toggle="dropdown" 
            className="relative md:w-[400px] text-2xl justify-between  hover:bg-secondary/60 focus:ring-4 focus:outline-none focus:ring-secondary_text font-medium rounded-lg px-5 py-4 mt-2 text-center inline-flex items-center text-secondary_text" type="button">
              {projects[projectSelect].sector}
              { showDropDown ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
            </button>
            <div id="dropdown" className={ showDropDown ? "z-10 absolute right-0 md:w-[200px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700": "hidden"}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="/portfolio/institutional" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Institutional</a>
          </li>
          <li>
            <a href="/portfolio/educational" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Educational</a>
          </li>
          <li>
            <a href="/portfolio/commercial" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Commercial</a>
          </li>
          <li>
            <a href="/portfolio/cultural" className="block px-4 py-2 hover:bg-accent_2/80   hover:text-white">Cultural</a>
          </li>
          <li>
            <a href="/portfolio/healthcare-faciities" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Healthcare</a>
          </li>
          <li>
            <a href="/portfolio/high-rise" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white">High-Rise</a>
          </li>
          <li>
            <a href="/portfolio/mixed-use" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white">Mixed-Use</a>
          </li>
          <li>
            <a href="/portfolio/high-end-residential" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">High-End Residential</a>
          </li>
          <li>
            <a href="/portfolio/transportation" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white ">Transportation</a>
          </li>
          <li>
            <a href="/portfolio/industrial" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Industrial</a>
          </li>
        </ul>
    </div>

          
          
          </div>
          

    
          {/* <div className='category__select'>
            <ul>
              <li>Institutional</li>
              <li>Educational</li>
              <li>Commercial</li>
              <li>Cultural</li>
              <li>Healthcare Facilities</li>
              <li>Mixed-Use & High-Rise</li>
              <li>Residential (High-End)</li>
              <li>Transportation</li>
              <li>Industrial</li>
            </ul>

          </div> */}
        </div>
        <div className="projecthome__child2 p-10 bg-secondary/50 rounded-xl md:w-[450px] md:m-0 m-4">
          <div className="absolute w-[380px] min-h-[450px]">
            <div>
              <h2 className="text-4xl m-2">{projects[projectSelect].name}</h2>
              <div className="m-3">
                <h3 className="tracking-wider text-xl text-secondary_text">{projects[projectSelect].location}</h3>
                <h3 className="tracking-wider text-xl text-secondary_text">{projects[projectSelect].year}</h3>
              </div>
              
              <p className="tracking-wider m-3">{projects[projectSelect].desc}</p>
            </div>
            <div className=" text-center absolute bottom-0 left-[15%]">
            <Link href={'/portfolio'}>
              <button className="inline-block rounded-xl bg-secondary_text text-dark_text p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-accent_2/80 hover:text-secondary_text  tracking-wider">Learn More on Our Portfolio</button>
            </Link>
            </div>
            
          </div>
          
          
          
          {/* <h1 className="text-4xl">Our Story</h1>
          <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
        </div>
      </div>
  </div>
  </div>
    // <div id="projects" className="w-screen md:h-screen bg-[#301b3d]">
    //   <div className=" md:mx-[200px] py-[75px] md:w-[150%] items-center justify-between text-[#F6F6F6] font-thin tracking-wider">
    //     <div className="projecthome__parent ">
    //       <div className="projecthome__title mr-5">
    //         <h1 className="md:text-[1200%] text-5xl tracking-wide text-center mt-20px">Projects</h1>
    //       </div>
    //       <div className="projecthome__img bg-slate-200/20 rounded-xl mt-[50%] mx-5 h-[30%]">
    //         <h1 className="text-4xl m-5">Project Category?</h1>
    //       </div>
    //       <div className="projecthome__child1 rounded-xl mt-5 h-[90%]">
    //         <ProjectHomeCarousel projects={projects} setProjectSelect={setProjectSelect} projectSelect={projectSelect}/>
    //       </div>
    //       <div className="projecthome__child2 p-10 bg-slate-200/20 rounded-xl m-5 h-[100%] ">
    //         <div className="h-[90%]">
    //           <h1 className="text-4xl">{projects[projectSelect].name}</h1>
    //           <p className="tracking-wider">{projects[projectSelect].desc}</p>
    //         </div>
            
    //         {/* <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
    //         <div className="mt-[5%] mb-5 text-center ">
    //           <Link href={'/portfolio'}>
    //             <button className="inline-block rounded-xl bg-[#c1a0ca] p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-[#9C36FC] hover:text-[#F6F6F6]  text-[#301b3d] tracking-wider">Learn More on our Portfolio</button>

    //           </Link>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
}

export default ProjectHome;