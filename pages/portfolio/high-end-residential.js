import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function HighEndResidential(){
  const projects = [
    {
      name: 'Johnson Residence',
      heading: [
        'High-End Residential'
      ],
      location: 'Great Harbor Cay, Bahamas',
      size: '3,500 SF',
      year: '2023',
      services: [
        'MEP Project Management',
        'MEP Design'

      ],
      description: [
        'The project is a high-end residence consisting of two separate single-story structures totaling 3,500 sf, located in Great Harbor Cay, Bahamas.'
      ],
      resources: [
      ],
      image: '/assets/projects/high-end/john-high.jpg',
      width: '700',
      height: '600'
    },
    {
      name: 'Lang Residence',
      heading: [
        'High-End Residential'
      ],
      location: 'Great Harbor Cay, Bahamas',
      size: '5,000 SF',
      year: '2021',
      services: [
        'MEP-FP Project Management', 
        'MEP Design'
      ],
      description: [
        'The project is a high-end residence consisting of three separate single-story structures totaling 5,000 sf, located in Great Harbor Cay, Bahamas.',
      ],
      resources: [
      ],
      image: '/assets/projects/high-end/lang-high.jpg',
      width: '650',
      height: '200'
    },
  ]

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'High-End Residential'}/>
    </div>
  )
}