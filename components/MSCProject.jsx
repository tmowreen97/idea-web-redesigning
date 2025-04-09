import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Cards from "./Cards";
import BeforeAndAfter from "./BeforeAndAfter";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import MobileImageCarousel from "./MobileImageCarousel";
import AnimatedText from "./AnimatedText";

function MSCProject(){
  const words = "All Aboard, the Ribbon has Been Cut on the World’s Largest Terminal!"
  const words1 = "All Aboard, the Ribbon has Been Cut"
  const words2 = "on the World’s Largest Terminal!"
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
      image: '/assets/MSC/MSC-1.jpeg',
    },
    {
      title: 'MSC-image-1',
      description: 'MSC-image-1 Image Description',
      className: "gallery-item md:gallery-item-1 gallery-item-1-md",
      class_list: ["gallery-item", "gallery-item-1"],
      image: '/assets/MSC/MSC-2.jpg',
    },
    {
      title: 'MSC-image-2',
      description: 'MSC-image-2 Image Description',
      className: "gallery-item gallery-item-2",
      class_list: ["gallery-item", "gallery-item-2"],
      image: '/assets/MSC/MSC-3.jpg',
    },
    {
      title: 'MSC-image-3',
      description: 'MSC-image-3 Image Description',
      className: "gallery-item gallery-item-3",
      class_list: ["gallery-item", "gallery-item-3"],
      image: '/assets/MSC/MSC-4.jpg',
    },
    {
      title: 'MSC-image-4',
      description: 'MSC-image-4 Image Description',
      className: "gallery-item gallery-item-4",
      class_list: ["gallery-item", "gallery-item-4"],
      image: '/assets/MSC/MSC-5.jpg',
    },
    {
      title: 'MSC-image-5',
      description: 'MSC-image-5 Image Description', 
      className: "gallery-item gallery-item-5",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/MSC/MSC-6.jpg',
    },
    {
      title: 'MSC-image-6',
      description: 'MSC-image-6 Image Description',
      className: "gallery-item gallery-item-6",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/MSC/MSC-7.jpg',
    },
    
  ]

  const projectFeatures=[
    {
      title:'proj-feature-1',
      heading: 'MECHANICAL PLANTS',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-20 md:top-[20%] md:left-auto left-[-6%] top-[10%] absolute',
      description: "Garage structure houses Mechanical (HVAC) Cooling plants. Location was planned accordingly and coordinated to align with project's Architectural and Acoustic aspirations and performance requirements.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[17%]',
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'md:top-1/4 md:left-[15%] top-[15%] left-[5%] absolute',

    },
    {
      title:'proj-feature-2',
      heading: 'SMOKE CONTROL SYSTEM',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 md:top-[33%] top-[30%] absolute',
      description: "Terminal will consist of an NFPA-92 compliant smoke control system serving required smoke-protected areas. Terminal's Architectural, Mechanical, Electrical, Fire Alarm and Fire Protection systems will function coherently to achieve required smoke removal and associated requirements.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[2%]',
      img: '/assets/logos/mech-icon.png',
      img_width: 275,
      img_className: 'md:top-1/4 md:left-[15%] top-[15%] left-[5%] absolute',
    },
    {
      title:'proj-feature-3',
      heading: 'ELECTRIC VEHICLE CHARGING',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 md:top-[35%] top-[30%] absolute',
      description: "Garage consists 2,500+ Parking spaces with 250+ spaces of Level-2 Electrical (EV) charging infrastructure.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[25%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-4',
      heading: 'ART IN PUBLIC PLACES',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-20 md:top-[20%] top-[5%] absolute',
      description: "Terminal will include various Art in Public installations to highlight artist to enrich the public environment. A 3D Projection/Light show is planned to work with Terminal's current Architecture, Structure, Building systems including Lighting Control and Audio/Visual systems.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[3%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-5',
      heading: 'SHORE POWER',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 lg:left-[15%] md:top-[35%] md:left-[20%] top-[35%] left-[9%] absolute',
      description: "When finished, the Terminal will have the ability to provide shore-side electrical power (15-kV) connections to service ships at berth. This feature allows shore-to-ship connections without using ship's auxiliary diesel fueled power generators, and limiting environmental impact.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[5%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
    },
    {
      title:'proj-feature-6',
      heading: 'LEED CERTIFICATION',
      heading_className: 'text-dark_text xl:text-4xl text-3xl p-6 lg:left-[4%] lg:top-[40%] md:top-[35%] md:left-[10%] top-[28%] absolute',
      description: "The Terminal is on schedule to become LEED Gold Certified.",
      description_className:'text-secondary_text absolute md:text-2xl text-lg xl:p-6 p-4 top-[30%]',
      img: '/assets/logos/elec-icon.png',
      img_width: 200,
      img_className: 'md:top-[22%] md:left-[25%] top-[10%] left-[15%] absolute',
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
              {/* Animated Text */}
              <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:1.5, duration:1}}} className="flex items-center justify-center align-middle text-center p-0 w-full">
                {
                  isBreakPoint ? 
                  <div className="py-10">
                    <AnimatedText text={words1} specialClass={"md:text-4xl text-[18px] font-thin tracking-wider mx-1"}/>
                    <AnimatedText text={words2} specialClass={"md:text-4xl text-[18px] font-thin tracking-wider mx-1 text-center flex justify-center"}/>
                  </div> 
                  :
                  <div>
                    <AnimatedText text={words} specialClass={"xl:text-4xl md:text-[26px] text-[12px] font-thin py-5 tracking-wider m-1"}/>
                  </div>
                }

              </motion.div>  
              {/* Featured Photo Container */}
              <div className="flex justify-center md:p-10 p-2 min-h-[15vh]">         
                <div>
                {/* Photo */}
                <div className="py-4">
                  <BeforeAndAfter/>
                </div>
                {/* Caption */}
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:2.5, duration:1}}}
                className="py-4 flex italic justify-left text-secondary_text lg:text-2xl ">
                  <div>
                    <h3>Commercial/Transportation</h3>
                    <h3>Miami,FL</h3>
                    <h3>490,000 SF Terminal / 1,200,000 SF Garage</h3>
                    <h3>Completion Date: 2025</h3>
                  </div>
                </motion.div>
              </div>
              </div>
              {/* Heading Text */}
              <div className="flex justify-center md:px-20 md:p-10 p-4 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition: {delay:3, duration:1}}} 
                >
                  <div className="my-4">
                    <h2 className="2xl:text-5xl 2xl:leading-[60px] lg:text-4xl text-2xl ">
                    For the last Four (4) Years, The IDEA Team has provided Engineering and Construction Support Services on this marvel of a project – MSC Miami Cruise Terminal, located at the cruise capital of the world PortMiami (Miami, FL). A unique (BIG) piece of Architecture and it is the World’s largest. The Terminal has been delivered and on April 6th, 2025, IDEA was invited and privileged to attend the Ribbon Cutting Ceremony (which was also, IDEA’s 4th Anniversary).
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
                    A multi-vessel cruise Terminal capable of serving a total of 36,000 cruise ship passengers daily. The facility consists of 492,000 sf of interior space and 1,200,000 sf garage (6-Levels). A boarding concourse extends east approximately 3,000 feet to allow for berthing of three (3) cruise vessels simultaneously.
                    </h3>
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    The Terminal’s programming includes but is not limited to: check-in, validation, screening, waiting lounges, office terrace, passenger bridge concourse, baggage claim, restrooms, U.S.A customs and border protection areas, VIP lounges, etc. Sustainable goals include LEED GOLD certification.
                    </h3>
                    <h3 className="xl:text-3xl md:text-2xl text-lg xl:leading-[45px] lg:py-4 py-2">
                    The Terminal is also equipped with shore-to-ship (Shore-Power) infrastructure in-place to provide auxiliary power source to berthed ships, limiting the use of ship’s auxiliary diesel fueled power generators.
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


export default MSCProject;