import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Cards from "./Cards";
import { useState } from "react";
import BeforeAndAfter from "./BeforeAndAfter";

function MSCProject(){


  const projectImages = [
    {
      title: 'MSC-image-0',
      description: 'MSC-image-0 Description',
      className: "gallery-item gallery-item-0",
      class_list: ["gallery-item", "gallery-item-0"],
      image: '/assets/projects/com-trans/MSC-1.jpg',
    },
    {
      title: 'MSC-image-1',
      description: 'MSC-image-1 Image Description',
      className: "gallery-item md:gallery-item-1 gallery-item-1-md",
      class_list: ["gallery-item", "gallery-item-1"],
      image: '/assets/projects/com-trans/MSC-2-new.jpg',
    },
    {
      title: 'MSC-image-2',
      description: 'MSC-image-2 Image Description',
      className: "gallery-item gallery-item-2",
      class_list: ["gallery-item", "gallery-item-2"],
      image: '/assets/projects/com-trans/MSC-3-new.jpg',
    },
    {
      title: 'MSC-image-3',
      description: 'MSC-image-3 Image Description',
      className: "gallery-item gallery-item-3",
      class_list: ["gallery-item", "gallery-item-3"],
      image: '/assets/projects/com-trans/MSC-4-new.jpg',
    },
    {
      title: 'MSC-image-4',
      description: 'MSC-image-4 Image Description',
      className: "gallery-item gallery-item-4",
      class_list: ["gallery-item", "gallery-item-4"],
      image: '/assets/projects/com-trans/MSC-5-new.jpg',
    },
    {
      title: 'MSC-image-5',
      description: 'MSC-image-5 Image Description',
      className: "gallery-item gallery-item-5",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/projects/com-trans/MSC-6-new.jpg',
    },
    {
      title: 'MSC-image-6',
      description: 'MSC-image-6 Image Description',
      className: "gallery-item gallery-item-6",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/projects/com-trans/msc-ct.jpg',
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
        <div className="md:px-20 pt-40 lg:pb-[80px]">
          <h1 className="text-primary_text lg:text-9xl text-center text-7xl md:text-left tracking-wider">MSC Miami Cruise Terminal</h1>
        </div>  
        {/* Body */}
        <div className="" >
          {/* Body Container */}
          <div className="p-20 md:p-4 flex justify-center">
            <div>
              {/* Featured Photo Container */}
              <div className="flex justify-center p-10">           
                <div >
                {/* Photo */}
                <div className="py-4">
                  <BeforeAndAfter/>
                </div>
                {/* Caption */}
                <div className="py-4 flex italic justify-left text-secondary_text lg:text-2xl ">
                  <div>
                    <h3>Commercial/Transportation</h3>
                    <h3>Miami,FL</h3>
                    <h3>490,000 SF Terminal / 1,200,000 SF Garage</h3>
                    <h3>Completion Date:2024</h3>
                  </div>
                </div>
                </div>
              </div>
              {/* Heading Text */}
              <div className="flex justify-center px-20 p-10 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <div>
                  <div className="my-4 ">
                    <h2 className="xl:text-5xl text-4xl xl:leading-[60px]">
                      IDEA AEC has been developing the MEP design for our biggest project yet, MSC Miami Cruise Terminal. Alongside some other talented Architectural and Engineering companies, we've made significant progress.
                    </h2>
                  </div>
                </div>
              </div>
              {/* Image Carousel */}
              <div className="justify-center mt-40 mb-20 p-10 max-w-[2000px]">
                <div> 
                  <ImageCarousel projectImages={projectImages}/>
                </div>
              </div>
              {/* Description Text */}
              <div className="flex justify-center px-20 p-10 text-secondary_text tracking-wide xl:max-w-[1600px]">
                <div>
                  <div className="my-4 tracking-wider">
                    <h3 className="xl:text-3xl md:text-2xl text-xl xl:leading-[45px]">
                      A 4-story cruise terminal capable of serving a total of 18,000 cruise ship passengers. The facility consists of 490,000 sf of interior space and 1,200,000 sf garage (6-Levels). There is a boarding concourse approximately 3,000 ft long by 15 ft wide running along the terminal and extending beyond the terminal to the East to accommodate three Berths. The terminal’s programming includes but not limited to: Check-In, Validation, Screening, Waiting Lounges, Office Terrace, Passenger Bridge Concourse, Baggage claim, Baggage, Restrooms, Customs and Border Protection Areas, VIP Lounges, Etc. Sustainable goals include LEED Silver Certification IDEA’s team is also providing MEP-FP Construction Project Management Assistance services to the Design Builder/Construction Team on this opportunity.
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project Features */}
              <div className="px-20 p-10 xl:max-w-[1600px]">
                <div>
                  {/* Title */}
                  <div className="flex justify-left">
                    <h2>Project Features</h2>
                  </div>
                  {/* Cards */}
                  <div className="flex justify-center">
                    <div className="">
                    <div className="2xl:grid-cols-3 lg:grid-cols-2 grid justify-center items-center 2xl:gap-8 gap-12 2xl:p-20 p-10">
                      {projectFeatures.map((feature)=> {
                      return(
                        <Cards key={feature.title} feature={feature}/>
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
              <div className="px-20 p-10 xl:max-w-[1600px]">
                <div className="">
                <div className="grid grid-cols-2">
                  {/* Services Container */}
                  <div className="flex justify-center">
                  <div className="">
                    <div>
                      <h2>Services</h2>
                    </div>
                    <div>
                      <ul className="text-secondary_text text-2xl font-light">
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
                  <div className="flex justify-center">
                  <div>
                    <div>
                      <h2>Resources</h2>
                    </div>
                    <div>
                    <ul className="text-secondary_text text-2xl font-light">
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
              <div className="flex justify-left px-20 p-10 xl:max-w-[1600px]">
                <div>
                  <div>
                    <h2>Make sure to follow along </h2>
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