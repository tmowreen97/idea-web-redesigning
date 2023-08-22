import {react, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import Card from "./Card";
import TeamList from "./TeamList";


function OurTeam (){
  const main_team = [
    {
      name: 'Kazi Karim',
      title: 'Meet Our Managing Principal, Kazi Karim.',
      heading: 'Engineering Vision into Reality',
      body: [
        "As the Managing Principal, Kazi spearheads the strategic growth of Inter-Disciplinary Engineering Associates, LLC (IDEA), driving excellence in integrated Mechanical, Electrical (including Fire Alarm), Plumbing, and Fire Protection engineering (MEP-FP) practices. With an extensive background in Design and Forensics engineering, Kazi's expertise equips him to navigate and excel in intricate and demanding projects.",
        "His roles as a project manager and lead engineer have seen him successfully guide the design and construction of multiple sustainable LEED-certified facilities across a spectrum of sectors. From performance art centers and museums to historical buildings, high-rise residences, and more, Kazi's portfolio speaks volumes of his meticulous approach and adaptability.",
        "Kazi's mastery in project management, design development, and construction administration has led to the successful completion of numerous large-scale projects nationwide. His adeptness encompasses a range of complex MEP-FP projects, including electrical system designs for both normal and emergency power, intricate lighting control systems, fire alarm setups, and low-voltage systems.Prior to IDEA, Kazi's journey included impactful roles at AltieriSeborWieber LCC (Altieri) and DeSimone Consulting Engineers (New York), LLC. With a wealth of professional experience, Kazi continues to drive innovation and excellence, translating engineering visions into tangible accomplishments."
      ],
      image: '/assets/profile-pic.webp'
    },
    {
      name: 'Vinoo Jankie',
      title: 'Meet Vinoo Jankie.',
      heading: "An instrumental figure at IDEA LLC.",
      body:[
        "As the Principal and Electrical Department Lead, Vinoo spearheads overall client engagement, ensuring a  seamless experience for all opportunities. His extensive experience as a Lead Electrical Engineer is exemplified by his successful contributions to numerous large-scale and intricate projects, including his notable role in completing the Glenstone Museum Complex in Potomac, MD during his prior engagement.",
        "Vinoo brings a wealth of Professional Engineering licensure and experience, enriching our team's capabilities in detailed large-scale Electrical, Fire Alarm, Lighting Controls, and Low Voltage (Information Technology, Security, Audio/Visual, etc.) system design. His expertise spans various industry sectors such as high-rise residential, mission-critical facilities, industrial spaces, and cultural institutions. This versatility equips Vinoo to seamlessly manage projects of all scales and types, with several LEED certified projects successfully serviced and completed.",
        "As a Registered Communications Distribution Designer (RCDD) and Professional Engineer (PE), Vinoo leads IDEA's expanding Low Voltage Design offerings, including Information Technology infrastructure systems, Security Systems, and Audio/Visual Systems. Vinoo's leadership drives IDEA's success, embodying a passion for engineering excellence and innovation that propels us forward."
      ],
      image: '/assets/profile-pic.webp'
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
      <div className="p-20">
        <h1 className="md:text-[1100%] text-8xl font-thin text-primary_text text-left tracking-wide">Our Team</h1>
      </div>
      <div className="">
        <div className="md:grid grid-cols-1 md:gap-20 md:mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <div key={member.name}>
                  <TeamList member={member}/>
                </div>
                
              )
              
            })
          }


        </div>

      </div>
      <motion.div 
      initial={{x:-3000}}
        animate= {{x:[-2500,0,0,2500], scale:[0.75,1.5,1.5,0.75], opacity:[0.5,1,1,0.5]}}
        transition={{
          duration: "8",
          delay : "2",
          repeat: Infinity,
          repeatDelay: 1
        }}
      className="max-w-screen"
      >
        <div className="p-[10%]">
          <h2 className="italic font-bold tracking-wide">Manifesting World Class IDEAs</h2>
        </div>
        
      </motion.div>
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