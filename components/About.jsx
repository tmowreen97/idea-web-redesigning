import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
// import { SliderData } from './SliderData';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  const [show, setShow] = useState(false)

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };


  const isBreakPoint = useMediaQuery(800)


  const traits = [
    'Inter-Disciplinary', 'Sustainable', 'Automation', 'Small-Business', 'Client-Care', 'Ingenuity'
  ]
// bg-[#DAD3DF]
  return (
    <div id='about' className='w-screen h-full bg-primary font-light'>
      <div className=' flex items-center justify-center lg:p-4 '>
        <div className="about__parent lg:grid mt-[5%] lg:mx-[15%]">
          <div className="about__title m-[5%] lg:m-0 ">
            <h1 className="lg:text-[1100%] text-8xl tracking-wider text-center font-thin text-primary_text ">
              About
            </h1>
          </div>
          <div className="about__child1 p-4 m-4 lg:m-0 lg:text-lg items-center justify-center bg-secondary/40 rounded-xl lg:w-[645px] ">
            <div className='lg:m-14 m-3'>
              <h2 className="tracking-wider">Our Story</h2>
            </div>
            <div className='lg:m-14 m-3'>
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
                <p className='mt-[4%]'>
                  As a certified Small Business Enterprise (SBE) and Minority Business Enterprise (MBE) establishment, IDEA stands as a beacon of diversity, aiming to empower all of our team members, our environment, and communities. Throughout the year, IDEA offers internship programs to College and High-School engineering students as a method to empower our younger generation of future professionals.
                </p>
              </div>
            </div>
            
            <div className='grid lg:grid-cols-2 justify-center items-center text-center  lg:w-full mx-10 lg:mt-[0%]'>
              {
                traits.map((trait, index) => (
                  <div key={index} className='bg-secondary_text/90 italic rounded-xl p-4 w-[200px] m-[4%] mt-1'>
                    <p className='text-dark_text'>{trait}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="about__child2 p-4 m-4 lg:m-0 lg:text-lg items-center justify-center bg-secondary/40 rounded-xl lg:w-[485px]  ">
            <div className='lg:my-14 m-3 lg:mx-8'>
              <h2 className="tracking-wider ">Our Mission</h2>
            </div>
            <div className='lg:m-8 m-3'>
              <div>
                <p className="">
                IDEA, we strive to cultivate enduring partnerships founded on qualities of service, trust, collaboration, and the relentless pursuit of engineering innovation.  We align our engineering efforts to empower client-specific and sustainable building system solutions. Our Interdisciplinary engineering approach embraces technology as we strive to develop efficiencies and improve the Architectural Engineering industry. Together, we are pushing boundaries, ensuring mutual growth and success for our clients and collaboration partners.
                </p>
              </div>
            </div>
            
            
          </div>
          <div className="about__img  bg-secondary/40 p-4 m-4 items-center justify-center text-center rounded-xl hover:animate-none  lg:w-[485px] lg:m-0 ">
            <div className="relative items-center justify-center" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
                <div className="m-2 overflow-hidden rounded-xl items-center justify-center flex animate-pulse">
                <Link href={'/team'}>
                  <div className="relative ">
                    {isBreakPoint ? <Image src={'/assets/our-team-pic.jpg'} width={200} height={100} alt={'team'} className='rounded-xl'/> : <Image src={'/assets/our-team-pic.jpg'} width={500} height={300} alt={'team'} className='rounded-xl'/> }
                    <div className={show ? "absolute bg-cover bottom-0 left-0 right-0 top-0 bg-[#322d44]/80 rounded-xl text-secondary_text  " : "hidden"}>
                        <h1 className="lg:mx-5 justify-center lg:top-[44%]  top-[40%] relative lg:text-2xl text-lg text-primary_text">Click to See Our Team</h1>
                    </div>
                  </div>
                  </Link>
                </div>
               
              
      
          </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;