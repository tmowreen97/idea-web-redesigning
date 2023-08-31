import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PortfolioList from "./PortfolioList";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';

function ProjectPortfolio({ projects, category, showDropDown, setShowDropDown }){
  
  
  const router = useRouter();
  


  return(
    <div className="w-screen h-full bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1, duration:1}}}
      className="md:px-20 pt-20 pb-10">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text md:text-left text-center tracking-wide">Portfolio</h1>
      </motion.div>
      <div className="items-center justify-center" id="outer-container" >
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:1.5, duration:1}}}
        className="flex md:justify-start md:mx-20 justify-center "
        >
          <div className='relative' id='drop_down_parent'>
            {/* <label className="text-2xl text-secondary_text mr-2 ">Select a Category:</label> */}
            <button id='drop_down_button' aria-label='drop_down_button' onClick={()=> {setShowDropDown(!showDropDown)}}  data-dropdown-toggle="dropdown" className="relative text-xl justify-between w-[300px] bg-button_bg/30 hover:bg-secondary/70 focus:ring-4 focus:outline-none focus:ring-secondary_text font-medium rounded-lg  py-2  ml-2 inline-flex items-center text-secondary_text" type="button">
              <p className='mx-2'>{category}</p>
              <motion.p 
              animate={{y:[-1,2,2,-1]}}
              transition={{
                duration: "1",
                repeat: Infinity,
              }}
              className='mx-2 '>
                { showDropDown ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
              </motion.p>
            </button>
            <div id="dropdown" className={ showDropDown ? "z-10 absolute right-0 md:w-[200px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 text-center": "hidden"}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="/portfolio" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Choose A Sector</a>
                </li>
                <li>
                  <a href="/portfolio/commercial-transportation" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Commercial/Transportation</a>
                </li>
                <li>
                  <a href="/portfolio/cultural" className="block px-4 py-2 hover:bg-accent_2/80   hover:text-white">Cultural</a>
                </li>
                <li>
                  <a href="/portfolio/educational-institutional" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Educational/Institutional</a>
                </li>
                <li>
                  <a href="/portfolio/high-rise" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">High-Rise</a>
                </li>
                <li>
                  <a href="/portfolio/industrial" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Industrial</a>
                </li>
                <li>
                  <a href="/portfolio/mixed-use" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white">Mixed-Use</a>
                </li>
                <li>
                  <a href="/portfolio/performance-venues" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white">Performance Venues</a>
                </li>
                <li>
                  <a href="/portfolio/residential" className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white">Residential</a>
                </li>
{/*                 
                <li>
                  <a href="/portfolio/transportation" className="block px-4 py-2 hover:bg-accent_2/80 hover:text-white ">Transportation</a>
                </li> */}
              </ul>
            </div>
          </div>

          
          
        </motion.div>
        
      {/*  SELECT DROP DOWN*/}
      {/* <div className="text-right">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          className="text-center w-[150px] p-1 rounded-xl mr-20"
        >
          <option value="All">All</option>
          <option value="Residence">Residence</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
          <option value="Category 4">Category 4</option>
          <option value="Category 5">Category 5</option>
          <option value="Category 6">Category 6</option>
          <option value="Category 7">Category 7</option>
        </select>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 p-2 m-5 items-center justify-evenly bg-tertiary/80 rounded-xl max-w-[2000px]">
        {
          projects.map((proj)=> {
            return(
              <div key={proj.name} className={proj.child ? `${proj.child}`: "w-full col-span-2"}>
                <PortfolioList project={proj}/>
              </div>
              
            )
          })
        }


      </div>
      </div>
      
      </div>

    </div>
  )
}

export default ProjectPortfolio;