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
    'sustainable', 'ethical', 'minority-owned', 'client-care', 'small-business', 'energy-efficient'
  ]
// bg-[#DAD3DF]
  return (
    <div id='about' className='w-screen md:h-full bg-primary font-light'>
      <div className=' flex items-center justify-center md:p-4'>
        <div className="about__parent md:grid mt-[5%] md:mx-[15%]">
          <div className="about__title m-[5%] md:m-0 ">
            <h1 className="md:text-[1100%] text-8xl tracking-wider text-center font-thin text-primary_text ">
              About
            </h1>
          </div>
          <div className="about__child1 p-4 m-4 md:m-0 md:text-lg items-center justify-center bg-secondary/40 rounded-xl md:w-[645px] ">
            <div className='md:m-14 m-3'>
              <h2 className="tracking-wider">Our Story</h2>
            </div>
            <div className='md:m-14 m-3 text-xl'>
              <div>
                <p className='my-[4%]'>
                  Founded in 2021, IDEA is a technology-oriented, forward-focused Interdisciplinary MEP-FP 
                  Engineering firm that thrives on innovation and collaboration. In a short period of time, our IDEAs have established ourselves as effective industry contributors and practitioners. Our expertise includes experience in various sectors including educational, mixed-use, commercial, high-end residential, institutional industrial, transportation, and cultural.
                </p>
                <p className='my-[4%]'>
                  At IDEA, we believe in pushing boundaries and delivering innovative solutions that exceed expectations. Our engineering experience and portfolio are a testament to our versatility. As a growing team, we effectively accommodate engineering assignments on various projects of varying complexity and sizes.
                </p>
                <p className='my-[4%]'>
                  One of our notable achievements is the successful completion of the design for the MSC Miami Cruise Terminal (project is under construction, scheduled to finish late 2024). Once completed, this transportation venue will be the largest cruise terminal in the Americas. This is a testament to our ability to service and accommodate intricate projects on a grand scale.
                </p>
                <p className='my-[4%]'>
                  As a certified Small Business Enterprise (SBE) and Minority Business Enterprise (MBE) establishment, IDEA stands as a beacon of diversity, aiming to empower all of our team members, our environment, and communities. Throughout the year, IDEA offers internship programs to College and High-School engineering students as a method to empower our younger generation of future professionals.
                </p>
              </div>
            </div>
            
            <div className='grid md:grid-cols-2 justify-center items-center text-center  md:w-full m-10 md:mt-[15%]'>
              {
                traits.map((trait, index) => (
                  <div key={index} className='bg-secondary_text/90 italic rounded-xl p-4 w-[200px] m-[4%]'>
                    <p className='text-dark_text'>{trait}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="about__child2 p-4 m-4 md:m-0 md:text-2xl items-center justify-center bg-secondary/40 rounded-xl md:w-[485px]  ">
            <div className='md:m-8 m-3'>
              <h2 className="tracking-wider text-5xl">Our Mission</h2>
            </div>
            <div className='md:m-8 m-3'>
              <div>
                <p className="">
                IDEA, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of engineering innovation.  We align our engineering efforts to empower client-specific and sustainable building system solutions. Our Interdisciplinary engineering approach embraces technology as we strive to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries, ensuring mutual growth and success for our clients and collaboration partners.
                </p>
              </div>
            </div>
            
            
          </div>
          <div className="about__img  bg-secondary/40 p-4 m-4 items-center justify-center text-center rounded-xl hover:animate-none  md:w-[485px] md:m-0 animation-pulse delay-200">
            <div className="relative items-center justify-center" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
                <div className="m-2 overflow-hidden rounded-xl items-center justify-center flex">
                  <div className="relative ">
                    <Image src={'/assets/our-team-pic.jpg'} width={500} height={300} alt={'team'} className='rounded-xl'/> 
                    <div className={show ? "absolute bg-cover bottom-0 left-0 right-0 top-0 bg-[#322d44]/80 rounded-xl text-secondary_text  " : "hidden"}>
                      <Link href={'/team'}>
                        <h1 className="md:mx-5 justify-center top-[44%] relative md:text-2xl text-lg text-primary_text">Click to See Our Team</h1>
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