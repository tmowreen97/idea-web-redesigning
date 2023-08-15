import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
// import { SliderData } from './SliderData';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  const [show, setShow] = useState(false)
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
    <div id='about' className='w-screen md:h-full bg-primary'>
      <div className=' flex items-center justify-center p-4 md:mx-[35%] pl-[5%]'>
        <div className="about__parent lg:grid flexbox ">
          <div className="about__title pt-[30%] ">
            <h1 className="md:text-[1100%] text-8xl tracking-wider text-center font-thin text-primary_text">About</h1>
          </div>
          <div className="about__child1 p-10 bg-secondary/50 rounded-xl mt-5 h-full md:m-0 m-2">
            <h2>Our Story</h2>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='grid md:grid-cols-2 justify-center items-center text-center m-2'>
              {
                traits.map((trait)=> {
                  return(
                    <p key={trait} className='bg-secondary_text/90 italic rounded-xl p-2 m-2 text-dark_text'>{trait}</p>
                  )
                })
              }

            </div>
          </div>
          <div className="about__child2 p-10 bg-secondary/40 rounded-xl md:m-5 m-2 md:mt-40 md:w-[500px]">
            <h2>Our Mission</h2>
            <p className="tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="about__img md:w-[500px] bg-secondary/40 items-center justify-center text-center p-5  animation-pulse delay-200 rounded-xl m-5 hover:animate-none">
            <div className="relative" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
                <div className="mx-10 overflow-hidden rounded-xl items-center justify-center flex">
                  <div className="relative">
                    <Image src={'/assets/filler-1.jpg'} width={500} height={100} alt={'team_member'}/> 
                    <div className={show ? "absolute bg-cover bottom-0 left-0 right-0 top-0 bg-[#322d44]/80 rounded-xl text-secondary_text  text-center justify-center items-center" : "hidden"}>
                    <Link href={'/team'}>
                      <h1 className="md:mx-5 md:mt-[115px] justify-center text-center mt-[20%] md:text-2xl text-lg text-primary_text">Click to See Our Team</h1>
                    </Link>
              </div>
                  </div>
                  
                </div>
               
              
      
          </div>
            
            {/* <div className='relative'>
            <div onMouseEnter={()=> mouse()} className='rounded-xl absolute  items-center justify-center mx-20 overflow-hidden'>
                <div className=" flex w-[350px] h-[250px] items-center justify-center text-center">
                  <Image src={'/assets/filler-1.jpg'} fill cover alt={'team'}/>
                </div>
                
              </div>
              {reveal ? <div id='cover' className=' z-9 absolute left-[-8px] bg-tertiary/60  md:w-[509px] h-[340px] rounded-xl ml-2 pt-[150px]'>
                <Link href={'/team'} className='text-primary_text font-light '>Click to See Our Team</Link>
              </div>: ""}
              
              
            </div> */}
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;