import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function Industrial(){
  const projects = [
    // URBAN OUTFITTERS DC
    {
      name: 'Urban Outfitters Distribution Center*',
      heading: [
        'Industrial'
      ],
      location: 'NEED',
      size: '1,000,000 SF',
      year: '2023',
      services: [
        'Electrical & Fire Alarm Design'

      ],
      description: [
        'One million square feet warehouse that houses a fully automated internet fulfillment distribution operation. Building was design with a single utility service with provisions for a second service later. The building will be powered by (4) 3750kVA 12.47kV to 480-volt transformers. 15kV feeders were utilized to connect the transformers with a 15kV outdoor switchgear with circuit breakers and provisions for a second service.',
      ],
      resources: [

        
      ],
      awards: [],
      image: '/assets/projects/industrial/urbn-ind.jpg',
      width: '700',
      height: '600',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      child: 'lg:col-start-1 lg:col-end-5 flex justify-center',

    },
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Industrial'}/>
    </div>
  )
}