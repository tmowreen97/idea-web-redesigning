import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
export default function EduInst () {

  const projects = [
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
      awards : [],
      image: '/assets/projects/edu-inst/adams-ei.jpg',
      width: '700',
      height: '200',
      disclaimer: '*Project performed by IDEA team member at previous employment.'
    },
    // East End Food Institute EEFI
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
      awards:[],
      image: '/assets/projects/edu-inst/eefi-3-ei.jpg',
      images_array: [
        {
          title: 'eefi-1',
          image: '/assets/projects/edu-inst/eefi-1-ei.png'
        },
        {
          title: 'eefi-2',
          image: '/assets/projects/edu-inst/eefi-2-ei.png'
        }
        
      ],
      width: '650',
      height: '200',
      disclaimer: "",
    },
    // Fine Arts Instructional Center at ECSU (Eastern Connecticut State University)
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
      image: '/assets/projects/edu-inst/ecsu-1-ei.jpg',
      images_array: [
        {
          title: 'ecsu-1',
          image: '/assets/projects/edu-inst/ecsu-1-ei.jpg'
        },
        {
          title: 'ecsu-2',
          image: '/assets/projects/edu-inst/ecsu-2-ei.jpg'
        }
        
      ],
      width: '700',
      height: '400',
      disclaimer : ""
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
      image: '/assets/projects/edu-inst/julius-1-ei.jpg',
      images_array: [
        {
          title: 'julius-1',
          image: '/assets/projects/edu-inst/julius-1-ei.jpg'
        },
        {
          title: 'julius-2',
          image: '/assets/projects/edu-inst/julius-2-ei.jpg'
        },
        {
          title: 'julius-3',
          image: '/assets/projects/edu-inst/julius-3-ei.jpg'
        }
        
      ],
      
      width: '700',
      height: '200',
      disclaimer: '*Project performed by IDEA team member at previous employment.'
    },
    // Little Theater at LIU
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
      awards: [],
      image: '/assets/projects/edu-inst/liu-1-ei.jpg',
      width: '700',
      height: '400',
      disclaimer: "",
      child: "col-start-1 col-end-5 flex justify-center w-full",
      custom: ' w-[875px] max-w-[900px] xl:h-[550px] rounded-lg items-center flex'
    }
  ];

    // Child Care Center at Princeton University NEED IMAGE ??
    // Hammond Units Study at Penn State University NEED IMAGE ??    
    //  Performance Arts Center at College of the Holy Cross NEED IMAGE ??
    // FOX School of Business at Temple University NEED IMAGE ??
    // SEC at Penn State University NEED IMAGE ??
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Educational/Institutional'}/>
    </div>
  )
}