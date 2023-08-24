import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function Cultural(){
  const projects = [
    {
      name: 'Khair Community Center',
      heading: 'Cultural',
      location: 'NEED',
      size: '20,000 SF',
      year: '2023',
      services: [
        'Electrical Engineering'
      ],
      description: [
        'Project included lighting control design for the building. During construction, it was discovered that there were gaps in the design and the owner approached IDEA, to design a system that was cost-effective, short lead times and expandability for future projects. IDEA worked with the client to provide several options before proceeding with a final design that met the intent and desired use for the client.'
      ],
      resources: [

      ],
      image: '/assets/projects/cultural/khair-cultural.jpg',
      width: '700',
      height: '600'
    },
    {
      // HAS MULTIPLE IMAGES NEED TO MAKE SLIDESHOW
      name: 'Glenstone Museum',
      location: 'NEED',
      heading: 'Cultural',
      size: '150,000 SF',
      year: '2018',
      services: [
        'Electrical & Fire Alarm Design'
      ],
      description: [
        'A new 150,000 sq. ft private art museum located on 200 acres. Site include full generator backup, rooftop and provisions for ground mounted solar arrays. Site includes several buildings including separate café and art gallery museum. In addition, water treatment facility to manage the independent water service.',
        '* Project performed by IDEA team member at previous employment.'
      ],
      resources: [
        {
          title: 'Link 1',
          url: 'https://www.glenstone.org/architecture/ ', 
        }
        
      ],
      // need to add phase-1?
      image: '/assets/projects/cultural/glen-1-cultural.jpg',
      width: '650',
      height: '200'
    },
    {
      name: 'Discovery & Water Garden at Brooklyn Botanical Garden',
      heading: 'Cultural',
      location: 'Brooklyn, NY',
      size: 'NEED',
      year: '2015',
      services: [
        'MEP Project Management', 
        'Electrical Design'
      ],
      description: [
        'South garden re-design. Project included garden pond filtration systems, site power and lighting updates.',
        '* Project performed by IDEA team member at previous employment.'
      ],
      resources: [

      ],
      image: '/assets/projects/cultural/bbg-1-cultural.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'Brooklyn Botanical Garden',
      heading: ['Cultural'],
      location: 'Brooklyn, NY',
      size: 'NEED',
      year: '2015',
      services: [
        'MEP-FP Project Management', 
        'Electrical', 
        'Fire Alarm Design'
      ],
      description: [
        'A new entry building and renovation of museum shop at the existing visitors center.', 
        '*Project performed by IDEA team member at previous employment.', 
      ],
      resources: [

      ],
      image: '/assets/projects/cultural/bbg-2-cultural.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'St. Thomas Church',
      heading: [
        'Cultural',
      ],
      location: 'New York, CT',
      size: '40,000 SF',
      year: '2016',
      services: [
        'MEP-FP Project Management', 
        'Electrical',
        'Fire Alarm Assessment',
      ],
      description: [
        "Complete existing condition assessment study of a 40,000 SF religious facility.  Assessment included evaluation of the facility’s electrical power systems, lighting control systems, emergency lighting systems and fire alarm systems.",
        '*Project performed by IDEA team member at previous employment.'
      ],
      resources: [
      ],
      image: '/assets/projects/cultural/church-cultural.jpg',
      width: '700',
      height: '400'
    }
  ]

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Cultural'}/>
    </div>
  )
}