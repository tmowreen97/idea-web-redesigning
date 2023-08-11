import { useState } from "react";
import Image from "next/image";
import PortfolioList from "./PortfolioList";
import {BsChevronCompactDown} from 'react-icons/bs';

function ProjectPortfolio({ projects }){
  const [category, setCategory] = useState('All')
  
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
          
            <button id="category-button-active" className="category-button bg-[#C0B4D3]">
            All
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Commercial
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Cultural
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Educational
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Healthcare Facilities
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Industrial
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Institutional
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Mixed-Use/High-Rise
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Residential
          </button>
          <button className="category-button bg-[#C0B4D3]">
            Transportation
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
              <PortfolioList project={proj}/>
            )
          })
        }


      </div>
      </div>

    </div>
  )
}

export default ProjectPortfolio;