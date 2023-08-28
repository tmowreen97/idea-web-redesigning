import {react, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import Card from "./Card";
import TeamList from "./TeamList";
import AnimatedText from "./AnimatedText";


function OurTeam (){

    const words = "Manifesting World Class Ideas"

  const main_team = [
    {
      name: 'Kazi Karim',
      title: 'Introducing Kazi: Our Visionary Founder & Managing Principal',
      heading: '',
      body: [
        "At the helm of Inter-Disciplinary Engineering Associates, LLC (IDEA) stands Kazi, the visionary Founder & Managing Principal. His leadership fuels the strategic growth of IDEA's integrated Mechanical, Electrical (including Fire Alarm), Plumbing, and Fire Protection (MEP-FP) engineering practice. Drawing from an extensive portfolio of Design and Forensics engineering expertise, Kazi is uniquely experienced to lead and accommodate complex and demanding project engagements.",
        "Prior to founding IDEA, Kazi's journey included impactful roles at prominent engineering establishments including AltieriSeborWieber LLC (Altieri) and DeSimone Consulting Engineers, LLC (New York). With a wealth of diverse professional experience and knowledge, Kazi continues to drive innovation and excellence, translating engineering visions into tangible accomplishments and developments for the Architectural Engineering industry."
      ],
      contact: "/assets/PEKaziAKarimUPDATED.msg",
      linkedin: "https://www.linkedin.com/in/kazi-a-karim-p-e-2a3a3416/",
      fun_fact: "Kazi is an enthusiastic sports fan, always willing to hit the field or harwood (football & basketball) for a good competitive workout. His experience as a College and High-School Quarterback empowers Kazi to joyfully Quarterback the growth and development of IDEA.",
      image: '/assets/KK.jpg'
    },
    {
      name: 'Vinoo Jankie',
      title: 'Introducing Vinoo, An Instrumental Figure at IDEA',
      heading: "",
      body:[
        "In his role as Principal and Electrical Department Lead, Vinoo spearheads overall client engagement, ensuring a seamless experience for all opportunities.",
        "Vinoo brings 12+ years of detailed Electrical, Fire Alarm, Lighting Controls and Low Voltage (Information Technology, Security, Audio/Visual, etc.) System Design experience to our growing team. With a diverse set of project experience and expertise in multiple sectors of the industry including high-rise residential, mission critical, industrial, and cultural institutions, Vinoo is able to seamlessly service and manage projects of all scales and types. Vinoo has serviced and completed multiple LEED certified projects."

      ],
      contact: "/assets/PERCDDVinooJankieUPDATED.msg",
      linkedin: "https://www.linkedin.com/in/vinoo-jankie-pe-09206828/",
      fun_fact: "Vinoo has two kids and no time for fun… he also has a passion for history, and is an avid reader on the subject.",
      image: '/assets/VJ.jpg'
    }
  ]

  const second_team = [
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    },
    {
      name:'',
      title:'',
      image:'/assets/profile-pic.webp'
    }
  ]

  return(
    <div className="w-screen h-full items-center text-center justify-center bg-primary">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1 , duration:1}}}
      className="p-20">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-left tracking-wide">Our Team</h1>
      </motion.div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:1.5 , duration:1}}}
      className="">
        <div className="md:grid grid-cols-1 md:gap-20 md:mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <div key={member.title}>
                  <TeamList member={member}/>
                </div>
                
              )
              
            })
          }


        </div>

      
      <div className=" md:p-40 p-10 mx-auto flex flex-col items-center justify-center">
        <AnimatedText text={words}/>
      </div>
      </motion.div>
      
      {/* <motion.div 
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={textContainer}
      initial="hidden"
      animate="visible"
      >
        {words.map((word, index) => (
        <motion.span
          variants={textChild}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
        
      </motion.div> */}
      {/* <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-20 pb-20">
          {second_team.map((member)=> {
            return(
              <div className="relative hover:cursor-pointer">
                <Card member={member}/>

              </div>
              
            )
            
          })
          } */}
          
          {/* {second_team.map((member)=> {
            return(
              <div key='card' id="card" className="flex " onClick={()=> setFlip(!flip)}>
                <div className="front-card relative" >
                  <Image src={member.image} width={300} height={400}/> 
                  <div className={flip ? "absolute w-[300px] h-[300px] top-0 bg-[#322d44]/80 text-white  text-center justify-center items-center" : "hidden"}>
                    <h1 className="mx-5 mt-[100px] text-4xl ">John Doe</h1>
                    <p className="mx-5 mt-2 ">Intern</p>
                  </div>
                </div>
            
              </div>
            )
          })} */}

        {/* </div>

      </div> */}

      
    </div>
  )
  }

  export default OurTeam;