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
      title: 'Principal Engineer',
      image: '/assets/profile-pic.webp'
    },
    {
      name: 'Vinoo Jankie',
      title: 'Principal Engineer',
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
        <div className="md:grid grid-cols-1 md:gap-10 md:mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <TeamList member={member}/>
              )
              
            })
          }


        </div>

      </div>
      <motion.div 
      initial={{x:-1500}}
        animate= {{x:[-1200,0,0,1200], scale:[0.75,1.5,1.5,0.75]}}
        transition={{
          duration: "9",
          delay : "2",
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="p-[100px] pb-[160px]"
      >
        <h2 className="italic font-bold tracking-wide">Manifesting World Class IDEAs</h2>
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