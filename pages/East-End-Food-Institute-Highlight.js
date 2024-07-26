import EEFI_Project from "@/components/EEFIProject";
import Navbar from "@/components/Navbar";


function EEFI_Highlight(){
  return(
    <div>
      <Navbar lightLogo={true}/>
      <EEFI_Project/>
    </div>
  )
}

export default EEFI_Highlight;