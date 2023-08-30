import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function MixedUse(){
  const projects = [
    // 301 EAST 21 ST NEED IMAGE?
    {
      name: '301 East 21st Street',
      heading: ['Mixed-Use'],
      location: 'New York, NY',
      size: '200,000 SF',
      year: '2022',
      services: [
        'MEP Design',
      ],
      description: [
        'Design to replace (2) existing 8 million btu boilers that provided the building with heating and domestic hot water for the 17-story mixed use building. Design included options for modular natural gas boiler systems, electric and combination system. The owner’s desire to reduce carbon emissions and sustainability was a priority for this project. In addition, there are options to divorce the heating and domestic hot water to separate systems, a boiler system for heating and heat pump system for domestic hot water.'
      ],
      image: '/assets/projects/mixed-use/301-mu.webp',
      width: '700',
      height: '600',
      disclaimer: "",
      // child: 'col-start-1 col-end-5 flex justify-center',
    },
    // 3025 JFK BLVD in Schuylkill Yards NEED IMAGE ??
    {
      name: '3025 JFK BLVD in Schuylkill Yards*',
      heading: [
        'High-Rise', 
        'Mixed-Use',
        'Residential',
      ],
      location: 'Philadelphia, PA',
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
    // AmeriHealth NEED IMAGE ??
    {
      name: 'AmeriHealth*',
      heading: [
        'Mixed-Use',
      ],
      location: 'Newtown Square, PA',
      size: '375,000 SF',
      year: '2021',
      services: [
        'Electrical, & Fire Alarm Design'
      ],
      description: [
        "Designed the Core and Shell building for client including dual 33kV utility services and provisions for full generator backup. Services were set up in a main-tie-main configuration at the 35kV level. Equipment is a manufactured outdoor walk-in switchgear and is a 2000-amp 35kV switchgear with automatic transfer.",
        "Designed the tenant fit out for AmeriHealth Caritas, who took over the entire building for their corporate headquarters."
      ],
      image: '/assets/mechanical-electrical-fire.jpg',
      width: '700',
      height: '600',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
      // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
      // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
    },

    // AmeriSourceBergen NEED IMAGE ??
    {
      name: 'AmeriSourceBergen*',
      heading: [
        'Mixed-Use',
      ],
      location: 'Conshohocken, PA',
      size: '448,000 SF',
      year: '2021',
      services: [
        'Electrical, & Fire Alarm Design'
      ],
      description: [
        "Designed the tenant fit out for AmerisourceBergen, who took over the entire 11 story building for their corporate headquarters. Building includes first level retail space; 2nd level gym and conference center."
      ],
      image: '/assets/electrical-fire.jpg',
      width: '700',
      height: '600',
      disclaimer: "*Project performed by IDEA team member at previous employment.",
      // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
      // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
    },
    
    // 545 North Broad ST NEED IMAGE??
    {
      name: '545 North Broad Street*',
      heading: [
        'High-Rise',
        'Mixed-Use',
      ],
      location: 'Philadelphia, PA',
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
      // child: 'lg:col-start-1 lg:col-end-5 flex justify-center',
      // custom: ' w-[700px] max-w-[900px] h-full rounded-lg'
    },
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Mixed-Use'}/>
    </div>
  )
}