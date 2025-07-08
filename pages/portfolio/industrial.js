import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"
import { useState } from "react"

export default function Industrial(){
  const [showDropDown, setShowDropDown] = useState(false)
  function handleClick(){
    if (showDropDown) {
      setShowDropDown(false)
    }
  }
  const projects = [
    // URBAN OUTFITTERS DC
    {
      name: 'Urban Outfitters Distribution Center*',
      heading: [
        'Industrial'
      ],
      location: '',
      size: '1,000,000 SF',
      year: '2023',
      services: [
        'Electrical & Fire Alarm Design'

      ],
      description: [
        'One million square feet warehouse that houses a fully automated internet fulfillment distribution operation. Building was design with a single utility service with provisions for a second service later. The building will be powered by (4) 3750kVA 12.47kV to 480-volt transformers. 15kV feeders were utilized to connect the transformers with a 15kV outdoor switchgear with circuit breakers and provisions for a second service.',
      ],
      image: '/assets/projects/industrial/urbn-filler.jpg',
      width: '700',
      height: '600',
      disclaimer: '*Project performed by IDEA team member at previous employment.',
      child: 'lg:col-start-2 lg:col-end-4 h-full w-full',

    },
  ]
  return(
    <div onClick={()=> handleClick()}>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Industrial'} showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
      <Footer/>
    </div>
  )
}