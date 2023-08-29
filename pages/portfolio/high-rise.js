import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function HighRise(){
  const projects = [
      // 3025 JFK BLVD in Schuylkill Yards NEED IMAGE ??
      {
        name: '3025 JFK BLVD in Schuylkill Yards*',
        heading: [
          'High-Rise', 
          'Mixed-Use',
          'Residential',
        ],
        location: 'Jersey City, NJ',
        size: '560,000 SF',
        year: '2023',
        services: [
          'Mechanical', 
          'Electrical, & Fire Alarm Design'
        ],
        description: [
          "A ground up 560,000 sq. ft cast-in place concrete high-rise with 18 floors of residential apartment + 1 amenity level over 7 floors of office space, which is the first of the Schuylkill Yards master development projects. The building is served by dual utility 15kV services connecting to a 1200-amp 15kV switchgear configured in a main-tie-main configuration with automatic closed transition switchover. Several 15kV feeder breakers serve unit substations throughout the building. The project design was being completed at the beginning of the COVID pandemic in spring 2020 causing the developer’s prospects for office space tenants to be uncertain, so the developer intelligently tasked the project team with integrating the ability for the office floors to accommodate life science laboratory tenants without drastic changes to the building within a set lab related budget. The project team creatively collaborated to find solutions to integrate in lab exhaust and make-up air systems, additional condenser water capacity, additional electrical capacity and structural openings to the design, which was already submitted for permits at this time."
        ],
        resources: [
          {
            title: 'Schuylkill Yards',
            url: 'https://schuylkillyards.com/development-schuylkill-yards'
          }
        ],
        image: '/assets/mechanical-electrical-fire.jpg',
        width: '700',
        height: '600',
        disclaimer: "*Project performed by IDEA team member at previous employment.",
        // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
        // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
      },
      // 801 Church Street - Nashville, TN NEED IMAGE ?? 
      {
        name: '801 Church Street*',
        heading: [
          'High-Rise', 
          'Residential'
        ],
        location: 'Nashville, TN',
        size: '200,000 SF',
        year: '2023',
        services: [
          'Electrical, & Fire Alarm Design'
        ],
        description: [
          "Thirty-Eight (38) story 590,000 sq. ft high rise residential with 350 units. Building includes three levels of below-grade parking, consisting of (142) spaces and nine levels of above grade parking."
        ],
        image: '/assets/electrical-fire.jpg',
        width: '700',
        height: '600',
        disclaimer: "*Project performed by IDEA team member at previous employment.",
        // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
        // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
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
        image: '/assets/projects/high-rise/838-hr.jpg',
        width: '700',
        height: '600',
        disclaimer: "*Project performed by IDEA team member at previous employment.",
        // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
        // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
      },
      // 900 Church Street - Nashville, TN NEED IMAGE ??
      {
        name: 'Alcove Apartments at 900 Church Street*',
        heading: [
          'High-Rise', 
          'Residential'
        ],
        location: 'Nashville, TN',
        size: '200,000 SF',
        year: '2023',
        services: [
          'Electrical, & Fire Alarm Design'
        ],
        description: [
          "Thirty-Four (34) story 372,000 sq. ft high rise residential with 356 units includes two rooftop pools and rooftop amenities such as club room, gym and private dining areas. Building includes several 75ft high outdoor terraces."
        ],
        image: '/assets/projects/high-rise/alcove-1-hr.jpg',
        images_array : [
          {
            title: 'alcove-1',
            image: '/assets/projects/high-rise/alcove-1-hr.jpg'
          },
          {
            title: 'alcove-2',
            image: '/assets/projects/high-rise/alcove-2-hr.jpg'
          }
        ],
        width: '700',
        height: '600',
        disclaimer: "*Project performed by IDEA team member at previous employment.",
        // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
        // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
      },
      // 545 North Broad ST NEED IMAGE ??
      {
        name: '545 North Broad Street*',
        heading: [
          'High-Rise'
        ],
        location: 'Elizabeth, NJ',
        size: '152,000 SF',
        year: '2023',
        services: [
          'Electrical, & Fire Alarm Design'
        ],
        description: [
          "A nine-story Mixed-Use facility consisting of 11,000 SF of retail space, 16,000 SF of parking, 6,000 SF of an occupiable roof and 108 residential units, totaling 152,000 SF."
        ],
        image: '/assets/electrical-fire.jpg',
        width: '700',
        height: '600',
        disclaimer: "*Project performed by IDEA team member at previous employment.",
        child: 'lg:col-start-2 lg:col-end-4 ',
        // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
      },
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'High-Rise'}/>
    </div>
  )
}