import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function TeamList({member}){

  const [showDetails, setShowDetails] = useState(false)
  return(
    <div className="md:flex items-center justify-evenly mb-20">
      <div className="md:mr-5 rounded-xl overflow-hidden m-2">
        <div className="relative" onMouseEnter={()=> setShowDetails(true)} onMouseLeave={()=> setShowDetails(false)}>
          <Image src={member.image} width={600} height={600} alt={'lead_team'}/>
          {showDetails ? <div className="absolute top-0 bottom-0 left-0 right-0 bg-dark_bg/90">
            <div className="flex text-white my-[45%] justify-evenly text-lg ">
              <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior className="my-[50%]">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="bg-button_bg rounded-xl p-3">Resume</button>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior className="my-[50%]">
                <a target="_blank" rel="noopener noreferrer">
                <button className="bg-button_bg rounded-xl p-3">LinkedIn</button>
                </a>
              </Link>
            </div>
            
          </div> : ""}
        </div>
        
      </div>
      <div className="md:w-[500px] text-left tracking-wide m-2">
        <div className=" bg-secondary/40 rounded-xl p-4 mb-4">
          <h2 className="text-secondary_text">{member.name}</h2>
          <p className="mx-2 text-secondary_text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        
        <div className=" bg-accent_1/40 rounded-xl p-4">
        <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
      </div>
    </div>
  )
}

export default TeamList;