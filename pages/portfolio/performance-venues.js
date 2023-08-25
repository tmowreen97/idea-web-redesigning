import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
export default function PerfVenue () {

  const projects = [
    // LIU MULTIPLE IMAGES
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
      image: '/assets/projects/performance/liu-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: ""
    },
    // ECSU MULTIPLE IMAGES
    {
      name: 'Fine Arts Instructional Center at ECSU*',
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
      disclaimer : '*Project performed by IDEA team member at previous employment.'
    },
    // JAZZ LINCOLN CENTER
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
      awards: [
      ],
      image: '/assets/need-filler.jpeg',
      width: '700',
      height: '500',
      disclaimer: '*Project performed by IDEA team member at previous employment.'
    },
    // MCC THEATER
    {
      name: 'The Robert W. WIlson MCC Theater*',
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
      resources: [
      ],
      awards: [],
      image: '/assets/projects/performance/mcc-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: "*Project performed by IDEA team member at previous employment."
    },
    // FLEA THEATER
    {
      name: 'The FLEA Theater',
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
      resources: [

      ],
      awards: [],
      image: '/assets/projects/performance/flea-perf.jpg',
      width: '700',
      height: '400',
      disclaimer: '*Project performed by IDEA team member at previous employment.', 
    },
    // MERRIAM WEBSTER NEED IMAGES ??
  ]

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Performance Venues'}/>
    </div>
  )
}