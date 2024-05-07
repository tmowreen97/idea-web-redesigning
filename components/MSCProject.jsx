import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import Cards from "./Cards";
import { useState } from "react";

function MSCProject(){

  const [showDesc, setShowDesc] = useState(false)

  const projectImages = [
    {
      title: 'MSC-image-0',
      description: 'Image Description',
      className: "gallery-item gallery-item-0",
      class_list: ["gallery-item", "gallery-item-0"],
      image: '/assets/projects/com-trans/MSC-1.jpg',
    },
    {
      title: 'MSC-image-1',
      description: 'Image Description',
      className: "gallery-item gallery-item-1",
      class_list: ["gallery-item", "gallery-item-1"],
      image: '/assets/projects/com-trans/MSC-2-new.jpg',
    },
    {
      title: 'MSC-image-2',
      description: 'Image Description',
      className: "gallery-item gallery-item-2",
      class_list: ["gallery-item", "gallery-item-2"],
      image: '/assets/projects/com-trans/MSC-3-new.jpg',
    },
    {
      title: 'MSC-image-3',
      description: 'Image Description',
      className: "gallery-item gallery-item-3",
      class_list: ["gallery-item", "gallery-item-3"],
      image: '/assets/projects/com-trans/MSC-4-new.jpg',
    },
    {
      title: 'MSC-image-4',
      description: 'Image Description',
      className: "gallery-item gallery-item-4",
      class_list: ["gallery-item", "gallery-item-4"],
      image: '/assets/projects/com-trans/MSC-5-new.jpg',
    },
    {
      title: 'MSC-image-5',
      description: 'Image Description',
      className: "gallery-item gallery-item-5",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/projects/com-trans/MSC-6-new.jpg',
    },
    {
      title: 'MSC-image-6',
      description: 'Image Description',
      className: "gallery-item gallery-item-6",
      class_list: ["gallery-item", "gallery-item-5"],
      image: '/assets/projects/com-trans/msc-ct.jpg',
    },
    
  ]

  const projectFeatures=[
    {
      title:'proj-feature-1',
      heading: 'MECHANICAL PLANTS',
      description: 'Mechanical plants desc',
      img: '/assets/logos/mech-icon.png',
    },
    {
      title:'proj-feature-2',
      heading: 'SMOKE CONTROL SYSTEM',
      description: 'Smoke control System desc',
      img: '/assets/logos/mech-icon.png',
    },
    {
      title:'proj-feature-3',
      heading: 'ELECTRIC VEHICLE CHARGING',
      description: 'Electric Vehicle Charging desc',
      img: '/assets/logos/elec-icon.png',
    },
    {
      title:'proj-feature-4',
      heading: 'ART IN PUBLIC PLACES',
      description: 'Art in Public Places desc',
      img: '/assets/logos/elec-icon.png',
    },
    {
      title:'proj-feature-5',
      heading: 'SHORE POWER',
      description: 'Shore Power desc',
      img: '/assets/logos/elec-icon.png',
    },
    {
      title:'proj-feature-6',
      heading: 'LEED CERTIFICATION',
      description: 'Leed Certification desc',
      img: '/assets/logos/elec-icon.png',
    },
    
  ]

  function handleDesc(){
    setShowDesc(!showDesc)
  }
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
              <div className="flex justify-center p-20">           
                <div >
                {/* Photo */}
                <div className="py-4">
                  <Image src={'/assets/updated-landing copy.jpg'} width={1500} height={300}/>
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
              <div className="justify-center px-20 p-10">
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
                    <div className="grid-cols-3 grid justify-center items-center gap-4 p-20">
                      {projectFeatures.map((feature)=> {
                      return(
                        <Cards feature={feature}/>
                        )
                      })}
                    </div>
                    </div>
                    
                  </div>
                <div>

                </div>
                </div>
              </div>
              {/* Services Container */}
              <div className="flex justify-left px-20 p-10 xl:max-w-[1600px]">
                <div>
                  <div>
                    <h2>Services Provided</h2>
                  </div>
                  <div>
                    <h2>List of Services</h2>
                  </div>
                </div>
              </div>
              {/* Resources */}
              <div className="flex justify-left px-20 p-10 xl:max-w-[1600px]">
                <div>
                  <div>
                    <h2>Resources</h2>
                  </div>
                  <div>
                    <h2>List of Resources</h2>
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