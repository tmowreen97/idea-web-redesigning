import Footer from "@/components/Footer";
import MSCProject from "@/components/MSCProject";
import Navbar from "@/components/Navbar";


function MSC_Miami_Cruise_Terminal(){
  return(
    <div>
      <Navbar lightLogo={true}/>
      <MSCProject/>
      <Footer/>
    </div>
  )
}

export default MSC_Miami_Cruise_Terminal;