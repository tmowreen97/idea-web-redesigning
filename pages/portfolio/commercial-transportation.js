import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
import { useState } from "react"

export default function CommTrans () {
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    if (showDropDown) {
      setShowDropDown(false)
    }
  }

  const projects = [
    // MSC Miami Cruise Terminal
    {
      name: 'MSC Miami Cruise Terminal',
      heading: ['Commercial/Transportation'],
      location: 'Miami, Fl',
      size: '490,000 SF Terminal / 1,200,000 SF Garage',
      year: '2024',
      services: [
        'MEP-FP Project Management', 'Construction PM Services', 'Mechanical', 'Electrical', 'Fire Alarm Design'
      ],
      description: [
        'A 4-story cruise terminal capable of serving a total of 18,000 cruise ship passengers. The facility consists of 490,000 sf of interior space and 1,200,000 sf garage (6-Levels). There is a boarding concourse approximately 3,000 ft long by 15 ft wide running along the terminal and extending beyond the terminal to the East to accommodate three Berths. The terminal’s programming includes but not limited to: Check-In, Validation, Screening, Waiting Lounges, Office Terrace, Passenger Bridge Concourse, Baggage claim, Baggage, Restrooms, Customs and Border Protection Areas, VIP Lounges, Etc. Sustainable goals include LEED Silver Certification',
        'IDEA’s team is also providing MEP-FP Construction Project Management Assistance services to the Design Builder/Construction Team on this opportunity.'
      ],
      resources: [
        {
          title: 'MSC Cruises',
          url: 'https://www.msccruisesusa.com/news/new-cruise-terminal-miami', 
        },
        {
          title: 'Arquitectonica',
          url: 'https://arquitectonica.com/architecture/project/msc-cruises-terminal-at-port-miami/' 
        }
      ],
      image: '/assets/projects/com-trans/msc-ct-1.jpg',
      images_array: [
        {
          title: 'MSC-1',
          image: '/assets/projects/com-trans/MSC-1.jpg'
        },
        {
          title: 'MSC-2',
          image: '/assets/projects/com-trans/MSC-2-new.jpg'
        },
        {
          title: 'MSC-3',
          image: '/assets/projects/com-trans/MSC-3-new.jpg'
        },
        {
          title: 'MSC-4',
          image: '/assets/projects/com-trans/MSC-4-new.jpg'
        },
        {
          title: 'MSC-5',
          image: '/assets/projects/com-trans/MSC-5-new.jpg'
        },
        {
          title: 'MSC-6',
          image: '/assets/projects/com-trans/MSC-6-new.jpg'
        },
        
      ],
      width: '700',
      height: '600',
      disclaimer: "",
      spacing: 'relative top-[45%]',
      child: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 w-full col-span-2"

    },
    // East End Food Institute EEFI
    {
      name: 'East End Food Institute EEFI',
      location: 'Riverhead, NY',
      heading: ['Commercial/Transportation'],
      size: '5,000 SF & SITE Development',
      year: '2023',
      services: [
        'MEP-FP Design'
      ],
      description: [
        'MEP-FP site/campus design and planning of proposed multi-facility and multi-phase project at EEFI project site. Design includes a central MEP-FP plant, the plant would include centralized geothermal and boiler plant to heat and cool several buildings. Plant would interconnect several wells located on the site to provide efficient sustainable HVAC systems accommodations.',
        'Phase 1 : Full renovation of existing 5,000 sq ft. facility to provide a permanent home for East End Food Institute, including a year-round farmers market and community kitchen. Renovation will include upgrade/replacement of existing Mechanical, Electrical, Plumbing and Fire Protection systems to align with new program.  '
      ],
      resources: [
        {
          title: 'East End Food - Food Hub',
          url: 'https://www.eastendfood.org/food-hub', 
        },
        {
          title: 'GDP',
          url: 'https://gdp.work/', 
        }
      ],
      image: '/assets/projects/com-trans/eefi-1-ct.png',
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/projects/com-trans/eefi-1-ct.png'
        },
        {
          title: 'eefi-2',
          image: '/assets/projects/com-trans/eefi-2-ct.png'
        }
      ],
      width: '700',
      height: '100',
      disclaimer: "Image Courtesy of Garnett DePasquale Projects",
      child: 'lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5 w-full col-span-2',
      spacing: 'relative lg:top-1/3 top-1/3',
    },
    // JAZZ
    {
      name: 'Jazz at Lincoln Center*',
      heading: ['Commercial/Transportation',],
      location: 'New York, NY',
      size: '27,000 SF',
      year: '2015',
      services: [
        'MEP-FP Project Managment', 
        'Electrical', 
        'Fire Alarm Design'
      ],
      description: [
        'Renovation of a 27,000sf public space into a flexible theatrical performance venue. Spaces are equipped with state-of-the-art AV equipment, professional theatre lighting and sound systems, and other modern arts-related technology.'
      ],
      resources: [
        {
          title: 'Ennead',
          url: 'https://www.ennead.com/work/jazz'
        }
      ],
      image: '/assets/projects/com-trans/jazz-1-ct.jpg',
      images_array: [
        {
          title: 'jazz-1',
          image: '/assets/projects/com-trans/jazz-1-ct.jpg'
        },
        {
          title: 'jazz-2',
          image: '/assets/projects/com-trans/jazz-2-ct.jpg'
        }
      ],
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      spacing: 'relative top-[18%]',
      child: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-5 w-full col-span-2 h-full"
      // child: 'lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5 w-full col-span-2'
    },
    // Steinway & Sons Piano*
    {
      name: 'Steinway & Sons Piano*',
      heading: ['Commercial/Transportation'],
      location: 'New York, NY',
      size: '25,000 SF',
      year: '2016',
      services: [
        'Electrical & Fire Alarm Design'
      ],
      description: [
        'Renovation to a 25,000sf space, which included a ground floor shown room, a concert hall, music rooms, recording rooms. Programmed consisted of high-end acoustically treated spaces.'
      ],
      image: '/assets/projects/com-trans/steinway-ct.jpg',
      width: '700',
      height: '600',
      disclaimer: "*Project performed by IDEA team member at previous employment. ",
      spacing: 'relative top-1/3',
      child: "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5 w-full col-span-2 h-full"
      // child: 'lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5 w-full col-span-2'
    },
  ];
  

  return(
    <div onClick={()=> handleClick()}>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Commercial/Transportation'} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
      <Footer/>
    </div>
  )
}