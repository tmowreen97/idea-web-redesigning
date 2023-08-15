import React from "react";
import Link from "next/link";
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import Image from "next/image";

export default function Footer(){
  return(
    <div id='footer' className="w- md:h-[480px]  bg-secondary ">
      <div className="flex items-center justify-center pt-[50px]">
        <div className=" md:grid md:grid-cols-2 flexbox justify-evenly  text-dark_text tracking-wide">
          {/* <div className="bg-secondary mr-[300px]">
            <div>
              <Image src={'/assets/clip-1.png'} width={70} height={70}/>
            </div>
            <div>
              <Image src={'/assets/clip-2.png'} width={70} height={70}/>
            </div>
            <div>
              <Image src={'/assets/clip-3.png'} width={70} height={70}/>
            </div>
            <div>
              <Image src={'/assets/clip-4.png'} width={70} height={70}/>
            </div>
          </div> */}
          <div className="items-center justify-between text-2xl font-light flex" >
          <div className="bg-secondary/70 mr-10 rounded-xl px-5 py-4 mt-[-10px]">
            <div className="pb-1">
              <Image src={'/assets/clip-1.png'} width={60} height={60}/>
            </div>
            <div className="pb-1 pl-[2px]">
              <Image src={'/assets/clip-2.png'} width={55} height={55}/>
            </div>
            <div className="pb-1">
              <Image src={'/assets/clip-3.png'} width={55} height={55}/>
            </div>
            <div className="pl-[2px]">
              <Image src={'/assets/clip-4.png'} width={55} height={55}/>
            </div>
          </div>
          <div>
            <div className="flex mb-10">
              <h1 className="py-1 text-6xl">IDEA</h1>
              <h1 className="pl-2 pt-7 text-2xl">AEC</h1>
            </div>
            <div className="mb-10">
              <h1 className="">Inter-Disciplinary Engineering Associates, LLC</h1>
              <h1 className="">Architectural Engineering Consultants</h1>
              <p className="text-lg">1 Botsford Hill Rd Botsford, CT 06404</p>       
              <p className="text-lg">Info@IdeaAEC.com</p>
              <p className="text-lg">203-917-7907</p>
              <p className="pt-[50px] text-sm" >© 2023 by Idea Consulting</p>
            </div>
            
          </div>
            
          </div>
          <div className="md:ml-[150px]">
          <div className="bg-secondary md:w-[400px] md:h-[300px] ml-10  rounded-xl ">
            <div className="items-center justify-center ">
              <form className="text-center pt-5">
                <h2>Contact Us</h2>
                <div className="m-2">
                  {/* <label>Name:</label> */}
                  <input type="name" className="md:w-[300px] rounded-xl text-center p-1" placeholder="Name"/>
                </div>
                <div className="m-2">
                  {/* <label>Email:</label> */}
                  <input type="email" className="md:w-[300px] rounded-xl text-center p-1" placeholder="Email"/>
                </div>
                <div className="m-2">
                  {/* <label>Message:</label> */}
                  <textarea type="text" className="md:w-[300px] rounded-xl text-center max-h-[70px] p-1" placeholder="Message"/>
                </div>
                <div className="text-center items-center justify-center flex ">
                  <div className="bg-tertiary/80 hover:bg-accent_2/80 rounded-xl p-2 shadow-xl text-primary_text">
                    <button type='submit'>Send</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="grid grid-cols-3 gap-2 text-center items-center justify-center align-middle pt-5 text-primary_text">
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

