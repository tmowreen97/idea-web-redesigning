import react from "react";
import OurTeam from "@/components/OurTeam";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Team (){
  return(
    <div>
      <Navbar lightLogo={true}/>
      <OurTeam/>
      <Footer/>
    </div>
    
  )
}
