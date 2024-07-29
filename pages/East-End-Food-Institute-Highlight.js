import EEFI_Project from "@/components/EEFIProject";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function EEFI_Highlight(){
  // const [isClient, setIsClient] = useState(false)
  // useEffect(()=>{
  //   setIsClient(true)
  // }, [])
  return(
    <div>
      <Navbar lightLogo={true}/>
      <EEFI_Project/>
    </div>
  )
}

export default EEFI_Highlight;