import {react, useState} from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import Card from "./Card";


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
        <h1 className="md:text-[1100%] text-5xl font-thin text-primary_text text-left tracking-wide">Our Team</h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 gap-10 mx-20 mt-10">
          {
            main_team.map((member)=> {
              return(
                <div className="flex items-center justify-evenly mb-20">
                  <div className="mr-5 rounded-xl overflow-hidden ">
                    <Image src={member.image} width={600} height={600} alt={'lead_team'}/>
                  </div>
                  <div className="w-[500px] text-left tracking-wide">
                    <div className=" bg-secondary/40 rounded-xl p-4 mb-4">
                      <h2 className="text-secondary_text">{member.name}</h2>
                      <p className="mx-2 text-secondary_text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    
                    <div className=" bg-accent_1/40 rounded-xl p-4">
                    <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="mx-2 text-secondary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  
                    </div>
                  </div>
                </div>
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