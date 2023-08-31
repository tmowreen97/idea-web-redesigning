import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
import { useState } from "react"
export default function PerfVenue () {
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    if (showDropDown) {
      setShowDropDown(false)
    }
  }

  const projects = [
    // Little Theater at LIU 
    {
      name: 'Little Theater at LIU',
      heading: ['Educational/Institutional', 'Performance Venues'],
      location: 'Brookville, NY',
      size: '20,000 SF',
      year: '2022',
      services: [
        'Prime Consultant (Architectural & MEP-FP)',  
        'MEP & Architectural Project Management' , 'MEP Design'
      ],
      description: [
        'Project includes renovation of Mechanical, Electrical, Plumbing and Architectural upgrades to existing performance arts theatre building (20,000sf). Project program includes two (2) performance venues (125-Seat, 50-Seat) and associated theatrical front and back of house program (scene shop, dressing rooms, costume shop, bathrooms, etc.) spaces. Project upgrades included program revisions and associated Architectural, Mechanical (HVAC), Electrical and Plumbing upgrades.', 
        'IDEA served as Prime-Consultant on this engagement with LIU and led Architectural and Engineering efforts on this opportunity.'
      ],
      image: '/assets/projects/performance/liu-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: "",
      spacing: 'relative top-1/3'
      // custom: ' w-full max-w-[900px] xl:h-[615px] 2xl:h-[675px] rounded-lg'
    },
    // Fine Arts Instructional Center at ECSU (Eastern Connecticut State University)
    {
      name: 'Fine Arts Instructional Center at ECSU (Eastern Connecticut State University)*',
      heading: [
        'Educational/Institutional',
        'Performance Venues'
      ],
      location: 'Willimantic, CT',
      size: '118,000 SF',
      year: '2016',
      services: [
        'MEP-FP Project Management', 
        'Electrical & Fire Alarm Design',
      ],
      description: [
        ' The 118,000 sf Center serves as a new home for the visual and performing arts departments. It includes a 400-seat multipurpose Concert Hall, 250-seat Proscenium Theatre, and 125-seat Studio Theatre, along with instructional classrooms, multiple studios, and art gallery. Spaces are equipped with state-of-the-art AV equipment, professional theatre lighting and sound systems, and other modern arts-related technology.',
        'Leadership in Energy & Environmental Design (LEED) SILVER Certified.',
      ],
      resources: [
        {
          title: 'William Rawn Associates',
          url: 'https://rawnarch.com/projects/ecsu-fine-arts.html', 
        },
        {
          title: 'Theatre Projects',
          url: 'https://theatreprojects.com/project/eastern-connecticut-state-university-fine-arts-instructional-center/', 
        }
      ],
      awards: [
        '2017 SCUP/AIA-CAE Excellence in Architecture for a New Building'
      ],
      image: '/assets/projects/performance/ecsu-1-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
    },
    // Jazz at Lincoln Center
    {
      name: 'Jazz at Lincoln Center*',
      location: 'New York, NY',
      heading: [
        'Commercial/Transportation',
        'Performance Venues'
      ],
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
          url: 'http://www.ennead.com/work/jazz', 
        }
      ],
      image: '/assets/projects/performance/jazz-1-perf.jpg',
      images_array: [
        {
          title: 'jazz-1',
          image: '/assets/projects/performance/jazz-1-perf.jpg'
        },
        {
          title: 'jazz-2',
          image: '/assets/projects/performance/jazz-2-perf.jpg'
        }
      ],
      width: '700',
      height: '500',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      // custom: ' w-full max-w-[900px] xl:h-[475px] 2xl:h-[600px] rounded-lg'
    },
    // Merriam Webster Theater at The Kimmel Center
    {
      name: 'Merriam Webster Theater at The Kimmel Center*',
      heading: ['Performance Venues'],
      location: 'Philadelphia, PA',
      size: '25,000 SF',
      year: '2017',
      services: [
        'Electrical', 
        'Fire Alarm Assessment',
        'Concept Study'
      ],
      description: [
        "Complete existing condition assessment study of the 25,000 SF historic facility. Assessment included evaluation of the facility’s electrical power systems, lighting control systems, emergency lighting systems, fire alarm systems, as well as telecommunications systems.",
        "Concept/Feasibility study to add additional program areas above theater for a mixed-used program/occupancy while maintaining historic theater construction."
      ],
      image: '/assets/electrical-fire-2.jpg',
      width: '700',
      height: '400',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
      // custom: ' w-full max-w-[900px] xl:h-[615px] 2xl:h-[675px] rounded-lg'
    },
    // The FLEA Theater
    {
      name: 'The FLEA Theater*',
      heading: ['Performance Venues'],
      location: 'New York, NY',
      size: '11,000 SF',
      year: '2014',
      services: [
        'MEP-FP Project Management', 
        'Electrical', 
        'Fire Alarm Design'
      ],
      description: [
        'Full renovation of a 11,000sf facility to a theater venue. Programmed spaces consist of three theaters (120-Seat, 80-Seat, 46-Seat), performance supporting spaces and offices.',
      ],
      image: '/assets/projects/performance/flea-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.', 
      spacing: 'relative top-1/3'
    },
    // The Robert W. WIlson MCC Theater
    {
      name: 'The Robert W. Wilson MCC Theater*',
      heading: ['Performance Venues'],
      location: 'New York, NY',
      size: '27,000 SF',
      year: '2018',
      services: [
        'MEP-FP Project Managment', 
        'Electrical', 
        'Fire Alarm Design'
      ],
      description: [
        'Gut renovation of 27,000 sf tenant space to house two theaters (245-seat and 100-seat), rehearsal and performance support spaces.', 
      ],
      image: '/assets/projects/performance/mcc-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
    },
  ];

// MERRIAM WEBSTER NEED IMAGES ??
  return(
    <div onClick={()=> handleClick()}>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Performance Venues'} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
    </div>
  )
}