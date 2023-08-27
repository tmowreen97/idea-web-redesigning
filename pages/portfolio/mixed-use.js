import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function MixedUse(){
  const projects = [
    // 301 EAST 21 ST NEED IMAGE?
    {
      name: '301 East 21st Street',
      heading: ['Mixed-Use'],
      location: 'Brooklyn, NY',
      size: '200,000 SF',
      year: '2022',
      services: [
        'MEP Design',
      ],
      description: [
        'Design to replace (2) existing 8 million btu boilers that provided the building with heating and domestic hot water for the 17-story mixed use building. Design included options for modular natural gas boiler systems, electric and combination system. The owner’s desire to reduce carbon emissions and sustainability was a priority for this project. In addition, there are options to divorce the heating and domestic hot water to separate systems, a boiler system for heating and heat pump system for domestic hot water.'
      ],
      resources: [
      ],
      awards: [],
      image: '/assets/projects/mixed-use/301-mu.webp',
      images_array: [
      ],
      width: '700',
      height: '600',
      disclaimer: "",
      child: 'col-start-1 col-end-5 flex justify-center',
    },
    // 3025 JFK BLVD in Schuylkill Yards NEED IMAGE ??
    // AmeriSourceBergen NEED IMAGE ??
    // AmeriHealth NEED IMAGE ??
    // 545 North Broad ST NEED IMAGE??
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Mixed-Use'}/>
    </div>
  )
}