import React from "react";
import Link from "next/link";
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import Image from "next/image";

export default function Footer(){
  return(
    <div id='footer' className="w-full h-full  bg-secondary_2 ">
      <div className="flex items-center justify-center pt-[50px]">
        <div className=" lg:grid lg:grid-cols-2 justify-evenly text-dark_text tracking-wide">
          <div className="items-center justify-between text-2xl font-light flex md:p-0 px-5" >
          <div className="bg-secondary/70  rounded-xl  text-center mx-3 mt-[20%] md:mx-0 md:mt-0 ">
            <div className="my-1">
              <Image src={'/assets/clip-1.png'} width={70} height={70} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/clip-2.png'} width={62} height={62} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/clip-3.png'} width={65} height={65} alt={'icon'}/>
            </div>
            <div className="my-1">
              <Image src={'/assets/clip-4.png'} width={65} height={65} alt={'icon'}/>
            </div>
          </div>
          <div className="mb-10">
            <div className="md:mb-[30px]">
               <div className="flex pt-8">
                  <h1 className="md:text-7xl text-6xl">IDEA</h1>
                  <h1 className="pl-2 md:pt-9 text-2xl pt-6">AEC</h1>
                </div>
                <div className="pt-5">
                  <h1 className="">Innovative Design Engineering Associates,</h1>
                  <h1 className="">Architectural Engineering Consultants LLC</h1>
                </div>
              
            </div>
            <div className="md:mb-[30px]">
              <p className="md:text-xl text-lg text-dark_text">Monroe, Connecticut | Miami, Florida</p>
            </div>
            <div>
              <p className="text-lg text-dark_text">info@IdeaAEC.com</p>
              <p className="text-lg text-dark_text">FL: 954-295-2125</p>
              <p className="text-lg text-dark_text">CT: 203-917-7907</p>
            </div>
          </div>
          </div>
          <div className="lg:ml-[160px] lg:w-[450px] w-full  h-[95%] mt-5" >
          <div className="bg-dark_bg_2/80  md:h-[290px]  rounded-xl ">
            <div className="items-center justify-center">
              <form 
              className="text-center pt-2 pb-4 items-center justify-center"
              action="https://formsubmit.co/info@ideaaec.com" 
              method="POST">
                <h2 className="text-primary_text">Contact Us</h2>
                <div className="m-2">
                  {/* <label>Name:</label> */}
                  <input 
                  type="name" 
                  name="name"
                  className="lg:w-[300px] w-[90%] rounded-xl text-center p-1" 
                  placeholder="Name"
                  required/>
                </div>
                <div className="m-2">
                  {/* <label>Email:</label> */}
                  <input 
                  type="email" 
                  name="email"
                  className="lg:w-[300px] w-[90%] rounded-xl text-center p-1 border-none" 
                  placeholder="Email"
                  required/>
                </div>
                <div className="m-2">
                  {/* <label>Message:</label> */}
                  <textarea 
                  type="text"
                  name="message" 
                  className="lg:w-[300px] w-[90%] rounded-xl text-center max-h-[70px] p-1 border-none" 
                  placeholder="Message"
                  required/>
                </div>
                <input type="hidden" name="_next" value="https://www.ideaaec.com/thank-you"/>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-xl p-2 shadow-xl text-primary_text">
                    <button id='submit_2' aria-label="submit_2" type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="grid grid-cols-3  text-center items-center justify-center  pt-5 text-primary_text pb-5">
            <div className="text-center items-center justify-center flex rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-4 text-2xl">
                <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <AiFillInstagram/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-4 text-2xl">
                <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <AiFillFacebook/>
                    </a>
                </Link>
              </div>
            </div>
            <div className="text-center items-center justify-center flex  p-1 rounded-xl ">
              <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-full p-4 text-2xl">
                <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <AiFillLinkedin/>
                    </a>
                </Link>
              </div>
            </div>
            
          </div>
          
        </div>
          
        </div>
        
        
      </div>
      <div className="flex items-center justify-center pb-5">
        <div className="flex">
          <p className="text-sm text-dark_text mr-1" >© 2023 by IDEA</p>
          <p className="text-xs text-dark_text mr-1 mt-[3px]" >AEC</p>
          <p className="text-xs text-dark_text mr-1 mt-[3px]" >LLC</p>
          
        </div>
          
        </div>
    </div>
  )
}

