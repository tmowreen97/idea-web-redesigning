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
            <Link href="https://www.google.com/maps/place/Idea/@41.3624549,-73.2686882,17z/data=!3m1!4b1!4m21!1m14!4m13!1m6!1m2!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!2sIdea,+1+Botsford+Hill+Rd,+Botsford,+CT+06404!2m2!1d-73.2661133!2d41.3624509!1m5!1m1!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!2m2!1d-73.2661133!2d41.3624509!3m5!1s0x89e7e32f4acafcc9:0x25866ea4c7e9ca99!8m2!3d41.3624509!4d-73.2661133!16s%2Fg%2F11rxhzx9pl?entry=ttu" legacyBehavior >
              <a target="_blank" rel="noopener noreferrer">
                <p className="text-xl hover:text-accent_2">
                  1 Botsford Hill Rd Botsford, CT 06404
                </p>       
              </a>
            </Link>
            <p className="text-xl my-1">Info@IdeaAEC.com</p>
            <p className="text-xl my-1">203-917-7907</p>
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
                  <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-xl p-2 shadow-xl text-primary_text">
                    <button type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="grid grid-cols-3 gap-10 text-center items-center justify-center align-middle pt-5 ml-10 text-primary_text">
            <div className="text-center items-center justify-center flex rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-4 text-2xl">
                <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillInstagram/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-4 text-2xl">
                <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <AiFillFacebook/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 hover:text-secondary_text/70 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
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

