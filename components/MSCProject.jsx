import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Cards from "./Cards";
import BeforeAndAfter from "./BeforeAndAfter";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import MobileImageCarousel from "./MobileImageCarousel";

function MSCProject(){

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
  const isBreakPoint = useMediaQuery(900)


  const projectImages = [
    {
      title: 'MSC-image-0',
      description: 'MSC-image-0 Description',
      className: "gallery-item gallery-item-0",
      class_list: ["gallery-item", "gallery-item-0"],
      image: '/assets/MSC/MSC-1.png',
    },
    {
      title: 'MSC-image-1',
      description: 'MSC-image-1 Image Description',
      className: "gallery-item md:gallery-item-1 gallery-item-1-md",
      class_list: ["gallery-item", "gallery-item-1"],
      image: '/assets/MSC/MSC-2.png',
    },
    {
      title: 'MSC-image-2',
      description: 'MSC-image-2 Image Description',
      className: "gallery-item gallery-item-2",
      class_list: ["gallery-item", "gallery-item-2"],
      image: '/assets/MSC/MSC-3.png',
    },
    {
      title: 'MSC-image-3',
      description: 'MSC-image-3 Image Description',
      className: "gallery-item gallery-item-3",
      class_list: ["gallery-item", "gallery-item-3"],
      image: '/assets/MSC/MSC-4.png',
    },
    {
      title: 'MSC-image-4',
      description: 'MSC-image-4 Image Description',
      className: "gallery-item gallery-item-4",
      class_list: ["gallery-item", "gallery-item-4"],
      image: '/assets/MSC/MSC-5.png',
    },
    {
      title: 'MSC-image-5',
      description: 'MSC-image-5 Image Description', 
      className: "gallery-item gallery-item-5",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/MSC/MSC-6.png',
    },
    {
      title: 'MSC-image-6',
      description: 'MSC-image-6 Image Description',
      className: "gallery-item gallery-item-6",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/MSC/MSC-7.png',
    },
    
  ]

  const projectFeatures=[
    {
      title:'proj-feature-1',
      heading: 'MECHANICAL PLANTS',
      description: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly to conceal and not impact patron experience.",
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'top-[20%] absolute',

    },
    {
      title:'proj-feature-2',
      heading: 'SMOKE CONTROL SYSTEM',
      description: "Terminal will consist of a NFPA-92 compliant Smoke Control System serving the whole smoke-protected areas. Terminal's Architecture, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke remove.",
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'top-[20%] absolute',
    },
    {
      title:'proj-feature-3',
      heading: 'ELECTRIC VEHICLE CHARGING',
      description: "Garage consists 2,500+ Parking spaces with 250+ spaces of Level-2 Electrical (EV) charging infrastructure.",
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'top-[20%] absolute',
    },
    {
      title:'proj-feature-4',
      heading: 'ART IN PUBLIC PLACES',
      description: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'top-[20%] absolute',
    },
    {
      title:'proj-feature-5',
      heading: 'SHORE POWER',
      description: "When finished, the Terminal will have the ability to provide (2) shore-side electrical power (15-kV) connections to service ships at Berth 8 and Berth 9, while their main and auxiliary diesel fueled engines are shut down.",
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'top-[20%] absolute',
    },
    {
      title:'proj-feature-6',
      heading: 'LEED CERTIFICATION',
      description: "The Terminal is on schedule to become LEED Gold Certified upon completion.",
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'top-[20%] absolute',
    },
    
  ]

  const projectServices=[
    {
      title: 'service-1',
      service: 'MEP-FP Project Management', 
    },
    {
      title: 'service-2',
      service:'Construction PM Services', 
    },
    {
      title: 'service-3',
      service:'Mechanical',
    },
    {
      title: 'service-4',
      service:'Electrical',
    },
    {
      title: 'service-5',
      service: 'Fire Alarm Design'
    }
    
  ]

  const projectResources= [
    {
      title: 'MSC Cruises',
      url: 'https://www.msccruisesusa.com/news/new-cruise-terminal-miami', 
    },
    {
      title: 'Arquitectonica',
      url: 'https://arquitectonica.com/architecture/project/msc-cruises-terminal-at-port-miami/' 
    }
    
  ]

  
  return(
    <div className="w-screen h-full bg-primary font-thin">
      <div className="">
        {/* Title */}
        <div className="md:px-20 pt-40 lg:pb-[50px]">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition: {delay:1, duration:1}}}
        >
          <h1 className="text-primary_text lg:text-9xl text-center text-7xl md:text-left tracking-wider">MSC Miami Cruise Terminal</h1>
        </motion.div>
        </div>  
        {/* Body */}
        <div className="" >
          {/* Body Container */}
          <div className="lg:p-20 md:p-4 flex justify-center">
            <div>
              {/* Featured Photo Container */}
              <div className="flex justify-center md:p-10 p-2">           
                <div>
                {/* Photo */}
                <div className="py-4">
                  <BeforeAndAfter/>
                </div>
                {/* Caption */}
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:2, duration:1}}}
                className="py-4 flex italic justify-left text-secondary_text lg:text-2xl ">
                  <div>
                    <h3>Commercial/Transportation</h3>
                    <h3>Miami,FL</h3>
                    <h3>490,000 SF Terminal / 1,200,000 SF Garage</h3>
                    <h3>Completion Date:2024</h3>
                  </div>
                </motion.div>
              </div>
              </div>
              {/* Heading Text */}
              <div className="flex justify-center md:px-20 md:p-10 p-4 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:2, duration:1}}} 
                >
                  <div className="my-4">
                    <h2 className="2xl:text-5xl 2xl:leading-[60px] lg:text-4xl text-2xl ">
                      IDEA AEC has been developing the MEP design for our biggest project yet, MSC Miami Cruise Terminal. Alongside some other talented Architectural and Engineering companies, we've made significant progress.
                    </h2>
                  </div>
                </motion.div>
              </div>
              {/* Image Carousel */}
              <div className="justify-center lg:my-10 my-4  max-w-[2000px]">
                <div> 
                  {isBreakPoint ? <MobileImageCarousel projectImages={projectImages}/> : <ImageCarousel projectImages={projectImages}/>}
                </div>
              </div>
              {/* Description Text */}
              <div className="flex justify-center md:px-20 md:p-10 p-4 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <div>
                  <div className="my-4 tracking-wider">
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    A multi-vessel cruise terminal capable of serving a total of 36,000 cruise ship passengers
                    daily. The facility consists of 490,000 sf of interior space and 1,200,000 sf garage (6-Levels).
                    A boarding concourse extends east approximately 3,000 feet to allow for berthing of three (3)
                    cruise vessels simultaneously.
                    </h3>
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    The Terminal’s programming includes but is not limited to: check-in, validation, screening,
                    waiting lounges, office terrace, passenger bridge concourse, baggage claim, restrooms, U.S.A
                    customs and border protection areas, VIP lounges, etc. Sustainable goals include LEED Silver
                    certifcation.
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project Features */}
              <div className="xl:px-20 md:p-10 p-4 xl:max-w-[1600px]">
                <div>
                  {/* Title */}
                  <div className="flex justify-left py-4">
                    <h2 className="lg:text-5xl">Project Features</h2>
                  </div>
                  {/* Cards */}
                  <div className="flex justify-center">
                    <div className="">
                    <div className="2xl:grid-cols-3 lg:grid-cols-2 grid justify-center items-center 2xl:gap-8 gap-12 2xl:p-20 md:p-10 p-4">
                      {projectFeatures.map((feature)=> {
                      return(
                        <Cards key={feature.title} feature={feature} isBreakPoint={isBreakPoint}/>
                        )
                      })}
                    </div>
                    </div>
                    
                  </div>
                <div>

                </div>
                </div>
              </div>
              {/* Services/Resources Container */}
              <div className="xl:px-20 md:p-10 p-4 xl:max-w-[1600px]">
                <div className="">
                <div className="grid lg:grid-cols-2 lg:gap-40">
                  {/* Services Container */}
                  <div className="flex lg:justify-end py-2">
                  <div className="md:px-0">
                    <div>
                      <h2 className="lg:text-5xl py-2">Services</h2>
                    </div>
                    <div>
                      <ul className="text-secondary_text lg:text-2xl text-xl font-light list-disc px-8">
                        {projectServices.map((serv)=>{
                          return(
                            <div key={serv.title}>
                              <li className="py-2">{serv.service}</li>
                            </div>
                            
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  </div>
                  {/* Resources Container */}
                  <div className="flex lg:justify-start py-2">
                  <div className="">
                    <div>
                      <h2 className="lg:text-5xl py-2">Resources</h2>
                    </div>
                    <div>
                    <ul className="text-secondary_text lg:text-2xl text-xl font-light list-disc px-8">
                        {projectResources.map((resource)=>{
                          return(
                            <div>
                              <li className="py-2 ">
                                <a href={resource.url} className="hover:text-light_accent_2 hover:underline" target="__blank" rel="noopener noreferrer" aria-label="Resource">{resource.title}</a>
                              </li>
                            </div>
                            
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
                </div>

              </div>
              {/* Contact */}
              <div className="flex md:px-20 md:p-10 p-4 xl:max-w-[1600px]">
                <div>
                  {/* Follow along statement */}
                  <div className="">
                    <h2 className="md:text-4xl text-2xl">Make sure to follow us to get the latest updates:</h2>
                  </div>
                   
                </div>
              </div>
              <div>
                {/* Socials */}
                <div className=" md:px-20 md:pb-0 pb-10 py-4  justify-center">
                  <div className="grid grid-cols-3 text-primary_text/90">
                    {/* Instagram */}
                    <div className="flex justify-center">
                      <div className="p-7 rounded-full md:text-5xl text-3xl bg-tertiary/80 hover:bg-accent_2/80 ">
                      <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <AiFillInstagram/>
                        </a>
                      </Link>
                      </div>
                    </div>
                    {/* Facebook */}
                    <div className="flex justify-center">
                      <div className="p-7 rounded-full md:text-5xl text-3xl bg-tertiary/80 hover:bg-accent_2/80 ">
                      <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <AiFillFacebook/>
                        </a>
                      </Link>
                    </div>
                    </div>
                    {/* LinkedIn */}
                    <div className="flex justify-center">
                      <div className="p-7 rounded-full md:text-5xl text-3xl bg-tertiary/80 hover:bg-accent_2/80 ">
                      <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
        
      </div>
      </div>
    </div>
  )
}


export default MSCProject;