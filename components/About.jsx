import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
// import { SliderData } from './SliderData';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  const [reveal, setReveal] = useState(false)
  function mouse (){
    setReveal(true)
    myStopFunction();
    myFunction();
  }
  function myFunction() {
    let myVar = setTimeout(function(){
        setReveal(false)
      }, 2500);
  }   
  function myStopFunction() {
      if(typeof myVar != 'undefined'){
          clearTimeout(myVar);
      }
  }

  const traits = [
    'sustainable', 'energy-efficient', 'minority-owned', 'client-care', 'small-business', 'ethical'
  ]
// bg-[#DAD3DF]
  return (
    <div id='about' className='w-screen md:max-h-[980px] bg-primary '>
      <div className='relative flex items-center align-middle justify-center p-4 ml-[12%]'>
        <div className="about__parent ">
          <div className="about__title mt-20 ">
            <h1 className="md:text-[1100%] text-5xl tracking-wider text-center font-thin text-primary_text">About</h1>
          </div>
          <div className="about__child1 p-10 bg-secondary/50 rounded-xl mt-5 w-[110%]">
            <h2>Our Story</h2>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='grid grid-cols-2 justify-center items-center text-center m-2'>
              {
                traits.map((trait)=> {
                  return(
                    <p key={trait} className='bg-accent_1 italic rounded-xl p-2 m-2'>{trait}</p>
                  )
                })
              }

            </div>
          </div>
          <div className="about__child2 p-10 bg-secondary/50 rounded-xl m-5 w-[175%] mt-20 ml-20">
            <h2>Our Mission</h2>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="about__img bg-secondary/50 items-center justify-center align-middle text-center p-5 ml-20 w-[175%] animation-pulse delay-200 rounded-xl m-5 hover:animate-none">
            
            <div className='relative'>
              {reveal ? <div id='cover' className=' z-10 absolute left-[-8px] bg-[#322d44]/80 w-[510px] h-[340px] rounded-xl ml-2 pt-[150px]'>
                <Link href={'/team'} className='text-secondary_text font-light '>Click to See Our Team</Link>
              </div>: ""}
              <div onMouseEnter={()=> mouse()} className='rounded-xl overflow-hidden'>
                <Image src={'/assets/filler-1.jpg'} width={550} height={100} alt={'team'}/>
              </div>
              
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;