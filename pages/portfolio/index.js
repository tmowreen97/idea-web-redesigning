import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"


// This contains all of the projects no category selected
export default function Portfolio(){

  const projects = [
    {
      name: 'MSC Miami Cruise Terminal',
      heading: 'Terminal/Transportation',
      location: 'Miami, FL',
      image: '/assets/projects/838 WEA.jpg',
      description: 'A 4-story cruise terminal capable of serving 18,000 cruise ship passengers. The facility consists of 490,000 SF of interior space and 1,200,000 SF garage (6-Levels).',
      width: '700',
      height: '200'
    },
    {
      name: 'American Museum of Natural History',
      heading: 'Cultural',
      description: 'Serviced Electrical design to the famous American Museum of Natural History for gallery wide sustainable lighting upgrades.',
      image: '/assets/projects/AMNH - Diorama.jpeg',
      width: '700',
      height: '200'
    },
    {
      name: 'ECSU (Eastern Connecticut State University',
      heading:'Institutional/Performance Venue',
      location: 'Willimantic, CT',
      description: 'A 118,000 SF Performance center equipped with state-of-the-art AV equipment, professional theatre lighting and sound systems, and other modern arts-related technology.',
      image: '/assets/projects/ECSU - Fine Arts Instructional Center 3.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'Johnson Residence',
      heading:'High End Residential',
      location: 'Great Harbor Cay, Bahamas',
      description: 'This project is a high-end residence consisting of two separate single-story structures totaling 3,500 SF.',
      image: '/assets/projects/JOHNSON RES.jpg',
      width: '700',
      height: '500'
    },
    {
      name: 'Khair Community Center',
      heading: 'Cultural',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Khair.jpg',
      width: '700',
      height: '400'
    },
    // {
    //   name: 'MSC',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   image: '/assets/projects/Khair3.jpg',
    //   width: '700',
    //   height: '400'
    // },
    {
      name: 'Princeton University',
      heading: 'Institutional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Princeton University.jpg',
      width: '700',
      height: '500'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Wellesley College 1.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Yale Adams Center 2.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif',
      width: '700',
      height: '400'
    }
  ]

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'All'}/>
    </div>
  )
}