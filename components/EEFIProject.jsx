import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import ImageCarousel from "./ImageCarousel";
import Cards from "./Cards";
import BeforeAndAfter from "./BeforeAndAfter";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import MobileImageCarousel from "./MobileImageCarousel";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3"
import Video from 'next-video';
import awesomeVideo from '/videos/EEFI-Phase-1.mov';

// import highlightVideo from 'https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA';

function EEFI_Project(){
  const [isClient, setIsClient] = useState(false)
  // const [isBreakPoint, setIsBreakPoint] = useState('')


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
      // setIsBreakPoint(useMediaQuery(900))
      // setIsClient(true)
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
      // setIsClient(true)
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };
  const isBreakPoint= useMediaQuery(900)
  

  const projectImages = [
    {
      title: 'EEFI-image-0',
      description: 'EEFI-image-0 Description',
      className: "gallery-item gallery-item-0",
      class_list: ["gallery-item", "gallery-item-0"],
      image: '/assets/EEFI/EEFI-1.png',
    },
    {
      title: 'EEFI-image-1',
      description: 'EEFI-image-1 Image Description',
      className: "gallery-item md:gallery-item-1 gallery-item-1-md",
      class_list: ["gallery-item", "gallery-item-1"],
      image: '/assets/EEFI/EEFI-2.png',
    },
    {
      title: 'EEFI-image-2',
      description: 'EEFI-image-2 Image Description',
      className: "gallery-item gallery-item-2",
      class_list: ["gallery-item", "gallery-item-2"],
      image: '/assets/EEFI/EEFI-3.png',
    },
    {
      title: 'EEFI-image-3',
      description: 'EEFI-image-3 Image Description',
      className: "gallery-item gallery-item-3",
      class_list: ["gallery-item", "gallery-item-3"],
      image: '/assets/EEFI/EEFI-4.png',
    },
    {
      title: 'EEFI-image-4',
      description: 'EEFI-image-4 Image Description',
      className: "gallery-item gallery-item-4",
      class_list: ["gallery-item", "gallery-item-4"],
      image: '/assets/EEFI/EEFI-5.png',
    },
    {
      title: 'EEFI-image-5',
      description: 'EEFI-image-5 Image Description', 
      className: "gallery-item gallery-item-5",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/EEFI/EEFI-6.png',
    },
    {
      title: 'EEFI-image-6',
      description: 'EEFI-image-6 Image Description', 
      className: "gallery-item gallery-item-6",
      class_list: ["gallery-item", "gallery-item-6"],
      image: '/assets/EEFI/EEFI-7.png',
    }
    
  ]

  const projectFeatures=[
    {
      title:'proj-feature-1',
      heading: 'MECHANICAL (HVAC) DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-20 md:top-[20%] md:left-auto left-[-6%] top-[3%] absolute',
      description: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly to conceal and not impact patron experience.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[22%]',
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'md:top-1/4 md:left-[15%] top-[15%] left-[5%] absolute',

    },
    {
      title:'proj-feature-2',
      heading: 'ELECTRICAL DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 md:top-[33%] top-[30%] absolute',
      description: "Terminal will consist of a NFPA-92 compliant Smoke Control System serving the whole smoke-protected areas. Terminal's Architecture, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke remove.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[3%]',
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'md:top-1/4 md:left-[15%] top-[15%] left-[5%] absolute',
    },
    {
      title:'proj-feature-3',
      heading: 'PLUMBING DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 md:top-[35%] top-[30%] absolute',
      description: "Garage consists 2,500+ Parking spaces with 250+ spaces of Level-2 Electrical (EV) charging infrastructure.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[25%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-4',
      heading: 'FIRE PROTECTION DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-20 md:top-[20%] top-[5%] absolute',
      description: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[3%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-5',
      heading: 'FIRE ALARM DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 lg:left-[15%] md:top-[40%] md:left-[20%] top-[35%] left-[9%] absolute',
      description: "When finished, the Terminal will have the ability to provide (2) shore-side electrical power (15-kV) connections to service ships at Berth 8 and Berth 9, while their main and auxiliary diesel fueled engines are shut down.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[13%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-6',
      heading: 'LIGHTING & LIGHTING CONTROL DESIGN',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 lg:left-[4%] lg:top-[40%] md:top-[35%] md:left-[10%] top-[28%] absolute',
      description: "The Terminal is on schedule to become LEED Gold Certified upon completion.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[30%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    
  ]

  const projectServices=[
    {
      title: 'service-1',
      service: 'MEP-FP Design', 
    }
  ]

  const projectResources= [
    {
      title: 'East End Food - Food Hub',
      url: 'https://www.eastendfood.org/food-hub', 
    },
    {
      title: 'GDP',
      url: 'https://gdp.work/' 
    }
    
  ]

  
  return(
    <div className="w-screen h-full bg-primary font-thin">
      <div className="">
        {/* Title */}
        <div>
          <Hero2/>
        </div>
        <div className="md:px-20 pt-40 lg:pb-[50px]" id='eefi-page'>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition: {delay:1, duration:1}}}
        >
          <h1 className="text-primary_text lg:text-9xl text-center text-7xl md:text-left tracking-wider">East End Food Institute EEFI</h1>
        </motion.div>
        </div>  
        {/* Body */}
        <div className="" >
          {/* Body Container */}
          <div className="lg:p-20 md:p-4 flex justify-center">
            <div>
              {/* Featured Photo Container */}
              <div className="flex justify-center">           
                <div>
                  <div className='z-1'>
                    <Video
                      src={awesomeVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      id='eefi-phase-1-video'
                    /> 
                  </div>
                
                {/* { !isBreakPoint ? 
                  <div className="justify-center items-center flex md:w-[100%] md:h=[100%] overflow-hidden rounded-2xl">
                  {
                    !isBreakPoint ? 
                      <ReactPlayer 
                      // new 3yr video
                      // https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA
                      // 2 yr video
                      // https://www.youtube.com/watch?v=xUWu2wi4o-A&ab_channel=IDEA
                        url={'https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA'}
                        playing
                        loop
                        muted
                        controls
                        width='900px'
                        height='500px'
                      /> : 
                      <ReactPlayer 
                        url={'https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA'}
                        playing
                        loop
                        muted
                        controls
                        width='375px'
                        height='250px'

                      />
                    }
                  </div> 
                : ""} */}
                {/* Caption */}
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:2, duration:1}}}
                className="py-4 flex italic justify-left text-secondary_text lg:text-2xl ">
                  <div>
                    <h3>Institutional</h3>
                    <h3>Southampton, NY</h3>
                    <h3>5,000 SF & SITE Development</h3>
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
                      In collaboration with East End Food Institute (EEFI), Garnett-DePasquale Architects (GDP), IDEA<span className='2xl:text-3xl lg:text-2xl text-lg'> AEC</span>  provided MEP-FP Engineering and Lighting Design services to achieve this project milestone. We are very proud of this project in supporting the local farmers and associated community. We look forward to upcoming Phase-2 of this vision.
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
              <div className="flex justify-center xl:px-20 md:p-10 p-4 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <div>
                  <div className='py-6'>
                    <h2>Project Description</h2>
                  </div>
                  <div className="my-4 tracking-wider md:px-20">
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    MEP-FP site/campus design and planning of proposed multi-facility and multi-phase project at EEFI project site. Design includes a central MEP-FP plant, the plant would include centralized geothermal and boiler plant to heat and cool several buildings. Plant would interconnect several wells located on the site to provide efficient sustainable HVAC systems accommodations.
                    </h3>
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    Phase 1 : Full renovation of existing 5,000 sq ft. facility to provide a permanent home for East End Food Institute, including a year-round farmers market and community kitchen. Renovation will include upgrade/replacement of existing Mechanical, Electrical, Plumbing and Fire Protection systems to align with new program.
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
                    <div className="2xl:grid-cols-3 lg:grid-cols-2 grid grid-cols-1 place-content-center justify-center items-center 2xl:gap-8 gap-12 2xl:p-20 md:p-10 p-4">
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


export default EEFI_Project;