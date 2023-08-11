import { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import {BsChevronCompactDown} from 'react-icons/bs';

function ProjectPortfolio({ projects }){
  const [category, setCategory] = useState('All')
  const router = useRouter();
  
  // if id is odd, open the description div to the right
  //  if id is even, open the description div to the left
  


  return(
    <div className="w-screen h-full bg-primary">
      <div className="p-20">
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Portfolio</h1>
      </div>
      <div>
        <div className="mx-[100px] items-center justify-center text-center ml-[9%]">

        
        <div className="grid grid-cols-5">
          
            <button id={router.asPath == '/portfolio' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio'} >All</Link>
          </button>
          <button id={router.asPath == '/portfolio/commercial' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/commercial'}>Commercial</Link>
          </button>
          <button id={router.asPath == '/portfolio/cultural' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/cultural'}>Cultural</Link>
          </button>
          <button id={router.asPath == '/portfolio/educational' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/educational'}>Educational</Link>
          </button>
          <button id={router.asPath == '/portfolio/healthcare-facilities' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/healthcare-facilities'}>Healthcare Facilities</Link>
          </button>
          <button id={router.asPath == '/portfolio/industrial' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/industrial'}>Industrial</Link>
          </button>
          <button id={router.asPath == '/portfolio/institutional' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/institutional'}>Institutional</Link>
          </button>
          <button id={router.asPath == '/portfolio/mixed-use-and-high-rise' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/mixed-use-and-high-rise'}>Mixed-Use/High-Rise</Link>
          </button>
          <button id={router.asPath == '/portfolio/residential' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/residential'}>Residential</Link>
          </button>
          <button id={router.asPath == '/portfolio/transportation' ? "category-button-active" : ''} className="category-button bg-[#C0B4D3]">
            <Link href={'/portfolio/transportation'}>Transportation</Link>
          </button>
          </div>
          
          
          

        </div>
        
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
      <div className="grid md:grid-cols-2 mx-20 py-10">
        {
          projects.map((proj)=> {
            return(
              <div key={proj.name}>
                <PortfolioList project={proj}/>
              </div>
              
            )
          })
        }


      </div>
      </div>

    </div>
  )
}

export default ProjectPortfolio;