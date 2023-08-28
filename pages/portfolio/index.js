import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"


// This contains all of the projects no category selected
export default function Portfolio(){
    
  const projects = [
    // MSC
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
      image: '/assets/need-filler.jpeg',
      width: '700',
      height: '600',
      disclaimer: ""
    },
    // EEFI
    {
      name: 'East End Food Institute EEFI',
      location: 'Southampton, NY',
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
        }
      ],
      image: '/assets/projects/featured/eefi-1-featured.png',
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/projects/featured/eefi-1-featured.png'
        },
        {
          title: 'eefi-2',
          image: '/assets/projects/featured/eefi-2-featured.png'
        }
        
      ],
      width: '700',
      height: '100',
      disclaimer: "",
    },
    // KHAIR
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
      resources: [

      ],
      image: '/assets/projects/featured/khair-1-featured.png',
      images_array: [
        {
          title: 'khair-1',
          image: '/assets/projects/featured/khair-1-featured.png'
        },
        {
          title: 'khair-2',
          image: '/assets/projects/featured/khair-2-featured.png'
        }
        
      ],
      width: '700',
      height: '400',
      disclaimer: ""
    },
    // LIU
    {
      name: 'Little Theater at LIU',
      heading: ['Educational/Institutional', 'Performance Venues'],
      location: 'Queens, NY',
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
      resources: [
      ],
      image: '/assets/projects/featured/liu-featured.jpg',
      width: '700',
      height: '400',
      disclaimer: ""
    },
    // ECSU
    {
      name: 'Fine Arts Instructional Center at ECSU (Eastern Connecticut State University)',
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
      image: '/assets/projects/featured/ecsu-1-featured.png',
      images_array: [
        {
          title: 'ecsu-1',
          image: '/assets/projects/featured/ecsu-1-featured.png'
        },
        {
          title: 'ecsu-2',
          image: '/assets/projects/featured/ecsu-2-featured.jpg'
        }
        
      ],
      width: '700',
      height: '400',
      disclaimer : ""
    },
    // AMNH
    {
      name: 'North American Mammals Gallery at AMNH (American Museum of Natural History)*',
      heading: ['Cultural'],
      location: 'New York, NY',
      size: '',
      year: '2010',
      services: [
        'Electrical Design',
      ],
      description: [
        ' For a gallery wide lighting upgrade (Gallery & Diorama’s) to LED source. Decreased gallery and diorama’s lighting power consumption by 50%.'
      ],
      resources: [
        {
          title: "AMNH",
          url:"https://www.amnh.org/exhibitions/permanent/north-american-mammals/educator-resources/virtual-field-trip"
        }
      ],
      image: '/assets/projects/featured/amnh-1-featured.jpg',
      images_array: [
        {
          title: 'amnh-1',
          image: '/assets/projects/featured/amnh-1-featured.jpg'
        },
        {
          title: 'amnh-2',
          image: '/assets/projects/featured/amnh-2-featured.jpeg'
        }
        
      ],
      width: '700',
      height: '200',
      disclaimer: '*Project performed by IDEA team member at previous employment.'
    },
    // LANG
    {
      name: 'Lang Residence',
      heading: ['Residential'],
      location: 'Great Harbor Cay, Bahamas',
      size: '5,000 SF',
      year: '2021',
      services: [
        'MEP Project Management', 
        'MEP Design',
      ],
      description: [
        'The project is a high-end residence consisting of three separate single-story structures totaling 5,000 sf, located in Great Harbor Cay, Bahamas.'
      ],
      resources: [

      ],
      image: '/assets/projects/featured/lang-featured.jpg',
      width: '700',
      height: '200',
      disclaimer: ""
    },
    // JOHNSON
    {
      name: 'Johnson Residence',
      location: 'Great Harbor Cay, Bahamas',
      heading: ['Residential'],
      size: '3,500 SF',
      year: '2023',
      services: [
        'MEP Project Management', 
        'MEP Design',
      ],
      description: [
        'The project is a high-end residence consisting of two separate single-story structures totaling 3,500 sf, located in Great Harbor Cay, Bahamas.'
      ],
      resources: [

      ],
      image: '/assets/projects/featured/johnson-featured.jpg',
      width: '700',
      height: '500',
      disclaimer:""
    },
    // Julius Romo Rabinowitz Building at Princeton University MULITIPLE IMAGES
    {
      name: 'Julius Romo Rabinowitz Building at Princeton University*',
      heading: [
        'Educational/Institutional',
      ],
      location: 'Princeton, NJ',
      size: '200,000',
      year: '2016',
      services: [
        'MEP-FP Project Management', 
        'Electrical & Fire Alarm Design',
      ],
      description: [
        'Full renovation of a historic 200,000sf chemistry building. Renovated facility included two atriums, lecture rooms, offices, classrooms, and conference rooms. Renovation maintained and restored the existing historic envelope of the building. Renovated facility will consist of classrooms, offices, conference room, common spaces, etc. Renovation consists of (2) atrium areas which serves as common spaces, both atriums are served by dedicated smoke control systems. The project consisted of connecting to the campus 5kV loop to a dual feed unit substation with 1500kVA transformer and 2500-amp switchgear with draw-out circuit breakers.',
        'Leadership in Energy & Environmental Design (LEED) GOLD certified.'
      ],
      resources: [
        {
          title: 'KPMB',
          url: 'https://www.kpmb.com/project/julis-romo-rabinowitz-building-louis-a-simpson-international-building-princeton-university/'
        }
      ],
      awards: [
        '2018 Ontario Association of Architects Award of Design Excellence', 
        '2018 SCUP Excellence in Architecture for Building Additions, Renovation or Adaptive Reuse – Honorable Mention'
      ],
      image: '/assets/projects/featured/julius-1-featured.jpg',
      images_array: [
        {
          title: 'julius-1',
          image: '/assets/projects/featured/julius-1-featured.jpg'
        },
        {
          title: 'julius-2',
          image: '/assets/projects/featured/julius-2-featured.jpg'
        }
        
      ],
      width: '700',
      height: '200',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
    },
    // JAZZ LINCOLN CENTER MULTIPLE IMAGES
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
      image: '/assets/projects/featured/jazz-1-featured.png',
      images_array: [
        {
          title: 'jazz-1',
          image: '/assets/projects/featured/jazz-1-featured.png'
        },
        {
          title: 'jazz-1',
          image: '/assets/projects/featured/jazz-2-featured.jpg'
        }
        
      ],
      width: '700',
      height: '500',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
    },
    // Adams Center at Yale School of Music 
    {
      name: 'Adams Center at Yale School of Music*',
      heading: ['Educational/Institutional',],
      location: 'New Haven, CT',
      size: '60,000 SF',
      year: '2016',
      services: [
        'Electrical & Fire Alarm Design',
      ],
      description: [
        'Renovation to a 60,000sf facility historic facility. Renovated program consisted of rehearsal rooms, classrooms, music rooms, practice rooms, and offices. Specialty programmed spaces are equipped with state-of-the-art AV equipment, professional sound systems and other modern music/arts-related technology.'
      ],
      resources: [
        {
          title: 'Yale School of Music',
          url: 'https://music.yale.edu/2017/01/17/adams-center-musical-arts-opens'
        }

      ],
      image: '/assets/projects/featured/adams-featured.jpg',
      width: '700',
      height: '200',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      child: ' col-start-1 col-end-3'

    },
    // 900 CHURCH ST NEED IMAGE ?? SIZE?
    {
      name: '900 Church Street*',
      heading: ['Residential',],
      location: 'Nashville, TN',
      size: 'NEED',
      year: '2023',
      services: [
        ' Electrical & Fire Alarm Design',
      ],
      description: [
        'Thirty-Four (34) story 372,000 sq. ft high rise residential with 356 units includes two rooftop pools and rooftop amenities such as club room, gym and private dining areas. Building includes several 75ft high outdoor terraces.'
      ],
      resources: [

      ],
      image: '/assets/electrical-fire.jpg',
      width: '700',
      height: '200',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
      child: 'col-start-3 col-end-5  '
    },
  ]
  

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Choose A Sector'}/>
    </div>
  )
}