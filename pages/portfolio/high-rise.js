import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function HighRise(){
  const projects = [
      // 3025 JFK BLVD in Schuylkill Yards NEED IMAGE ??
      // 801 Church Street - Nashville, TN NEED IMAGE ?? 
      // 900 Church Street - Nashville, TN NEED IMAGE ??
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
      // 545 North Broad ST NEED IMAGE ??
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'High-Rise'}/>
    </div>
  )
}