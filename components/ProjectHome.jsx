import React, { useState } from "react";
import ProjectHomeCarousel from "./ProjectHomeCarousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import Link from "next/link";

function ProjectHome(){
  const [projectSelect, setProjectSelect]= useState(0)
  const[showDropDown, setShowDropDown] = useState(false)
  const projects = [
    {
      id: 1,
      name: 'One',
      image: "/assets/filler-1.jpg",
      desc: "Image One",
      category : 'Residential'
    },
    {
      id:2,
      name: 'Two',
      image: "/assets/filler-2.jpg",
      desc: "Image Two",
      category: 'Cultural',
    },
    {
      id: 3,
      name: 'Three',
      image: "/assets/filler-3.jpg",
      desc: "Image Three",
      category: "Transportation",
    }
  ]

  return(
    <div id='projects' className='w-screen md:max-h-[980px] bg-primary'>
      <div className='relative flex items-center align-middle justify-center p-4 md:ml-[8%] md:mt-[110px]'>
      <div className="projecthome__parent md:grid flexbox md:max-h-[980px] w-[100%] ">
        <div className="projecthome__title mr-2 ml-5 ">
          <h1 className="md:text-[1000%] text-5xl tracking-wide text-left md:ml-[65px] font-thin mb-10  text-primary_text">Projects</h1>
        </div>
        <div className="projecthome__child1 md:p-10 p-5 bg-secondary/50 rounded-xl md:mr-5 md:ml-4">
          <ProjectHomeCarousel projects={projects} setProjectSelect={setProjectSelect} projectSelect={projectSelect}/>
        </div>
        <div className="projecthome__img bg-secondary/50 items-center text-center justify-center p-5 rounded-xl md:w-[450px] md:h-[45%] mt-20">
          {/* <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg> */}
          <button onClick={()=> {setShowDropDown(!showDropDown)}}  data-dropdown-toggle="dropdown" className="relative md:w-[400px] text-2xl justify-between  hover:bg-secondary/60 focus:ring-4 focus:outline-none focus:ring-secondary_text font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-secondary_text" type="button">{projects[projectSelect].category} 
          { showDropDown ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
          </button>

    <div id="dropdown" className={ showDropDown ? "z-10 absolute md:right-52 right-[100px] md:w-[200px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700": "hidden"}>
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
            <a href="/portfolio/healthcare-faciities" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Healthcare Facilities</a>
          </li>
          <li>
            <a href="/portfolio/mixed-use-and-high-rise" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white">Mixed-Use & High-Rise</a>
          </li>
          <li>
            <a href="/portfolio/residential" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Residential</a>
          </li>
          <li>
            <a href="/portfolio/transportation" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white ">Transportation</a>
          </li>
          <li>
            <a href="/portfolio/industrial" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Industrial</a>
          </li>
        </ul>
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
        <div className="projecthome__child2 p-10 bg-secondary/50 rounded-xl md:w-[450px]">
          <h2 className="">{projects[projectSelect].name}</h2>
          <p className="tracking-wider mx-2">{projects[projectSelect].desc}</p>
          <div className="mt-[5%] mb-5 text-center ">
            <Link href={'/portfolio'}>
              <button className="inline-block rounded-xl bg-secondary_text text-dark_text p-3 px-4 font-normal hover:drop-shadow-xl hover:bg-accent_2/80 hover:text-secondary_text  tracking-wider">Learn More on our Portfolio</button>
            </Link>
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