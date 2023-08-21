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
        <div className="about__parent md:grid flexbox ">
          <div className="about__title pt-[30%] ">
            <h1 className="md:text-[1100%] text-8xl tracking-wider text-center font-thin text-primary_text">About</h1>
          </div>
          <div className="about__child1 p-10 bg-secondary/50 rounded-xl mt-5 h-full md:m-0 m-2">
            <h2 className="tracking-wider mb-5">Our Story</h2>
            <p className="m-2">
              Engineering Tomorrow, Today
            </p>
            <p className="m-2">
              Founded in 2021, IDEA is a forward-focused Inter-Disciplinary Engineering Associates firm. With a
              tight-knit team of 11 MEP-FP engineering experts, we excel across sectors including commercial,
              high-end residential, institutional, educational, cultural, industrial, healthcare, and mixed-use projects.
            </p>
            <p className="m-2">
              Our accomplishments include the design completion of the MSC Miami Cruise Terminal, showcasing
              our ability to handle large-scale ventures. Currently, we're immersed in a project set to conclude in
              2024, emblematic of our ongoing commitment to innovation.
            </p>
            <p className="m-2">
              Headquartered in Connecticut and Miami, our strategic locations empower us to understand and serve
              diverse regional needs. At IDEA, we drive progress through collaboration, pioneering engineering
              excellence for a brighter future.
            </p>
            <div className='grid md:grid-cols-2 justify-center items-center text-center m-2 mt-[13%]'>
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
            <h2 className="tracking-wider mb-5">Our Mission</h2>
            <p className="m-2">IDEA Consulting: Streamlining Architectural Engineering Solutions</p>
            <p className="m-2">
              IDEA Consulting specializes in comprehensive Mechanical, Electrical, Plumbing, and Fire Protection
              (MEP-FP) Engineering services for architectural construction. From initial concept to post-
              construction maintenance, we offer tailored, efficient, and cost-effective solutions. Our
              interdisciplinary approach empowers efficient coordination, ensuring optimal results across projects of
              various scales and industries. We collaborate closely with architectural industry stakeholders,
              providing expert project management from conception to completion. Additionally, IDEA&#39;s
              commitment to industry advancement is showcased through upcoming AIA CES courses for
              professional development.
            </p>
          </div>
          <div className="about__img md:w-[500px] bg-secondary/40 items-center justify-center text-center p-4  animation-pulse delay-200 rounded-xl m-5 hover:animate-none">
            <div className="relative items-center justify-center" onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
                <div className="m-5 mt-8 overflow-hidden rounded-xl items-center justify-center flex">
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