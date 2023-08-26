import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function Residential(){
  const projects = [
    // JOHNSON
    {
      name: 'Johnson Residence',
      location: 'Great Harbor Cay, Bahamas',
      heading: 'Residential',
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
      awards: [],
      image: '/assets/projects/featured/johnson-featured.jpg',
      images_array: [
      ],
      width: '700',
      height: '500',
      disclaimer:""
    },
    // LANG
    {
      name: 'Lang Residence',
      heading: 'Residential',
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
      awards: [],
      image: '/assets/projects/featured/lang-featured.jpg',
      images_array: [
      ],
      width: '700',
      height: '200',
      disclaimer: ""
    },
    // 801 CHURCH ST NEED IMAGE ?? SIZE?
    {
      name: '801 Church Street*',
      heading: ['Residential',],
      location: 'Nashville, TN',
      size: 'NEED',
      year: '2023',
      services: [
        ' Electrical & Fire Alarm Design',
      ],
      description: [
        'Thirty-Eight (38) story 590,000 sq. ft high rise residential with 350 units. Building includes three levels of below-grade parking, consisting of (142) spaces and nine levels of above grade parking.'
      ],
      resources: [
      ],
      awards: [],
      image: '/assets/need-filler.jpeg',
      images_array: [
      ],
      width: '700',
      height: '200',
      disclaimer: "*Project performed by IDEA team member at previous employment."
    },
    // 838 WEST END AVE UNSURE IF IMAGE IS APPROVED
    {
      name: '838 West End Ave*',
      heading: [
        'High-Rise', 
        'Residential'
      ],
      location: 'Miami, Fl',
      size: '120,000 SF Interior',
      year: '2020',
      services: [
        'MEP Project Management', 
        'Electrical Design'
      ],
      description: [
        "The project is an interdisciplinary SMEP design encompassing upgrade to an existing landmarked 13-story residential building in the of borough of Manhattan, NYC. The project includes upgrading apartments to ‘high-end’ quality, addition of new amenity spaces and upgrade of the building’s electrical service. The building will feature new fire escape stairs to provide required egress, a new gym, rooftop terrace and penthouse amenities along with upgraded high-end apartments providing new HVAC, electrical, and plumbing systems."
      ],
      resources: [
      ],
      awards: [],
      image: '/assets/projects/high-rise/838-hr.jpg',
      width: '700',
      height: '600',
      disclaimer: "*Project performed by IDEA team member at previous employment."
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
      awards: [],
      image: '/assets/need-filler.jpeg',
      images_array: [
      ],
      width: '700',
      height: '200',
      disclaimer: "*Project performed by IDEA team member at previous employment."
    },

    // 3025 JFK BLVD in Schuylkill Yards NEED IMAGE ??

  ]

  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Residential'}/>
    </div>
  )
}