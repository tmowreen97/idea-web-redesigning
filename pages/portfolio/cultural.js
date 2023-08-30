import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function Cultural(){
  const projects = [
    // Art Gallery at Yale University*
    {
      name: 'Art Gallery at Yale University*',
      heading: [
        'Cultural',
      ],
      location: 'New York, NY',
      size: '68,000 SF',
      year: '2010',
      services: [
        'Electrical & Fire Alarm Design',
      ],
      description: [
        "For a full renovation of the historic Swartwout (53,000sf) & Street Hall (15,000sf) Buildings. Programmed spaces included art galleries, offices, and classrooms.",
      ],
      image: '/assets/projects/cultural/yale-cultural.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',

    },
    // BBG 
    {
      name: 'Brooklyn Botanical Garden*',
      heading: ['Cultural'],
      location: 'Brooklyn, NY',
      size: '',
      year: '2015',
      services: [
        'MEP-FP Project Management', 
        'Electrical', 
        'Fire Alarm Design'
      ],
      description: [
        'A new entry building and renovation of museum shop at the existing visitors center.', 
      ],
      image: '/assets/projects/cultural/bbg-2-cultural.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.', 

    },
    // Church of the Heavenly Rest??
    {
      name: 'Church of the Heavenly Rest*',
      heading: [
        'Cultural',
      ],
      location: 'New York, NY',
      size: '50,000 SF',
      year: '2018',
      services: [
        'MEP-FP Project Management', 
        'Electrical', 
        'Fire Alarm Assessment',
      ],
      description: [
        "Complete existing condition assessment study of the landmarked religious facility. Assessment included evaluation of the facility’s electrical power systems, lighting control systems, emergency lighting systems, and fire alarm systems."
      ],
      image: '/assets/all-icons.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',

    },
    // Discovery & Water Garden at Brooklyn Botanical Garden*
    {
      name: 'Discovery & Water Garden at Brooklyn Botanical Garden*',
      heading: ['Cultural'],
      location: 'Brooklyn, NY',
      size: '',
      year: '2015',
      services: [
        'MEP Project Management', 
        'Electrical Design'
      ],
      description: [
        'South garden re-design. Project included garden pond filtration systems, site power and lighting updates.',
      ],
      image: '/assets/projects/cultural/bbg-1-cultural.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
    },
    // Glenstone Museum*
    {
      name: 'Glenstone Museum*',
      location: 'Potomac, MD',
      heading: ['Cultural'],
      size: '150,000 SF',
      year: '2018',
      services: [
        'Electrical & Fire Alarm Design'
      ],
      description: [
        'A new 150,000 sq. ft private art museum located on 200 acres. Site include full generator backup, rooftop and provisions for ground mounted solar arrays. Site includes several buildings including separate café and art gallery museum. In addition, water treatment facility to manage the independent water service.',
      ],
      resources: [
        {
          title: 'Glenstone',
          url: 'https://www.glenstone.org/architecture/ ', 
        }
      ],
      image: '/assets/projects/cultural/glen-1-cultural.jpg',
      images_array: [
        {
          title: 'glen-1',
          image: '/assets/projects/cultural/glen-1-cultural.jpg'
        },
        {
          title: 'glen-2',
          image: '/assets/projects/cultural/glen-2-cultural.jpeg'
        },
        {
          title: 'glen-3',
          image: '/assets/projects/cultural/glen-3-cultural.jpeg'
        },
      ],
      width: '650',
      height: '200',
      disclaimer: '* Project performed by IDEA team member at previous employment.',

    },
    // Khair Community Center
    {
      name: 'Khair Community Center',
      heading: ['Cultural'],
      location: 'Phoenixville, PA',
      size: '20,000 SF',
      year: '2023',
      services: [
        'Electrical Engineering'
      ],
      description: [
        'Project included lighting control design for the building. During construction, it was discovered that there were gaps in the design and the owner approached IDEA, to design a system that was cost-effective, short lead times and expandability for future projects. IDEA worked with the client to provide several options before proceeding with a final design that met the intent and desired use for the client. '
      ],
      image: '/assets/projects/cultural/khair-1-cultural.jpg',
      images_array: [
        {
          title: 'khair-1',
          image: '/assets/projects/cultural/khair-1-cultural.jpg'
        },
        {
          title: 'khair-2',
          image: '/assets/projects/cultural/khair-2-cultural.jpg'
        }
      ],
      width: '700',
      height: '400',
      disclaimer: "",
      custom: ' w-full max-w-[900px] xl:h-[500px] rounded-lg'

    },
    // North American Mammals Gallery at AMNH*
    {
      name: 'North American Mammals Gallery at AMNH*',
      heading: [
        'Cultural',
      ],
      location: 'New York, NY',
      size: '',
      year: '2010',
      services: [
        'Electrical Design', 
      ],
      description: [
        "For a gallery wide lighting upgrade (Gallery & Diorama’s) to LED source. Decreased gallery and diorama’s lighting power consumption by 50%",
      ],
      image: '/assets/projects/cultural/amnh-1-cultural.jpg',
      images_array: [
        {
          title: 'amnh-1',
          image: '/assets/projects/cultural/amnh-1-cultural.jpg'
        },
        {
          title: 'amnh-2',
          image: '/assets/projects/cultural/amnh-2-cultural.jpeg'
        },
      ],
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',

    },
    // Scenic Hudson Long Dock Park ???
    {
      name: 'Scenic Hudson Long Dock Park*',
      heading: [
        'Cultural',
      ],
      location: 'New York, NY',
      size: '7,000 SF',
      year: '2009',
      services: [
        'Electrical & Fire Alarm Design',
      ],
      description: [
        "Renovation of existing 7,000 building consisting classrooms and offices. New construction of Kayak/Canoe storage structure with a roof mounted 12-kW utility interactive Photovoltaic system.",
        "Leadership in Energy & Environmental Design (LEED) SILVER certified."
      ],
      image: '/assets/electrical-fire-2.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',

    },
    // St. Thomas Church*
    {
      name: 'St. Thomas Church*',
      heading: [
        'Cultural',
      ],
      location: 'New York, NY',
      size: '40,000 SF',
      year: '2016',
      services: [
        'MEP-FP Project Management', 
        'Electrical', 
        'Fire Alarm Assessment',
      ],
      description: [
        "Complete existing condition assessment study of a 40,000 SF religious facility.  Assessment included evaluation of the facility’s electrical power systems, lighting control systems, emergency lighting systems and fire alarm systems.",
      ],
      image: '/assets/projects/cultural/church-cultural.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      child: 'lg:col-start-2 lg:col-end-4'

    },


  ];

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Cultural'}/>
    </div>
  )
}