import React from "react";
import Link from "next/link";
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

export default function Footer(){
  return(
    <div id='footer' className="w-screen h-[475px]  bg-footer_bg ">
      <div className="flex items-center justify-center pt-[50px]">
        <div className=" grid grid-cols-2 gap-14 ml-10 text-secondary_text">
          <div className="items-center justify-center pt-[40px] text-2xl font-light" >
            <h1 className="py-1 text-4xl">IDEA AEC</h1>
            <h1 className="py-1 ">Inter-Disciplinary Engineering Associates, LLC</h1>
            <h1 className="py-1">Architectural Engineering Consultants</h1>
            <p className="text-xl  ">1 Botsford Hill Rd</p>
            <p className="text-xl ">Botsford, CT 06404</p>
            <p className="text-xl">Info@IdeaAEC.com</p>
            <p className="text-xl ">203-917-7907</p>
            <p className="pt-5" >©Idea</p>
          </div>
          <div className="ml-20">
          <div className="bg-secondary w-[400px] h-[300px] ml-10  rounded-xl ">
            <div className="items-center justify-center ">
              <form className="text-center pt-5">
                <h2>Contact Us</h2>
                <div className="m-2">
                  {/* <label>Name:</label> */}
                  <input type="name" className="w-[300px] rounded-xl text-center p-1" placeholder="Name"/>
                </div>
                <div className="m-2">
                  {/* <label>Email:</label> */}
                  <input type="email" className="w-[300px] rounded-xl text-center p-1" placeholder="Email"/>
                </div>
                <div className="m-2">
                  {/* <label>Message:</label> */}
                  <textarea type="text" className="w-[300px] rounded-xl text-center max-h-[70px] p-1" placeholder="Message"/>
                </div>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-tertiary/80 hover:bg-accent_2/80 hover:text-secondary_text/70 rounded-xl p-2 shadow-xl text-primary_text">
                    <button type='submit'>Send</button>
                    {/* <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          <AiFillLinkedin/>
                        </a>
                    </Link> */}
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="grid grid-cols-3 gap-10 text-center items-center justify-center align-middle pt-5 ml-10 text-primary_text">
            <div className="text-center items-center justify-center flex rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 hover:text-secondary_text/70 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillInstagram/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 hover:text-secondary_text/70 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillFacebook/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 hover:text-secondary_text/70 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/in/tasreenmowreen" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin/>
                    </a>
                </Link>
              </div>
            </div>
            
          </div>
          
        </div>
          
        </div>
        
      </div>
    </div>
  )
}

