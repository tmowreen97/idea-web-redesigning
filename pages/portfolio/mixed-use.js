import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function MixedUse(){
  const projects = [
    // 301 EAST 21 ST NEED IMAGE?
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